import React, {useState, useRef} from 'react';
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";


function MyProject(props, projectRef) {
    const [scrollPosition, setScrollPosition] = useState(0);

    const contentRef = useRef();

    const handleScroll = (direction) =>{

        let newScrollPos = 0
        if(direction === "left"){
            // cal new position
            newScrollPos = scrollPosition - 80;
        }
        else{
            newScrollPos = scrollPosition + 80;
        }
        
        // update element to position
        setScrollPosition(newScrollPos);

        //move element
        contentRef.current.scrollLeft = newScrollPos;
    }

    return (
        <section className="min-h-screen md:h-fit p-10 mx-auto justify-center scroll-smooth duration-300" ref={projectRef}>
            <h2 className="text-center text-4xl md:text-6xl p-5 font-newWalt dark:text-white">Projects</h2>
            <div className="sm:grid grid-cols-3">

                <button onClick={()=>{handleScroll("left")}} className="invisible md:visible  w-40 h-80 m-auto"><FaAnglesLeft className="m-auto text-gray-500"/></button>

                <div ref={contentRef} className="h-fit md:flex md:h-96 md:gap-5 lg:flex lg:gap-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide w-5xl px-3">

                    <div className="text-center h-92 w-80 shadow-lg p-10 rounded-xl mx-auto my-auto snap-center snap-always dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">
                        <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-l dark:text-neutral-300">CRUD Project</h3>
                        <p className="py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">description...123</p>
                        <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-sm md:text-md lg:text-l ">Tools & Language</h4>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">PHP</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">XAMPP</p>
                    </div>

                    <div className="text-center h-92 w-80 shadow-lg p-10 rounded-xl mx-auto my-auto snap-center snap-always  dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">
                        <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-l dark:text-neutral-200">PHP Login System</h3>
                        <p className="py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">description...123</p>
                        <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-sm md:text-md lg:text-l ">Tools & Language</h4>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">PHP</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">XAMPP</p>
                    </div>

                    <div className="text-center h-92 w-80 shadow-lg p-10 rounded-xl mx-auto my-auto snap-center snap-always dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">
                        <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-l dark:text-neutral-200">TV screen Mini Project</h3>
                        <p className="py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">description...123</p>
                        <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-sm md:text-md lg:text-l ">Tools & Language</h4>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS</p>

                    </div>

                    <div className="text-center h-92 w-80 shadow-lg p-10 mb-1 sm:mb-16 rounded-xl mx-auto my-auto snap-center snap-always dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">
                        <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-l dark:text-neutral-200">Guess Password Game</h3>
                        <p className="py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">description...123</p>
                        <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-sm md:text-md lg:text-l ">Tools & Language</h4>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">JavaScript</p>
                    </div>

                </div>
                <button onClick={()=>{handleScroll("right")}} className="invisible md:visible w-40 h-80 m-auto"><FaAnglesRight className="m-auto text-gray-500"/></button>
            </div>

        </section>
    )
}
export default React.forwardRef(MyProject);