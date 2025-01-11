import React, { useState, useEffect } from "react";
import getThemeClasses from "../Shared/UiTheme";

interface GoalsProps {
  darkMode: boolean;
}

const Goals: React.FC<GoalsProps> = ({ darkMode }) => {
  const [goalType, setGoalType] = useState("subscribers");
  const [targetNumber, setTargetNumber] = useState<number | string>("");
  const [uploads, setUploads] = useState<number | string>("");
  const [timeLimit, setTimeLimit] = useState<string>("");
  const [savedGoals, setSavedGoals] = useState<
    { type: string; target: number; uploads: number; timeLimit: number; achieved: number }[]
  >([]);
  const [uploadFrequency, setUploadFrequency] = useState("daily");
  const [uploadCount, setUploadCount] = useState<number | string>("");

  useEffect(() => {
    const storedGoals = localStorage.getItem("goals");
    if (storedGoals) {
      setSavedGoals(JSON.parse(storedGoals));
    }
  }, []);

  useEffect(() => {
    if (savedGoals.length > 0) {
      localStorage.setItem("goals", JSON.stringify(savedGoals));
    }
  }, [savedGoals]);

  const handleSaveGoal = () => {
    const targetNum = parseFloat(targetNumber as string);
    const uploadNum = parseFloat(uploads || uploadCount as string);
    const timeLimitDate = new Date(timeLimit);
    const currentDate = new Date();
    const timeLimitNum = Math.ceil((timeLimitDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));

    // Validation for subscribers and views goal types
    if (goalType === "subscribers" || goalType === "views") {
      console.log("Validating Subscribers/Views Goal:");
      console.log("Target Number:", targetNum);
      console.log("Time Limit:", timeLimitNum);

      if (
        isNaN(targetNum) || targetNum <= 0 ||
        isNaN(timeLimitNum) || timeLimitNum <= 0
      ) {
        alert("Please enter valid target number and time limit.");
        return;
      }
    }

    // Validation for uploads goal type
    if (goalType === "uploads") {
      console.log("Validating Uploads Goal:");
      console.log("Uploads:", uploadNum);
      console.log("Target Number:", targetNum); // Even though target is hidden, we still check it
      console.log("Time Limit:", timeLimitNum);

      if (
        isNaN(uploadNum) || uploadNum <= 0 ||
        isNaN(timeLimitNum) || timeLimitNum <= 0
      ) {
        alert("Please enter valid upload numbers and a time limit.");
        return;
      }
    }

    const newGoal = {
      type: goalType,
      target: targetNum,
      uploads: uploadNum,
      timeLimit: timeLimitNum,
      achieved: 0,
    };

    setSavedGoals((prevGoals) => [...prevGoals, newGoal]);

    // Reset input fields
    setTargetNumber("");
    setUploads("");
    setUploadCount("");
    setTimeLimit("");
  };

  const handleUpdateProgress = (index: number) => {
    setSavedGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      const goal = updatedGoals[index];
      if (goal.achieved < goal.uploads) {
        goal.achieved += 1;
      }
      return updatedGoals;
    });
  };

  const uiTheme = getThemeClasses(darkMode);

  return (
    <div
      className={`flex flex-col items-center justify-center w-full px-4 lg:mr-[320px] m-2 ${
        darkMode ? uiTheme.darkUiLight : uiTheme.lightUI
      } rounded-lg`}
    >
      <header className="w-full max-w-4xl mb-6 mt-24">
        <h1 className="text-xl font-bold">Set Goal</h1>
        <p className="text-sm mt-1">
          Choose a goal type, define your target, plan uploads, and set a time limit to achieve it!
        </p>
      </header>

      <div
        className={`w-full max-w-md p-6 rounded-lg shadow-lg ${
          darkMode ? uiTheme.darkUI : uiTheme.lightUI
        }`}
      >
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">What's Goal?</label>
          <select
            value={goalType}
            onChange={(e) => setGoalType(e.target.value)}
            className={`w-full p-2 rounded border ${
              darkMode ? "bg-[#081028] text-white" : "bg-gray-100 text-black"
            }`}
          >
            <option value="subscribers">Subscribers</option>
            <option value="views">Views</option>
            <option value="uploads">Uploads</option>
          </select>

          {goalType === "uploads" && (
            <div className="flex mt-4 space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-2">When to uplad</label>
                <select
                  value={uploadFrequency}
                  onChange={(e) => setUploadFrequency(e.target.value)}
                  className={`w-full p-1 rounded border ${
                    darkMode ? "bg-[#081028] text-white" : "bg-gray-100 text-black"
                  }`}
                >
                  <option value="daily">Daily</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-semibold mb-2">Number of Uploads</label>
                <input
                  type="number"
                  value={uploadCount}
                  onChange={(e) => setUploadCount(Number(e.target.value))}
                  className={`w-full p-1 rounded border ${
                    darkMode ? "bg-[#081028] text-white" : "bg-gray-100 text-black"
                  }`}
                  placeholder="Enter a number"
                />
              </div>
            </div>
          )}
        </div>

        {goalType !== "uploads" && (
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Target Number</label>
            <input
              type="number"
              value={targetNumber}
              onChange={(e) => setTargetNumber(Number(e.target.value))}
              className={`w-full p-2 rounded border ${
                darkMode ? "bg-[#081028] text-white" : "bg-gray-100 text-black"
              }`}
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Time Limit (in days)</label>
          <input
            type="date"
            value={timeLimit}
            onChange={(e) => setTimeLimit(e.target.value)}
            className={`w-full p-1 rounded border ${
              darkMode ? "bg-[#081028] text-white" : "bg-gray-100 text-black"
            }`}
          />
        </div>

        <button
          onClick={handleSaveGoal}
          className={`w-full py-2 rounded ${
            darkMode
              ? "bg-[#25A906] text-white hover:bg-[#1C8B05]"
              : "bg-gradient-to-r from-[#D6ED07] to-[#25A906] text-white hover:from-[#C0DA05] hover:to-[#1C8B05]"
          }`}
        >
          Save Goal
        </button>
      </div>

      <div className="w-full max-w-4xl mt-8">
        <h2 className="text-lg font-bold text-center mb-4">Saved Goals</h2>
        {savedGoals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {savedGoals.map((goal, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow-lg ${
                  darkMode ? "bg-[#012244]" : "bg-white"
                }`}
              >
                <h3 className="text-lg font-bold">Goal {index + 1}</h3>
                <p>Type: {goal.type}</p>
                <p>Target: {goal.target}</p>
                <p>Uploads: {goal.uploads}</p>
                <p>Time Limit: {goal.timeLimit} days</p>
                <p>
                  Achieved: {goal.achieved} / {goal.uploads}
                </p>
                <div className="mt-2">
                  <div
                    className={`h-2 rounded-full ${
                      darkMode ? "bg-gray-600" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`h-full rounded-full ${
                        darkMode ? "bg-[#25A906]" : "bg-[#1C8B05]"
                      }`}
                      style={{
                        width: `${(goal.achieved / goal.uploads) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <button
                  onClick={() => handleUpdateProgress(index)}
                  className="mt-2 py-1 px-4 rounded bg-[#25A906] text-white hover:bg-[#1C8B05]"
                >
                  Update Progress
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-sm">No goals saved yet. Start by adding one!</p>
        )}
      </div>
    </div>
  );
};

export default Goals;
