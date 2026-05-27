import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  X,
  Github,
  ExternalLink,
  Tag,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ImageOff,
} from "lucide-react";

const categoryColors = {
  "Full Stack": "from-cyan-400 to-blue-500",
  Frontend: "from-violet-400 to-purple-600",
  Backend: "from-green-400 to-emerald-600",
};

function ImageCarousel({ images }) {
  const [idx, setIdx] = useState(0);
  const [imgError, setImgError] = useState({});
  const [direction, setDirection] = useState(1);

  if (!images || images.length === 0) return null;

  const prev = () => {
    setDirection(-1);
    setIdx((i) => (i - 1 + images.length) % images.length);
  };
  const next = () => {
    setDirection(1);
    setIdx((i) => (i + 1) % images.length);
  };

  const current = images[idx];
  const hasPrev = images.length > 1;
  const hasError = imgError[idx];

  return (
    <div
      className="relative w-full rounded-xl overflow-hidden bg-gray-900 mb-6 select-none"
      style={{ aspectRatio: "16/9" }}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={idx}
          custom={direction}
          initial={{ opacity: 0, x: direction * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -40 }}
          transition={{ duration: 0.28, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {hasError ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gray-800/60">
              <ImageOff size={32} className="text-gray-600" />
              <span className="text-gray-500 text-xs">{current.caption}</span>
            </div>
          ) : (
            <img
              src={current}
              alt={current.caption}
              onError={() => setImgError((e) => ({ ...e, [idx]: true }))}
              className="w-full h-full object-cover"
              draggable={false}
            />
          )}

          {/* Caption overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/30 to-transparent px-4 py-3">
            <p className="text-white text-xs font-medium">{current.caption}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Nav arrows */}
      {hasPrev && (
        <>
          <button
            onClick={prev}
            data-cursor-hover
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-black/70 hover:scale-110 transition-all duration-200 z-10"
          >
            <ChevronLeft size={15} />
          </button>
          <button
            onClick={next}
            data-cursor-hover
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-black/70 hover:scale-110 transition-all duration-200 z-10"
          >
            <ChevronRight size={15} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > idx ? 1 : -1);
                setIdx(i);
              }}
              data-cursor-hover
              className={`rounded-full transition-all duration-300 ${
                i === idx
                  ? "w-4 h-1.5 bg-white"
                  : "w-1.5 h-1.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="absolute top-2 right-2 flex gap-1 z-10">
          <span className="px-2 py-0.5 rounded-full bg-black/60 text-white text-[10px] font-medium backdrop-blur-sm">
            {idx + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-1000 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 30 }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="bg-gray-950 border border-white/12 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#22d3ee33 transparent",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          data-cursor-hover
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 text-gray-400 hover:text-white transition"
        >
          <X size={16} />
        </button>

        <div className="p-7">
          {/* Header */}
          <div className="mb-5 pr-8">
            <span
              className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-md bg-linear-to-r ${categoryColors[project.category] || "from-gray-600 to-gray-500"} text-white mb-2`}
            >
              {project.category}
            </span>
            <h3 className="text-2xl font-black text-white">{project.title}</h3>
          </div>

          {/* ── Image Carousel ── */}
          <ImageCarousel images={project.images} />

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {project.details}
          </p>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <p className="text-xs text-gray-500 mb-3 font-semibold uppercase tracking-widest">
                Key Features
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-300 text-sm"
                  >
                    <CheckCircle2 size={13} className="text-cyan-400 flex-1" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech */}
          <div className="mb-7">
            <p className="text-xs text-gray-500 mb-3 font-semibold uppercase tracking-widest flex items-center gap-1.5">
              <Tag size={10} /> Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-white/8 border border-white/10 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            {project.github && project.github !== "#" ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/8 border border-white/15 text-white text-sm font-medium hover:bg-white/15 transition-all duration-300"
              >
                <Github size={15} /> GitHub
              </a>
            ) : (
              <div className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/4 border border-white/8 text-gray-600 text-sm font-medium cursor-not-allowed">
                <Github size={15} /> Private Repo
              </div>
            )}
            {project.live && project.live !== "#" ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-linear-to-r from-cyan-500 to-violet-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            ) : (
              <div className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/4 border border-white/8 text-gray-600 text-sm font-medium cursor-not-allowed">
                <ExternalLink size={15} /> No Live Demo
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
