import React from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "./ui/button";
import useDarkMode from "@/hooks/darkHook";
import { MoonIcon, SunIcon } from "./icons/icons";

export default function NavigationMenu() {

    const { isDarkMode, toggleDarkMode } = useDarkMode();

    

    return (

        <nav>
            <ul className="flex gap-2 p-2 text-sm">

                <Button onClick={toggleDarkMode} className="h-6 w-5 b-5 border-b-gray-400">
                    <div className="">
                        {isDarkMode ? <MoonIcon /> : <SunIcon />}
                    </div>
                </Button>
                
                <li className={useLocation().pathname == '/'? "text-blue-400" : ""}>
                    <Link to="/">Home</Link>
                </li>

                <li className={useLocation().pathname == '/library'? "text-blue-400" : ""}>
                    <Link to="/library" >Library</Link>
                </li>

                <li className={useLocation().pathname == '/add'? "text-blue-400" : ""}>
                    <Link to="/add">Add</Link>
                </li>

                <li className={useLocation().pathname == '/settings'? "text-blue-400" : ""}>
                    <Link to="/settings">Settings</Link>
                </li>


            </ul>
        </nav>
    );
}
