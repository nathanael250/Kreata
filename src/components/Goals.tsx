import React, { useState, useEffect } from "react";

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
    const targetNum = Number(targetNumber);
    const uploadNum = Number(uploads);
    const timeLimitDate = new Date(timeLimit);
    const currentDate = new Date();
    const timeLimitNum = Math.floor((timeLimitDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)); 

    if (targetNum > 0 && uploadNum > 0 && timeLimitNum > 0) {
      const newGoal = {
        type: goalType,
        target: targetNum,
        uploads: uploadNum,
        timeLimit: timeLimitNum,
        achieved: 0,
      };
      setSavedGoals((prevGoals) => {
        const updatedGoals = [...prevGoals, newGoal];
        return updatedGoals;
      });

      setTargetNumber("");
      setUploads("");
      setTimeLimit("");
    } else {
      alert("Please enter valid target, upload numbers, and a time limit.");
    }
  };

  const handleUpdateProgress = (index: number) => {
    const newGoals = [...savedGoals];
    const newAchieved = newGoals[index].achieved + 1;
    if (newAchieved <= newGoals[index].uploads) {
      newGoals[index].achieved = newAchieved;
      setSavedGoals(newGoals);
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen px-4 ${darkMode ? "bg-[#0A1739] text-white" : "bg-gray-50 text-black"}`}
    >
      <header className="w-full max-w-4xl mb-6 mt-24">
        <h1 className="text-xl font-bold">Set Your Goal</h1>
        <p className="text-sm mt-1">
          Choose a goal type, define your target, plan uploads, and set a time limit to achieve it!
        </p>
      </header>

      <div className={`max-w-md p-8 w-8/12 rounded-lg shadow-lg ${darkMode ? "bg-[#012244]" : "bg-white"}`}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">What's Goal?</label>
          <select
            value={goalType}
            onChange={(e) => setGoalType(e.target.value)}
            className={`w-full p-2 rounded border ${darkMode ? "bg-[#081028] text-white" : "bg-gray-100 text-black"}`}
          >
            <option value="subscribers">Subscribers</option>
            <option value="views">Views</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Target Number</label>
          <input
            type="number"
            value={targetNumber}
            onChange={(e) => setTargetNumber(e.target.value)}
            className={`w-full p-2 rounded border ${darkMode ? "bg-[#081028] text-white" : "bg-gray-100 text-black"}`}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Number of Uploads</label>
          <input
            type="number"
            value={uploads}
            onChange={(e) => setUploads(e.target.value)}
            className={`w-full p-2 rounded border ${darkMode ? "bg-[#081028] text-white" : "bg-gray-100 text-black"}`}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Time Limit (in days)</label>
          <input
            type="date"
            value={timeLimit}
            onChange={(e) => setTimeLimit(e.target.value)}
            className={`w-full p-2 rounded border ${darkMode ? "bg-[#081028] text-white" : "bg-gray-100 text-black"}`}
          />
        </div>

        <button
          onClick={handleSaveGoal}
          className={`w-full py-2 rounded ${darkMode ? "bg-[#25A906] text-white hover:bg-[#1C8B05]" : "bg-gradient-to-r from-[#D6ED07] to-[#25A906] text-white hover:from-[#C0DA05] hover:to-[#1C8B05]"}`}
        >
          Save Goal
        </button>
      </div>

      <div className="w-full max-w-4xl mt-8">
        <h2 className="text-lg font-bold text-center mb-4">Saved Goals</h2>
        {savedGoals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {savedGoals.map((goal, index) => (
              <div key={index} className={`p-4 rounded-lg shadow-lg ${darkMode ? "bg-[#012244]" : "bg-white"}`}>
                <h3 className="text-lg font-bold">Goal {index + 1}</h3>
                <p>Type: {goal.type}</p>
                <p>Target: {goal.target}</p>
                <p>Uploads: {goal.uploads}</p>
                <p>Time Limit: {goal.timeLimit} days</p>
                <p>Achieved: {goal.achieved} / {goal.uploads}</p>
                <div className="mt-2">
                  <div className={`h-2 rounded-full ${darkMode ? "bg-gray-600" : "bg-gray-300"}`}>
                    <div
                      className={`h-full rounded-full ${darkMode ? "bg-[#25A906]" : "bg-[#1C8B05]"}`}
                      style={{
                        width: `${(goal.achieved / goal.uploads) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
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
