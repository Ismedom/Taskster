import Link from "next/link";
import React from "react";

const NavigationBar = () => {
    return (
        <div>
            <nav className="max-w-full md:max-w-[80%] flex gap-3">
                <Link href="/protected/board">Home</Link>
                <Link href="/protected/projects">projects</Link>
                <Link href="/protected/dashboard">dashboard</Link>
                <Link href="/protected/notifications">notifications</Link>
            </nav>
        </div>
    );
};

export default NavigationBar;
