"use client";

// import { EnvVarWarning } from "@/components/auth/env-var-warning";

// import HeaderAuth from "../../components/auth/header-auth";
// import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Header from "@/components/layouts/Header";
import NavigationBar from "@/components/layouts/NavigationBar";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="sticky flex items-center top-0 z-50 bg-[#3A3A3A] h-[80px] border-b border-b-gray-600">
                <Header />
            </div>
            <div className="flex gap-2 h-[calc(100vh-80px)] overflow-y-auto w-full">
                <div className="sticky top-0 h-full bg-[#3A3A3A]">
                    <NavigationBar />
                </div>
                <div className="w-full py-3 px-2 sm:px-3 md:px-4 lg:px-6 text-sm">
                    <div className="w-full ">{children}</div>

                    {/* {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />} */}
                </div>
            </div>
        </div>
    );
};

export default layout;
