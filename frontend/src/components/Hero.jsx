import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#1c1c1c] text-white px-6 md:px-10 py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-14 relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          className="flex-1 space-y-7 text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Greeting */}
          <div className="inline-block bg-lime-300 text-black px-5 py-1 rounded-full font-semibold text-xs uppercase tracking-widest">
            Hello, I Am
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold">
            <span className="bg-gradient-to-r from-lime-300 to-green-400 bg-clip-text text-transparent">
              Harsimranjit Kaur
            </span>
          </h1>

          {/* Typing Animation */}
          <div className="text-2xl md:text-4xl font-bold text-lime-300 h-[50px]">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "React Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p className="text-gray-300 max-w-lg text-base md:text-lg">
            I build scalable and beautiful web applications using modern
            technologies. Passionate about turning ideas into high-performance
            digital experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            {/* Download CV */}
            <a
              href="/resume.pdf"
              download
              className="bg-lime-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-lime-400 transition shadow-lg"
            >
              Download CV
            </a>

            {/* View Projects */}
            <a
              href="#projects"
              className="border border-lime-300 px-6 py-3 rounded-lg font-semibold hover:bg-lime-300 hover:text-black transition"
            >
              View Projects
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 pt-4 justify-center md:justify-start">
            <a
              href="https://github.com/Harsimran12003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-2xl transition transform hover:text-lime-300 hover:scale-125"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/harsimranjitk12/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-2xl transition transform hover:text-lime-300 hover:scale-125"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Glow */}
          <div className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px] bg-lime-300 opacity-20 blur-3xl rounded-full"></div>

          <img
            src="/profile.jpg"
            alt="Profile"
            className="relative w-[280px] md:w-[360px] rounded-2xl shadow-2xl border border-gray-700"
          />
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-lime-300 opacity-10 blur-3xl rounded-full"></div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-lime-300 rounded-full flex items-start justify-center p-1">
          <div className="w-2 h-2 bg-lime-300 rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
