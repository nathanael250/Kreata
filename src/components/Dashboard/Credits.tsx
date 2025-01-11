import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBriefcase, faStar } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import getThemeClasses from '../Shared/UiTheme';

interface CreditsProps {
    darkMode: boolean;
}

const cards = [
    { 'title': 'Pro Channel', icon: <FontAwesomeIcon icon={faPlus} />, 'value': '1/5', 'color': 'text-[#3691ff]' },
    { 'title': 'Plan', icon: <FontAwesomeIcon icon={faBriefcase} />, 'value': 'FREE', 'color': 'text-[#8f00d1]' },
    { 'title': 'Credits', icon: <FontAwesomeIcon icon={faStar} />, 'value': '2865 left', 'color': 'text-[#af4700]' },
    { 'title': 'Goal(Subscribers)', icon: <FontAwesomeIcon icon={faStar} />, 'value': 'progress bar here', 'color': 'text-[#3d3d3d]' },
];

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
        channelId: "11",
        title: "AS ONE MEDIA",
        handle: "@asonemedia1",
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

const Credits: React.FC<CreditsProps> = ({ darkMode }) => {
 

        const uiTheme = getThemeClasses(darkMode);

    return (
        <div
            className={`flex flex-1 flex-col min-h-screen px-4 lg:mr-[320px] m-2 ${darkMode ? uiTheme.darkUiLight : uiTheme.lightUILight}`}
        >
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                {cards.map((card, index) => (
                    <div key={index} className={`py-4 col-span-1 ${darkMode ? uiTheme.darkUI : uiTheme.lightUI} shadow-md rounded-lg flex items-center px-4 space-x-10`}>
                    
                        <div className={`${card.color} text-2xl`}>{card.icon}</div>
        
                        <div className='text-center'><h3 className={`font-semibold text-md ${darkMode ?  uiTheme.darkUI : uiTheme.lightUI}}`}>{card.title}</h3>

                            <p className={`${darkMode ? uiTheme.accentColor : uiTheme.lightUI}`}>{card.value}</p>
                        </div>
                    </div>
                ))}
            </div>

           
            <div className='flex flex-col md:flex-row gap-2 justify-between py-8'>
                <button className={`rounded-full px-8 py-1 ${darkMode ? uiTheme.darkActiveButton : uiTheme.lightActiveButton}`}>Channels</button>
                <button className={`rounded-full ${darkMode ? uiTheme.darkUI : uiTheme.lightUI} px-8 py-1` }>Compare</button>
                <input type="text" placeholder='Search...' className={` rounded-full bg-transparent px-4 border ${darkMode ? uiTheme.container : uiTheme.container}`} />
            </div>

         
            <div className='grid grid-cols-2 lg:grid-cols-4 w-full justify-between gap-2 p-4'>
                {referenceChannels.map((channel, index) => (
                    <motion.div
                        key={index}
                        className={`relative ${darkMode ? uiTheme.darkUI : uiTheme.lightUI}  cursor-pointer rounded-lg flex flex-col items-center justify-center text-center  transition w-full h-full`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: 2 }}
                    >
                        <div className="relative">
                            <img src={channel.profile} alt={channel.profile} className="w-full h-auto rounded-full mb-3 max-w-[40px]" />
                        </div>
                        <h3 className="font-medium">{channel.title}</h3>
                        <p className="text-sm text-slate-400">{channel.handle}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Credits;
