import Navbar from "./components/Navbar";
import './App.css';
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App bg-black text-white min-h-screen">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Education />
        </section>
        <section>
          <Projects />
        </section>

      </main>

      <footer className="text-center py-4 bg-zinc-800">
        <p>&copy; 2023 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
