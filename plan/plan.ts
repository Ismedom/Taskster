// -- Enable UUID extension
// CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

// -- Users table (assuming Supabase Auth is used for user management)
// CREATE TABLE users (
//   id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
//   user_name TEXT,
//   email TEXT,
//   role TEXT,
//   created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
//   updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
// );

// -- Projects table
// CREATE TABLE projects (
//   id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//   project_name TEXT NOT NULL,
//   description TEXT,
//   tags TEXT[],
//   owner_id TEXT REFERENCES users(id) NOT NULL,
//   created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
//   updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
// );

// -- Tasks table
// CREATE TABLE tasks (
//   id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//   task_name TEXT NOT NULL,
//   status TEXT,
//   priority TEXT,
//   description TEXT,
//   due_date DATE,
//   estimated_time NUMERIC,
//   actual_time NUMERIC,
//   tags TEXT[],
//   recurring BOOLEAN DEFAULT false,
//   recurrence_pattern TEXT,
//   project_id UUID REFERENCES projects(id) NOT NULL,
//   parent_task_id UUID REFERENCES tasks(id),
//   created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
//   updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
// );

// -- Task Dependencies
// CREATE TABLE task_dependencies (
//   id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//   task_id UUID REFERENCES tasks(id) NOT NULL,
//   depends_on_task_id UUID REFERENCES tasks(id) NOT NULL,
//   created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
//   UNIQUE(task_id, depends_on_task_id)
// );

-- Task Assignments
CREATE TABLE task_assignments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  task_id UUID REFERENCES tasks(id) NOT NULL,
  user_id UUID REFERENCES users(id) NOT NULL,
  assigned_date DATE NOT NULL,
  role TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(task_id, user_id)
);

// -- Comments
// CREATE TABLE comments (
//   id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//   task_id UUID REFERENCES tasks(id) NOT NULL,
//   user_id UUID REFERENCES users(id) NOT NULL,
//   text TEXT NOT NULL,
//   created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
//   updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
// );

-- Attachments
CREATE TABLE attachments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  task_id UUID REFERENCES tasks(id) NOT NULL,
  file_name TEXT NOT NULL,
  file_type TEXT,
  file_path TEXT NOT NULL,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Task Versions
CREATE TABLE task_versions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  task_id UUID REFERENCES tasks(id) NOT NULL,
  changes JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE task_dependencies ENABLE ROW LEVEL SECURITY;
ALTER TABLE task_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE attachments ENABLE ROW LEVEL SECURITY;
ALTER TABLE task_versions ENABLE ROW LEVEL SECURITY;

-- Example RLS policies (you should adjust these based on your specific requirements)
CREATE POLICY "Users can view their own data" ON users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Project owners can view their projects" ON projects FOR SELECT USING (auth.uid() = owner_id);
CREATE POLICY "Users can view tasks in their projects" ON tasks FOR SELECT USING (
  EXISTS (SELECT 1 FROM projects WHERE projects.id = tasks.project_id AND projects.owner_id = auth.uid())
);

-- Add more policies as needed for INSERT, UPDATE, and DELETE operations