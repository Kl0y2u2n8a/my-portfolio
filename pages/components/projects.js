import React, { useState, useRef } from 'react';
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";


function MyProject(props, projectRef) {
    const [scrollPosition, setScrollPosition] = useState(0);

    const contentRef = useRef();

    const handleScroll = (direction) => {

        let newScrollPos = 0
        if (direction === "left") {
            // cal new position
            newScrollPos = scrollPosition - 96;
        }
        else {
            newScrollPos = scrollPosition + 96;
        }

        // update element to position
        setScrollPosition(newScrollPos);

        //move element
        contentRef.current.scrollLeft = newScrollPos;
    }


    return (
        <section className="min-h-screen mx-auto justify-center scroll-smooth" ref={projectRef}>
            <h2 className="text-center text-5xl md:text-6xl font-newWalt dark:text-white">Projects</h2>
            <div className="flex md:grid md:grid-cols-1 md:min-h-screen ">
                {/* <button onClick={() => { handleScroll("left") }} className="invisible md:visible md:w-1/2 md:h-10/12 ml-auto"><FaAnglesLeft className="m-auto text-gray-500" /></button> */}

                <div ref={contentRef} className="md:flex h-auto md:w-9/12 md:gap-5 mx-auto lg:gap-10 overflow-x-scroll snap-x snap-mandatory scrollbar-hide">
                    
                    <div className="ml-3 border-t border-gray-200 text-center min-w-fit md:h-auto shadow-lg p-10 rounded-xl mx-auto my-auto snap-center snap-always dark:border-white dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">
                        <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-2xl dark:text-neutral-300">CRUD Project</h3>
                        <p className="md:max-w-lg py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">
                            This is a CRUD website that the user can enter the form of the baseball player, and they can see the information on the table, modify it or delete it from the database. 
                            The website is designed for the users that understand English, Japanese, or Traditional Chinese.
                            This application must open by using XAMPP.</p>
                        <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-base md:text-lg lg:text-xl ">Tools & Language</h4>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS, PHP</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code, XAMPP</p>
                        <button className="mt-3 rounded-lg border border-gray-800 p-1 text-sm text-blue-700 font-burtons bg-gradient-to-r from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 hover:text-violet-500 dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600"><a href="https://github.com/Kl0y2u2n8a/CRUDproject?tab=readme-ov-file" target="_blank">Resource Code</a>
                        </button>
                    </div>

                    <div className="ml-3 border-t border-gray-200 text-center min-w-fit md:h-auto shadow-lg p-10 rounded-xl mx-auto my-auto snap-center snap-always dark:border-white dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">
                        <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-2xl dark:text-neutral-200">PHP Login System</h3>
                        <p className="md:max-w-lg py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">description...123</p>
                        <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-base md:text-lg lg:text-xl ">Tools & Language</h4>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">PHP, HTML/CSS</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code, XAMPP</p>
                        <button className="mt-3 rounded-lg border border-gray-800 p-1 text-sm text-blue-700 font-burtons bg-gradient-to-r from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 hover:text-violet-500 dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600"><a href="" target="_blank">Resource Code</a>
                        </button>
                    </div>

                    <div className="ml-3 border-t border-gray-200 text-center min-w-fit md:h-auto shadow-lg p-10 rounded-xl mx-auto my-auto snap-center snap-always dark:border-white dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">
                        <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-2xl dark:text-neutral-200">TV screen Mini Project</h3>
                        <p className="md:max-w-lg py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">description...123</p>
                        <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-base md:text-lg lg:text-xl ">Tools & Language</h4>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS</p>
                        <button className="mt-3 rounded-lg border border-gray-800 p-1 text-sm text-blue-700 font-burtons bg-gradient-to-r from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 hover:text-violet-500 dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600"><a href="" target="_blank">Resource Code</a>
                        </button>

                    </div>

                    <div className="mr-3 border-t border-gray-200 text-center min-w-fit md:h-auto shadow-lg p-10 rounded-xl mx-auto my-auto snap-center snap-always dark:border-white dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">
                        <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-2xl dark:text-neutral-200">Guess Password Game</h3>
                        <p className="md:max-w-lg py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">description...123</p>
                        <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-base md:text-lg lg:text-xl ">Tools & Language</h4>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">JavaScript, HTML/CSS</p>
                        <button className="mt-3 rounded-lg border border-gray-800 p-1 text-sm text-blue-700 font-burtons bg-gradient-to-r from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 hover:text-violet-500 dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600"><a href="" target="_blank">Resource Code</a>
                        </button>
                    </div>

                </div>
                {/* <button onClick={() => { handleScroll("right") }} className="invisible md:visible md:w-1/2 md:h-2/3 mr-auto"><FaAnglesRight className="m-auto text-gray-500" /></button> */}
            </div>

        </section>
    )
}
export default React.forwardRef(MyProject);