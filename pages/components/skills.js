import React from 'react';

function MySkills(props, skillsRef){
    return (
        <section className="min-h-screen p-10" ref={skillsRef}>
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
    )
}
export default React.forwardRef(MySkills);