import { useEffect, useState } from "react";
import { getEducation } from "../services/educationService";
import { motion } from "framer-motion";

const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEducation();
        setEducationData(data);
      } catch (error) {
        console.error("Failed to load education data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="education" className="bg-[#1c1c1c] text-white px-6 md:px-10 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            My <span className="text-lime-300">Education</span>
          </h2>
          <p className="text-gray-400 mt-3">
            My academic journey and qualifications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gray-700"></div>

          <div className="space-y-10">

            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-12"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >

                {/* Dot */}
                <span className="absolute left-1 top-6 w-6 h-6 bg-lime-300 rounded-full flex items-center justify-center text-black font-bold">
                  🎓
                </span>

                {/* Card */}
                <div className="bg-[#262626] p-6 rounded-xl shadow-lg hover:shadow-lime-300/20 transition">

                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                    <div>
                      <h3 className="text-xl font-semibold">
                        {item.course}
                      </h3>

                      <p className="text-gray-400">
                        {item.institution}
                      </p>
                    </div>

                    <span className="bg-lime-300 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      {item.duration}
                    </span>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;