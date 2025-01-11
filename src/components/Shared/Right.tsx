
  import React, { useState, } from "react";
  import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
  import CloseIcon from "@mui/icons-material/Close";

interface RightSidebarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Sidebar2: React.FC<RightSidebarProps> = ({ darkMode,toggleDarkMode }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Your subscription has been renewed!" },
    { id: 2, message: "New comment on your video!" },
    { id: 3, message: "Weekly analytics are ready to view!" },
  ]);

    const [isExpanded, setIsExpanded] = useState(false);

    const recentVideos = Array.from({ length: 10 }, (_, index) => ({
      id: 10 - index,
      thumbnail: "/img/thumbnail.jpg",
      title: `Video Title ${10 - index}`,
    }));

    const handleNotificationClose = (id: number) => {
      setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    };

    const toggleDropdown = () => {
      setIsExpanded(!isExpanded);
    };

    const containerClass = darkMode
      ? "bg-[#0A1739] text-white"
      : "bg-gray-100 text-black";

    const notificationClass = darkMode
      ? "bg-[#012244] text-white"
      : "bg-gray-300 text-black";

  return (
    <aside
      className={`${containerClass} hidden lg:block rounded-md w-full md:w-[20%] h-[calc(100vh-1rem)] bg-red-900 p-4 fixed right-0 overflow-y-auto`}
      style={{ scrollbarWidth: "thin" }}
    >
      {/* Channel Info Section */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="https://via.placeholder.com/100"
          alt="Channel Picture"
          className="w-20 h-20 rounded-full object-cover"
        />
        <h2 className="mt-2 text-lg font-bold">Akariho Tech</h2>
        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>@akarihotech</p>
        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Sobanukirwa ibijyanye na TEKINOLOJI</p>

          <div className="flex justify-center flex-col items-center space-y-4 mt-5">
            <div className="flex justify-center items-center space-x-2">
            
              {[
                { label: "Subs", count: "124K" },
                { label: "Views", count: "420K" },
                { label: "Videos", count: "10,230" },
                { label: "RPM", count: "$2.5" },
                { label: "Category", count: "Education" },
              ].map(({ label, count }) => (
                <div key={label} className="flex flex-col items-center">
                  <span className={`text-xs font-bold ${darkMode ? "text-gray-300" : "text-black"}`}>{label}</span>
                  <div className={`flex items-center justify-center w-24 h-5 mt-2 rounded-full ${darkMode ? "bg-[#012244] text-white" : "bg-gradient-to-r from-[#D6ED07] to-[#25A906] text-white"}`}>
                    <span className="text-xs font-bold">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        <div>
          <h2 className="text-lg font-bold mb-4">Notifications</h2>
          {notifications.length > 0 ? (
            <ul className="space-y-4">
              {notifications.map(({ id, message }) => (
                <li key={id} className={`flex items-center justify-between p-3 rounded-md ${notificationClass}`}>
                  <p className="text-sm">{message}</p>
                  <button aria-label="Close notification" onClick={() => handleNotificationClose(id)}>
                    <CloseIcon className="h-5 w-5" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>No new notifications.</p>
          )}
        </div>

      
        <div className="mb-8 mt-8">
          <div className="w-full h-40 rounded-lg flex items-center justify-center bg-gray-300">
            <p className={`text-sm ${darkMode ? "text-white" : "text-black"}`}> </p>
          </div>
        </div>

      
    </aside>
  );
};

  export default Sidebar2;