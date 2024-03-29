import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaGripLinesVertical } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { TbLanguageHiragana } from "react-icons/tb";
import Image from 'next/image';
import my from '../public/my.jpg';
import { useState, useRef } from 'react';
import WorkExperience from "./components/workexp";
import MySkills from "./components/skills/skills";
import MyProject from "./components/projects";



export default function Home() {
  // for dark mode
  const [darkMode, setDarkMode] = useState(false);
  // for dropdown
  // const [isOpen, setIsOpen] = useState(false);

  const skillsRef = useRef();
  const workRef = useRef();
  const projectRef = useRef();

  // Scroll handler
  function handleClick(div) {
    switch (div) {
      case "top":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "workexp":
        workRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };


  return (

    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Kevin Liang Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-5 min-w-fit min-h-full bg-gradient-to-tr
      from-sky-300 via-indigo-300 to-blue-100 dark:from-blue-950 dark:via-indigo-950 dark:to-slate-950">

        

        <nav className="sticky top-0 z-50 py-5 mb-12 flex justify-between font-extrabold">
          <h1 className="text-xl font-burtons text-blue-900 hover:text-blue-500 dark:text-white dark:hover:text-neutral-300">
            <a href="/">kevinliangweb</a>
          </h1>
          <ul className="flex items-center ml-2">
            <li>
              <button className="font-burtons text-[10px] align-middle md:text-sm ml-1 md:ml-2 lg:ml-4 text-blue-900 hover:text-sky-500 dark:text-white  dark:hover:text-neutral-300"
                onClick={() => handleClick("top")}>
                Intro
              </button>
            </li>

            <li className="font-burtons text-sm align-text-bottom md:text-xl ml-1 md:ml-2 lg:ml-4 text-blue-900 dark:text-white">
              <FaGripLinesVertical />
            </li>

            <li>
              <button className="font-burtons text-[10px] align-middle md:text-sm ml-1 md:ml-2 lg:ml-4 text-blue-900 hover:text-sky-500 dark:text-white  dark:hover:text-neutral-300"
                onClick={() => handleClick("skills")}>
                Skills
              </button>
            </li>

            <li className="font-burtons text-sm align-text-bottom md:text-xl ml-1 md:ml-2 lg:ml-4 text-blue-900 dark:text-white">
              <FaGripLinesVertical />
            </li>

            <li>
              <button className="font-burtons text-[10px] align-middle md:text-sm ml-1 md:ml-2 lg:ml-4 text-blue-900 hover:text-sky-500 dark:text-white dark:hover:text-neutral-300"
                onClick={() => handleClick("workexp")}>
                Work Experience
              </button>
            </li>
            <li className="font-burtons text-sm align-text-bottom md:text-xl ml-1 md:ml-2 lg:ml-4 text-blue-900 dark:text-white">
              <FaGripLinesVertical />
            </li>

            <li>
              <button className="font-burtons text-[10px] align-middle md:text-sm ml-1 md:ml-2 lg:ml-4 text-blue-900 hover:text-sky-500 dark:text-white  dark:hover:text-neutral-300"
                onClick={() => handleClick("projects")}>
                Projects
              </button>
            </li>

            <li className="font-burtons text-sm align-text-bottom md:text-xl ml-1 md:ml-2 lg:ml-4 text-blue-900 dark:text-white">
              <FaGripLinesVertical />
            </li>

            {/* <li>
              <button  data-ripple-light="true" data-popover-target="menu"
                className="font-burtons text-l align-middle md:text-2xl ml-1 md:ml-2 lg:ml-4 text-blue-900 hover:text-sky-500 dark:text-white  dark:hover:text-neutral-300"
                >
                <FiMenu />
              </button>
              

            </li> */}

            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer  text-sm md:text-xl ml-1 md:ml-2 lg:ml-4
            text-blue-900 hover:text-sky-500 dark:text-white dark:hover:text-neutral-300"
              />
            </li>

            <li>
              <a href="https://my-portfolio-jp-one.vercel.app/">
                <TbLanguageHiragana
                className="text-sm md:text-xl ml-1 md:ml-2 lg:ml-4
            text-blue-900 hover:text-sky-500 dark:text-white dark:hover:text-neutral-300"
              /></a>
            </li>

            <li>
              <button
                className="border-2 border-gray-600 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-2 justify-center 
                            ml-2 lg:ml-4 font-burtons text-l text-blue-900 dark:text-white hover:bg-gradient-to-l dark:hover:text-neutral-300"
              >
                <a href="https://drive.google.com/file/d/1brZKtkZXY8eL__ZqG7HDDxdz1ndcuYV4/view?usp=sharing" target="_blank" >Resume</a>
              </button>
            </li>
          </ul>
        </nav>


        <section className="min-h-screen">
          <div className="text-center p-10 ">

            <div className="relative mx-auto bg-gradient-to-tr from-slate-600 to-blue-400 bg-clip-border border-transparent border-2 hover:border-4 hover:from-indigo-400 hover:to-blue-300 rounded-full w-60 h-60 mb-5 overflow-hidden md:w-72 md:h-72">
              <Image src={my}/>
            </div>
            <h2 className="text-4xl py-2 bg-gradient-to-r from-cyan-400 to-indigo-800 bg-clip-text text-transparent md:text-5xl lg:text-6xl lg:py-3">Kevin Liang</h2>
            <h3 className="text-xl py-2 md:text-2xl lg:text-3xl bg-gradient-to-r from-purple-500 to-sky-400 bg-clip-text text-transparent ">Infrastructure Engineer</h3>
            <p className="text-md font-rony9 py-3 leading-8 bg-gradient-to-br from-sky-400  to-indigo-700 bg-clip-text text-transparent max-w-xl mx-auto md:text-lg lg:text-xl lg:py-3">
              My name is Kevin Liang. I am Taiwanese.<br/>
              I am currently working as Onsite Help desk Service and Dispatch troubleshooting Engineer in Tokyo.<br/>
              Majored in Computer Science in University of Illinois at Chicago.<br/>
              Having Passion to Front-end developing. I am currently learning React and Typescript by myself.<br/>
              Currently looking for the position of Front-end Engineer.
            </p>
          </div>
          <div className="text-4xl flex justify-center gap-10 text-gray-600 dark:text-sky-200">
            <a href="https://github.com/Kl0y2u2n8a" target='_blank' className='hover:text-gray-800 dark:hover:text-sky-100'><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/liang-kai0228/" target='_blank' className=' hover:text-gray-800 dark:hover:text-sky-100'><AiFillLinkedin /></a>
          </div>
        </section>
        
        <MySkills ref={skillsRef} />
        <WorkExperience ref={workRef} />
        <MyProject ref={projectRef}/>

        <footer>
          <div className="font-rony9 pb-8 text-sm border-t-2 p-auto pt-3 text-center font-extrabold text-blue-800 dark:text-sky-400 ">
            <h1 className="p-1 text-xl">Kevin Liang</h1>
            <p className="p-1">Contact information:</p>
            <p className="p-1">Email: kevinmailforjapan@gmail.com</p>
            <p className="p-1">Mobile#: 080-2966-3363</p>
            <p className="p-1">LinkedIn: <a href="https://www.linkedin.com/in/liang-kai0228/" target="_blank">Kai Liang</a></p>
          </div>
        </footer>

      </main>
    </div>

  );
}
