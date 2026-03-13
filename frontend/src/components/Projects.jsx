import Slider from "react-slick";
import ProjectsCard from "./ProjectsCard";

const projects = [
  {
    title: "Capital Store",
    description:
      "E-commerce website for a retail store featuring product listings, payment integration, responsive UI, and a seamless shopping experience for customers.",
    image: "/projects/capitalstore.png",
    github: "https://github.com/Harsimran12003/Capital-Store",
    demo: "https://www.capitalstorecs.com/",
  },
  {
    title: "RentMate",
    description:
      "A MERN stack platform that helps users find compatible roommates and rental spaces with profile matching and property listings.",
    image: "/projects/rentmate.png",
    github: "https://github.com/Harsimran12003/rentmate",
    demo: "https://github.com/Harsimran12003/RentMate-Roommate-Finder",
  },
  {
    title: "Wow Kids Worksheets",
    description:
      "Educational platform providing downloadable worksheets and learning materials designed for children to improve early learning skills.",
    image: "/projects/wowkids.png",
    github: "https://github.com/Harsimran12003/WowKidsWorksheets",
    demo: "https://www.wowkidsworksheets.in/",
  },
  {
    title: "Divya Agro Traders",
    description:
      "Business website for an agricultural trading company showcasing products, services, and company information with a modern design.",
    image: "/projects/divyaagro.png",
    github: "https://github.com/Harsimran12003/Divya-Agro-Traders",
    demo: "https://www.divyaagrotraders.com/",
  },
  {
    title: "HopeHub",
    description:
      "A social support platform designed to connect people seeking help with volunteers and organizations providing assistance.",
    image: "/projects/hopehub.png",
    github: "https://github.com/Harsimran12003/HopeHub",
    demo: "https://eventease-demo.com",
  },
  {
    title: "Client Portfolio",
    description:
      "A professional portfolio website built for a client to showcase skills, experience, and projects with a clean and modern UI.",
    image: "/projects/client.png",
    github: "https://github.com/Harsimran12003/Shailender_Portfolio",
    demo: "https://shailender-tiwari-portfolio.vercel.app/",
  },
  {
    title: "TechAgro",
    description:
      "Technology-driven agriculture platform designed to highlight modern farming solutions, services, and agricultural innovations.",
    image: "/projects/techagro.png",
    github: "https://github.com/Harsimran12003/TechAgro",
    demo: "https://techagro.co.in/",
  },
  {
    title: "AGK Biofuels",
    description:
      "Corporate website for a biofuels company showcasing sustainable energy products, company services, and industry information.",
    image: "/projects/agkbiofuels.png",
    github: "https://github.com/Harsimran12003/AGK-Biofules-and-Granules2",
    demo: "https://www.agkbiofuels.com/",
  },
  {
    title: "PCTE Club Elections",
    description:
      "Online voting system developed for college club elections to ensure transparent and efficient digital voting processes.",
    image: "/projects/pcteclubelections.png",
    github: "https://github.com/Harsimran12003/PCTE_Club_Elections",
    demo: "",
  },
  {
    title: "Myntra Clone",
    description:
      "Full-stack e-commerce clone inspired by Myntra with product browsing, cart management, and modern UI built using MERN stack.",
    image: "/projects/myntraclone.png",
    github: "https://github.com/Harsimran12003/Myntra-Clone-MERN",
    demo: "",
  },
  {
    title: "ArtVista",
    description:
      "Online art gallery website built in PHP that allows users to explore artwork collections with visually engaging layouts and interactive design.",
    image: "/projects/artvista.png",
    github: "https://github.com/Harsimran12003/Art-Gallery-Website",
    demo: "",
  },
  {
    title: "EventEase",
    description:
      "SaaS-based event management platform for organizing events, managing customers, and tracking event details efficiently.",
    image: "/projects/event_ease.png",
    github: "https://github.com/Harsimran12003/Event-Management-Website",
    demo: "",
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="projects"
      className="bg-[#1c1c1c] text-white px-6 md:px-10 py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            My <span className="text-lime-300">Projects</span>
          </h2>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-3">
              <div className="transform transition duration-300 hover:scale-[1.03]">
                <ProjectsCard {...project} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
