const SkillCard = ({ icon, name }) => {
  return (
    <div className="bg-[#1e1e1e] rounded-xl p-5 w-28 h-28 flex flex-col items-center justify-center shadow-md hover:shadow-lime-400/30 hover:scale-105 transition-all duration-300">
      <div className="w-10 h-10 flex items-center justify-center mb-2">
        <img src={icon} alt={name} className="max-w-full max-h-full object-contain" />
      </div>
      <h3 className="text-white text-sm font-medium text-center leading-tight">{name}</h3>
    </div>
  );
};

export default SkillCard;
