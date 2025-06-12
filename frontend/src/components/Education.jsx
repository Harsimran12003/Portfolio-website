const educationData = [
  {
    course: "BTech in Computer Science & Engineering",
    institution: "PCTE Group of Institutes, Ludhiana",
    duration: "2022–Present",
  },
  {
    course: "Python in Data Science Training",
    institution: "Auribises Technologies Pvt. Ltd., Ludhiana",
    duration: "2024 ",
  },
  {
    course: "Senior Secondary Education",
    institution: "Guru Nanak International Public School, Ludhiana",
    duration: "2022 ",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-[#1c1c1c] text-white px-8 py-20">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Title */}
        <h2 className="text-3xl font-bold border-b-2 inline-block border-lime-300 mb-4">
          My Education
        </h2>

        {/* Education Cards */}
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#262626] p-6 rounded-xl shadow-md hover:shadow-lime-500/10 transition duration-300"
            >
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-1">{item.course}</h3>
                <p className="text-sm text-gray-300">{item.institution}</p>
              </div>
              <div className="text-lime-200 font-bold text-xl mt-4 md:mt-0">{item.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
