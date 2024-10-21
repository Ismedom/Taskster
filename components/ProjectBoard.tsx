"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import { addProject } from "@/store/actions/projects";
import { selectProjectsError, selectProjectsStatus } from "@/store/feature/projects";
import { createClient } from "@/supabase/client";

const CreateProjectPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const status = useSelector(selectProjectsStatus);
    const error = useSelector(selectProjectsError);

    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const [currentTag, setCurrentTag] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (projectName && description) {
            try {
                const supabase = createClient();
                const {
                    data: { user },
                } = await supabase.auth.getUser();
                if (!user) throw new Error("No user found");

                await dispatch(
                    addProject({
                        project_name: projectName,
                        description,
                        tags,
                        owner_id: user.id,
                    })
                ).unwrap();
            } catch (err) {
                console.error("Failed to create project:", err);
            }
        }
    };

    const handleAddTag = () => {
        if (currentTag && !tags.includes(currentTag)) {
            setTags([...tags, currentTag]);
            setCurrentTag("");
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    if (status === "loading") {
        return <div>Creating project...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create New Project</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="projectName" className="block mb-1">
                        Project Name:
                    </label>
                    <input
                        type="text"
                        id="projectName"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        className="w-full text-gray-700 p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block mb-1">
                        Description:
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full text-gray-700 p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="tags" className="block mb-1">
                        Tags:
                    </label>
                    <div className="flex">
                        <input
                            type="text"
                            id="tags"
                            value={currentTag}
                            onChange={(e) => setCurrentTag(e.target.value)}
                            className="flex-grow p-2 border rounded-l"
                        />
                        <button type="button" onClick={handleAddTag} className="bg-blue-500 text-white px-4 rounded-r">
                            Add Tag
                        </button>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span key={tag} className="bg-gray-200 px-2 py-1 rounded flex items-center">
                                {tag}
                                <button
                                    type="button"
                                    onClick={() => handleRemoveTag(tag)}
                                    className="ml-2 text-red-500">
                                    &times;
                                </button>
                            </span>
                        ))}
                    </div>
                </div>
                {error && <div className="text-red-500">{error}</div>}
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                    Create Project
                </button>
            </form>
        </div>
    );
};

export default CreateProjectPage;
