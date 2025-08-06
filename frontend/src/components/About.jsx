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
    return <p className="text-white text-center py-10">Loading About Info...</p>;
  }

  return (
    <section id="about" className="bg-[#1c1c1c] text-white px-8 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">

        {/* Left: About Text & Info */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold border-b-2 inline-block border-lime-300 mb-4">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed">
            {user.about || "Passionate about building user-centric, responsive, and efficient web applications. I enjoy solving technical challenges and continuously expanding my skill set through modern development tools."}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-6 text-sm text-gray-300">
            <div><span className="font-semibold text-white">Name:</span> {user.name}</div>
            <div><span className="font-semibold text-white">Nationality:</span> {user.nationality}</div>
            <div><span className="font-semibold text-white">Phone:</span> {user.phone}</div>
            <div><span className="font-semibold text-white">Email:</span> {user.email}</div>
            <div><span className="font-semibold text-white">Freelance:</span> {user.freelance}</div>
            <div><span className="font-semibold text-white">Qualification:</span> {user.qualification}</div>
            <div>
              <span className="font-semibold text-white">Github:</span>{" "}
              <a
                href={user.github}
                className=" underline"
                target="_blank"
                rel="noreferrer"
              >
                {user.github}
              </a>
            </div>
            <div><span className="font-semibold text-white">Languages:</span> {user.languages?.join(", ")}</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
