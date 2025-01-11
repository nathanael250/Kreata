import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AddChannelProps {
  onChannelAdded: (channelName: string) => void;
  user: { proChannels: number; credits: number; plan: string };
  setUser: React.Dispatch<
    React.SetStateAction<{ proChannels: number; credits: number; plan: string }>
  >;
  buttonClass: string;
}

const AddChannel: React.FC<AddChannelProps> = ({
  onChannelAdded,
  user,
  setUser,
  buttonClass,
}) => {
  const [channelName, setChannelName] = useState("");

  const handleChannelSubmit = () => {
    if (channelName.trim()) {
      toast.success("Channel added successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setChannelName("");

      // Update user stats
      setUser((prevUser) => ({
        ...prevUser,
        proChannels: prevUser.proChannels + 1,
        credits: prevUser.credits - 1,
      }));

      // Notify parent
      onChannelAdded(channelName);
    } else {
      toast.error("Please enter a valid channel name.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <ToastContainer />
      <input
        type="text"
        placeholder="Enter Channel Name"
        value={channelName}
        onChange={(e) => setChannelName(e.target.value)}
        className="w-48 p-3 border rounded-lg mb-4 text-black text-center"
      />
      <button
        onClick={handleChannelSubmit}
        className={`${buttonClass} px-4 py-2 rounded-lg`}
      >
        Add Channel
      </button>
    </div>
  );
};

export default AddChannel;