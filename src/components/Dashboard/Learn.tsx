import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LearnProps {
  darkMode: boolean;
}

const Learn: React.FC<LearnProps> = ({ darkMode }) => {


  const buttonClass = darkMode
    ? "bg-[#081028] text-white hover:bg-[#012244]"
    : "bg-gradient-to-r from-[#D6ED07] to-[#25A906] text-white hover:from-[#C0DA05] hover:to-[#1C8B05]";

  return (
    <div

      className={`flex flex-1 flex-col items-center justify-center min-h-screen px-4 lg:mr-[320px] m-2 ${darkMode ? "bg-[#0A1739] text-white" : "bg-gray-50 text-black"
        }`}

     

    >
      <h1
        className={`text-2xl font-bold mb-4 text-center ${darkMode ? "text-white" : "text-black"
          }`}
      >
        Learn
      </h1>


    </div>
  );
};

export default Learn;
