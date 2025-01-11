import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      profile: "https://example.com/images/igatechrw.png"
    },
    {
      channelId: "8",
      title: "Decent T&C",
      handle: "@decenttechandcons",
      profile: "https://example.com/images/decent.png"
    },
    {
      channelId: "9",
      title: "Alpha Samu",
      handle: "@alphasamu",
      profile: "https://example.com/images/alpha.png"
    },
    {
      channelId: "10",
      title: "SHINE WITH GIRA",
      handle: "@shinewithgira",
      profile: "https://example.com/images/shinewithgira.png"
    },
    {
      channelId: "11",
      title: "AS ONE MEDIA",
      handle: "@asonemedia1",
      profile: "https://example.com/images/asonemedia.png"
    },
    {
      channelId: "12",
      title: "INYAMASWA TV",
      handle: "@inyamaswatv9974",
      profile: "https://example.com/images/inyamaswatv.png"
    },
    {
      channelId: "13",
      title: "IRASU MEDIA",
      handle: "@irasumed",
      profile: "https://example.com/image",
    },
    {
      channelId: "4",
      title: "One way safaris",
      handle: "@onewaysafaris",
      profile: "https://example.com/images/onewaysafaris.png"
    },
    {
      channelId: "5",
      title: "Cyrille Math Galaxy",
      handle: "@cyrillentawiyoberwa6424",
      profile: "https://example.com/images/cyrille.png"
    },
    {
      channelId: "6",
      title: "SPORTS LAND TV",
      handle: "@sportslandtv0",
      profile: "https://example.com/images/sportslandtv.png"
    },
    {
      channelId: "7",
      title: "IGA TechRw",
      handle: "@igatechrw",
      profile: "https://example.com/images/igatechrw.png"
    },
    {
      channelId: "8",
      title: "Decent T&C",
      handle: "@decenttechandcons",
      profile: "https://example.com/images/decent.png"
    },
    {
      channelId: "9",
      title: "Alpha Samu",
      handle: "@alphasamu",
      profile: "https://example.com/images/alpha.png"
    },
    {
      channelId: "10",
      title: "SHINE WITH GIRA",
      handle: "@shinewithgira",
      profile: "https://example.com/images/shinewithgira.png"
    },
    {
      channelId: "11",
      title: "AS ONE MEDIA",
      handle: "@asonemedia1",
      profile: "https://example.com/images/asonemedia.png"
    },
    {
      channelId: "12",
      title: "INYAMASWA TV",
      handle: "@inyamaswatv9974",
      profile: "https://example.com/images/inyamaswatv.png"
    },
    {
      channelId: "13",
      title: "IRASU MEDIA",
      handle: "@irasumedia",
      profile: "https://example.com/images/irasu.png"
    },
    {
      channelId: "14",
      title: "Mr ML tv",
      handle: "@mrmltv1",
      profile: "https://example.com/images/mrmltv.png"
    },
    {
      channelId: "15",
      title: "Afrishayne TV",
      handle: "@shingiro-eli",
      profile: "https://example.com/images/afrishayne.png"
    },
    {
      channelId: "16",
      title: "Trust Therapies",
      handle: "@trusttherapies-fplyd",
      profile: "https://example.com/images/trusttherapies.png"
    },
    {
      channelId: "17",
      title: "Element Official",
      handle: "@elementeleeeh-e",
      profile: "https://example.com/images/elementofficial.png"
    },
    {
      channelId: "18",
      title: "OZEY KING TV",
      handle: "@ozeyking_tv",
      profile: "https://example.com/images/ozeykingtv.png"
    },
    {
      channelId: "19",
      title: "CINEMA ZACU",
      handle: "@cinemazacu",
      profile: "https://example.com/images/cinemazacu.png"
    }
  
  
  ];

 
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

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-[#0B1838] text-white " : "bg-white text-black"
      } p-12`}
    >
      <h1 className="text-xl font-bold mb-4">Channels</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mr-36 gap-4">
        {sortChannels.map((channel, index) => (
          <motion.div
            key={channel.channelId} 
            className={`relative ${
              darkMode ? "bg-[#012244]" : "bg-[#f5f5f5]"
            } rounded-lg flex flex-col items-center text-center w-72 transition ${
              proChannelToUse === channel.title ? "pro-channel" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            <div className="relative">
              <img
                src={channel.profile}
                alt={channel.title}
                className="w-10 h-10 rounded-full mb-3"
              />
              {proChannelToUse === channel.title && (
                <span className="absolute bottom-0 right-0 font-semibold bg-[#25A906] text-[#012244] rounded-sm text-xs w-7 h-5 flex items-center justify-center">
                  PRO
                </span>
              )}
            </div>
            <h3 className="font-medium">{channel.title}</h3>
            <p className={`text-sm  ${
              darkMode ? "text-white": "text-black"}`}>{channel.handle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReferenceChannels;




