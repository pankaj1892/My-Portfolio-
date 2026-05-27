import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";
import {
  Search,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  ImageOff,
  Maximize2,
} from "lucide-react";

const PROJECTS_PER_PAGE = 6;
const categories = ["All", "Full Stack", "Frontend", "Backend"];
const categoryColors = {
  "Full Stack": "from-cyan-400 to-blue-500",
  Frontend: "from-violet-400 to-purple-600",
  Backend: "from-green-400 to-emerald-600",
};

function ProjectCard({ p, onClick }) {
  const [imgErr, setImgErr] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      data-cursor-hover
      className="group relative bg-white/3 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-white/25 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-400 flex flex-col"
    >
      {/* ── Thumbnail ── */}
      <div
        className="relative w-full overflow-hidden bg-gray-900"
        style={{ aspectRatio: "16/9" }}
      >
        {!imgErr && p.thumbnail ? (
          <img
            src={p.thumbnail}
            alt={p.title}
            onError={() => setImgErr(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-800 to-gray-900">
            <ImageOff size={28} className="text-gray-700" />
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 backdrop-blur-sm text-white text-xs font-semibold border border-white/20">
            <Maximize2 size={12} /> View Details
          </span>
        </div>

        {/* Category badge */}
        <div className="absolute top-2.5 left-2.5">
          <span
            className={`px-2 py-0.5 text-[10px] font-bold rounded-md bg-linear-to-r ${categoryColors[p.category] || "from-gray-600 to-gray-500"} text-white shadow-lg`}
          >
            {p.category}
          </span>
        </div>

       

        {/* Image count badge */}
        {p.images && p.images.length > 1 && (
          <div className="absolute top-2.5 right-2.5">
            <span className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-black/60 backdrop-blur-sm text-gray-300 border border-white/10">
              {p.images.length} screenshots
            </span>
          </div>
        )}
      </div>

      {/* ── Card body ── */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title row */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
            {p.title}
          </h3>
          <div className="flex gap-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {p.github && p.github !== "#" && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
              >
                <Github size={11} className="text-white" />
              </a>
            )}
            {p.live && p.live !== "#" && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
              >
                <ExternalLink size={11} className="text-white" />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">
          {p.desc}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {p.tech.slice(0, 4).map((t, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-[10px] rounded-md bg-white/5 border border-white/8 text-gray-500"
            >
              {t}
            </span>
          ))}
          {p.tech.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] rounded-md bg-white/5 border border-white/8 text-gray-600">
              +{p.tech.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = projects.filter((p) => {
    const catMatch = filter === "All" || p.category === filter;
    const q = search.toLowerCase();
    const searchMatch =
      p.title.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.tech.join(" ").toLowerCase().includes(q);
    return catMatch && searchMatch;
  });

  const totalPages = Math.ceil(filtered.length / PROJECTS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * PROJECTS_PER_PAGE,
    page * PROJECTS_PER_PAGE,
  );

  const goTo = (n) => {
    setPage(n);
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="absolute w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full top-20 right-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Featured{" "}
            <span className="bg-linear-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            {totalPages > 1 && ` · Page ${page} of ${totalPages}`}
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-md mx-auto mb-8"
        >
          <Search
            size={15}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            placeholder="Search by tech or title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-cyan-400/50 transition-all duration-300 text-sm"
          />
        </motion.div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              data-cursor-hover
              className={`px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                filter === cat
                  ? "bg-linear-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${filter}-${search}-${page}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {paginated.length > 0 ? (
              paginated.map((p) => (
                <ProjectCard
                  key={p.title}
                  p={p}
                  onClick={() => setSelected(p)}
                />
              ))
            ) : (
              <div className="col-span-3 text-center text-gray-500 py-20">
                No projects match your search.
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 mt-12"
          >
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              data-cursor-hover
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/25 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => goTo(n)}
                data-cursor-hover
                className={`w-9 h-9 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  n === page
                    ? "bg-linear-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/25"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages}
              data-cursor-hover
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/25 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronRight size={16} />
            </button>
          </motion.div>
        )}
        {totalPages > 1 && (
          <p className="text-center text-gray-600 text-xs mt-4">
            Showing {(page - 1) * PROJECTS_PER_PAGE + 1}–
            {Math.min(page * PROJECTS_PER_PAGE, filtered.length)} of{" "}
            {filtered.length} projects
          </p>
        )}
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
