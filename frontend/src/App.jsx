import Navbar from "./components/Navbar";
import './App.css';
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience  from "./components/Experience"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Achievements from "./components/Achievements";

function App() {
  return (
    <div className="App bg-black text-white min-h-screen">
      
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <section id="contact">
          <Contact />
        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;
