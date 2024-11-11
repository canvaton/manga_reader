import React from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import useDarkMode from "@/hooks/darkHook";
import { MoonIcon, SunIcon } from "./icons/icons";

export default function NavigationMenu() {

    const { isDarkMode, toggleDarkMode } = useDarkMode();
    
    return (
        
        <nav>
            <ul className="flex gap-2 p-2 text-sm">
                    
                    <Button onClick={toggleDarkMode} className="h-10 w-10 border-b-gray-400">
                        <div>
                            {isDarkMode ? <MoonIcon /> : <SunIcon />}
                        </div>
                    </Button>

                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    );
}
