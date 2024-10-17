import { createClient } from "@/utils/supabase/server";
import React from "react";

const useCreateProject = async () => {
    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return;
};

export default useCreateProject;
