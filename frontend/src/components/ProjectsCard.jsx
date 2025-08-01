const ProjectsCard = ({ image, title, link }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-[#f6f0dc] p-4 min-w-[250px] max-w-[300px] mx-auto">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={title}
          className="rounded-xl mb-4 w-full h-48  cursor-pointer"
        />
      </a>
      <h3 className="text-lg font-bold text-black text-center">{title}</h3>
    </div>
  );
};

export default ProjectsCard;
