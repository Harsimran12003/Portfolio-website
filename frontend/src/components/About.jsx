const About = () => {
  return (
    <section id="about" className="bg-[#1c1c1c] text-white px-8 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Left: About Text & Info */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold border-b-2 inline-block border-lime-300 mb-4">
            About Me
          </h2>


          <p className="text-gray-300 leading-relaxed">
            Passionate about building user-centric, responsive, and efficient web applications.
            I enjoy solving technical challenges and continuously expanding my skill set through modern development tools.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 text-sm text-gray-300">
            <div><span className="font-semibold text-white">Name:</span> Harsimranjit Kaur</div>
            <div><span className="font-semibold text-white">Nationality:</span> Indian</div>
            <div><span className="font-semibold text-white">Phone:</span> (+91) 9914322503</div>
            <div><span className="font-semibold text-white">Email:</span> harsimran12003@gmail.com</div>

            <div><span className="font-semibold text-white">Freelance:</span> Available</div>
            <div><span className="font-semibold text-white">Qualification:</span> BTech CSE (Pursuing)</div>
            <div><span className="font-semibold text-white">Github:</span> https://github.com/Harsimran12003</div>
            <div><span className="font-semibold text-white">Languages:</span> English, Hindi, Punjabi</div>
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default About;
