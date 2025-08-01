import { useEffect, useState } from "react";
import { getEducation } from "../services/educationService";

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
    <section id="education" className="bg-[#1c1c1c] text-white px-8 py-20">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold border-b-2 inline-block border-lime-300 mb-4">
          My Education
        </h2>

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
              <div className="text-lime-200 font-bold text-xl mt-4 md:mt-0">
                {item.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
