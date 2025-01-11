import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import { ToastContainer, toast } from "react-toastify";
import { Search, Notifications, Close } from "@mui/icons-material";
import "react-toastify/dist/ReactToastify.css";

interface MainContentProps {
    darkMode: boolean;
    activeButton: string;
    credits: number;//added
    handleButtonClick: (buttonName: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({
    darkMode,
    activeButton,
    handleButtonClick,
    credits, //credits added
}) => {
    const [isAddingChannel, setIsAddingChannel] = useState(false);
    const [channelName, setChannelName] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [channelExists, setChannelExists] = useState(false); // Tracks if a channel is added
    // State to manage user data
    const navigate = useNavigate(); // Navigation hook


    const handleAddChannelClick = () => {
        setIsAddingChannel(true);
    };

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
            setIsAddingChannel(false);
            setChannelExists(true); // Mark channel as added


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

    const handleViewChannel = () => {
        if (channelExists) {
            navigate("/channel"); // Navigate to Channel.tsx route
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
        <div className="flex min-h-screen flex-col">
            {/* Sidebar */}
            <header
                className={` sticky top-0 left-0 w-full py-3 px-4 flex items-center justify-between z-50 ${darkMode ? "bg-[#081028] text-white" : "bg-white text-black"
                    }`}
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
            >
                <h1
                    className={`text-2xl font-bold ml-5 ${darkMode ? "text-white" : "text-black"} whitespace-nowrap`}
                >
                    Kreata.io
                </h1>

                {/* Search Bar */}
                <div className={`relative flex-1 max-w-md mx-auto ${isSearchOpen ? "block" : "hidden"} md:block`}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className={`${darkMode ? "bg-[#0B1838] text-white" : "bg-gray-100 text-black"
                            } p-2 rounded-xl pl-10 w-full focus:outline-none`}
                    />
                    <Search
                        className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? "text-[#2B6A20]" : "text-black"
                            }`}
                    />
                </div>

                <button onClick={toggleSearch} className="block md:hidden focus:outline-none">
                    <Search className={darkMode ? "text-white" : "text-black"} />
                </button>

                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <button onClick={toggleNotifications} className="relative focus:outline-none">
                            <Notifications
                                className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                            />
                            <span
                                className={`absolute top-0 right-0 bg-red-500 text-white text-[10px] rounded-full px-1 font-semibold`}
                            >
                                {notifications.length}
                            </span>
                        </button>

                        {showNotifications && (
                            <div
                                className={`absolute right-0 mt-2 w-72 p-4 rounded-lg shadow-lg ${darkMode ? "bg-[#0B1838] text-white" : "bg-white text-black"
                                    }`}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h2 className="text-lg font-semibold">Notifications</h2>
                                    <button
                                        onClick={closeNotifications}
                                        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
                                    >
                                        <Close className="w-8 h-8" />
                                    </button>
                                </div>

                                {notifications.length > 0 ? (
                                    <ul className="space-y-2">
                                        {notifications.map((notification, index) => (
                                            <li
                                                key={index}
                                                className={`p-2 rounded-lg ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                                                    }`}
                                            >
                                                {notification}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No new notifications.</p>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Profile"
                            className="w-8 h-8 rounded-full cursor-pointer"
                            onClick={toggleProfileMenu}
                        />

                        {showProfileMenu && (
                            <div
                                className={`absolute right-0 mt-2 w-48 p-4 rounded-lg shadow-lg ${darkMode ? "bg-[#0B1838] text-white" : "bg-white text-black"
                                    }`}
                            >
                                <ul className="space-y-2">
                                    <li
                                        className={`p-2 rounded-lg cursor-pointer ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                                            }`}
                                        onClick={handleSettings} // Handle Settings click
                                    >
                                        Settings
                                    </li>
                                    <li
                                        className={`p-2 rounded-lg cursor-pointer ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                                            }`}
                                    >
                                        Privacy
                                    </li>
                                    <li
                                        className={`p-2 rounded-lg cursor-pointer ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                                            }`}
                                    >
                                        Help
                                    </li>
                                    <li
                                        className={`p-2 rounded-lg cursor-pointer ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                                            }`}
                                        onClick={handleLogout} // Handle Logout
                                    >
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </header>


            {/* Main Content */}
            <div
                className={`flex-1 transition-all duration-300 ${isExpanded ? "ml-[200px]" : "ml-[60px]"
                    } ${darkMode ? "bg-[#0d193b] text-white" : "bg-gray-100 text-black"}`}
            >
                {/* Header and Content */}
                <div className="flex ">
                    <aside
                        className={`hidden md:flex  ${darkMode ? "bg-[#081028] text-white" : "bg-gray-100 text-black"} fixed left-0 h-screen transition-all duration-300 flex-col justify-between ${isExpanded ? "w-[200px]" : "w-[60px]"} overflow-hidden  shadow-lg transform ease-in-out transition-all backdrop-blur-lg backdrop-filter z-40`}
                    >
                        <div>
                            <div className="p-4 flex items-center gap-4">
                                <div className="cursor-pointer" onClick={toggleSidebar}>
                                    <MenuIcon sx={{ color: darkMode ? "white" : "black" }} />
                                </div>
                            </div>
                            <nav className="mt-4">
                                <ul className="space-y-2">
                                    {navItems.map((item) => (
                                        <li key={item.name}>
                                            <Tooltip title={item.name} placement="right" disableHoverListener={isExpanded}>
                                                <div
                                                    onClick={() => handleNavigation(item.path)}
                                                    className={`flex items-center gap-4 px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 ${darkMode ? "hover:bg-[#0A1739]" : "hover:bg-gray-200"
                                                        } ${location.pathname === item.path ? "bg-[#D6ED07] text-black" : ""
                                                        } cursor-pointer transform ease-in-out`}
                                                >
                                                    {item.icon}
                                                    {isExpanded && <span>{item.name}</span>}
                                                </div>
                                            </Tooltip>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <div className="p-4">
                            {isExpanded && (
                                <div className="flex justify-center mb-44">
                                    <button
                                        onClick={() => handleNavigation("/pricing")}
                                        className="bg-gradient-to-r from-[#D6ED07] to-[#25A906] mt-12 text-black py-2 px-4 w-full rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105"
                                    >
                                        Upgrade Plan
                                    </button>
                                </div>
                            )}

                            <div className={`flex items-center mb-20 ${isExpanded ? "justify-between" : "justify-center mb-20"}`}>
                                <Switch
                                    checked={darkMode}
                                    onChange={(event) => toggleDarkMode(event.target.checked)}
                                    color="default"
                                    inputProps={{ "aria-label": "dark mode toggle" }}
                                />
                            </div>
                        </div>
                    </aside>
                    <div className='flex'>
                        <div className='w-full bg-red-300'>
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nihil eligendi amet provident optio necessitatibus molestiae cupiditate tempora alias quam, at, quibusdam eaque doloremque totam, earum quaerat dolorum neque corrupti.</h1>
                        </div>
                        <aside
                            className={`${containerClass}  hidden lg:block rounded-md w-full lg:w-[25%] xl:w-[20%]  right-2 p-2 h-[89%] fixed top-[72px] overflow-y-auto shadow-lg`}
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
                                        <div key={index} className="flex flex-col items-center px-4 py-2 shadow-xl" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <div style={{ marginRight: '10px' }}>{property.icon}</div>
                                            <div>
                                                <strong>{property.value}</strong>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;