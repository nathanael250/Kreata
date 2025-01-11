import React, { useState } from 'react';
import getThemeClasses from '../Shared/UiTheme';

interface CreatorsCornerProps {
  darkMode: boolean;
}

const CreatorsCorner: React.FC<CreatorsCornerProps> = ({ darkMode }) => {
  const [selectedOption, setSelectedOption] = useState<'MeetAndCollaborate' | 'Marketplace' | null>(null);

  const uiTheme = getThemeClasses(darkMode);

  const handleOptionClick = (option: 'MeetAndCollaborate' | 'Marketplace') => {
    setSelectedOption(option);
  };

  if (selectedOption === 'MeetAndCollaborate') {
    // Meet & Collaborate page content
    return (
      <div
        className={`flex flex-1 flex-col items-center justify-center min-h-screen px-4 lg:mr-[320px] m-2 ${
          darkMode ? 'bg-[#0A1739] text-white' : 'bg-gray-50 text-black'
        }`}
      >
        <h1 className={`text-2xl font-bold mb-4 text-center ${darkMode ? uiTheme.darkUI : uiTheme.lightUI}`}>
          Meet & Collaborate
        </h1>
        {/* Content from the Meet & Collaborate page */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by Country"
            className={`p-2 rounded-md mr-2 ${
              darkMode ? uiTheme.container : uiTheme.activeButton
            }`}
          />
          <input
            type="text"
            placeholder="Search by Niche/Keyword"
            className={`p-2 rounded-md ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black border'
            }`}
          />
          <button className={`ml-2 p-2 rounded-md `}>Search</button>
        </div>
        <div className="w-full max-w-4xl">
          {/* Example creators list */}
          <div
            className={`flex justify-between items-center p-4 rounded-md mb-3 ${
              darkMode ? 'bg-gray-800' : 'bg-white border shadow-sm'
            }`}
          >
            <div>
              <h2 className="text-lg font-bold">Jane Doe</h2>
              <p>Country: USA</p>
              <p>Niche: Travel</p>
            </div>
            <button className={`p-2 rounded-md `}>Send Invitation</button>
          </div>
        </div>
      </div>
    );
  }

  if (selectedOption === 'Marketplace') {
    // Marketplace page placeholder
    return (
      <div
        className={`flex flex-1 flex-col items-center justify-center min-h-screen px-4 lg:mr-[320px] m-2 ${
          darkMode ? 'bg-[#0A1739] text-white' : 'bg-gray-50 text-black'
        }`}
      >
        <h1 className={`text-2xl font-bold mb-4 text-center ${darkMode ? 'text-white' : 'text-black'}`}>
          Marketplace Coming Soon
        </h1>
      </div>
    );
  }

  // Initial page with options
  return (
    <div
      className={`flex flex-1 flex-col items-center justify-center min-h-screen px-4 lg:mr-[320px] m-2 ${
        darkMode ? 'bg-[#0A1739] text-white' : 'bg-gray-50 text-black'
      }`}
    >
      <h1 className={`text-3xl font-bold mb-8 mt-[-280px] text-center ${darkMode ? 'text-white' : 'text-black'}`}>
        Creators Corner
      </h1>
      <div className="flex space-x-4">
        <button
          onClick={() => handleOptionClick('MeetAndCollaborate')}
          className={`p-4 rounded-lg text-lg font-semibold `}
        >
          Meet & Collaborate
        </button>
        <button
          onClick={() => handleOptionClick('Marketplace')}
          className={`p-4 rounded-lg text-lg font-semibold `}
        >
          Marketplace
        </button>
      </div>
    </div>
  );
};

export default CreatorsCorner;
