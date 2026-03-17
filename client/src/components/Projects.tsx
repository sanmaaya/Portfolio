import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Award, Star, ShieldCheck, Github, ExternalLink, X, ZoomIn, ChevronDown, ChevronUp, Folder } from "lucide-react";
import { useState } from "react";
import { GlowingEffect } from "./ui/glowing-effect";

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const projects = [
        {
            title: "WORK Balance – Premium Employee & Team Management",
            description: "Architected a full-stack real-time management system with Role-Based Access Control (RBAC). Spearheaded the integration of Socket.io for peer-to-peer instant messaging and designed an operational command center including a Risk Monitor.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
            image: "/Projects/smart-study planner.png",
            github: "https://github.com/sanmaaya",
            live: ""
        },
        {
            title: "Paise Bachaaoo – Premium Financial Command Centre",
            description: "Engineered a high-end finance tracker that tracks real-time global market benchmarks. Implemented a 'Sync to Vault' architecture using Firebase Firestore to maintain data integrity and crafted a premium Glassmorphic UI.",
            tech: ["React 18", "Firebase", "Recharts", "JavaScript", "Tailwind CSS"],
            image: "/Projects/finace-tracker.png",
            github: "https://github.com/sanmaaya",
        },
        {
            title: "Electrosystem – Hybrid Renewable Energy Platform",
            description: "Architected a full-stack web platform to simulate and evaluate hybrid renewable energy systems. Engineered complex energy-flow logic and designed modular simulation workflows that enable data-driven analysis.",
            tech: ["Node.js", "Express.js", "MongoDB", "JavaScript", "HTML", "CSS"],
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
            github: "https://github.com/sanmaaya",
        },
        {
            title: "SOHAM – Pranic Healing & Meditation (Client Project)",
            description: "Architected a professional, client-ready web platform using PHP and MySQL to manage official guidelines. Engineered a custom registration workflow with automated email notifications.",
            tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
            image: "/Projects/soham.png",
            github: "https://github.com/sanmaaya",
            live: ""
        },
        {
            title: "TechnoGrowX – Smart Agriculture Support Platform",
            description: "Developed a robust three-tier architecture featuring specialized portals for Farmers, Experts, and Admins. Implemented a report-submission engine and integrated a secure Node.js authentication system.",
            tech: ["Node.js", "MySQL", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
            image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800",
            github: "https://github.com/sanmaaya",
        }
    ];

    return (
        <section id="projects" className="section-padding relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="heading-2 m-0">Featured Projects<span className="text-blue-500">.</span></h2>
                    <div className="flex-1 h-[1px] bg-white/10 hidden md:block"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {projects.slice(0, showAll ? projects.length : 3).map((project, idx) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                layout
                                whileHover={{ y: -10 }}
                                className="glass-panel p-[2px] rounded-3xl group transition-all relative"
                            >
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div className="relative h-full w-full glass-panel overflow-hidden rounded-3xl flex flex-col group transition-all hover:bg-white/[0.04]">
                                    {/* Project Preview Image */}
                                    <div className="relative h-48 w-full overflow-hidden group/img">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                            <button
                                                onClick={() => setSelectedImage(project.image)}
                                                className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all scale-90 group-hover/img:scale-100"
                                            >
                                                <ZoomIn className="w-6 h-6" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-7 flex flex-col flex-1">
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors leading-tight">{project.title}</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">{project.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="text-[10px] font-mono font-medium text-zinc-500 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Bar - LinkedIn Style */}
                                        <div className="flex items-center gap-3 mt-auto pt-6 border-t border-white/5">
                                            {project.github && (
                                                <a 
                                                    href={project.github} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-xs font-bold text-zinc-300 hover:text-white"
                                                >
                                                    <Github className="w-4 h-4" /> Code
                                                </a>
                                            )}
                                            {project.live && (
                                                <a 
                                                    href={project.live} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600/10 border border-blue-500/20 hover:bg-blue-600/20 hover:border-blue-500/40 transition-all text-xs font-bold text-blue-400 hover:text-blue-300"
                                                >
                                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* See More Toggle Button */}
                {projects.length > 3 && (
                    <div className="mt-16 flex justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowAll(!showAll)}
                            className="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 text-white font-bold hover:bg-blue-500 transition-all hover:border-blue-400 overflow-hidden shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative z-10 text-sm tracking-widest uppercase">
                                {showAll ? "Show Less" : "See More Projects"}
                            </span>
                            {showAll ? (
                                <ChevronUp className="w-5 h-5 relative z-10 group-hover:translate-y-[-2px] transition-transform" />
                            ) : (
                                <ChevronDown className="w-5 h-5 relative z-10 animate-transition group-hover:animate-none" />
                            )}
                        </motion.button>
                    </div>
                )}
            </motion.div>

            {/* Image Zoom Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X className="w-8 h-8" />
                        </motion.button>

                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt="Project Preview"
                            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl border border-white/10 object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
