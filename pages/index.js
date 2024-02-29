import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
import robot from '../public/robot.png';
import {useState} from "react";
import {Link} from "react-router-dom";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    
      <div className={darkMode ? "dark": ""}> 
        <Head>
          <title>Kevin Liang Portfolio</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
    
        <main className="px-5 w-auto md:px-10 lg:px-20 bg-sky-100 dark:bg-gray-900">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-xl font-burtons dark:text-white">kevinliangweb</h1>
              <ul className="flex items-center">
                <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer text-xl dark:text-white"/></li>
                <li><a href="#" className="px-4 ml-8 font-burtons dark:text-white">Resume</a></li>
              </ul>
            </nav>

            <div className="text-center p-10">
              <h2 className="text-4xl py-2 bg-gradient-to-r from-cyan-400 to-indigo-800 bg-clip-text text-transparent md:text-5xl lg:text-6xl lg:py-3">Kevin Liang</h2>
              <h3 className="text-xl py-2 md:text-2xl lg:text-3xl bg-gradient-to-r from-purple-500 to-sky-400 bg-clip-text text-transparent ">Infrastructure Engineer</h3>
              <p className="text-md font-rony9 py-3 leading-8 bg-gradient-to-br from-sky-400  to-indigo-700 bg-clip-text text-transparent max-w-l mx-auto md:text-lg lg:text-xl lg:py-3">
                Currently working as Onsite Help desk Service and Dispatch troubleshooting Engineer.
                Major in Computer Science in University of Illinois at Chicago.
                Having Passion on Front-end developing. I am currently learning React and Typescript by myself.
              </p>
            </div>
            <div className="text-4xl flex justify-center gap-10 text-gray-600 dark:text-sky-200">
              <AiFillGithub />
              <AiFillLinkedin />
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-slate-600 to-neutral-300 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96">
              <Image src={robot} className=""/>
            </div>
            
          </section>

          <section className="min-h-screen p-10">
            <div className="text-center p-10">
              <h3 className="text-4xl py-1 font-newWalt  dark:text-white">Work experience</h3>
              <p className="text-md py-3 bg-gradient-to-r from-green-400 to-cyan-600 bg-clip-text text-transparent max-w-l mx-auto md:text-lg lg:text-xl lg:py-3 leading-8">
                working fjweaifj;aewiojf io;awejfiojwa eiefjaeiow;fjiawoejfioawejfi aiowhfio ewaif
              </p>
              <p className="text-md py-3 bg-gradient-to-r from-lime-500 to-cyan-600 bg-clip-text text-transparent max-w-l mx-auto md:text-lg lg:text-xl lg:py-3 leading-8">
                experience fjiweoa;fji oejwafiewajfioweaj iofj waeiojf oiej awo;ijfeiowajfioawe
              </p>
              
            </div>
          </section>
          
          <section className="min-h-screen p-10">
            <div className="text-center p-10">
              <h3 className="text-4xl py-1 font-newWalt dark:text-white">Skills</h3>
              <p className="text-md py-3 bg-gradient-to-r from-purple-500 to-rose-400 bg-clip-text text-transparent max-w-l mx-auto md:text-lg lg:text-xl lg:py-3 leading-8">
                my fjweiaofj ioewajiojewian fjioweajcniocje;oawjoifewjaco;i fj mewaiojcfiowae;jfcowiaejio;fjawei
              </p>
              <p className="text-md py-3 bg-gradient-to-r from-purple-500 to-rose-400 bg-clip-text text-transparent max-w-l mx-auto md:text-lg lg:text-xl lg:py-3 leading-8">
                skills fjweiaofj ioewajiojewian fjioweajcniocje;oawjoifewjaco;i fj mewaiojcfiowae;jfcowiaejio;fjawei
              </p>
              
            </div>
          </section>

          <section className="min-h-screen p-10 mx-auto">
            <h2 className="text-center text-4xl p-5 font-newWalt dark:text-white">Projects</h2>
            <div className="md:flex md:gap-5 lg:flex lg:gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl mx-auto dark:shadow-gray-500">
                
                  <h3 className="text-2xl font-salma md:text-xl bg-gradient-to-r from-purple-400 to-neutral-300 bg-clip-text text-transparent lg:text-l">CRUD Project</h3>
                  <p className="py-2 font-rony9 bg-gradient-to-r from-sky-400 to-red-400 bg-clip-text text-transparent">description...123</p>
                  <h4 className="py-2 bg-gradient-to-r from-sky-400 to-amber-400 bg-clip-text text-transparent font-rony9">Tools & Language I use</h4>
                  <p className="text-sm bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>
                  <p className="text-sm bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent py-1 font-rony9">PHP</p>
                  <p className="text-sm bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS</p>
                  <p className="text-sm bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent py-1 font-rony9">XAMPP</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl mx-auto  dark:shadow-gray-500">
                
                  <h3 className="text-2xl font-salma md:text-xl bg-gradient-to-r from-purple-400 to-neutral-300 bg-clip-text text-transparent lg:text-l">PHP Login System</h3>
                  <p className="py-2 font-rony9 bg-gradient-to-r from-sky-400 to-red-400 bg-clip-text text-transparent">description...123</p>
                  <h4 className="py-2 bg-gradient-to-r from-sky-400 to-amber-400 bg-clip-text text-transparent font-rony9">Tools & Language I use</h4>
                  <p className="text-sm bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>
                  <p className="text-sm bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent py-1 font-rony9">PHP</p>
                  <p className="text-sm bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS</p>
                  <p className="text-sm bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent py-1 font-rony9">XAMPP</p>
                
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl mx-auto dark:shadow-gray-500">
                
                  <h3 className="text-2xl font-salma md:text-xl bg-gradient-to-r from-purple-400 to-neutral-300 bg-clip-text text-transparent lg:text-l">TV screen Mini Project</h3>
                  <p className="py-2 font-rony9 bg-gradient-to-r from-sky-400 to-red-400 bg-clip-text text-transparent">description...123</p>
                  <h4 className="py-2 bg-gradient-to-r from-sky-400 to-amber-400 bg-clip-text text-transparent font-rony9">Tools & Language I use</h4>
                  <p className="text-sm bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>
                  <p className="text-sm bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS</p>
                
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl mx-auto dark:shadow-gray-500">
                
                <h3 className="text-2xl font-salma md:text-xl bg-gradient-to-r from-purple-400 to-neutral-300 bg-clip-text text-transparent lg:text-l">Guess Password Game</h3>
                <p className="py-2 font-rony9 bg-gradient-to-r from-sky-400 to-red-400 bg-clip-text text-transparent">description...123</p>
                <h4 className="py-2 bg-gradient-to-r from-sky-400 to-amber-400 bg-clip-text text-transparent font-rony9">Tools & Language I use</h4>
                <p className="text-sm bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>
                <p className="text-sm bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS</p>
                <p className="text-sm bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent py-1 font-rony9">JavaScript</p>
              
              </div>
            </div>
          </section>
        </main>
      </div>
    
  );
}
