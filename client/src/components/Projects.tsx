import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Award, Star, ShieldCheck, Github, ExternalLink, X, ZoomIn, ChevronDown, ChevronUp, Folder, Info } from "lucide-react";
import { useState } from "react";
import { GlowingEffect } from "./ui/glowing-effect";

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<any | null>(null);

    const projects = [
        {
            title: "WORK Balance – Premium Employee & Team Management",
            description: "Full-stack workforce management platform streamlining team coordination and internal communication. Features real-time employee management with Role-Based Access Control (RBAC), Socket.io instant messaging with presence indicators, and a central command center for tracking overdue tasks and leaves.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
            image: "/Projects/workbalance.png",
            github: "https://github.com/sanmaaya", 
            live: ""
        },
        {
            title: "Paise Bachaaoo – Premium Financial Command Centre",
            description: "Advanced dashboard to monitor personal finances alongside global indicators like the DXY Index. Designed a multi-session data synchronization architecture using Firebase Firestore. Developed interactive analytics using Recharts and a premium glassmorphic UI with dynamic themes and kinetic animations.",
            tech: ["React.js", "Firebase", "Tailwind CSS"],
            image: "/Projects/finace-tracker.png",
            github: "https://github.com/sanmaaya/Finance-Tracker",
            live: "https://paisa-lemon.vercel.app/"
        },
        {
            title: "🎓 Padh Lo - Smart Study Planner",
            description: "A high-performance Smart Study Planner designed to help students master academic schedules. Features include a dynamic dashboard with a focus timer, streaks, and an advanced Kanban task manager with smart status tracking. Engineered using dynamic Chart.js analytics for visualizing task distribution.",
            tech: ["JavaScript", "Chart.js", "LocalStorage", "CSS3"],
            image: "/Projects/smart-study planner.png",
            github: "https://github.com/sanmaaya/Smart-Study-Planner",
            live: "https://smart-study-planner-beryl.vercel.app/"
        },
        {
            title: "SOHAM – Pranic Healing & Meditation Platform",
            description: "A visually clean platform providing an accessible space for Pranic Healing learners and meditation enthusiasts. Developed from scratch to feature course listings, healing principles, and seamless registration tools. Combines aesthetic simplicity with functional design for a calm user experience.",
            tech: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
            image: "/Projects/soham.png",
            github: "https://github.com/sanmaaya",
            live: "https://schoolofhealingandmeditation.com/"
        },
        {
            title: "Hybrid Renewable Energy Generation System",
            description: "Designing a hybrid renewable energy system combining solar, wind, and battery storage for uninterrupted power delivery. Currently optimizing intelligent energy flow and analyzing hybrid control mechanisms for real-world cost-effectiveness.",
            tech: ["Renewable Energy", "EMS", "Research"],
            image: "/Projects/electrosystem.png",
            github: "https://github.com/sanmaaya",
        },
        {
            title: "Drug Review Sentiment Analysis (Machine Learning Project)",
            description: "Analyzes patient drug reviews to classify sentiments using Machine Learning techniques like TF-IDF vectorization and Random Forest. Goal was to understand user experiences and identify patterns in medication feedback using Scikit-Learn pipelines.",
            tech: ["Python", "Scikit-Learn", "NLP", "Machine Learning"],
            image: "/Projects/sentiment-analysis.png",
            github: "https://github.com/sanmaaya",
        },
        {
            title: "TechnoGrowX 🌱 – Smart Farming & Disease Management",
            description: "Smart farming web platform utilizing IoT sensors and AI to monitor soil health and automate irrigation. Connects farmers with experts via dedicated portals for submitting symptom reports, reviewing diagnostics, and monitoring transparent analytics.",
            tech: ["PHP", "MySQL", "Tailwind CSS", "IoT", "AI"],
            image: "/Projects/technogrowX.png",
            github: "https://github.com/sanmaaya/TechnoGrowX",
            live: ""
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
                    <h2 className="heading-2 m-0">Featured Projects<span className="text-red-600">.</span></h2>
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
                                        <div className="relative h-48 md:h-56 w-full overflow-hidden group/img cursor-pointer" onClick={() => setSelectedProject(project)}>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover scale-110 transition-all duration-700 group-hover/img:scale-100 group-hover/img:opacity-60"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-red-900/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                                <div className="translate-y-6 group-hover/img:translate-y-0 opacity-0 group-hover/img:opacity-100 transition-all duration-500 delay-75 flex items-center justify-between">
                                                    <span className="text-white font-bold tracking-widest text-sm uppercase flex items-center gap-2">
                                                        <Info className="w-5 h-5 text-red-500" /> View Project Details
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            {/* Dedicated Image Zoom button - moved to top right */}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedImage(project.image);
                                                }}
                                                className="absolute top-4 right-4 p-2.5 bg-white/10 shadow-md hover:bg-red-600 backdrop-blur-md rounded-full text-white transition-all opacity-0 group-hover/img:opacity-100 z-10 scale-90 hover:scale-110"
                                                title="Zoom Image"
                                            >
                                                <ZoomIn className="w-5 h-5" />
                                            </button>
                                        </div>

                                        <div className="p-7 flex flex-col flex-1">
                                            <h3 
                                                className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors leading-tight cursor-pointer"
                                                onClick={() => setSelectedProject(project)}
                                            >
                                                {project.title}
                                            </h3>
                                            
                                            <div className="mb-6 flex-1">
                                                <p className="text-zinc-300 text-sm leading-relaxed line-clamp-3 inline">
                                                    {project.description}
                                                </p>
                                                <button 
                                                    onClick={() => setSelectedProject(project)}
                                                    className="inline-flex items-center gap-1 text-red-500 hover:text-red-300 text-sm font-medium ml-2 mt-1 transition-colors"
                                                >
                                                    Read more <ChevronDown className="w-4 h-4 -rotate-90" />
                                                </button>
                                            </div>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="text-[10px] font-mono font-medium text-zinc-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Bar - LinkedIn Style */}
                                            <div className="flex items-center gap-3 mt-auto pt-6 border-t border-white/10">
                                                {project.github && (
                                                    <a 
                                                        href={project.github} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-xs font-bold text-zinc-200 font-medium hover:text-white font-bold"
                                                    >
                                                        <Github className="w-4 h-4" /> Code
                                                    </a>
                                                )}
                                                {project.live && (
                                                    <a 
                                                        href={project.live} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-700/10 border border-red-600/20 hover:bg-red-700/20 hover:border-red-600/40 transition-all text-xs font-bold text-red-500 hover:text-red-300"
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
                            className="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 text-white font-bold font-bold hover:bg-red-600 transition-all hover:border-red-500 overflow-hidden shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-red-700/20 to-pink-/20 opacity-0 group-hover:opacity-100 transition-opacity" />
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

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                         className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d0d0d] border border-white/10 rounded-[2rem] shadow-2xl flex flex-col hide-scrollbar"
                            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                        >
                            <button
                                className="absolute top-5 right-5 p-2.5 bg-white/10 hover:bg-red-600 rounded-full text-white transition-all z-50 hover:rotate-90"
                                onClick={() => setSelectedProject(null)}
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Full project screenshot — browser chrome mockup, zoomed out */}
                            <div className="w-full bg-[#111] rounded-t-[2rem] overflow-hidden p-5 md:p-8" onClick={(e) => e.stopPropagation()}>
                                {/* Fake browser bar */}
                                <div className="bg-zinc-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                    <div className="flex items-center gap-3 px-4 py-3 bg-zinc-800/80 border-b border-white/5">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                        </div>
                                        <div className="flex-1 bg-zinc-700/60 rounded-full px-4 py-1 text-[11px] text-zinc-400 text-center truncate">
                                            {selectedProject.live || "localhost:5173"}
                                        </div>
                                    </div>
                                    {/* Full screenshot zoomed out with object-contain */}
                                    <div className="relative bg-zinc-950 overflow-hidden" style={{ height: '320px' }}>
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-contain object-top"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950/60 pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Details panel */}
                            <div className="p-6 sm:p-8 md:p-10 flex flex-col bg-gradient-to-b from-[#0d0d0d] to-[#110404]">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                                    {selectedProject.title}
                                </h2>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tech.map((t: string, i: number) => (
                                        <span key={i} className="text-[10px] sm:text-xs font-mono font-medium text-zinc-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-[10px] sm:text-xs font-bold text-red-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <BookOpen className="w-4 h-4" /> About This Project
                                    </h3>
                                    <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
                                    {selectedProject.github && (
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 min-w-[130px] flex items-center justify-center gap-2 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-bold text-white group"
                                        >
                                            <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" /> Source Code
                                        </a>
                                    )}
                                    {selectedProject.live && (
                                        <a
                                            href={selectedProject.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 min-w-[130px] flex items-center justify-center gap-2 p-3 sm:p-4 rounded-xl bg-red-700/80 border border-red-600 hover:bg-red-600 transition-all text-sm font-bold text-white group shadow-[0_0_20px_rgba(153,27,27,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]"
                                        >
                                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-1 transition-transform" /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                            className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-bold transition-colors"
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
