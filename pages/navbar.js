import React from "react";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaGripLinesVertical } from "react-icons/fa6";


export const MyNavbar = () => {
    <nav className="py-5 mb-12 flex justify-between sticky top-0 z-50 ml-1">
        <h1 className="text-xl font-burtons text-blue-900 hover:text-blue-700 dark:text-white dark:hover:text-neutral-300">
            <a href="/">kevinliangweb</a>
        </h1>
        <ul className="flex items-center ml-2">
            <li>
                <button className="font-burtons text-[10px] align-middle md:text-sm ml-1 md:ml-2 lg:ml-4 text-blue-900 hover:text-blue-700 dark:text-white  dark:hover:text-neutral-300">
                    Skills
                </button>
            </li>

            <li className="font-burtons text-sm align-text-bottom md:text-xl ml-1 md:ml-2 lg:ml-4 text-blue-900 dark:text-white">
                <FaGripLinesVertical />
            </li>

            <li>
                <button className="font-burtons text-[10px] align-middle md:text-sm ml-1 md:ml-2 lg:ml-4 text-blue-900 hover:text-blue-700 dark:text-white dark:hover:text-neutral-300">
                    Work Experience
                </button>
            </li>
            <li className="font-burtons text-sm align-text-bottom md:text-xl ml-1 md:ml-2 lg:ml-4 text-blue-900 dark:text-white">
                <FaGripLinesVertical />
            </li>

            <li>
                <button className="font-burtons text-[10px] align-middle md:text-sm ml-1 md:ml-2 lg:ml-4 text-blue-900 hover:text-blue-700 dark:text-white  dark:hover:text-neutral-300">
                    Projects
                </button>
            </li>

            <li className="font-burtons text-sm align-text-bottom md:text-xl ml-1 md:ml-2 lg:ml-4 text-blue-900 dark:text-white">
                <FaGripLinesVertical />
            </li>

            <li>
                <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer  text-sm md:text-xl ml-1 md:ml-2 lg:ml-4
                text-blue-900 hover:text-blue-700 dark:text-white dark:hover:text-neutral-300"
                />
            </li>

            <li className="font-burtons text-sm md:text-md ml-1 md:ml-2 lg:ml-4 text-blue-900 dark:text-white">
                <FaGripLinesVertical />
            </li>

            <li>
                <button
                    className="border-2 border-gray-600 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-2 justify-center 
                                ml-2 lg:ml-4 font-burtons text-l text-blue-900 dark:text-white hover:bg-gradient-to-l dark:hover:text-neutral-300"
                >
                    Resume
                </button>
            </li>
        </ul>
    </nav>
};

export default MyNavbar;