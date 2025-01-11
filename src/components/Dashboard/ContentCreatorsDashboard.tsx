import React, { useState, useEffect } from 'react';
import MainContent from './MainContent';

const ContentCreatorsDashboard: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        const savedMode = localStorage.getItem("darkMode");
        return savedMode ? JSON.parse(savedMode) : false;
    });
    const [activeButton, setActiveButton] = useState<string>('Button1'); // Using string for button names

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = (value: boolean) => {
        setDarkMode(value);
    };

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <div className={`${darkMode ? 'bg-[#081028] text-white' : 'bg-white text-black'} md:mr-[320px] m-2 min-h-screen w-full`}>

            <div className="flex flex-1 flex-col">
                <MainContent
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                    activeButton={activeButton}
                    handleButtonClick={handleButtonClick}
                />
            </div>

        </div>
    );
};

export default ContentCreatorsDashboard;
