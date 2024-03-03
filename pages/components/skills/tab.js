import React, { useState } from "react"
import { FaApple, FaWindows } from "react-icons/fa";


function progressBar(percent) {
    return (
        <div className="h-2 w-auto mr-4 rounded-md bg-blue-900 dark:bg-neutral-600">
            <div className="h-2 rounded-md bg-sky-500 border-blue" style={{ width: percent}}></div>
        </div>
    )

}


const MyTabComp = () => {
    const items = [
        {
            tab: "OS",
            title: "OS", content: (
                <div className="mt-4 text-xl">
                    <ul className="text-neutral-700 dark:text-violet-100">
                        <li className="mt-5 inline-flex">Windows<FaWindows className=" text-lg m-1" /> </li>
                        <li className="ml-2">90%</li>
                        {progressBar("90%")}
                        <li className="mt-5 inline-flex">MacOS<FaApple className="m-0.5"/></li>
                        <li className="ml-2">90%</li>
                        {progressBar("90%")}
                    </ul>
                </div>)
        },
        {
            tab: "Coding",
            title: "Coding", content: (
            <div className="mt-4 text-xl">
                <ul className="text-blue-700 dark:text-violet-100">
                    <li className="mt-2">JavaScript</li>
                    <li className="ml-2 text-lg"> 80%</li>
                    {progressBar("80%")}
                    <li className="mt-2">HTML/CSS</li>
                    <li className="ml-2 text-lg"> 90%</li>
                    {progressBar("90%")}
                    <li className="mt-2">React</li>
                    <li className="ml-2 text-lg"> 50%</li>
                    {progressBar("50%")}
                    <li className="mt-2">Tailwind/Bootstrap5</li>
                    <li className="ml-2 text-lg"> 90%</li>
                    {progressBar("90%")}
                    <li className="mt-2">PHP</li>
                    <li className="ml-2 text-lg"> 60%</li>
                    {progressBar("60%")}
                    <li className="mt-2">Python</li>
                    <li className="ml-2 text-lg"> 70%</li>
                    {progressBar("70%")}
                    <li className="mt-2">MySQL</li>
                    <li className="ml-2 text-lg"> 80%</li>
                    {progressBar("80%")}
                </ul>    
            </div>)
        },
        {
            tab: "Software",
            title: "Software", content: (
            <div className="mt-4 text-xl">
                <ul className="text-blue-700 dark:text-violet-100">
                    <li className="mt-2">Office Word/Excel/PowerPoint</li>
                    <li className="ml-2 text-lg"> 80%</li>
                    {progressBar("80%")}
                    <li className="mt-2">Visual Studio Code</li>
                    <li className="ml-2 text-lg"> 90%</li>
                    {progressBar("90%")}
                    <li className="mt-2">IntelliJ IDE</li>
                    <li className="ml-2 text-lg"> 70%</li>
                    {progressBar("70%")}
                    <li className="mt-2">XAMPP</li>
                    <li className="ml-2 text-lg"> 60%</li>
                    {progressBar("60%")}
                    <li className="mt-2">Android Studio</li>
                    <li className="ml-2 text-lg"> 40%</li>
                    {progressBar("60%")}
                    <li className="mt-2">Github</li>
                    <li className="ml-2 text-lg"> 85%</li>
                    {progressBar("85%")}
                </ul>  

            </div>)
        },
        {
            tab: "Language",
            title: "Language", content: (
            <div className="mt-4 text-xl">
                <ul className="text-blue-700 dark:text-violet-100">
                    <li className="mt-2">Japanese</li>
                    <li className="ml-2 text-lg"> 80%</li>
                    {progressBar("80%")}
                    <li className="mt-2">Chinese</li>
                    <li className="ml-2 text-lg"> 100%</li>
                    {progressBar("100%")}
                    <li className="mt-2">English</li>
                    <li className="ml-2 text-lg"> 90%</li>
                    {progressBar("90%")}
                    <li className="mt-2">Taiwanese</li>
                    <li className="ml-2 text-lg"> 90%</li>
                    {progressBar("90%")}
                </ul>  


            </div>)
        },
    ]

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className=
                "relative m-4 max-w-2xl mx-auto h-12 grid grid-cols-4 justify-between overflow-hidden rounded-full border-gray-700 bg-gray-400/20 transition shadow-xl shadow-900/20"
            >
                {items.map((item, index) => {
                    return (
                        <button
                            key={index}
                            className={'relative block h-10 px-2 tab items-center rounded-full bg-gradient-to-r from-sky-200 via-blue-500 to-gray-800 bg-clip-text text-transparent hover:text-white ${index === activeTab ? "border-gray-900" : "border-white" }'}
                            onClick={() => setActiveTab(index)}
                        >
                            {item.tab}
                        </button>
                    )
                })}
            </div>
            <div className="my-6 pb-3 mx-auto pl-6 h-auto max-w-3xl font-salma rounded-3xl bg-gradient-to-br shadow-md shadow-gray-500">
                <h2 className="text-violet-500 dark:text-purple-300 pt-5 text-2xl">{items[activeTab].title}</h2>
                {items[activeTab].content}
            </div>
        </div>

    )

};

export default MyTabComp;

