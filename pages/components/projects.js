import React, { useRef } from 'react';
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";



function MyProject(props, projectRef) {

    const contentRef = useRef();

    return (
        <section className="min-h-screen px-5 mx-auto mb-5 justify-center scroll-smooth" ref={projectRef}>

            <h2 className="text-center text-5xl md:text-6xl font-newWalt mb-5 dark:text-white">Projects</h2>
            <div className="flex md:grid md:grid-cols-[1000px_auto] justify-center md:min-h-screen">

                <div ref={contentRef} className="md:flex h-auto md:w-9/12 pb-5 px-10 md:px-0 mx-auto gap-5 md:gap-10 overflow-x-scroll snap-x snap-mandatory no-scrollbar ">
                    <div className="border-t my-10 md:ml-10 lg:ml-60 border-gray-200 text-center min-w-fit md:h-auto shadow-lg p-10 rounded-xl md:mx-auto md:my-auto snap-center snap-always dark:border-white dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">

                        <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-2xl dark:text-neutral-300">Finance logs</h3>

                        <p className="md:max-w-lg py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">
                            This is a mini project for me to practicing Typescript and React.
                            When you enter the form below and press add.
                            It will display all invoices and payments that user entered on the bottom log.
                            </p>
                        <p className="md:max-w-lg py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">* Not finished, Still in progress.. *</p>

                        <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-base md:text-lg lg:text-xl ">Tools & Language</h4>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS, Typescript, React</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>

                        <button className="mt-3 rounded-lg border border-gray-800 p-1 text-sm text-blue-700 font-burtons 
                            bg-gradient-to-r from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 hover:text-violet-500 
                            dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600">
                            <a href="https://github.com/Kl0y2u2n8a/financelog" target="_blank">Resource Code</a>
                        </button>

                        <button className="mt-3 mx-3 rounded-lg border border-gray-800 p-1 text-sm text-blue-700 font-burtons bg-gradient-to-r 
                            from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 hover:text-violet-500 
                            dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600">
                                <a href="https://financelog-zeta.vercel.app/" target="_blank">Website</a>
                        </button>

                    </div>
                    <p className=" invisible md:visible m-auto"><FaAnglesRight/></p>

                    <p className=" invisible md:visible m-auto md:ml-10 lg:ml-60"><FaAnglesLeft/></p>

                    <div className="border-t my-10 border-gray-200 text-center min-w-fit md:h-auto shadow-lg p-10 rounded-xl mx-auto md:my-auto snap-center snap-always dark:border-white dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">
                        <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-2xl dark:text-neutral-300">CRUD Project</h3>

                        <p className="md:max-w-lg py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">
                            This is a CRUD website that the user can enter the form of the baseball player, and they can see the information on the table, modify it or delete it from the database.
                            The website is designed for the users that understand English, Japanese, or Traditional Chinese.
                            This application must open by using XAMPP to have full functionalities.</p>
                        <p className="md:max-w-lg py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 
                            dark:to-red-400  bg-clip-text text-transparent">* Please see more details in Resource Code *</p>

                        <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-base md:text-lg lg:text-xl ">Tools & Language</h4>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS, PHP</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code, XAMPP</p>

                        <button className="mt-3 rounded-lg border border-gray-800 p-1 text-sm text-blue-700 font-burtons 
                        bg-gradient-to-r from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 hover:text-violet-500 
                        dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600">
                            <a href="https://github.com/Kl0y2u2n8a/CRUDproject" target="_blank">Resource Code</a>
                        </button>

                    </div>
                    <p className=" invisible md:visible m-auto"><FaAnglesRight/></p>

                    <p className=" invisible md:visible m-auto md:ml-10 lg:ml-60"><FaAnglesLeft/></p>
                    <div className="border-t my-10 border-gray-200 text-center min-w-fit md:h-auto shadow-lg p-10 rounded-xl mx-auto md:my-auto snap-center snap-always dark:border-white dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">

                        <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-2xl dark:text-neutral-200">PHP Login System</h3>
                        <p className="md:max-w-lg py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">
                            This project is a Sign-in system written in PHP.
                            You have to create an account first. Then you can modify your password after you sign in.
                            This application also need XAMPP to have full functionalities.
                        </p>
                        <p className="md:max-w-lg py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 
                            dark:to-red-400  bg-clip-text text-transparent">* Please see more details in Resource Code *</p>

                        <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-base md:text-lg lg:text-xl ">Tools & Language</h4>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">PHP, HTML/CSS</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code, XAMPP</p>

                        <button className="mt-3 rounded-lg border border-gray-800 p-1 text-sm text-blue-700 font-burtons 
                        bg-gradient-to-r from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 hover:text-violet-500 
                        dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600">
                            <a href="https://github.com/Kl0y2u2n8a/phpproject" target="_blank">Resource Code</a>
                        </button>

                    </div>
                    <p className=" invisible md:visible m-auto"><FaAnglesRight/></p>

                    <p className=" invisible md:visible m-auto md:ml-10 lg:ml-60"><FaAnglesLeft/></p>
                    <div className="border-t my-10 border-gray-200 text-center min-w-fit md:h-auto shadow-lg p-10 rounded-xl mx-auto md:my-auto snap-center snap-always dark:border-white dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">

                        <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-2xl dark:text-neutral-200">TV screen Mini Project</h3>
                        <p className="md:max-w-lg py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 
                            dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">
                            This is a mini project that I create to watch 4 youtube live videos that I can view at same time.
                            All copyright and credits is to Channel owner or YouTube.
                        </p>

                        <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-base md:text-lg lg:text-xl ">Tools & Language</h4>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>

                        <button className="mt-3 mx-3 rounded-lg border border-gray-800 p-1 text-sm text-blue-700 font-burtons bg-gradient-to-r from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 
                        hover:text-violet-500 dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600">
                            <a href="https://github.com/Kl0y2u2n8a/tvscreen" target="_blank">Resource Code</a>
                        </button>
                        <button className="mt-3 mx-3 rounded-lg border border-gray-800 p-1 text-sm text-blue-700 font-burtons bg-gradient-to-r 
                            from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 hover:text-violet-500 
                            dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600">
                                <a href="https://kl0y2u2n8a.github.io/tvscreen/" target="_blank">Website</a>
                        </button>

                    </div>
                    <p className=" invisible md:visible m-auto"><FaAnglesRight/></p>

                    <p className=" invisible md:visible m-auto md:ml-10 lg:ml-60"><FaAnglesLeft/></p>
                    <div className="border-t my-10 md:mr-10 border-gray-200 text-center min-w-fit md:h-auto shadow-lg p-10 rounded-xl mx-auto md:my-auto snap-center snap-always dark:border-white dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">

                        <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-2xl dark:text-neutral-200">Guess Password Game</h3>
                        <p className="md:max-w-lg py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">
                            This is a mini password number guess game.
                            Player will have five chance to get the number.
                            It will display all player guess and amount of guess that user remain.
                            If the player guess it correctly, then it will display the message to let the user know.
                        </p>

                        <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-base md:text-lg lg:text-xl ">Tools & Language</h4>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">JavaScript, HTML/CSS</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>
                        <div className="">
                            <button className="mt-3 mx-3 rounded-lg border border-gray-800 p-1 text-sm text-blue-700 font-burtons bg-gradient-to-r 
                            from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 hover:text-violet-500 
                            dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600">
                                <a href="https://github.com/Kl0y2u2n8a/Get-Password-Game" target="_blank">Resource Code</a>
                            </button>
                            <button className="mt-3 mx-3 rounded-lg border border-gray-800 p-1 text-sm text-blue-700 font-burtons bg-gradient-to-r 
                            from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 hover:text-violet-500 
                            dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600">
                                <a href="https://kl0y2u2n8a.github.io/Get-Password-Game/" target="_blank">Website</a>
                            </button>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}
export default React.forwardRef(MyProject);