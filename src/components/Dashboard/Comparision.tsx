import BarChart from "./BarChart";


interface ComparisionProps {
  darkMode: boolean
  isExpanded: boolean
  toggleSidebar: () => void
  toggleDarkMode: () => void
}

const Comparision: React.FC<ComparisionProps> = ({ darkMode, isExpanded }) => {
  const data = [
    { label: "Subscribers", green: "413,000", red: "24,600", style: { width: 132, height: 32 } },
    { label: "Views", green: "40,290,217", red: "100,002,080", style: { width: 132, height: 32 } },
    { label: "Videos", green: "20", red: "23", style: { width: 132, height: 32 } },
    { label: "Created", green: "2017-07-26", red: "2017-07-26", style: { width: 132, height: 32 } },
  ]
  

  const barChartData = [
    {
      id: 1,
      data: [
        { green: 20, blue: 40 },
        { green: 30, blue: 70 },
        { green: 80, blue: 20 },
        { green: 45, blue: 55 },
        { green: 65, blue: 35 },
      ],
    },
    {
      id: 2,
      data: [
        { green: 70, blue: 30 },
        { green: 40, blue: 60 },
        { green: 55, blue: 45 },
        { green: 75, blue: 25 },
        { green: 35, blue: 65 },
      ],
    },
    {
      id: 3,
      data: [
        { green: 50, blue: 50 },
        { green: 65, blue: 35 },
        { green: 45, blue: 55 },
        { green: 80, blue: 20 },
        { green: 60, blue: 40 },
      ],
    },
  ]

  const channelRecommendations = Array(8).fill(
    "Channel dfousdftsdpjgoeghmsgskingmsgdjeuthmhgbgsjgpmsgddkingodkfgdsb"
  )

  return (
    <div
      className={`${
        darkMode ? "bg-transparent text-white" : "bg-white text-black"
      } lg:mr-[320px] m-2 flex flex-col flex-1 justify-center items-center min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
    >
      <h1 className="mt-8 text-md font-semibold text-center">CHANNEL COMPARISON</h1>
      <div className="flex flex-col justify-center items-center w-full">
        {/* Profile Comparison Section */}
        <div className="flex flex-row gap-16 lg:gap-32 w-full justify-center items-center my-8">

          {/* First Profile */}
          <div className="flex justify-center flex-col items-center py-1 px-4 md:px-6 mb-4 md:mb-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 border-[#00ff12]">
              <img
                src="/img/crss.png"
                alt="Chris Eazy Profile Picture"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center mt-2">
              <h1 className="text-sm sm:text-base">Chriss Eazy</h1>
              <h4 className="text-slate-500 text-xs sm:text-sm">@chrisseazy</h4>
              <h5 className="text-xs sm:text-sm">US</h5>
            </div>
          </div>

          {/* Comparison Indicators */}
          <div className="flex items-center gap-4 md:gap-8 mb-4 md:mb-0">
            
            <span className="text-sm font-bold text-green-600">50%</span>
            <div className="text-xl sm:text-2xl font-bold">
              <span className="vs-text">V</span>
              <span className="vs-text-s">S</span>
            </div>
            <span className="text-sm font-semibold text-red-500">23%</span>
          </div>

          {/* Second Profile */}
          <div className="flex justify-center flex-col items-center py-1 px-4 md:px-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 border-[#00ff12]">
              <img 
                src="/img/155.png" 
                alt="1:55 AM Media Profile Picture"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center mt-2 md:text-sm">
              <h1 className="text-sm sm:w-full">1:55 AM Media</h1>
              <h4 className="text-slate-500 text-xs sm:text-sm">@1:55ammedia</h4>
              <h5 className="text-xs sm:text-sm">UK</h5>
            </div>
          </div>
        </div>

        {/* Comparison Details */}
        <div className="flex flex-wrap justify-between gap-4 mt-8 w-full">
  {data.map(({ label, green, red }, idx) => (
    <div
      key={idx}
      className="flex flex-col items-center bg-[#0A1739] p-3 rounded-lg text-white text-center space-y-2 flex-1 max-w-[18%]"
    >
      <span className="text-green-500 text-sm font-bold">{green}</span>
      <div className="w-full h-[2px] bg-[#012244]"></div>
      <span className="text-xs font-medium">{label.toUpperCase()}</span>
      <div className="w-full h-[2px] bg-[#012244]"></div>
      <span className="text-red-500 text-sm font-bold">{red}</span>
    </div>
  ))}
</div>




        {/* Bar Charts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full place-items-center">
  {barChartData.map((chart) => (
    <div
      key={chart.id}
      className="bg-[#0A1739] p-3 sm:p-4 rounded-lg w-full max-w-xs flex justify-center items-center"
    >
      <BarChart data={chart.data} width={250} height={150} />
    </div>
  ))}
</div>

       

        {/* AI Coach Recommendations */}
        <div className="mt-8 w-full">
          <h2 className="text-lg font-semibold mb-4 text-center sm:text-center">
            AI COACH RECOMMENDATIONS
          </h2>
          <div className="flex flex-col gap-2">
            {channelRecommendations.map((channel, index) => (
              <div
                key={index}
                className="bg-[#0A1739] p-3 sm:p-4 rounded-lg text-xs sm:text-sm text-gray-300 break-words"
              >
                {channel}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8 p-3 text-sm sm:text-sm ">
          <button className="bg-[#4DBD07] text-sm sm:p-2 rounded-sm text-white">TALK WITH COACH</button>
        </div>
      </div>
    </div>
  )
}

export default Comparision

