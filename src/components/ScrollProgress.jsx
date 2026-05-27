import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress() {
  const [scrollPct, setScrollPct] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      const pct = total > 0 ? Math.round((scrolled / total) * 100) : 0;
      setScrollPct(pct);
      setShowTop(scrolled > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circumference = 2 * Math.PI * 20;
  const strokeDash = circumference - (scrollPct / 100) * circumference;

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 z-9997">
        <div
          className="h-full bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-100"
          style={{ width: `${scrollPct}%` }}
        />
      </div>

      {/* Scroll to Top + Percentage Ring */}
      <div
        className={`fixed bottom-8 right-6 z-50 flex flex-col items-center gap-3 transition-all duration-500 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* Circular progress with % */}
        <div className="relative w-12 h-12">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 48 48">
            <circle
              cx="24" cy="24" r="20"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="3"
            />
            <circle
              cx="24" cy="24" r="20"
              fill="none"
              stroke="url(#grad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDash}
              style={{ transition: "stroke-dashoffset 0.3s ease" }}
            />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-white">
            {scrollPct}%
          </span>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          data-cursor-hover
          className="w-10 h-10 rounded-full bg-linear-to-br from-cyan-500 to-violet-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:scale-110 hover:shadow-cyan-400/50 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} className="text-white" />
        </button>
      </div>
    </>
  );
}
