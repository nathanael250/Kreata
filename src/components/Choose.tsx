import { color } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import getThemeClasses from "./Shared/UiTheme";
import '../socialCards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faSquareInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
interface chooseProps {
    darkMode: boolean,
    toggleDarkMode: () => void;

}
const Choose: React.FC<chooseProps> = ({ darkMode }) => {


    const slides = [
        {
            index: 1,
            label: "Available",
            icon: <FontAwesomeIcon icon={faYoutube} />,
            name: "YouTube",
            color: 'text-[#f61c0d]',
        },
        {
            index: 2,
            label: "Comming Soon",
            icon: <FontAwesomeIcon icon={faSquareInstagram} />,
            name: "Instagram",
            color: "text-gray-800",
        },
        {
            index: 3,
            label: "Coming Soon",
            icon: <FontAwesomeIcon icon={faTwitter} />,
            name: "Twiter",
            color: "text-gray-800",
        },
        {
            index: 4,
            label: "Coming Soon",
            icon: <FontAwesomeIcon icon={faTiktok} />,
            name: "TikTok",
            color: "text-gray-800",
        },
    ];

    const navigate = useNavigate();
    const handleCardClick=()=>{
        navigate('/dashboard/channels')
    }

    const uiTheme = getThemeClasses(darkMode);
    return (
        <div
            className={`${darkMode ? uiTheme.darkUI : uiTheme.lightUI} 
                 w-full min-h-screen py-10 flex justify-center items-center lg:mr-[320px] m-2`}
        >
            <div className={` ${darkMode ? uiTheme.darkUI : uiTheme.lightUI}flex flex-col justify-center items-center`}>
                <h1 className="mb-20 text-2xl font-semibold">Choose Platform.</h1>
                <div className="flex  gap-8">
                    {slides.map((slide, index) => (

                            <div onClick={handleCardClick} id={slide.index} key={index} className={`card cursor-pointer p-2 w-[200px] h-[130px] flex flex-col justify-center items-center bg-[#0A1739] rounded-lg`}>
                                <span></span>
                                <div className={`${slide.color} text-[100px]`}>{slide.icon}</div>
                                <div className={`text-sm ${darkMode ? 'text-slate-300' : 'text-black'}`}>{slide.name}</div>
                                
                            </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Choose;
