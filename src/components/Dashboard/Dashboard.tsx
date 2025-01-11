import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Left from '../Shared/Left';
import Header from '../Shared/Header';
import Index from './Index';
import Comparision from './Comparision';
import Channel from './Channel';
import Sidebar2 from '../Shared/Sidebar2';
import Insights from './Insights';
import AiCoach from './AiCoach';
import Credits from './Credits';
import Learn from './Learn';
import Pricing from './Pricing';
import ContentCreatorsDashboard from './ContentCreatorsDashboard';
import ReferenceChannels from './ReferenceChannel';
import Settings from './Settings';
import Goals from './Goals';
import Notifications from './Notifications';
import CreatorsCorner from './CreatorsCorner';
import getThemeClasses from '../Shared/UiTheme';


import Choose from '../Choose';
import ProfilePage from './ProfilePage';
import ManageChannels from './ManageChannels';

const Dashboard: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const toggleSidebar = () => setIsExpanded((prev) => !prev);

    // Detect route changes and reset sidebar state
    const location = useLocation();
    useEffect(() => {
        setIsExpanded(false); // Collapse sidebar on route change
    }, [location]);

    // State for dark mode
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', JSON.stringify(newMode));
            return newMode;
        });
    };

    const [proChannel, setProChannel] = useState<string | null>(null);

    const uiTheme = getThemeClasses(darkMode);

    return (
        <div className="flex min-h-screen flex-col">
            {/* Header */}
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            {/* Main Content */}
            <div
                className={`ml-0 flex-1 transition-all duration-300 ${darkMode ? uiTheme.darkUiLight : uiTheme.lightUILight} ${isExpanded ? 'md:ml-[200px]' : 'md:ml-[60px]'
                    } `}
            >
                {/* Header and Content */}
                <div className="flex w-full">
                    <Left
                        isExpanded={isExpanded}
                        toggleSidebar={toggleSidebar}
                        darkMode={darkMode}
                        toggleDarkMode={toggleDarkMode}
                    />
                    <div
                        className={`flex flex-wrap gap-4 p-2 w-full 
                            }`}
                    >
                        <Routes>
                            <Route
                                index
                                element={
                                    <Index darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                                }
                            />
                            <Route
                                path='channel'
                                element={
                                    <ReferenceChannels
                                        darkMode={darkMode}
                                        proChannel={proChannel}
                                    />} />
                            <Route
                                path="comparision"
                                element={
                                    <Comparision
                                        darkMode={darkMode}
                                        toggleDarkMode={toggleDarkMode}
                                        isExpanded={isExpanded}
                                        toggleSidebar={toggleSidebar}
                                    />
                                }
                            />



                            <Route path='/choose' element={<Choose darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>}/>
                            

                            <Route
                                path="pricing"
                                element={<Pricing darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
                            />

                            <Route path="learn" element={<Learn darkMode={darkMode} />} />
                            <Route path="goals" element={<Goals darkMode={darkMode} />} />
                            <Route path="insights" element={<ContentCreatorsDashboard />} />
                            <Route path="learn" element={<Learn darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
                            <Route path="goals" element={<Goals darkMode={darkMode} />} />
                            <Route path="insights" element={<ContentCreatorsDashboard toggleDarkMode={toggleDarkMode} />} />
                            <Route
                                path="Notifications"
                                element={<Notifications darkMode={darkMode} />}
                            />
                            <Route path="AI-Coach" element={<AiCoach darkMode={darkMode} />} />
                            <Route path='creators_corner' element={<CreatorsCorner darkMode={darkMode} />} />
                            <Route path="channels" element={<Credits darkMode={darkMode} />} />
                            <Route path='settings/profilePage' element={<ProfilePage darkMode={darkMode}/>} />
                            <Route path='settings/manage_Channels' element={<ManageChannels darkMode={darkMode}/>} />
                            <Route
                                path="settings"
                                element={
                                    <Settings
                                        setProChannel={setProChannel}
                                        darkMode={darkMode}
                                    />
                                }
                            />
                        </Routes>
                        <Sidebar2 darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
