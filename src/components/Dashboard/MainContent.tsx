import React from "react";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import getThemeClasses from "../Shared/UiTheme";

interface MainContentProps {
  darkMode: boolean;
  activeButton: string;
  handleButtonClick: (buttonIndex: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({
  
  darkMode,
  activeButton,
  
  handleButtonClick,
}) => {
const uiTheme = getThemeClasses(darkMode);

  return (
    <div
      className={`${
        darkMode ? uiTheme.darkUiLight : uiTheme.lightUILight
      } flex-1 p-6 rounded`}
      style={{ fontSize: "clamp(0.9rem, 1vw, 1.2rem)" }}
    >
      {/* Header Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-4 text-sm mb-6">
        {["INSIGHTS", "CHANNEL REPORT"].map((label, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(label)}
            className={`${
              darkMode
                ? uiTheme.darkUI : uiTheme.lightUILight
            
            }  px-4 py-2 w-full md:w-44 rounded transition-transform duration-300 hover:scale-105`}
          >
            {label}
          </button>
        ))}
        <div className="flex justify-end">
          <button
            onClick={() => handleButtonClick("EXPORT")} // Updated to use string value
            className={`${
              darkMode
                ? uiTheme.darkUI : uiTheme.lightUILight
            }  px-4 py-2 rounded flex items-center justify-center transition-transform duration-300 hover:scale-105`}
          >
            Export <SystemUpdateAltIcon fontSize="small" className="ml-1" />
          </button>
        </div>
      </div>

      {/* SEO Growth Insights */}
      <section
        className={`mb-6`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <h2 className="text-2xl font-bold">SEO GROWTH INSIGHTS</h2>
          <div className="flex justify-end">
          <button
  onClick={() => handleButtonClick("UPDATE")} // Use string label
  className={`px-4 text-sm py-2 rounded   transition-transform duration-300 hover:scale-105 ${
    darkMode
      ? "bg-gradient-to-r from-[#D6ED07] to-[#25A906] hover:from-[#C0DA05] hover:to-[#1C8B05]"
      : "bg-gradient-to-r from-[#D6ED07] to-[#25A906] hover:from-[#C0DA05] hover:to-[#1C8B05]"
  }`}
>
  Update
</button>

          </div>
        </div>
        <p className="text-sm">Last Updated: 01/12/2024</p>
      </section>

      {/* Stats Section */}
      <section
        className={`grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mt-12 ${
          darkMode ? "backdrop-blur-md" : ""
        }`}
      >
        {[
          { label: "Comment", value: "200" },
          { label: "FAVORITE ADDED", value: "50" },
          { label: "FAVORITE REMOVED", value: "12" },
          { label: "SHARES", value: "120" },
          { label: "WATCH TIME", value: "128 hrs" },
          { label: "CTR", value: "10.0" },
          { label: "AVD", value: "240" },
          { label: "COMMENTS", value: "340" },
        ].map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg flex flex-col items-center transition-transform duration-300 ${
              darkMode ? uiTheme.darkUI : uiTheme.lightUI
            } hover:scale-105`}
          >
            <p className="text-sm">{item.label}</p>
            <h2 className="text-xl font-bold">{item.value}</h2>
          </div>
        ))}
      </section>

      {/* Chart Placeholder */}
      <div
        className={`mt-6 p-6 h-96 rounded-lg  transition-transform duration-300 hover:scale-y-105 ${
          darkMode ? uiTheme.darkUI : uiTheme.lightUI
        }`}
      >
        GRAPH
      </div>

      {/* Earnings vs Loss Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Channel Stats</h3>
          <div className="grid grid-cols-2 gap-6">
            {["VIDEOS", "SUBS", "LIKES", "COMMENTS"].map((label, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg flex flex-col items-center transition-transform duration-300 ${
                  darkMode ? uiTheme.darkUI : uiTheme.lightUI  
                } hover:scale-105`}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-[#D6ED07] to-[#25A906] flex items-center justify-center text-white mb-2 ${
                  darkMode ? uiTheme.darkUI : uiTheme.lightUI  }`} >
                  {label[0]}
                </div>
                <p className="text-base font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Earn vs Loss</h3>
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#D6ED07] to-[#25A906] hover:from-[#C0DA05] hover:to-[#1C8B05]
           flex items-center justify-center text-white">
            {/* Placeholder for Pie Chart */}
          </div>
          <p className="mt-4">
            Av. Revenue: <span className="font-bold">$40.234</span>
          </p>
          <p>
            Loss: <span className="font-bold text-red-500">$140.234</span>
          </p>
          <p>
            Real Revenue: <span className="font-bold">$40.234</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
