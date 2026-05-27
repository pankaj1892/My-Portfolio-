import { motion } from "framer-motion";
import { Award, Calendar, MapPin, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Full Stack Java Development",
    org: "Fullstack Guru Training Institute",
    duration: "Jul 2024 – Mar 2025",
    location: "Pune, Maharashtra",
    color: "from-cyan-400 to-blue-500",
    link: "#",
  },
  {
    title: "C Programming, Java & Advanced Java",
    org: "Info Planet",
    duration: "Jan 2022 – Jul 2022",
    location: "Jalgaon, Maharashtra",
    color: "from-green-400 to-emerald-600",
    link: "#",
  },
  {
    title: "Java (Basic) Certificate",
    org: "HackerRank",
    duration: "Certified",
    location: "Online",
    color: "from-violet-400 to-purple-600",
    link: "https://www.hackerrank.com/certificates",
  },
  {
    title: "React (Basic) Certificate",
    org: "HackerRank",
    duration: "Certified",
    location: "Online",
    color: "from-orange-400 to-amber-500",
    link: "https://www.hackerrank.com/certificates",
  },
];

export default function Certifications() {
  return (
    <section className="relative py-28 px-6">
      <div className="absolute w-80 h-80 bg-violet-500/5 blur-[100px] rounded-full bottom-0 right-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 block">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Certifications & <span className="bg-linear-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Courses</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              data-cursor-hover
              className="group relative bg-white/3 border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:shadow-xl transition-all duration-400 overflow-hidden"
            >
              {/* Accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r ${cert.color}`} />

              <div className="flex justify-between items-start mb-4">
                <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${cert.color} flex items-center justify-center shadow-lg`}>
                  <Award size={18} className="text-white" />
                </div>
                {cert.link !== "#" && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="opacity-0 group-hover:opacity-100 w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  >
                    <ExternalLink size={13} className="text-white" />
                  </a>
                )}
              </div>

              <h3 className="text-base font-bold text-white mb-1 leading-tight">{cert.title}</h3>
              <p className={`text-sm font-semibold mb-3 bg-linear-to-r ${cert.color} bg-clip-text text-transparent`}>
                {cert.org}
              </p>

              <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar size={11} /> {cert.duration}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={11} /> {cert.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
