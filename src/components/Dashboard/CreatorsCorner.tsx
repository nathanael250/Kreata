import React, { useState } from 'react';
import getThemeClasses from '../Shared/UiTheme';
import { Handshake } from '@mui/icons-material';
import { ChangeCircle } from '@mui/icons-material';
import ReactFlagsSelect from "react-flags-select";

interface CreatorsCornerProps {
  darkMode: boolean;
}













const niches = [
  { name: '-- Select Niche --' },
  { name: 'Education' },
  { name: 'Entertainment' },
  { name: 'Lifestyle' },
  { name: 'Food & Cooking' },
  { name: 'Business & Finance' },
  { name: 'Art & Creativity' },
  { name: 'Music' },
  { name: 'Hobbies & Recreation' },
  { name: 'Family & Relationships' },
  { name: 'Pets & Animals' }
]

const CreatorsCorner: React.FC<CreatorsCornerProps> = ({ darkMode }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showSecondSelect, setShowSecondSelect] = useState(false);
  const [showPeopleList, setShowPeopleList] = useState([]);
  const handleCountrySelect = (code) => {
    setSelectedCountry(code);
    setShowSecondSelect(true); // Show the second select box when a country is selected
  };

  const mockPeopleList = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    { name: 'Alice Johnson', email: 'alice@example.com' },
  ];









  const [selectedOption, setSelectedOption] = useState<'MeetAndCollaborate' | 'Marketplace' | null>(null);

  const uiTheme = getThemeClasses(darkMode);

  const handleOptionClick = (option: 'MeetAndCollaborate' | 'Marketplace') => {
    setSelectedOption(option);
  };

  if (selectedOption === 'MeetAndCollaborate') {
    // Meet & Collaborate page content
    return (
      <div
        className={`flex flex-1 flex-col items-center justify-center min-h-screen px-4 lg:mr-[320px] m-2 ${darkMode ? 'bg-[#0A1739] text-white' : 'bg-gray-50 text-black'
          }`}
      >
        <div>

        </div>
        <h1 className={`text-2xl font-bold mb-4 text-center ${darkMode ? uiTheme.darkUI : uiTheme.lightUI}`}>
          Meet & Collaborate
        </h1>
        <div className='flex flex-col gap-4'>
          <ReactFlagsSelect
            selected={selectedCountry}
            onSelect={handleCountrySelect}
          />
          {
            showSecondSelect && (
              <select className='focus:outline-none border border-slate-300 px-3 py-2 rounded-md'>
                {
                  niches.map((niche) => (
                    <option key={niche.name} value={niche.name}>
                      {niche.name}
                    </option>
                  ))
                }
                <option value="">Choose</option>
              </select>
            )
          }
        </div>
        
        <div className='w-[50%] flex flex-col divide-y-2 divide-slate-100'>
          <div className='flex justify-between py-2 px-2 cursor-pointer hover:bg-slate-200'>
            <h1>Name here</h1><button className='text-sm text-slate-500'>Send Invite</button>
          </div>
          <div className='flex justify-between py-2 px-2 cursor-pointer hover:bg-slate-200'>
            <h1>Name here</h1><button className='text-sm text-slate-500'>Send Invite</button>
          </div>
          <div className='flex justify-between py-2 px-2 cursor-pointer hover:bg-slate-200'>
            <h1>Name here</h1><button className='text-sm text-slate-500'>Send Invite</button>
          </div>
          <div className='flex justify-between py-2 px-2 cursor-pointer hover:bg-slate-200'>
            <h1>Name here</h1><button className='text-sm text-slate-500'>Send Invite</button>
          </div>
          <div className='flex justify-between py-2 px-2 cursor-pointer hover:bg-slate-200'>
            <h1>Name here</h1><button className='text-sm text-slate-500'>Send Invite</button>
          </div>
        </div>

      </div>
    );
  }

  if (selectedOption === 'Marketplace') {
    // Marketplace page placeholder
    return (
      <div
        className={`flex flex-1 flex-col items-center justify-center min-h-screen px-4 lg:mr-[320px] m-2 ${darkMode ? 'bg-[#0A1739] text-white' : 'bg-gray-50 text-black'
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
      className={`flex flex-1 flex-col items-center justify-center min-h-screen px-4 lg:mr-[320px] m-2 ${darkMode ? 'bg-[#0A1739] text-white' : 'bg-gray-50 text-black'
        }`}
    >
      <h1 className={`text-3xl font-bold mb-8 mt-[-280px] text-center ${darkMode ? 'text-white' : 'text-black'}`}>
        Creators Corner
      </h1>
      <div className="flex space-x-4">

        <div className='border flex-1 border-slate-500 px-4 py-2 rounded-lg flex flex-col justify-center items-center cursor-pointer' onClick={() => handleOptionClick('MeetAndCollaborate')}>
          <Handshake sx={{ fontSize: 50 }} />
          <button

            className={`p-4 rounded-lg text-lg font-semibold `}
          >
            Meet & Collaborate
          </button>
        </div>


        <div className='border border-slate-500 flex-1 px-4 py-2 rounded-lg flex flex-col justify-center items-center cursor-pointer' onClick={() => handleOptionClick('Marketplace')}>
          <ChangeCircle sx={{ fontSize: 50 }} />
          <button

            className={`p-4 rounded-lg text-lg font-semibold `}
          >
            Marketplace
          </button>
        </div>

      </div>
    </div>
  );
};

export default CreatorsCorner;
