import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import getThemeClasses from "../Shared/UiTheme";

interface NotificationsProps {
  darkMode: boolean;
}

const Notifications: React.FC<NotificationsProps> = ({ darkMode }) => {
  const notifications = [
    { id: 1, title: "Welcome", message: "Lorem ipsum dolor sit amet consectetur, et Adipiscing vel consequat ut sit molestie nd tincidunt risus faucibus. Pulvinar risus risus...", time: "Just Now", starred: false },
    { id: 2, title: "Update", message: "Your profile has been successfully updated. Thank you for keeping your information up to date.", time: "1 day ago", starred: true },
    { id: 3, title: "Alert", message: "New security updates are available. Please review the changes to keep your account safe.", time: "2 days ago", starred: false },
    { id: 4, title: "Reminder", message: "Don't forget to check out the latest features in our app!", time: "3 days ago", starred: false },
    { id: 5, title: "Thanks", message: "Thank you for your feedback! We're always looking to improve.", time: "5 days ago", starred: true },
  ];
  const uiTheme = getThemeClasses(darkMode);

  return (
    <div className={`min-h-screen justify-center lg:mr-[320px] m-2 flex-1 ${darkMode ? "bg-[#0A1739] text-white " : "bg-[#F8F9FE] text-black"}`}>
      <div className="container mx-auto md:px-4 py-4">
        <div className={`rounded-lg ${darkMode ? uiTheme.darkUI : uiTheme.lightUI} `}>
          {/* Header Section */}
          <div className="flex items-center gap-2 p-4 border-b">
            <NotificationsIcon />
            <h1 className={`text-lg font-semibold ${uiTheme.container}` }>Notifications</h1>
          </div>

          {/* Search and Actions Section */}
          <div className="p-4 flex flex-col sm:flex-row justify-between items-center">
            {/* Notifications Count and Filter Options */}
            <div className="flex items-center gap-6">
              <span className="font-medium">188 Notifications</span>
              <div className="flex gap-4">
                <button className="text-blue-600 flex items-center">
                  All <span className="ml-1 bg-blue-600 text-white text-xs px-2 rounded-full">8</span>
                </button>
                <button className="text-gray-500">Archive</button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative mt-4 sm:mt-0 w-full sm:w-[300px]">
              <input
                type="text"
                placeholder="Search"
                className={`pl-10 pr-4 py-2 rounded-lg border w-full ${darkMode ? "bg-[#081028] text-white border-[#0D2B56]" : "bg-gray-50 text-black border-gray-300"}`}
              />
              <SearchIcon className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>

          {/* Notification List Section */}
          <div className="p-4 space-y-4">
            {notifications.map(({ id, title, message, time, starred }) => (
              <div
                key={id}
                className={`flex items-start gap-4 p-4 border-b last:border-b-0 ${darkMode ? "hover:bg-[#0D2B56]" : "hover:bg-gray-50"} transition-all duration-200 ease-in-out`}
              >
                {/* Checkbox for selecting notifications */}
                <input type="checkbox" className="mt-1.5" />

                {/* Star icon for marking notifications */}
                {starred ? (
                  <StarIcon className="text-yellow-400 cursor-pointer" />
                ) : (
                  <StarBorderIcon className="text-gray-400 cursor-pointer" />
                )}

                {/* Notification details */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="text-sm truncate">{message}</p>
                  <p className="text-xs text-gray-500">{time}</p>
                </div>

                {/* Delete icon */}
                <DeleteOutlineIcon className="cursor-pointer text-gray-500" />
              </div>
            ))}
          </div>

          {/* Pagination Section */}
          <div className="flex justify-between p-4">
            <button className="flex items-center gap-2 text-gray-600">
              <NavigateBeforeIcon /> Prev
            </button>
            <button className="flex items-center gap-2 text-gray-600">
              Next <NavigateNextIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
