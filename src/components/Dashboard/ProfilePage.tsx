import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCreditCard, faClock } from '@fortawesome/free-solid-svg-icons';
import getThemeClasses from "../Shared/UiTheme";

interface ProfileProps {
    darkMode: boolean;
}

const ProfilePage: React.FC<ProfileProps> = ({ darkMode }) => {
    const [activeTab, setActiveTab] = useState<string>("details");  // New state for active tab
    const uiTheme = getThemeClasses(darkMode);

    return (
        <div
            className={`flex flex-1 flex-col justify-center px-4 lg:mr-[320px] m-2 ${darkMode ? "bg-transparent text-white" : "bg-gray-50 text-black"
                }`}
        >
            {/* Header Section */}
            <div className={`${darkMode ? 'bg-[#0A1739]' : 'bg-white'} rounded-lg shadow-md p-6 relative`}>
                <div className="flex items-center gap-6">
                    {/* Profile Picture */}
                    <img
                        src="https://via.placeholder.com/100"
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover"
                    />
                    {/* User Info */}
                    <div>
                        <h2 className="text-2xl font-bold">NTN Media</h2>
                        <p className="text-sm text-gray-500">@nathanmedia</p>
                        <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            Pro
                        </span>
                    </div>
                </div>
                <FontAwesomeIcon
                    icon={faPen}
                    className={`absolute right-4 top-4 ${darkMode ? 'text-white' : 'text-slate-500'
                        } hover:border hover:bg-slate-300 hover:rounded-full hover:text-black p-2 cursor-pointer`}
                />
            </div>

            {/* Tabs Section */}
            <div className={`${darkMode ? 'bg-[#0A1739]' : 'bg-white'} mt-6 rounded-lg shadow-md p-4 flex gap-4`}>
                <button
                    className={`${darkMode ? 'text-slate-300' : 'text-gray-700'} hover:text-blue-600 focus:text-blue-600 font-medium`}
                    onClick={() => setActiveTab("details")}
                >
                    Details
                </button>
                <button
                    className={`${darkMode ? 'text-slate-300' : 'text-gray-700'} hover:text-blue-600 focus:text-blue-600 font-medium`}
                    onClick={() => setActiveTab("payment")}
                >
                    Payment
                </button>
                <button
                    className={`${darkMode ? 'text-slate-300' : 'text-gray-700'} hover:text-blue-600 focus:text-blue-600 font-medium`}
                    onClick={() => setActiveTab("profile")}
                >
                    Profile
                </button>
            </div>

            {/* Conditional Rendering of Active Section */}
            {activeTab === "details" && (
                <div className={`${darkMode ? 'bg-[#0A1739]' : 'bg-white'} mt-6 rounded-lg shadow-md p-6`}>
                    <h3 className="text-xl font-bold">Account Details</h3>
                    <p className="text-sm text-gray-500 mb-4">Manage your personal information and settings.</p>

                    {/* Full Name */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500">Full Name</span>
                        <span className="text-sm font-bold">NTN Media</span>
                    </div>

                    {/* Email */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500">Email Address</span>
                        <span className="text-sm font-bold">nathanmedia@example.com</span>
                    </div>

                    {/* Phone Number */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500">Phone Number</span>
                        <span className="text-sm font-bold">+123 456 7890</span>
                    </div>

                    {/* Account Type */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500">Account Type</span>
                        <span className="text-sm font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full">Pro</span>
                    </div>

                    {/* Profile Picture */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500">Profile Picture</span>
                        <img src="https://via.placeholder.com/100" alt="Profile" className="w-10 h-10 rounded-full" />
                    </div>

                    {/* Subscription Info */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500">Subscription Plan</span>
                        <span className="text-sm font-bold">Basic</span>
                    </div>

                    {/* Plan Expiry */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500">Plan Expiry</span>
                        <span className="text-sm font-bold">12/31/2024</span>
                    </div>

                    {/* Last Login */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500">Last Login</span>
                        <span className="text-sm font-bold">12/30/2024</span>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500">Social Media</span>
                        <div className="flex gap-4">
                            <a href="https://twitter.com/nathanmedia" className="text-blue-500">Twitter</a>
                            <a href="https://instagram.com/nathanmedia" className="text-pink-500">Instagram</a>
                        </div>
                    </div>

                    {/* Security & Preferences */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500">Two-Factor Authentication</span>
                        <span className="text-sm font-bold">Enabled</span>
                    </div>
                </div>
            )}


            {activeTab === "payment" && (
                <div className={`${darkMode ? 'bg-[#0A1739]' : 'bg-white'} mt-6 rounded-lg shadow-md p-6`}>
                    <h3 className="text-xl font-bold">Payment</h3>
                    <p className="text-sm text-gray-500 mb-4">
                        Manage your payment methods, subscription status, and history.
                    </p>

                    {/* Payment Method */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faCreditCard} className="text-blue-500 text-xl" />
                            <span className="text-sm">Visa **** 1234</span>
                        </div>
                        <button className="text-blue-500 text-sm font-medium hover:underline">
                            Edit
                        </button>
                    </div>

                    {/* Subscription Info */}
                    <div className="mb-4">
                        <h4 className="text-lg font-bold">Subscription Status</h4>
                        <div className="flex items-center gap-4 mt-2">
                            <span
                                className={`text-sm px-2 py-1 rounded-full ${darkMode ? 'bg-green-700 text-green-100' : 'bg-green-100 text-green-700'
                                    }`}
                            >
                                Active
                            </span>
                            <FontAwesomeIcon icon={faClock} className="text-gray-500" />
                            <span className="text-sm text-gray-500">15 days remaining</span>
                        </div>
                    </div>

                    {/* Payment History */}
                    <div>
                        <h4 className="text-lg font-bold">Payment History</h4>
                        <ul className="mt-4 space-y-2">
                            <li className="flex justify-between text-sm">
                                <span>12/01/2024</span>
                                <span>$25.00</span>
                                <span>Visa</span>
                            </li>
                            <li className="flex justify-between text-sm">
                                <span>11/01/2024</span>
                                <span>$25.00</span>
                                <span>Visa</span>
                            </li>
                            <li className="flex justify-between text-sm">
                                <span>10/01/2024</span>
                                <span>$25.00</span>
                                <span>Visa</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {activeTab === "profile" && (
                <div className={`${darkMode ? 'bg-[#0A1739] ' : 'bg-white'} mt-6 rounded-lg shadow-md p-6`}>
                    <h3 className="text-xl font-bold">Password</h3>
                    <p className="text-sm text-gray-500 mb-4">
                        Here you can change the password to your account.
                    </p>
                    <form className="space-y-4">
                        {/* Current Password */}
                        <div>
                            <label
                                htmlFor="current-password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Current Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    type="password"
                                    id="current-password"
                                    className="w-full bg-transparent px-2 text-sm py-2 border-gray-700 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500 border vorder-slate-300 focus:outline-none"
                                    placeholder="Current password here..."
                                />
                                <i className="absolute right-3 top-3 text-gray-400 fa fa-lock"></i>
                            </div>
                        </div>
                        {/* New Password */}
                        <div>
                            <label
                                htmlFor="new-password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                New Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    type="password"
                                    id="new-password"
                                    className="w-full bg-transparent px-2 text-sm  py-2 border-gray-700 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500 border vorder-slate-300 focus:outline-none"
                                    placeholder="New password here..."
                                />
                                <i className="absolute right-3 top-3 text-gray-400 fa fa-lock"></i>
                            </div>
                            <p className="text-sm text-gray-500">
                                Password must be more than 10 chars long.
                            </p>
                        </div>
                        {/* Confirm New Password */}
                        <div>
                            <label
                                htmlFor="confirm-password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Confirm New Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    type="password"
                                    id="confirm-password"
                                    className="w-full bg-transparent px-2 text-sm  py-2 border-gray-700 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500 border vorder-slate-300 focus:outline-none"
                                    placeholder="Comfirm password here..."
                                />
                                <i className="absolute right-3 top-3 text-gray-400 fa fa-lock"></i>
                            </div>
                        </div>
                        {/* Buttons */}
                        <div className="flex justify-end gap-4">
                            <button
                                type="button"
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 text-sm py-2 rounded bg-[#25A906] text-white transition-colors hover:bg-[#D6ED07]"
                            >
                                Update Password
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
