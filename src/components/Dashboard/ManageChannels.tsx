import React, { useState } from "react";

interface Channel {
    id: number;
    name: string;
    isPro: boolean;
    image: string;
}
interface ManageChannelsProps {
    darkMode: boolean;
}

const ManageChannels: React.FC<ManageChannelsProps> = ({ }) => {
    const [channels, setChannels] = useState<Channel[]>([
        { id: 1, image: "/img/crss.png", name: "Tech Talk", isPro: true },
        { id: 2, image: "/img/crss.png", name: "Daily Vlogs", isPro: false },
        { id: 3, image: "/img/crss.png", name: "Gaming Zone", isPro: true },
        { id: 4, image: "/img/crss.png", name: "Food Reviews", isPro: false },
    ]);

    const toggleProStatus = (channelId: number) => {
        // Update the isPro status of the clicked channel
        setChannels(channels.map(channel =>
            channel.id === channelId
                ? { ...channel, isPro: !channel.isPro }
                : channel
        ));
    };

    return (
        <div className="container p-4 lg:mr-[320px] m-2">
            <h2 className="text-xl font-bold mb-4">Manage Your Channels</h2>

            {/* Pro Channels */}
            <div className="my-4 px-6">
                <h3 className="font-medium text-lg mb-2">Pro Channels</h3>
                {channels.filter(channel => channel.isPro).length === 0 ? (
                    <p>No pro channels yet. Select a non-pro channel to promote.</p>
                ) : (
                    <ul>
                        {channels.filter(channel => channel.isPro).map(channel => (
                            <li key={channel.id} className="flex justify-between items-center mb-3">
                                <div className="flex gap-2">
                                    <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#00ff12]">
                                        <img src={channel.image} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-blue-500">{channel.name}</span>
                                        <span className="text-slate-500 text-xs">@handle here</span>
                                    </div>
                                </div>
                                <button
                                    className="text-red-500"
                                    onClick={() => toggleProStatus(channel.id)}
                                >
                                    Remove from Pro
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Non-Pro Channels */}
            <div className="my-4 px-6">
                <h3 className="font-medium text-lg mb-2">Non-Pro Channels</h3>
                {channels.filter(channel => !channel.isPro).length === 0 ? (
                    <p className="text-slate-600">All your channels are pro. You can remove pro status from any of them.</p>
                ) : (
                    <ul>
                        {channels.filter(channel => !channel.isPro).map(channel => (
                            <li key={channel.id} className="flex justify-between items-center mb-3">
                                <div className="flex gap-2">
                                    <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#00ff12]">
                                        <img src={channel.image} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-blue-500">{channel.name}</span>
                                        <span className="text-slate-500 text-xs">@handle here</span>
                                    </div>
                                </div>
                                <button
                                    className="text-green-500"
                                    onClick={() => toggleProStatus(channel.id)}
                                >
                                    Promote to Pro
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ManageChannels;
