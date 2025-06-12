import Slider from "react-slick";

// Slick carousel styles (make sure these are in your global CSS)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectsCard from "./ProjectsCard";

const projectData = [
  { title: "Brand Mockup", image: "/images/project1.png" },
  { title: "Energy Can Website", image: "/images/project2.png" },
  { title: "Product Showcase", image: "/images/project3.png" },
  { title: "UI Kit Preview", image: "/images/project4.png" },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="projects" className="bg-[#1c1c1c] text-white px-8 py-20">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold border-b-2 inline-block border-lime-300 mb-4">
          My Projects
        </h2>

        <Slider {...settings}>
          {projectData.map((project, index) => (
            <div key={index}>
              <ProjectsCard {...project} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
