import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify";
import AddChannel from "./AddChannel"; 

interface MainContentProps {
  darkMode: boolean;
  activeButton: number; // Add this
  handleButtonClick: (buttonIndex: number) => void;
}

const MainContent: React.FC<MainContentProps> = ({ darkMode }) => {
  const [isAddingChannel, setIsAddingChannel] = useState(false);
  const [channelExists, setChannelExists] = useState(false);
  const [user, setUser] = useState({
    proChannels: 2,
    plan: "Free",
    credits: 14,
  });
  const navigate = useNavigate();

  const handleAddChannelClick = () => {
    setIsAddingChannel(true);
  };

  const handleChannelAdded = (channelName: string) => {
    setIsAddingChannel(false);
    setChannelExists(true);
  };

  const handleViewChannel = () => {
    if (channelExists) {
      navigate("/content-creators-dashboard");
    } else {
      toast.error("Please add a channel first.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const buttonClass = darkMode
    ? "bg-[#081028] text-white hover:bg-[#012244]"
    : "bg-gradient-to-r from-[#D6ED07] to-[#25A906] text-white hover:from-[#C0DA05] hover:to-[#1C8B05]";

  return (
    <div
      className={`flex flex-1 flex-col items-center justify-center min-h-screen px-4 lg:mr-[320px] m-2 ${
        darkMode ? "bg-[#0A1739] text-white" : "bg-gray-50 text-black"
      }`}
    >
      <div
        className={`w-full max-w-4xl min-h-96 rounded-lg flex flex-col items-center p-6 space-y-6 sm:space-y-8 md:space-y-10 ${
          darkMode ? "bg-[#012244]" : "bg-white shadow-md"
        }`}
      >
        {!isAddingChannel ? (
          <div className="flex  items-center justify-center space-y-6 sm:space-y-8 md:space-y-10">
          <button
  onClick={handleAddChannelClick}
  className={`flex flex-col items-center justify-center space-y-2 w-36 h-36 sm:w-44 sm:h-44 rounded-full ${
    darkMode ? "text-[#D6ED07]" : "text-black font-bold"
  }`}
>
  <div className="flex flex-col items-center justify-center">
    <span className="text-4xl sm:text-5xl font-bold">+</span>
    <span className="text-lg sm:text-xl font-medium mt-2">Add New Channel</span>
  </div>
</button>

          </div>
        ) : (
          <AddChannel
            onChannelAdded={handleChannelAdded}
            user={user}
            setUser={setUser}
            buttonClass={buttonClass}
          />
        )}
      </div>
    </div>
  );
};

export default MainContent;
