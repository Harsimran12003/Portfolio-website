import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import { getSkills } from "../services/skillService";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkills();
        setSkills(data);
      } catch (err) {
        console.error("Error loading skills:", err);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section id="skills" className="bg-black py-14 px-4">
      <h2 className="text-white text-4xl font-bold text-center mb-12">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
        {skills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
