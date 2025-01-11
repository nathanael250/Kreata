import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AiCoachProps {
  darkMode: boolean;
}

const AiCoach: React.FC<AiCoachProps> = ({ darkMode }) => {




  return (
    <div className={`${darkMode ? "bg-transparent text-white" : "bg-white text-black"}  lg:mr-[320px] m-2 flex flex-col flex-1 justify-center items-center` } >
      <h1
        className={`text-2xl font-bold mb-4 text-center ${darkMode ? "text-white" : "text-black"
          }`}
      >
        AI Coach
      </h1>


    </div>
  );
};

export default AiCoach;
