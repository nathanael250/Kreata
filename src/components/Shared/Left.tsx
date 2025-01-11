import React, { useState } from "react";
import InsightsIcon from "@mui/icons-material/Insights";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SchoolIcon from "@mui/icons-material/School";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from "@mui/icons-material/Menu";
import FlagIcon from '@mui/icons-material/flag';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from "@mui/icons-material/Close";
import { Tooltip, Switch, IconButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { Handshake } from "@mui/icons-material";
import { gsap } from "gsap";

interface SidebarProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
  darkMode: boolean;
  toggleDarkMode: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ darkMode, toggleDarkMode, isExpanded, toggleSidebar }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeView, setActiveView] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
    setActiveView(path);
    setIsMobileMenuOpen(false);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    animateMenuItems(!isMobileMenuOpen);
    slideMenu(!isMobileMenuOpen);
  };

  const animateMenuItems = (show: boolean) => {
    const items = document.querySelectorAll('.menu-item');
    gsap.to(items, {
      scale: show ? 1 : 0.1,
      opacity: show ? 1 : 0,
      stagger: {
        amount: 0.5,
        from: show ? 'start' : 'end',
      },
      duration: 0.1,
      ease: 'power2.out',
    });
  };

  const slideMenu = (show: boolean) => {
    const menu = document.getElementById('menu');
    if (show) {
      gsap.to(menu, {
        x: 0,
        duration: 0.1,
        ease: 'power2.out',
      });
    } else {
      gsap.to(menu, {
        x: '-100%',
        duration: 0.1,
        ease: 'power2.in',
      });
    }
  };

  const navItems = [
    { name: "Home", icon: <HomeIcon />, path: "/Dashboard/" },
    { name: "Insights", icon: <InsightsIcon />, path: "/Dashboard/insights" },
    { name: "View Channel", icon: <YouTubeIcon />, path: "/Dashboard/channel" },
    { name: "Goals", icon: <FlagIcon />, path: "/Dashboard/Goals" },
    { name: "Learn", icon: <SchoolIcon />, path: "/Dashboard/learn" },
    { name: "AI Coach", icon: <TipsAndUpdatesIcon />, path: "/Dashboard/Ai-Coach" },
    {name: "creators_corner", icon: <Handshake />, path: "/Dashboard/creators_corner"},  
    { name: "Notifications", icon: <NotificationsIcon />, path: "/Dashboard/notifications" },
    { name: "Settings", icon: <SettingsIcon />, path: "/Dashboard/settings" },

  
    
  ];

  return (
    <>
      {/* Mobile menu toggle button */}
      <div className="md:hidden text-white rounded-full fixed top-2 left-4 z-[9999]">
        <IconButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (<CloseIcon className={darkMode ? 'text-white' : 'text-black'} />)
            : (<MenuIcon className={darkMode ? 'text-white' : 'text-black'} />)}
        </IconButton>
      </div>

      {/* Mobile Sidebar */}
      <div
        id="menu"
        className={`md:hidden fixed top-0 left-0 w-3/4 h-full transition-all duration-300 z-[9998] ${darkMode ? 'bg-[#0A1739] text-white' : 'bg-gray-100 text-black'
          } ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="pt-16 pb-4 px-4">
          <div className="text-2xl font-bold mb-4">Kreata.io</div>
          <nav>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <div
                    onClick={() => handleNavigation(item.path)}
                    className="menu-item flex items-center gap-4 px-4 py-2 rounded-md transition-all duration-300 cursor-pointer"
                  >
                    <span>{item.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
          <div><h1>this is changes</h1></div>
          <div className="mt-2">
            <button
              onClick={() => handleNavigation('/pricing')}
              className="bg-[#D6ED07] text-white py-2 px-4 w-full rounded-xl shadow-xl transition-all duration-300"
            >
              Some thing here
            </button>
          </div>
          <div className={`flex items-start mt-10 ${isExpanded ? "justify-between" : "justify-center mb-20"}`}>
            <Switch
              checked={darkMode}
              onChange={(event) => toggleDarkMode(event.target.checked)}
              color="default"
              inputProps={{ "aria-label": "dark mode toggle" }}
            />
          </div>
        </div>
      </div>

    
      <aside
        className={`${darkMode ? "bg-[#081028] text-white" : "bg-gray-100 text-black"
          } fixed left-0 h-screen transition-all duration-300 flex-col justify-between ${isExpanded ? "w-[200px]" : "w-[60px]"
          } md:flex hidden overflow-hidden shadow-lg transform ease-in-out backdrop-blur-lg backdrop-filter z-40`}
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
                      className={`flex items-center gap-4 px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 ${darkMode ? "hover:bg-[#0A1739]" : "hover:bg-gray-200"} ${location.pathname === item.path ? "bg-[#D6ED07] text-black" : ""} cursor-pointer`}
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
            <div className="flex justify-center">
              <button
                onClick={() => handleNavigation("/pricing")}
                className="bg-gradient-to-r from-[#D6ED07] to-[#25A906] mt-4 text-black py-2 px-4 w-full rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Upgrade Plan
              </button>
            </div>
          )}

          <div className={`flex items-center ${isExpanded ? "justify-between" : "justify-center mb-20"}`}>
            <Switch
              checked={darkMode}
              onChange={(event) => toggleDarkMode(event.target.checked)}
              color="default"
              inputProps={{ "aria-label": "dark mode toggle" }}
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;