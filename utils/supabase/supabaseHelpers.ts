import { createClient } from "./client";

export const fetchItems = async <T>(tableName: string): Promise<T[]> => {
    const supabase = createClient();
    const { data, error } = await supabase.from(tableName).select("*");
    if (error) throw error;
    return data as T[];
};

export const fetchItemById = async <T>(tableName: string, idField: string, id: string): Promise<T[]> => {
    const supabase = createClient();
    const { data, error } = await supabase.from(tableName).select("*").eq(idField, id);
    if (error) throw error;
    return data as T[];
};

export const deleteItemById = async (tableName: string, idField: string, id: string): Promise<{ id: string }> => {
    const supabase = createClient();
    const { error } = await supabase.from(tableName).delete().eq(idField, id);
    if (error) throw error;
    return { id };
};

export const addItem = async <T>(tableName: string, newItem: Omit<T, "id" | "created_at">): Promise<T> => {
    const supabase = createClient();
    const { data, error } = await supabase.from(tableName).insert([newItem]).select().single();
    if (error) throw error;
    return data as T;
};
