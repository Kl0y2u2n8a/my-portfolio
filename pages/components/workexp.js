import React from 'react';

function WorkExperience(props, workRef) {
    const clientList = [
        { title: "NBCUniversal Entertainment", position: "Onsite Help Desk Support", period: "2024/1 ~ now", job: "End User Support,Troubleshooting etc.", environment: "Windows 10" },
        { title: "Paul Hastings", position: "Onsite Help Desk Support", period: "2023/7 ~ now", job: "End User Support, Troubleshooting, Meeting Room set up/Troubleshooting etc.", environment: "Windows 10" },
        { title: "BioMerieux Japan", position: "Onsite Help Desk Support", period: "2023/7 ~ 2024/1", job: "End User Support, Troubleshooting etc.", environment: "Windows 10" },
        { title: "Genmab K.K.", position: "Onsite Help Desk assitant", period: "2023/2 ~ 2023/6", job: "PC/iPhone/iPad set up, VPN set up/Troubleshooiting etc.", environment: "Windows 10" },
        { title: "Fossil", position: "Onsite Dispatch Engineer", period: "2022/11 ~ 2023/1 & 2023/6 ~ 2023/7", job: "POS Rebuild, Troubleshooting, Printer Troubleshooting etc.", environment: "Windows 10, POS, Printer" },
        { title: "Salesforce", position: "Asset Manage Engineer", period: "2022/11 ~ 2023/1 & 2023/6 ~ 2023/7", job: "Asset Management", environment: "Windows 10" },
        { title: "Bank of America Tokyo", position: "Onsite Dispatch Engineer", period: "2022/11 ~ 2023/1 & 2023/6 ~ 2023/7", job: "PC set up, Troubleshooting", environment: "Windows 10" },
        { title: "Teneo Japan", position: "Onsite Dispatch Engineer", period: "2022/11 ~ 2023/1 & 2023/6 ~ 2023/7", job: "PC set up, Run script", environment: "Windows 10" }]

    const Clients = clientList.map((client) =>
        <li>
            <div className="mx-auto">
                <p>------------------------</p>
                <p className="text-lg md:text-2xl">{client.title}</p>
                <p>{client.position}</p>
                <p>({client.period})</p>
                <p>{client.job}</p>
                <p>Environment: {client.environment}</p>
            </div>
        </li>);

    return (
        <section className="min-h-screen p-10" ref={workRef}>
            <div className="workexperience">
                <div className="text-center p-10">
                    <h3 className="text-5xl md:text-6xl py-1 font-newWalt  dark:text-white">Work experience</h3>

                    <div className="py-2 max-w-2xl mx-auto leading-8">
                        <div className="h-fit w-fit mx-auto px-5 md:px-10 font-salma rounded-3xl border-2 border-sky-400 hover:border-sky-200 bg-gradient-to-r from-blue-300 to-neutral-200 dark:from-blue-800 dark:to-slate-600 shadow-md shadow-gray-500 ">
                            <h2 className="text-2xl md:text-4xl pt-1 dark:text-white"><a href="https://www.computec.co.jp/ja/" target="_blank">Computec Engineering Ltd. </a><br /><a className="text-sm md:text-lg">(2022/11 ~ now)</a></h2>
                            <p className="text-xl md:text-2xl py-3 bg-gradient-to-r from-violet-700 dark:from-purple-400  via-blue-600 to-cyan-600 dark:to-cyan-300 bg-clip-text text-transparent">Full-time Infrastructure Engineer</p>
                            <ul className="text-lg py-3 bg-gradient-to-r from-violet-700 dark:from-purple-400  via-blue-600 to-cyan-600 dark:to-cyan-300 bg-clip-text text-transparent">
                                <p className="md:text-3xl">Client List</p>
                                {Clients}
                            </ul>
                            <button className="my-5 rounded-lg border border-gray-800 p-1 text-lg text-blue-700 font-burtons bg-gradient-to-r 
                            from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 hover:text-violet-500 
                            dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600">
                                <a href="https://drive.google.com/file/d/1laXrfOwiUNvZJaPEPMLyUJeqxHeApEMe/view?usp=sharing" target="_blank">More Detials in Japanese</a>
                        </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.forwardRef(WorkExperience);