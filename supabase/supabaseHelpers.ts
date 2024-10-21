import { createClient } from "./client";

export const fetchItems = async <T>(tableName: string): Promise<T[]> => {
    const supabase = createClient();
    const { data, error } = await supabase.from(tableName).select("*");
    if (error) throw error;
    return data as T[];
};

export const fetchItemById = async <T>(
    tableName: string,
    idField: string,
    id: string,
    idField1?: string,
    id1?: string
): Promise<T[]> => {
    const supabase = createClient();
    let query = supabase.from(tableName).select("*").eq(idField, id);

    if (idField1 && id1) {
        query = query.eq(idField1, id1);
    }
    const { data, error } = await query;
    // console.log(data || error);
    if (error) throw error;
    return data as T[];
};

export const deleteItemById = async (
    tableName: string,
    idField: string,
    id: string,
    idField1: string,
    id1: string
): Promise<{ id: string }> => {
    const supabase = createClient();
    const { error } = await supabase.from(tableName).delete().eq(idField, id).eq(idField1, id1);
    if (error) throw error;
    return { id };
};

export const addItem = async <T>(tableName: string, newItem: Omit<T, "id" | "created_at">): Promise<T> => {
    const supabase = createClient();
    const { data, error } = await supabase.from(tableName).insert([newItem]).select().single();
    console.log(error);
    if (error) throw error;
    return data as T;
};
