import React, { useState } from "react";
import Left from "./Left";
import Header from "./Header";
import Sidebar2 from "./Sidebar2";
const Comparision = () => {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        const savedMode = localStorage.getItem("darkMode");
        return savedMode ? JSON.parse(savedMode) : false;
    });
    const [activeButton, setActiveButton] = useState<number>(0);
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
        localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    };
    const handleButtonClick = (buttonIndex: number) => {
        setActiveButton(buttonIndex);
    };
    return (
        <div
            className={`${darkMode ? "bg-[#081028] text-white" : "bg-white text-black"
                } min-h-screen flex`}
        >
            <Left darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <div className="flex flex-1 flex-col">
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Sidebar2 darkMode={darkMode} />
        
                <div className={`${darkMode ? "bg-[#0B1838] text-white" : "bg-white text-black"
                    } flex p-6 max-w-[72%] justify-center rounded ml-6 lg:ml-24 mt-12 lg:mt-24`}
                    style={{ fontSize: "clamp(0.9rem, 1vw, 1.2rem)" }}>
                    <div className="flex flex-col justify-center items-center w-[370px]">
                        <div className="flex gap-2">
                            <div className="flex justify-center flex-col items-center mr-2 py-1 px-6 bg-[#1c3b36]">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#00ff12]">
                                    <img src="/img/crss.png" alt="example" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h1>Chriss Eazy</h1>
                                    <h4 className="text-slate-500 text-sm">@user_name</h4>
                                </div>
                            </div>
                            <div className="text-4xl font-bold  flex items-center">
                                <span className="vs-text">V</span>
                                <span className="vs-text-s">S</span>
                            </div>
                            <div className="flex justify-center flex-col items-center py-1 px-6 bg-[#3d2531]">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#00ff12]">
                                    <img src="/img/155.png" alt="example" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h1>1:55 AM Media</h1>
                                    <h4 className="text-slate-500 text-sm">@user_name</h4>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 w-full flex flex-col gap-8">
                            <div className="flex gap-12 bg-[#0d193b] shadow-all-sides justify-between w-full py-2 px-4 rounded">
                                <span className="text-green-600 flex justify-center items-center">413,000</span>
                                <span className="flex justify-center items-center">Subscribers</span>
                                <span className="text-red-600 flex justify-center items-center">24,600</span>
                            </div>
                            <div className="flex gap-12 bg-[#0d193b] shadow-all-sides justify-between w-full py-2 px-4 rounded">
                                <span className="text-green-600 flex justify-center items-center">40,290,217</span>
                                <span className="flex justify-center items-center">Views</span>
                                <span className="text-red-600 flex justify-center items-center">1,002,080</span>
                            </div>
                            <div className="flex gap-12 bg-[#0d193b] shadow-all-sides justify-between w-full py-2 px-4 rounded">
                                <span className="text-green-600 flex justify-center items-center">20</span>
                                <span className="flex justify-center items-center">Videos</span>
                                <span className="text-red-600 flex justify-center items-center">23</span>
                            </div>
                            <div className="flex gap-12 bg-[#0d193b] shadow-all-sides justify-between w-full py-2 px-4 rounded">
                                <span className="text-green-600 flex justify-center items-center">Rwanda</span>
                                <span className="flex justify-center items-center">Country</span>
                                <span className="text-red-600 flex justify-center items-center">Rwanda</span>
                            </div>
                            <div className="flex gap-12 bg-[#0d193b] shadow-all-sides justify-between w-full py-2 px-4 rounded">
                                <span className="text-green-600 flex justify-center items-center">2017-07-26</span>
                                <span className="flex justify-center items-center">Created</span>
                                <span className="text-red-600 flex justify-center items-center">2017-07-26</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Comparision