import Navbar from "./components/Navbar"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar></Navbar>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>Here you can add information about yourself.</p>
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
