import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const contacts = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "pankajpardeshi175@gmail.com",
      href: "mailto:pankajpardeshi175@gmail.com",
    },
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: "Pune, Maharashtra",
      href: null,
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      value: "pankaj-chandel-",
      href: "https://linkedin.com/in/pankaj-chandel-",
    },
    {
      icon: <Github size={18} />,
      label: "GitHub",
      value: "pankaj1892",
      href: "https://github.com/pankaj1892",
    },
  ];

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="absolute w-96 h-96 bg-violet-500/8 blur-[120px] rounded-full top-20 left-20 pointer-events-none" />
      <div className="absolute w-80 h-80 bg-cyan-500/5 blur-[100px] rounded-full bottom-10 right-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 block">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Get In{" "}
            <span className="bg-linear-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-sm">
            I'm currently open to new opportunities. Whether you have a question
            or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contacts.map(({ icon, label, value, href }, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/3 border border-white/10 hover:border-cyan-400/30 hover:bg-white/6 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-cyan-400/20 to-violet-500/20 flex items-center justify-center text-cyan-400 flex-shrink:0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor-hover
                      className="text-sm text-white hover:text-cyan-400 transition-colors font-medium"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm text-white font-medium">
                      {value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div className="p-5 rounded-xl bg-linear-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">
                  Available for Work
                </span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Open to full-time roles, freelance projects, and collaborations
                in Java / React development.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/3 border border-white/10 rounded-2xl p-7 space-y-4"
            >
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-cyan-400/50 focus:bg-white/8 transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-cyan-400/50 focus:bg-white/8 transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-cyan-400/50 focus:bg-white/8 transition-all duration-300 text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                data-cursor-hover
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  sent
                    ? "bg-green-500/20 border border-green-500/40 text-green-400"
                    : "bg-linear-to-r from-cyan-500 to-violet-600 text-white hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/25"
                }`}
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-white/5"
        >
          <p className="text-gray-600 text-sm">
            Designed & Built by{" "}
            <span className="bg-linear-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-semibold">
              Pankaj Chandel
            </span>{" "}
            · Pune, Maharashtra · 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}
