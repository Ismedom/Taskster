import { EnvVarWarning } from "@/components/auth/env-var-warning";

import HeaderAuth from "../../components/auth/header-auth";
import NavigationBar from "@/components/common/NavigationBar";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <NavigationBar />
            {children}
            <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
            </div>
        </div>
    );
};

export default layout;
