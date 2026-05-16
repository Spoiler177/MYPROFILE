import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0d0d0f] text-white selection:bg-sky-400/30 selection:text-white">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main className="pt-24">
          <Home />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
