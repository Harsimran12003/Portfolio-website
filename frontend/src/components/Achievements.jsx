const achievements = [
  {
    title: "ISTE Best Student Award 2025",
    place: "GNA University",
    date: "October 2025",
    image: "/images/iste1.jpeg",
  },
  {
    title: "ISTE Best Student Award 2024",
    place: "Chitkara University",
    date: "October 2024",
    image: "/images/iste2.jpeg",
  },
  {
    title: "Inter College Web Developement - 2nd Prize",
    place: "KIMT, Ludhiana",
    date: "February 2024",
    image: "/images/kimt.jpeg",
  },
  {
    title: "Won Prizes in Koshish Fest 2024 & 2025",
    place: "PCTE Ludhiana",
    date: "October 2024, October 2025",
    image: "/images/koshish.jpeg",
  },
  {
    title: "Student Coordinator in National British Parliamentary Debate",
    place: "PCTE Ludhiana",
    date: "February 2024",
    image: "/images/debate.jpeg",
  },
  {
    title: "Core Member in Hackathon Organizing & Management Team",
    place: "PCTE Ludhiana",
    date: "March 2024",
    image: "/images/hackathon.jpeg",
  },
  
];

const Achievements = () => {
  return (
    <section id="achievements" className="bg-[#1c1c1c] text-white px-6 md:px-10 py-10 ">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            My <span className="text-lime-300">Achievements</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Some milestones and recognitions in my journey.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-[#303030] rounded-2xl overflow-hidden shadow-lg hover:shadow-lime-300/20 transition transform hover:scale-[1.03]"
            >

              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-2">

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  📍 {item.place}
                </p>

                <p className="text-lime-300 text-sm font-medium">
                  {item.date}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Achievements;