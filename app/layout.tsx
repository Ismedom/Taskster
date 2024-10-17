//
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";

// const defaultUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

export const metadata = {
    // metadataBase: new URL(defaultUrl),
    title: "Next.js and Supabase Starter Kit",
    description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={GeistSans.className} suppressHydrationWarning>
            <body className="bg-background text-foreground">
                <ReduxProvider>
                    <div className="flex flex-col gap-20 max-w-5xl p-5">{children}</div>
                </ReduxProvider>
            </body>
        </html>
    );
}
