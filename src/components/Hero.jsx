import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profileimage from "../assets/profileImage.jpg";

const roles = [
  "Java Full Stack Developer",
  "Java Developer",
  "Spring Boot Enthusiast",
  "React.js Builder",
  "REST API Designer",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIdx];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60,
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setRoleIdx((i) => (i + 1) % roles.length);
          setTyping(true);
        }, 10);
        return () => clearTimeout(t);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Glow blobs */}
      <div className="absolute w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full top-20 left-10 pointer-events-none" />
      <div className="absolute w-96 h-96 bg-violet-500/10 blur-[120px] rounded-full bottom-20 right-10 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-xs font-medium mb-8 backdrop-blur"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Profile */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="relative w-36 h-36 mx-auto mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-400 to-violet-600 animate-spin-slow p-0.5">
            <div className="w-full h-full rounded-full bg-gray-950" />
          </div>
          <img
            src={profileimage}
            alt="Pankaj Chandel"
            className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover border-2 border-gray-900"
          />
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-500 border-2 border-gray-950 flex items-center justify-center">
            <span className="text-xs">✓</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight"
        >
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
            Pankaj
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="h-10 mb-6 flex items-center justify-center"
        >
          <span className="text-xl md:text-2xl text-gray-300 font-mono">
            {displayed}
            <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 max-w-xl mx-auto mb-8 text-base leading-relaxed"
        >
          Building scalable, production-ready web applications with clean
          architecture and modern tech. Passionate about crafting seamless user
          experiences from backend APIs to polished UIs.
        </motion.p>

        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {[
            "Java",
            "Spring Boot",
            "Hibernate/JPA",
            "MySQL",
            "React.js",
            "PostgreSQL",
            "REST API",
            "JWT",
          ].map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-400/40 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="https://github.com/pankaj1892"
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="group flex items-center gap-2 px-6 py-3 bg-linear-to-r from-cyan-500 to-violet-600 text-white font-semibold rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
          >
            <span>View GitHub</span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a
            href="https://linkedin.com/in/pankaj-chandel-"
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-white/40 hover:scale-105 transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            data-cursor-hover
            className="px-6 py-3 border border-cyan-400/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:scale-105 transition-all duration-300"
          >
            Hire Me
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-3 gap-4 max-w-sm mx-auto"
        >
          {[
            { val: "10+", label: "Projects" },
            { val: "1+", label: "Years Exp" },
            { val: "8.23", label: "CGPA" },
          ].map(({ val, label }) => (
            <div
              key={label}
              className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="text-2xl font-black bg-linear-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                {val}
              </div>
              <div className="text-xs text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-16 flex flex-col items-center gap-2 text-gray-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-linear-to-b from-gray-600 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
