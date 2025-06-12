import Navbar from "./components/Navbar"
import './App.css';
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar></Navbar>
      </header>
      <main>
        <section>
          <Hero></Hero>
        </section>
        <section>
          <h2>Projects</h2>
          <p>List your projects here.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Portfolio</p>
      </footer>
    </div>
  )
}


export default App
