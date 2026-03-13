import { motion } from "framer-motion";

const experiences = [
  {
    company: "Sensation Software Solutions, Mohali",
    role: "Full Stack Developer Intern",
    duration: "Jan 2026 – Present",
    logo: "/sensationlogo.png",
    link: "https://sensationsolutions.com/",
  },
  {
   
    role: "Freelancer",
    duration: "Nov 2026 – Present",
    logo: "/freelance.webp",
    link: "https://github.com/Harsimran12003/",
  },
  {
    company: "Vaid PR",
    role: "Web Developer Intern",
    duration: "Sept 2025 – Jan 2026",
    logo: "/vaidpr.jpg",
    link: "https://vaidpr.com/",
  },
  {
    company: "Auribises Technologies",
    role: "Python with Data Science Trainee",
    duration: "Jun 2024 – July 2024",
    logo: "/auribises.png",
    link: "https://auribises.com/",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#1c1c1c] text-white px-6 md:px-10 py-15"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Work <span className="text-lime-300">Experience</span>
          </h2>
          <p className="text-gray-400 mt-3">
            My professional journey and the companies I have worked with.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div
            className="absolute left-2 top-0 w-[3px] bg-lime-300"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 ml-10 relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[42px] top-6 flex items-center justify-center w-6 h-6 bg-lime-300 rounded-full shadow-md"></span>

              {/* Card */}
              <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg hover:shadow-lime-300/20 hover:scale-[1.02] transition">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-12 h-12 object-contain bg-white rounded p-1"
                  />

                  <div>
                    <h3 className="text-lg font-bold">{exp.role}</h3>

                    {/* Linked Company Name */}
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lime-300 text-sm hover:underline"
                    >
                      {exp.company}
                    </a>
                  </div>
                </div>

                {/* Duration */}
                <p className="text-gray-400 text-sm mb-2">{exp.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
