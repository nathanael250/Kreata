import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import getThemeClasses from '../Shared/UiTheme'

interface ReferenceChannelsProps {
    proChannel: string | null;
    darkMode: boolean;
}

const ReferenceChannels: React.FC<ReferenceChannelsProps> = ({
    proChannel,
    darkMode,
}) => {
    const [savedProChannel, setSavedProChannel] = useState<string | null>(null);


    const referenceChannels = [
        {
            channelId: "7",
            title: "IGA TechRw",
            handle: "@igatechrw",
            profile: "/img/image.png"
        },
        {
            channelId: "8",
            title: "Decent T&C",
            handle: "@decenttechandcons",
            profile: "/img/image.png"
        },
        {
            channelId: "9",
            title: "Alpha Samu",
            handle: "@alphasamu",
            profile: "/img/image.png"
        },
        {
            channelId: "10",
            title: "SHINE WITH GIRA",
            handle: "@shinewithgira",
            profile: "/img/image.png"
        },
        {
            channelId: "11",
            title: "AS ONE MEDIA",
            handle: "@asonemedia1",
            profile: "/img/image.png"
        },
        {
            channelId: "12",
            title: "INYAMASWA TV",
            handle: "@inyamaswatv9974",
            profile: "/img/image.png"
        },
        {
            channelId: "13",
            title: "IRASU MEDIA",
            handle: "@irasumed",
            profile: "/img/image.png"
        },
        {
            channelId: "4",
            title: "One way safaris",
            handle: "@onewaysafaris",
            profile: "/img/image.png"
        },
        {
            channelId: "5",
            title: "Cyrille Math Galaxy",
            handle: "@cyrillentawiyoberwa6424",
            profile: "/img/image.png"
        },
        {
            channelId: "6",
            title: "SPORTS LAND TV",
            handle: "@sportslandtv0",
            profile: "/img/image.png"
        },
        {
            channelId: "7",
            title: "IGA TechRw",
            handle: "@igatechrw",
            profile: "/img/image.png"
        },
        {
            channelId: "8",
            title: "Decent T&C",
            handle: "@decenttechandcons",
            profile: "/img/image.png"
        },
        {
            channelId: "9",
            title: "Alpha Samu",
            handle: "@alphasamu",
            profile: "/img/image.png"
        },
        {
            channelId: "10",
            title: "SHINE WITH GIRA",
            handle: "@shinewithgira",
            profile: "/img/image.png"
        },
        {
            channelId: "11",
            title: "AS ONE MEDIA",
            handle: "@asonemedia1",
            profile: "/img/image.png"
        },
        {
            channelId: "12",
            title: "INYAMASWA TV",
            handle: "@inyamaswatv9974",
            profile: "/img/image.png"
        },
        {
            channelId: "13",
            title: "IRASU MEDIA",
            handle: "@irasumedia",
            profile: "/img/image.png"
        },
        {
            channelId: "14",
            title: "Mr ML tv",
            handle: "@mrmltv1",
            profile: "/img/image.png"
        },
        {
            channelId: "15",
            title: "Afrishayne TV",
            handle: "@shingiro-eli",
            profile: "/img/image.png"
        },
        {
            channelId: "16",
            title: "Trust Therapies",
            handle: "@trusttherapies-fplyd",
            profile: "/img/image.png"
        },
        {
            channelId: "17",
            title: "Element Official",
            handle: "@elementeleeeh-e",
            profile: "/img/image.png"
        },
        {
            channelId: "18",
            title: "OZEY KING TV",
            handle: "@ozeyking_tv",
            profile: "/img/image.png"
        },
        {
            channelId: "19",
            title: "CINEMA ZACU",
            handle: "@cinemazacu",
            profile: "/img/image.png"
        }


    ];

    const uiTheme = getThemeClasses(darkMode);

    useEffect(() => {
        if (!proChannel) {
            const savedChannel = localStorage.getItem("proChannel");
            if (savedChannel) {
                setSavedProChannel(savedChannel);
            }
        }
    }, [proChannel]);

    const proChannelToUse = proChannel || savedProChannel;


    const sortChannels = [...referenceChannels].sort((first, second) => {
        if (first.title === proChannelToUse) return -1;
        if (second.title === proChannelToUse) return 1;
        return 0;
    });
    

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/Dashboard/comparision'); 

    };
    return (
        <div className='w-full flex flex-col flex-1 flex-grow gap-10 mr-0 justify-center items-center lg:mr-[320px] m-2 rounded ' >

            <h1 className="text-2xl font-bold mb-4">Channels</h1>
            <div className=' grid grid-cols-2 lg:grid-cols-4 w-full justify-between gap-2 p-4'>
                {sortChannels.map((channel, index) => (
                    <motion.div
                        onClick={handleClick}
                        key={index}
                        className={`relative ${darkMode ? uiTheme.darkUI : uiTheme.lightUI} cursor-pointer rounded-lg flex flex-col items-center justify-center text-center  transition w-full h-full ${proChannelToUse === channel.title ? 'pro-channel' : ''
                            }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: 2 }}
                    >
                        <div className="relative">
                            <img src={channel.profile} alt={channel.profile} className="w-full h-auto rounded-full mb-3 max-w-[40px]" />
                            {proChannelToUse === channel.title && (
                                <span className="absolute bottom-0 right-0 font-semibold bg-[#25A906] text-[#012244] rounded-sm text-xs w-7 h-5 flex items-center justify-center">
                                    PRO
                                </span>
                            )}
                        </div>
                        <h3 className="font-medium">{channel.title}</h3>
                        <p className="text-sm text-slate-400">{channel.handle}</p>
                    </motion.div>
                ))}
            </div>


        </div>

    );
};

export default ReferenceChannels;




