import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
const education = [
  {
    degree: "B.E. Computer Engineering",
    college: "Shri Gulabrao Deokar College of Engineering",
    year: "Dec 2020 – Jun 2024",
    score: "CGPA: 8.23 / 10",
    location: "Jalgaon, Maharashtra",
    highlight: true,
    description:
      "Focused on Software Engineering, Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Web Development. Completed academic projects using Java, Spring Boot, React.js, and MySQL.",
  },
  {
    degree: "Higher Secondary (HSC)",
    college: "Pankaj Higher Secondary College",
    year: "Jun 2019 – Mar 2020",
    score: "51.38%",
    location: "Chopda, Maharashtra",
    highlight: false,
    description:
      "Completed Higher Secondary education with a focus on Science stream, covering Mathematics, Physics, Chemistry, and Computer Science fundamentals.",
  },
  {
    degree: "Secondary School (SSC)",
    college: "Pratap Vidya Mandir",
    year: "Jun 2017 – Mar 2018",
    score: "60.80%",
    location: "Chopda, Maharashtra",
    highlight: false,
    description:
      "Built a strong academic foundation in Mathematics, Science, and English while actively participating in school activities and technical learning.",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-6">
      <div className="absolute w-80 h-80 bg-emerald-500/5 blur-[100px] rounded-full top-0 left-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 block">
            Academics
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            My{" "}
            <span className="bg-linear-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-linear-to-b from-cyan-400/50 to-transparent hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative md:pl-16"
              >
                {/* Dot */}
                <div
                  className={`absolute left-3.5 top-8 w-5 h-5 rounded-full hidden md:flex items-center justify-center shadow-lg ${edu.highlight ? "bg-linear-to-br from-cyan-400 to-violet-600 shadow-cyan-500/40" : "bg-gray-700 shadow-none"}`}
                >
                  <GraduationCap size={10} className="text-white" />
                </div>

                <div
                  className={`group border rounded-2xl p-7 hover:shadow-2xl transition-all duration-500 ${edu.highlight ? "bg-linear-to-br from-cyan-500/8 to-violet-500/5 border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-cyan-500/10" : "bg-white/3 border-white/10 hover:border-white/20"}`}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p
                        className={`font-medium ${edu.highlight ? "text-cyan-400" : "text-gray-400"}`}
                      >
                        {edu.college}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold px-3 py-1.5 rounded-xl bg-linear-to-r from-cyan-500/15 to-violet-500/15 border border-white/10 text-white w-fit">
                      <Award size={14} className="text-yellow-400" />
                      {edu.score}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} /> {edu.year}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} /> {edu.location}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-400 leading-relaxed text-sm">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
