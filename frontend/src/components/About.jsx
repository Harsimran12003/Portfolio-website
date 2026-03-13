import { useEffect, useState } from "react";
import { getUser } from "../services/userService";

const About = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser();
        setUser(data);
      } catch (err) {
        console.error("Error fetching user info:", err);
      }
    };
    fetchUser();
  }, []);

  if (!user) {
    return (
      <p className="text-white text-center py-10">
        Loading About Info...
      </p>
    );
  }

  return (
    <section id="about" className="bg-[#1c1c1c] text-white px-6 md:px-10 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            About <span className="text-lime-300">Me</span>
          </h2>
          
        </div>

        {/* ABOUT TEXT */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-gray-300 text-lg leading-relaxed">
            {user.about ||
              "Passionate about building user-centric, responsive, and scalable web applications. I enjoy solving real-world problems through technology and continuously expanding my knowledge in modern web development."}
          </p>
        </div>

        {/* INFO CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">

          <div className="bg-[#2a2a2a] p-6 rounded-xl hover:scale-105 transition">
            <p className="text-gray-400 text-sm">Name</p>
            <p className="font-semibold text-lg">{user.name}</p>
          </div>

          <div className="bg-[#2a2a2a] p-6 rounded-xl hover:scale-105 transition">
            <p className="text-gray-400 text-sm">Nationality</p>
            <p className="font-semibold text-lg">{user.nationality}</p>
          </div>

          <div className="bg-[#2a2a2a] p-6 rounded-xl hover:scale-105 transition">
            <p className="text-gray-400 text-sm">Phone</p>
            <p className="font-semibold text-lg">{user.phone}</p>
          </div>

          <div className="bg-[#2a2a2a] p-6 rounded-xl hover:scale-105 transition">
            <p className="text-gray-400 text-sm">Email</p>
            <p className="font-semibold break-words">{user.email}</p>
          </div>

        </div>

        {/* SECOND ROW */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          <div className="bg-[#2a2a2a] p-6 rounded-xl hover:scale-105 transition">
            <p className="text-gray-400 text-sm">Freelance</p>
            <p className="font-semibold">{user.freelance}</p>
          </div>

          <div className="bg-[#2a2a2a] p-6 rounded-xl hover:scale-105 transition">
            <p className="text-gray-400 text-sm">Qualification</p>
            <p className="font-semibold">{user.qualification}</p>
          </div>

          <div className="bg-[#2a2a2a] p-6 rounded-xl hover:scale-105 transition">
            <p className="text-gray-400 text-sm">Languages</p>
            <p className="font-semibold">
              {user.languages?.join(", ")}
            </p>
          </div>

          <div className="bg-[#2a2a2a] p-6 rounded-xl hover:scale-105 transition">
            <p className="text-gray-400 text-sm">Github</p>
            <a
              href={user.github}
              target="_blank"
              rel="noreferrer"
              className="text-lime-300 hover:underline"
            >
              Visit Profile
            </a>
          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

          <div className="bg-[#2a2a2a] p-8 rounded-xl hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-lime-300">1+</h3>
            <p className="text-gray-400">Years Experience</p>
          </div>

          <div className="bg-[#2a2a2a] p-8 rounded-xl hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-lime-300">12+</h3>
            <p className="text-gray-400">Projects Completed</p>
          </div>

          <div className="bg-[#2a2a2a] p-8 rounded-xl hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-lime-300">10+</h3>
            <p className="text-gray-400">Technologies</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;