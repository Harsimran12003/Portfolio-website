import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-[#1c1c1c] text-white px-8 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between relative z-10">
        
        
        <motion.div
          className="flex-1 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-block bg-lime-300 text-black px-5 py-1 rounded font-bold text-sm uppercase tracking-wide">
            Hello, I Am Harsimranjit Kaur
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Full Stack <span className="text-lime-300">Web</span><br /> Developer
          </h1>

          <p className="text-gray-300 max-w-md text-base md:text-lg">
            I build beautiful, scalable, and efficient web applications using the MERN stack. Let's turn ideas into reality!
          </p>

          
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative z-10">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-[320px] md:w-[400px] mx-auto rounded-xl shadow-2xl"
            />
          </div>

        </motion.div>
      </div>

      {/* Decorative blurred circle */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-lime-300 rounded-full opacity-10 blur-3xl animate-pulse"></div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-lime-300 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-lime-300 rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
