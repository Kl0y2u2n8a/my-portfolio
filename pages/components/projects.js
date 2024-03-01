import React from 'react';

function MyProject (props, projectRef){
    return (
        <section className="min-h-screen p-10 mx-auto overflow-x-auto " ref={projectRef}>
            <h2 className="text-center text-4xl md:text-6xl p-5 font-newWalt dark:text-white">Projects</h2>

            <div className="md:flex md:gap-5 lg:flex lg:gap-10">
                <div className="text-center shadow-lg p-10 rounded-xl mx-auto my-auto dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">
                    <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-l dark:text-neutral-300">CRUD Project</h3>
                    <p className="py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">description...123</p>
                    <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-sm md:text-md lg:text-l ">Tools & Language</h4>
                    <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>
                    <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">PHP</p>
                    <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS</p>
                    <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">XAMPP</p>
                </div>

                <div className="text-center shadow-lg p-10 rounded-xl mx-auto my-auto  dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">
                    <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-l dark:text-neutral-200">PHP Login System</h3>
                    <p className="py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">description...123</p>
                    <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-sm md:text-md lg:text-l ">Tools & Language</h4>
                    <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>
                    <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">PHP</p>
                    <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS</p>
                    <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">XAMPP</p>

                </div>

                <div className="text-center shadow-lg p-10 rounded-xl mx-auto my-auto dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">
                    <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-l dark:text-neutral-200">TV screen Mini Project</h3>
                    <p className="py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">description...123</p>
                    <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-sm md:text-md lg:text-l ">Tools & Language</h4>
                    <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>
                    <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS</p>

                </div>

                <div className="text-center shadow-lg p-10 rounded-xl mx-auto my-auto dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">
                    <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-l dark:text-neutral-200">Guess Password Game</h3>
                    <p className="py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">description...123</p>
                    <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-sm md:text-md lg:text-l ">Tools & Language</h4>
                    <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>
                    <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS</p>
                    <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">JavaScript</p>

                </div>
            </div>
        </section>
    )
}
export default React.forwardRef(MyProject);