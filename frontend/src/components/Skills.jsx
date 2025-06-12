import SkillCard from "./SkillCard";

const skills = [
  { icon: "/icons/html.png", name: "HTML5" },
  { icon: "/icons/css.webp", name: "CSS3" },
  { icon: "/icons/javascript.png", name: "JavaScript" },
  { icon: "/icons/react.svg", name: "React" },
  { icon: "/icons/node.png", name: "Node.js" },
  { icon: "/icons/express.png", name: "Express.js" },
  { icon: "/icons/python.webp", name: "Python" },
  { icon: "/icons/git.svg", name: "Git" },
  { icon: "/icons/mysql.png", name: "MySQL" },
  { icon: "/icons/mongodb.png", name: "Mongo DB" },
  { icon: "/icons/docker.webp", name: "Docker" },
  { icon: "/icons/kubernetes.png", name: "Kubernetes" },
];

const Skills = () => {
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
