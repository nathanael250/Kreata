import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import Insights from "./components/Dashboard/Insights";
import Pricing from "./components/Dashboard/Pricing";
import Learn from "./components/Dashboard/Learn";
import Test from "./components/Test"
import Channel from "./components/Dashboard/Channel";
import Settings from "./components/Dashboard/Settings";
import Credits from "./components/Dashboard/Credits";
import AiCoach from "./components/Dashboard/AiCoach";
import Dashboard from "./components/Dashboard/Dashboard";
import Index from "./components/Dashboard/Index";
import Comparision from "./components/Dashboard/Comparision";
import ContentCreatorsDashboard from './components/Dashboard/ContentCreatorsDashboard';
import Goals from "./components/Dashboard/Goals";
import ReferenceChannels from "./components/Dashboard/ReferenceChannel";
import Choose from "./components/Choose";
import ProfilePage from "./components/Dashboard/ProfilePage";
import HomeDashboard from "./components/Dashboard/HomeDashboard";

const App: React.FC = () => {
  const [isPlanVisible, setIsPlanVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Retrieve the mode from localStorage or default to false (light mode)
    return localStorage.getItem("darkMode") === "true";
  });
  const [proChannel, setProChannel] = useState<string | null>(null);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", (!prev).toString());
      return !prev;
    });
  };

  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const toggleSidebar = () => setIsExpanded((prev) => !prev);
  const handleLoginSuccess = (user: { email: string; password: string }) => {
    console.log("Login successful for user:", user);
  };

  const handleUpgradePlan = () => {
    setIsPlanVisible(true);
  };

  const closePlan = () => {
    setIsPlanVisible(false);
  };




  return (


    <Router>

      <Routes>
        <Route path="/" element={<SignInPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/test" element={<Test/>}/>
        <Route path="/Dashboard/*" element={<Dashboard />}>
        
          <Route index element={<Index darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="comparision" element={<Comparision darkMode={darkMode} toggleDarkMode={toggleDarkMode} isExpanded={isExpanded} toggleSidebar={toggleSidebar} />} />
          <Route
            path='channel'
            element={
              <ReferenceChannels
                darkMode={darkMode}
                proChannel={proChannel}
                toggleDarkMode={toggleDarkMode} />} />
          <Route path="pricing" element={<Pricing darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="learn" element={<Learn darkMode={darkMode} />} />
          <Route path="goals" element={<Goals darkMode={darkMode} />} />
          <Route path='insights' element={<ContentCreatorsDashboard darkMode={darkMode} />} />
          <Route path="AI-Coach" element={<AiCoach darkMode={darkMode} />} />
          <Route path="channels" element={<Credits darkMode={darkMode} />} />
          <Route path='settings/profilePage' element={<ProfilePage darkMode={darkMode}/>} />
          <Route path="settings" element={<Settings proChannel={proChannel} setProChannel={setProChannel} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="home_dashboard" element={<HomeDashboard/>}/>
        </Route>


      </Routes>
    </Router>
    
    
  );
};

export default App;