import React from 'react'
interface profileProps{
    darkMode:boolean
}
const ProfileSection:React.FC<profileProps> = (darkMode) => {
    return (
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
                            className="w-full bg-transparent px-2 text-sm  py-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border vorder-slate-300 focus:outline-none"
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
                            className="w-full bg-transparent px-2 text-sm  py-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border vorder-slate-300 focus:outline-none"
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
                            className="w-full bg-transparent px-2 text-sm  py-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border vorder-slate-300 focus:outline-none"
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
    )
}

export default ProfileSection
