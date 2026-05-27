import { motion } from "framer-motion";
import { Code, Server, Database, Wrench, Brain } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: <Code size={18} />,
    color: "from-cyan-400 to-blue-500",
    glow: "shadow-cyan-500/20",
    skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: <Server size={18} />,
    color: "from-green-400 to-emerald-600",
    glow: "shadow-green-500/20",
    skills: ["Java", "Spring Boot", "Hibernate (JPA)", "JDBC", "REST APIs", "JSP", "Servlets"],
  },
  {
    title: "Database",
    icon: <Database size={18} />,
    color: "from-orange-400 to-amber-600",
    glow: "shadow-orange-500/20",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench size={18} />,
    color: "from-violet-400 to-purple-600",
    glow: "shadow-violet-500/20",
    skills: ["Git", "GitHub", "Maven", "Postman", "IntelliJ IDEA", "VS Code"],
  },
  {
    title: "Concepts",
    icon: <Brain size={18} />,
    color: "from-pink-400 to-rose-600",
    glow: "shadow-pink-500/20",
    skills: ["OOP", "MVC", "JWT Auth", "RBAC", "CRUD", "Agile", "SDLC"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="absolute w-80 h-80 bg-violet-500/5 blur-[100px] rounded-full top-20 right-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 block">
            What I Work With
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Skills & <span className="bg-linear-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              data-cursor-hover
              className={`group relative bg-white/3 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:shadow-2xl ${group.glow} transition-all duration-400`}
            >
              {/* Card glow on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${group.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-lg bg-linear-to-br ${group.color} flex items-center justify-center text-white shadow-lg`}>
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{group.title}</h3>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.08 }}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/8 border border-white/10 text-gray-300 hover:text-white hover:bg-white/15 hover:border-white/20 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
