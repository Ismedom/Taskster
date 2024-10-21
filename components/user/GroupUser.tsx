import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarGroupProps {
    users: {
        name: string;
        image?: string;
    }[];
    max?: number;
    showCount?: boolean;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ users, max = 3, showCount = true }) => {
    const visibleUsers = users.slice(0, max);
    const remainingUsers = users.length - max;

    return (
        <div className="flex items-center">
            <div className="flex -space-x-4">
                {visibleUsers.map((user, index) => (
                    <Avatar
                        key={index}
                        className="border-2 border-background w-6 h-6"
                        style={{ zIndex: visibleUsers.length + index }}>
                        {user.image ? (
                            <AvatarImage src={user.image} alt={user.name} />
                        ) : (
                            <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                        )}
                    </Avatar>
                ))}
                {remainingUsers > 0 && (
                    <Avatar
                        className="border-2 border-background w-6 h-6 bg-gray-300 text-gray-600"
                        style={{ zIndex: visibleUsers.length + 3 }}>
                        <AvatarFallback>+{remainingUsers}</AvatarFallback>
                    </Avatar>
                )}
            </div>
        </div>
    );
};
