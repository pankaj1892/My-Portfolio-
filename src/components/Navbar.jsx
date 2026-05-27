import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.replace("#", ""));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);

        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "Pankaj_Chandel_Resume.pdf"; // Place resume.pdf inside public folder
    link.download = "Pankaj_Chandel_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "mx-4 mt-2 rounded-2xl bg-gray-900/80 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="group flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-cyan-400 to-violet-600 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
            P
          </div>

          <span className="text-white font-bold text-lg tracking-tight">
            Pankaj
            <span className="text-cyan-400"> Chandel</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = active === id;

            return (
              <a
                key={label}
                href={href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive ? "text-cyan-400" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-cyan-400/10 rounded-lg border border-cyan-400/20" />
                )}

                <span className="relative z-10">{label}</span>
              </a>
            );
          })}

          {/* Resume Download Button */}
          <button
            onClick={downloadResume}
            className="ml-3 px-4 py-2 text-sm font-semibold bg-linear-to-r from-cyan-500 to-violet-600 text-white rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            Resume ↓
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mx-4 mb-3 rounded-xl bg-gray-900/95 border border-white/10 backdrop-blur-xl overflow-hidden">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition border-b border-white/5 last:border-0"
            >
              {label}
            </a>
          ))}

          {/* Mobile Resume Button */}
          <button
            onClick={() => {
              downloadResume();
              setOpen(false);
            }}
            className="w-full text-left px-6 py-3 text-cyan-400 hover:bg-white/5 transition"
          >
            Resume ↓
          </button>
        </div>
      )}
    </nav>
  );
}
