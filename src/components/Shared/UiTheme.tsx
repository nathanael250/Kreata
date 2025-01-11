import React from "react";

interface UiThemeProps {
    darkMode: boolean;
  }
const getThemeClasses = (darkMode: boolean) => {
    const mainColor ='#E7FA0B';
    const accentColor ='#E7FA0B';
    const darkUI = 'bg-[#0A1739] text-white';
    const darkUiLight = 'bg-[#081029] text-white shadow-sm';
    const lightUI = 'bg-white text-gray-900 ';
    const lightUILight = 'bg-gray-100 text-gray-700 shadow-sm';
    const darkActiveButton = 'bg-gray-800 text-white border';
    const lightActiveButton = 'bg-gray-100 text-black';
    const darkButton = 'bg-gray-400 text-white border';
    const lightButton = 'bg-[#0A1739] text-black border';
    return {
      container: darkMode ? darkUI : lightUI,
      card: darkMode ? darkUI : lightUI,
      activeButton: darkMode ? darkActiveButton : lightActiveButton,
      button: darkMode
        ? 'bg-[#081028] hover:bg-[#012244] text-white'
        : 'bg-gradient-to-r from-[#D6ED07] to-[#25A906] hover:from-[#C0DA05] hover:to-[#1C8B05] text-white',
        darkUI,
        darkUiLight,
        lightUI,
        darkButton,
        lightButton,
        darkActiveButton,
        lightActiveButton,
        lightUILight,
        darkMode,
        mainColor,
        accentColor
    };
  };
  export default getThemeClasses;