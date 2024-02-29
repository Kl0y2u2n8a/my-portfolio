import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
import robot from '../public/robot.png';
import {useState} from 'react';
import { FaGripLinesVertical } from "react-icons/fa6";
import MyNavbar from "./navbar";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  
  return (
    
      <div className={darkMode ? "dark": ""}> 
        <Head>
          <title>Kevin Liang Portfolio</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        
        <main className="px-5w-auto md:px-10 lg:px-20 bg-gradient-to-tr from-sky-300 via-indigo-300 to-blue-100 dark:from-blue-950 dark:via-indigo-950 dark:to-black">
          <MyNavbar/>
          
          <section className="min-h-screen">
            <div className="text-center p-10 ">
              <h2 className="text-4xl py-2 bg-gradient-to-r from-cyan-400 to-indigo-800 bg-clip-text text-transparent md:text-5xl lg:text-6xl lg:py-3">Kevin Liang</h2>
              <h3 className="text-xl py-2 md:text-2xl lg:text-3xl bg-gradient-to-r from-purple-500 to-sky-400 bg-clip-text text-transparent ">Infrastructure Engineer</h3>
              <p className="text-md font-rony9 py-3 leading-8 bg-gradient-to-br from-sky-400  to-indigo-700 bg-clip-text text-transparent max-w-l mx-auto md:text-lg lg:text-xl lg:py-3">
                Currently working as Onsite Help desk Service and Dispatch troubleshooting Engineer.
                Major in Computer Science in University of Illinois at Chicago.
                Having Passion on Front-end developing. I am currently learning React and Typescript by myself.
              </p>
            </div>
            <div className="text-4xl flex justify-center gap-10 text-gray-600 dark:text-sky-200">
              <a href="https://github.com/Kl0y2u2n8a" target='_blank' className='hover:text-gray-800 dark:hover:text-sky-100'><AiFillGithub/></a>
              <a href="https://www.linkedin.com/in/liang-kai0228/" target='_blank' className=' hover:text-gray-800 dark:hover:text-sky-100'><AiFillLinkedin /></a>
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-slate-600 to-neutral-300 rounded-full w-60 h-60 mt-20 overflow-hidden md:w-72 md:h-72">
              <Image src={robot} className=""/>
            </div>
          </section>

          <section className="min-h-screen p-10">
            <div className="text-center p-10">
              <h3 className="text-4xl md:text-6xl py-1 font-newWalt dark:text-white">Skills</h3>
              <p className="text-md py-3 bg-gradient-to-r from-purple-500 to-rose-400 bg-clip-text text-transparent max-w-l mx-auto md:text-lg lg:text-xl lg:py-3 leading-8">
                my fjweiaofj ioewajiojewian fjioweajcniocje;oawjoifewjaco;i fj mewaiojcfiowae;jfcowiaejio;fjawei
              </p>
              <p className="text-md py-3 bg-gradient-to-r from-purple-500 to-rose-400 bg-clip-text text-transparent max-w-l mx-auto md:text-lg lg:text-xl lg:py-3 leading-8">
                skills fjweiaofj ioewajiojewian fjioweajcniocje;oawjoifewjaco;i fj mewaiojcfiowae;jfcowiaejio;fjawei
              </p>
            </div>
          </section>

          <section className="min-h-screen p-10">
            <div className="workexperience">
              <div className="text-center p-10">
                <h3 className="text-4xl md:text-6xl py-1 font-newWalt  dark:text-white">Work experience</h3>
                <p className="text-md py-3 bg-gradient-to-r from-green-700 dark:from-green-400  via-blue-600 to-cyan-600 dark:to-cyan-300 bg-clip-text text-transparent max-w-l mx-auto md:text-lg lg:text-xl lg:py-3 leading-8">
                  working fjweaifj;aewiojf io;awejfiojwa eiefjaeiow;fjiawoejfioawejfi aiowhfio ewaif
                </p>
                <p className="text-md py-3 bg-gradient-to-r from-lime-600 dark:from-lime-500 via-blue-600 to-cyan-600 dark:to-cyan-300 bg-clip-text text-transparent max-w-l mx-auto md:text-lg lg:text-xl lg:py-3 leading-8">
                  experience fjiweoa;fji oejwafiewajfioweaj iofj waeiojf oiej awo;ijfeiowajfioawe
                </p>  
              </div>
            </div>
          </section>

          <section className="min-h-screen p-10 mx-auto">
            <h2 className="text-center text-4xl md:text-6xl p-5 font-newWalt dark:text-white">Projects</h2>

            <div className="md:flex md:gap-5 lg:flex lg:gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl mx-auto my-auto dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">
                  <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-l dark:text-neutral-300">CRUD Project</h3>
                  <p className="py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">description...123</p>
                  <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-sm md:text-md lg:text-l ">Tools & Language</h4>
                  <p className="text-sm bg-gradient-to-r from-pink-500 via-amber-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>
                  <p className="text-sm bg-gradient-to-r from-pink-500 via-amber-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">PHP</p>
                  <p className="text-sm bg-gradient-to-r from-pink-500 via-amber-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS</p>
                  <p className="text-sm bg-gradient-to-r from-pink-500 via-amber-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">XAMPP</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl mx-auto my-auto  dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">
                  <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-l dark:text-neutral-200">PHP Login System</h3>
                  <p className="py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">description...123</p>
                  <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-sm md:text-md lg:text-l ">Tools & Language</h4>
                  <p className="text-sm bg-gradient-to-r from-pink-500 via-amber-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>
                  <p className="text-sm bg-gradient-to-r from-pink-500 via-amber-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">PHP</p>
                  <p className="text-sm bg-gradient-to-r from-pink-500 via-amber-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS</p>
                  <p className="text-sm bg-gradient-to-r from-pink-500 via-amber-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">XAMPP</p>
                
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl mx-auto my-auto dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">
                  <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-l dark:text-neutral-200">TV screen Mini Project</h3>
                  <p className="py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">description...123</p>
                  <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-sm md:text-md lg:text-l ">Tools & Language</h4>
                  <p className="text-sm bg-gradient-to-r from-pink-500 via-amber-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>
                  <p className="text-sm bg-gradient-to-r from-pink-500 via-amber-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS</p>
                
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl mx-auto my-auto dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">
                <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-l dark:text-neutral-200">Guess Password Game</h3>
                <p className="py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">description...123</p>
                <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-sm md:text-md lg:text-l ">Tools & Language</h4>
                <p className="text-sm bg-gradient-to-r from-pink-500 via-amber-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>
                <p className="text-sm bg-gradient-to-r from-pink-500 via-amber-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS</p>
                <p className="text-sm bg-gradient-to-r from-pink-500 via-amber-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">JavaScript</p>
              
              </div>
            </div>
          </section>
        </main>
      </div>
    
  );
}
