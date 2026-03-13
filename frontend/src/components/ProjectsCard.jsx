import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsCard = ({
  title,
  description,
  image,
  github,
  demo,
  technologies,
  link,
}) => {
  return (
    <a
      href={link || demo || github}
      target="_blank"
      rel="noreferrer"
      className="block"
    >
      <div className="relative bg-[#303030] rounded-2xl overflow-hidden shadow-lg group transition duration-300 hover:shadow-lime-300/20 hover:scale-[1.02]">

        {/* Project Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-full group-hover:scale-110 transition duration-500"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">

            {/* GitHub Button */}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-lime-300 transition"
              >
                <FaGithub />
                Code
              </a>
            )}

            {/* Live Demo Button */}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 bg-lime-300 text-black px-4 py-2 rounded-lg font-semibold hover:bg-white transition"
              >
                <FaExternalLinkAlt />
                Live
              </a>
            )}

          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 flex flex-col flex-grow">

          {/* Title (clickable) */}
          <h3 className="text-xl font-bold hover:text-lime-300 transition">
            {title}
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed flex-grow">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies?.map((tech, index) => (
              <span
                key={index}
                className="bg-[#1c1c1c] text-lime-300 text-xs px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </div>
    </a>
  );
};

export default ProjectsCard;