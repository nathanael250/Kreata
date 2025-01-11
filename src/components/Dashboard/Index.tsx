import React, { useState } from 'react'
import Main from './Main';


interface IndexProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}


const Index: React.FC<IndexProps> = ({darkMode}) => {

    const [activeButton, setActiveButton] = useState<number>(1);

    const handleButtonClick = (buttonIndex: number) => {
        setActiveButton(buttonIndex);
    };
    return (
        <Main
            darkMode={darkMode}
            activeButton={Number(activeButton)}  // Convert number to string
            handleButtonClick={handleButtonClick}
        />
    );
};

export default Index
