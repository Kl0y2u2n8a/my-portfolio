import React from 'react';

function WorkExperience (props, workRef){
    return (
        <section className="min-h-screen p-10" ref={workRef}>
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
    )
}

export default React.forwardRef(WorkExperience);