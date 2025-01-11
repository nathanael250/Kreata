import BarChart from "./BarChart";
import CircularProgress from "./CircularProgress";
import getThemeClasses from "../Shared/UiTheme";
import { useState } from "react";

interface ComparisionProps {
  darkMode: boolean;
  isExpanded: boolean;
  toggleSidebar: () => void;
  toggleDarkMode: () => void;
}

const Comparision: React.FC<ComparisionProps> = ({ darkMode, isExpanded }) => {
  const data = [
    { label: "Subscribers", channelA: "24K", channelB: "413K" },
    { label: "Views", channelA: "40M", channelB: "100M" },
    { label: "Videos", channelA: "50", channelB: "23" },
    { label: "Created", channelA: "2017-07-26", channelB: "2017-07-26" },
  ];

  const channelAValue = 30;
  const channelBValue = 70; 

  const barChartData = [
    {
      id: 1,
      data: [
        { channelA: 20, channelB: 40 },
        { channelA: 30, channelB: 70 },
        { channelA: 80, channelB: 20 },
        { channelA: 45, channelB: 55 },
        { channelA: 65, channelB: 35 },
      ],
    },
    {
      id: 2,
      data: [
        { channelA: 70, channelB: 30 },
        { channelA: 40, channelB: 60 },
        { channelA: 55, channelB: 45 },
        { channelA: 75, channelB: 25 },
        { channelA: 35, channelB: 65 },
      ],
    },
    {
      id: 3,
      data: [
        { channelA: 50, channelB: 50 },
        { channelA: 65, channelB: 35 },
        { channelA: 45, channelB: 55 },
        { channelA: 80, channelB: 20 },
        { channelA: 60, channelB: 40 },
      ],
    },
  ];
  const uiTheme = getThemeClasses(darkMode);

  const channelRecommendations = Array(8).fill(
    "Update Your channel to see updated insight"
  );

  return (
    <div
      className={`${
        darkMode ? uiTheme.darkUiLight : uiTheme.lightUILight
      }  flex flex-col flex-1 justify-center items-center min-h-screen gap-0 w-12 lg:mr-[250px]`}
      style={{ scrollbarWidth: "thin" }}
    >
      <h1 className={`mt-12  lg:mr-12 w-3/4  rounded-lg shadow-md p-1 text-md md :items-center md:justify-center ${darkMode ? 'bg-[#0A1739]' : 'bg-white'} font-semibold text-center`}>
        CHANNEL COMPARISON
      </h1>
      <div className="flex flex-col justify-center items-center mr-0">
        <div className={`flex flex-row gap-2 md:gap-12 lg:gap-24 w-full justify-center items-center my-8`}>
          <div className="flex justify-center flex-col items-center py-1 px-4 mb-4 md:mb-0">
            <div className={`w-24 h-24 lg:h-20 md:h-20 rounded-lg md:gap-24 overflow-hidden ${darkMode ? uiTheme.darkUiLight : uiTheme.lightUILight}`}>
              
            <img
                src="/img/155.png"
                alt="1:55 AM Media Profile Picture"
                className="h-full w-full object-cover"
              />
              
            </div>
            
            <div className="text-center mt-2 w-20">
              <h1 className="text-xs md:text-sm sm:w-full">1:55 AM Media</h1>
              <h4 className="text-slate-500 text-xs sm:text-sm">@1:55ammedia</h4>
              <h5 className="text-xs sm:text-sm">UK</h5>
            </div>
          </div>
          <div className={`flex ml-8  items-center gap-2 w-full md:gap-8 mb-4 md:mb-0 ${darkMode ? uiTheme.darkUiLight : uiTheme.accentColor}`}>
            <CircularProgress value={channelAValue} color="#00ff12" />
            <span className={`text-sm font-bold ${darkMode ? uiTheme.accentColor : uiTheme.accentColor}`}></span>
            
            <div className="text-xl sm:text-2xl font-bold">
              <span className="vs-text">V</span>
              <span className="vs-text-s">S</span>
            </div>
            <CircularProgress value={channelBValue} color="blue" />
            
            <span className={`text-sm font-bold ${darkMode ? uiTheme.accentColor : uiTheme.accentColor}`}></span>
          </div>
          <div className="flex flex-col items-center justify-center py-1 px-4 mb-4 md:mb-0">
            <div className={`w-24 h-24 lg:h-20 md:h-20 rounded-lg overflow-hidden ${darkMode ? uiTheme.darkUiLight : uiTheme.lightUILight}`}>
            <img
                src="/img/crss.png"
                alt="Chris Eazy Profile Picture"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center mt-2">
              <h1 className="text-xs md:text-sm">Chriss Eazy</h1>
              <h4 className="text-slate-500 text-xs sm:text-sm">@chrisseazy</h4>
              <h5 className="text-xs sm:text-sm">US</h5>
            </div>
          </div>
        </div>
        <div className={`mt-8 w-full flex flex-col gap-4 text-sm text-center items-center justify-center rounded-lg shadow-lg ${darkMode ? uiTheme.darkUI : uiTheme.lightUI} rounded-lg p-4 items-center`}>
          {data.map(({ label, channelA, channelB }, idx) => (
            <div
              key={idx}
              className="flex justify-between sm:text-center items-center w-full py-2 sm:py-3 px-3 sm:px-6 rounded-md gap-2 sm:gap-0"
            >
              <span className="text-xs sm:text-sm w-full sm:w-auto text-center sm:text-left">
                {channelA}
              </span>
              <div className="flex items-center justify-center w-full sm:max-w-[calc(70%-2rem)] gap-4 relative">
                <span className={` ${darkMode ? uiTheme.darkUiLight : uiTheme.lightUILight} font-bold px-2 sm:px-4 text-xs sm:text-sm whitespace-nowrap`}>
                  {label.toUpperCase()}
                </span>
              </div>
              <span className="text-xs sm:text-sm w-full sm:w-auto text-center sm:text-right">
                {channelB}
              </span>
            </div>
          ))}
        </div>
        <div className={`${darkMode ? uiTheme.darkUiLight : uiTheme.lightUILight} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full place-items-center`}>
          {barChartData.map((chart) => (
            <div
              key={chart.id}
              className ={` ${darkMode ? uiTheme.darkUiLight : uiTheme.lightUILight} p-3 sm:p-4 rounded-lg w-full max-w-xs flex flex-col justify-center items-center`}
            >
              <BarChart data={chart.data} width={250} height={150} />
              <div className={`flex justify-between w-full mt-2 ${darkMode ? uiTheme.darkUiLight : uiTheme.lightUILight}`}>
                <span className="text-xs sm:text-sm font-semibold text-[#25A906]">
                  Channel A
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-700">
                  Channel B
                </span>
              </div>
            </div>
          ))}
        </div>  
          <div className="mt-8 w-full md:justify-center md:items-center">
            <h2 className="text-lg font-semibold mb-4 text-center sm:text-center">
              AI COACH RECOMMENDATIONS
            </h2>
            <div className="flex flex-col gap-2">
              {channelRecommendations.map((channel, index) => (
                <div
                  key={index}
                  className={`${darkMode ? uiTheme.darkUI: uiTheme.lightUILight} p-3 sm:p-4 rounded-lg text-xs sm:text-sm break-words`}
                >
                  {channel}
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8 p-3 text-sm sm:text-sm">
            <button className={`${darkMode ? uiTheme.darkButton : uiTheme.lightButton} text-sm sm:p-2 rounded-md`}>
              TALK WITH COACH
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default Comparision;
