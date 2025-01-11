import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faVideo, faEye } from '@fortawesome/free-solid-svg-icons'


interface RightSidebarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;

}

const Sidebar2: React.FC<RightSidebarProps> = ({ darkMode }) => {
  const containerClass = darkMode
    ? "bg-[#012244] text-white"
    : "bg-gray-100 text-black";

  // channel properties array
  const channelProperties = [
    { p_title: 'subscribers', icon: <FontAwesomeIcon icon={faArrowTrendUp} />, value: '2,550' },
    { p_title: 'Videos', icon: <FontAwesomeIcon icon={faVideo} />, value: '2,550' },
    { p_title: 'Views', icon: <FontAwesomeIcon icon={faEye} />, value: '2,550' }
  ]

  return (
    <aside
      className={`${containerClass} ${darkMode? 'bg-[#012244] text-white':'bg-gray-100 text-black'} hidden lg:block rounded-md w-full lg:w-[25%] xl:w-[20%]  right-2 p-2 h-[89%] fixed top-[72px] overflow-y-auto shadow-lg`}
      style={{ scrollbarWidth: "thin" }}
    >
      <div className="flex flex-col items-center h-full p-4">
        <div className="flex w-full items-center gap-10">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="/img/155.png" alt="1:55 AM Media Profile Picture" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col text-center">
            <span className="text-md font-semibold">1:55 AM Media</span>
            <span className="text-sm text-slate-400">@handle here..</span>
          </div>
        </div>
        <div className="flex py-10 gap-2">
          {channelProperties.map((property, index) => (
            <div key={index}  className="flex flex-col items-center px-4 py-2 shadow-xl" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ marginRight: '10px' }}>{property.icon}</div>
              <div>
                <strong>{property.value}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar2;
