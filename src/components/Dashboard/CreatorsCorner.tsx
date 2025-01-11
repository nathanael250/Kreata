import React, { useState, useEffect } from 'react';
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
];

const CreatorsCorner: React.FC<CreatorsCornerProps> = ({ darkMode }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showSecondSelect, setShowSecondSelect] = useState(false);
  const [peopleList, setPeopleList] = useState<any[]>([]);
  const [selectedNiche, setSelectedNiche] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCountrySelect = (code: string) => {
    setSelectedCountry(code);
    setShowSecondSelect(true);
  };

  const mockPeopleList = [
    { name: 'John Doe', email: 'john@example.com', niche: 'Education' },
    { name: 'Jane Smith', email: 'jane@example.com', niche: 'Art & Creativity' },
    { name: 'Alice Johnson', email: 'alice@example.com', niche: 'Business & Finance' },
    { name: 'Michael Brown', email: 'michael@example.com', niche: 'Music' },
    { name: 'Sarah Davis', email: 'sarah@example.com', niche: 'Lifestyle' },
  ];

  const fetchPeople = (niche: string) => {
    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      const filteredPeople = mockPeopleList.filter(person => person.niche === niche);
      setPeopleList(filteredPeople);
      setLoading(false);
    }, 1000);
  };

  const handleNicheChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const niche = e.target.value;
    setSelectedNiche(niche);

    if (niche !== "-- Select Niche --") {
      fetchPeople(niche);
    } else {
      setPeopleList([]);
    }
  };

  const uiTheme = getThemeClasses(darkMode);

  return (
    <div
      className={`flex flex-1 flex-col items-center justify-center min-h-screen px-4 lg:mr-[320px] m-2 ${darkMode ? 'bg-[#0A1739] text-white' : 'bg-gray-50 text-black'
        }`}
    >
      <h1 className={`text-3xl font-bold mb-8 mt-[-280px] text-center ${darkMode ? 'text-white' : 'text-black'}`}>
        Creators Corner
      </h1>
      <div className='flex flex-col gap-4'>
        <ReactFlagsSelect
          selected={selectedCountry}
          onSelect={handleCountrySelect}
        />
        {showSecondSelect && (
          <select
            className='focus:outline-none border border-slate-300 px-3 py-2 rounded-md'
            value={selectedNiche}
            onChange={handleNicheChange}
          >
            {niches.map((niche) => (
              <option key={niche.name} value={niche.name}>
                {niche.name}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className='w-[50%] flex flex-col divide-y-2 divide-slate-100 mt-4'>
        {loading ? (
          <h1 className='text-center text-slate-500'>Loading...</h1>
        ) : peopleList.length > 0 ? (
          peopleList.map((person, index) => (
            <div
              key={index}
              className='flex justify-between py-2 px-2 cursor-pointer hover:bg-slate-200'
            >
              <h1>{person.name}</h1>
              <button className='text-sm text-slate-500'>Send Invite</button>
            </div>
          ))
        ) : (
          <h1 className='text-center text-slate-500'>
            {selectedNiche ? 'No people found for this niche' : 'Select a niche to see people'}
          </h1>
        )}
      </div>
    </div>
  );
};

export default CreatorsCorner;
