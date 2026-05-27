import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

const experience = [
  {
    role: "Java Full Stack Developer",
    company: "Ashdip IT Solutions",
    duration: "May 2025 – May 2026",
    location: "Pune, Maharashtra",
    type: "Full-time",
    points: [
      "Developed and maintained HRMS and JBRC ERP modules using React.js, Spring Boot, and Hibernate, delivering scalable full-stack business solutions.",

      "Designed and implemented RESTful APIs using Java, Spring Boot, and JPA/Hibernate for employee management, payroll processing, logistics operations, and ERP workflows.",

      "Developed ERP modules including Enquiry Management, Quotation Management, Order Processing, Vendor Management, and Consignment Tracking.",

      "Integrated PostgreSQL and MySQL databases using Hibernate ORM and optimized complex SQL queries to improve application performance and data retrieval efficiency.",

      "Implemented JWT-based authentication and role-based access control (RBAC) to secure enterprise applications and manage user permissions.",

      "Built responsive and reusable UI components using React.js and Tailwind CSS, incorporating search, filtering, pagination, and dashboard functionalities.",

      "Integrated frontend applications with backend services using Axios and REST APIs, ensuring seamless data flow across ERP and HRMS modules.",

      "Developed reporting and analytics features, enabling real-time business insights, operational monitoring, and data export capabilities.",

      "Enhanced backend performance by optimizing database queries, reducing API response times, and improving application scalability.",

      "Implemented exception handling, validation, logging, and audit trail mechanisms to improve system reliability and maintainability.",

      "Conducted API testing using Postman and collaborated with cross-functional teams throughout the Software Development Life Cycle (SDLC).",

      "Utilized Git and GitHub for version control, code reviews, and collaborative development in an Agile environment.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Spring Boot",
      "Java",
      "Hibernate (JPA)",
      "PostgreSQL",
      "MySQL",
      "JWT",
      "Tailwind CSS",
      "Git",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="absolute w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full bottom-10 left-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 block">
            Career
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Work{" "}
            <span className="bg-linear-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-linear-to-b from-cyan-400/60 via-violet-500/40 to-transparent hidden md:block" />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative md:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-3.5 top-8 w-5 h-5 rounded-full bg-linear-to-br from-cyan-400 to-violet-600 hidden md:flex items-center justify-center shadow-lg shadow-cyan-500/40">
                <Briefcase size={10} className="text-white" />
              </div>

              <div className="group bg-white/3 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 hover:bg-white/5 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-green-500/15 text-green-400 border border-green-500/30">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-cyan-400 font-semibold text-lg">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-sm text-gray-400 space-y-1 md:text-right">
                    <div className="flex items-center gap-1.5 md:justify-end">
                      <Calendar size={13} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:justify-end">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-2.5 mb-6">
                  {exp.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-cyan-400 mt-0.5 flex-shrink:0"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-gray-400 group-hover:border-white/20 transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
