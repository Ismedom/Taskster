import { EnvVarWarning } from "@/components/auth/env-var-warning";

import HeaderAuth from "../components/auth/header-auth";
import { hasEnvVars } from "@/supabase/check-env-vars";

export default async function Index() {
    return (
        <>
            <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
            </div>
        </>
    );
}
``;
