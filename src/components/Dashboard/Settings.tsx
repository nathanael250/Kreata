import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faScrewdriverWrench, faEye } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

interface SettingsProps {
  setProChannel: (channel: string) => void;
  darkMode: boolean;
}

const Settings: React.FC<SettingsProps> = ({ setProChannel, darkMode }) => {
  const [selectedChannel, setSelectedChannel] = useState('');
  const navigate = useNavigate();
  const channels = ["CHRISS EAZY", "KWIZERA TV RWA", "AKARIHO TECH", "KWIGA TV", "SMART RWANDA"];
  const isAddingChannel = false;

  const handleChannelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedChannel(event.target.value);
  };

  const handleConfirm = () => {
    if (selectedChannel) {
      setProChannel(selectedChannel);
      localStorage.setItem('proChannel', selectedChannel);
      navigate(`/Dashboard/channel`);
    } else {
      alert('Please select a channel to set as PRO.');
    }
  };

  const buttonClass = darkMode
    ? "bg-[#081028] text-white hover:bg-[#012244]"
    : "bg-gradient-to-r from-[#D6ED07] to-[#25A906] text-white hover:from-[#C0DA05] hover:to-[#1C8B05]";

  return (
    <div
      className={`flex flex-1 flex-col justify-center px-4 lg:mr-[320px] m-2 ${darkMode ? "bg-[#0A1739] text-white" : "bg-gray-50 text-black"
        }`}
    >
      <h1
        className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-black"
          }`}
      >
        Settings
      </h1>

      <div className={`flex flex-col px-4 space-y-2 pb-8 ${darkMode ? 'text-white' : 'text-slate-500'}`}>
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-end w-5">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <Link to="profilePage" className="flex items-center">Profile</Link>
        </div>
        <div className="flex items-center gap-2" >
          <div className="flex justify-center items-end w-5">
            <FontAwesomeIcon icon={faYoutube} />
          </div>
          <Link to="manage_Channels" className="flex items-center">Manage Channel</Link>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-end w-5">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <Link to="/" className="flex items-center">Appearance</Link>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-end w-5">
            <FontAwesomeIcon icon={faScrewdriverWrench} />
          </div>
          <Link to="/" className="flex items-center">Advanced Settings</Link>
        </div>
        
      </div>

    </div>
  );
};

export default Settings;
