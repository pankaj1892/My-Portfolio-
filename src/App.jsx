import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Education from "./components/Education";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import ParticleBackground from "./components/ParticleBackground";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white" style={{ cursor: "none" }}>
      {/* Global effects */}
      <CustomCursor />
      <ScrollProgress />
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
}
