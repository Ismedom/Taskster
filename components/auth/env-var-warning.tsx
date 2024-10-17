import Link from "next/link";
import { Badge } from "../ui/forms/badge";
import { Button } from "../ui/buttons/button";

export function EnvVarWarning() {
    return (
        <div className="flex gap-4 items-center">
            <Badge variant={"outline"} className="font-normal">
                Supabase environment variables required
            </Badge>
            <div className="flex gap-2">
                <Button
                    asChild
                    size="sm"
                    variant={"outline"}
                    disabled
                    className="opacity-75 cursor-none pointer-events-none">
                    <Link href="/sign-in">Sign in</Link>
                </Button>
                <Button
                    asChild
                    size="sm"
                    variant={"default"}
                    disabled
                    className="opacity-75 cursor-none pointer-events-none">
                    <Link href="/sign-up">Sign up</Link>
                </Button>
            </div>
        </div>
    );
}
