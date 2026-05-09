import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Timeline from "./pages/Timeline";
import Goals from "./pages/Goals";
import Contact from "./pages/Contacts";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Achievements />
      <Timeline />
      <Goals />
      <Contact />
    </div>
  );
}

export default App;