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
                    <h2 className="heading-2 m-0">Featured Projects<span className="text-pink-500">.</span></h2>
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
                                        <div className="relative h-48 w-full overflow-hidden group/img cursor-pointer" onClick={() => setSelectedProject(project)}>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-pink-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 backdrop-blur-[2px]">
                                                <div className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white shadow-2xl transform scale-90 group-hover/img:scale-100 transition-all duration-300">
                                                    <Info className="w-8 h-8" />
                                                </div>
                                                <span className="text-white font-bold tracking-wider text-sm translate-y-4 group-hover/img:translate-y-0 opacity-0 group-hover/img:opacity-100 transition-all duration-300">
                                                    View Details
                                                </span>
                                            </div>
                                            
                                            {/* Dedicated Image Zoom button - moved to top right */}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedImage(project.image);
                                                }}
                                                className="absolute top-4 right-4 p-2.5 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white/80 hover:text-white transition-all opacity-0 group-hover/img:opacity-100 z-10"
                                                title="Zoom Image"
                                            >
                                                <ZoomIn className="w-5 h-5" />
                                            </button>
                                        </div>

                                        <div className="p-7 flex flex-col flex-1">
                                            <h3 
                                                className="text-xl font-bold mb-3 group-hover:text-pink-400 transition-colors leading-tight cursor-pointer"
                                                onClick={() => setSelectedProject(project)}
                                            >
                                                {project.title}
                                            </h3>
                                            
                                            <div className="mb-6 flex-1">
                                                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 inline">
                                                    {project.description}
                                                </p>
                                                <button 
                                                    onClick={() => setSelectedProject(project)}
                                                    className="inline-flex items-center gap-1 text-pink-400 hover:text-pink-300 text-sm font-medium ml-2 mt-1 transition-colors"
                                                >
                                                    Read more <ChevronDown className="w-4 h-4 -rotate-90" />
                                                </button>
                                            </div>

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
                                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-pink-600/10 border border-pink-500/20 hover:bg-pink-600/20 hover:border-pink-500/40 transition-all text-xs font-bold text-pink-400 hover:text-pink-300"
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
                            className="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 text-white font-bold hover:bg-pink-500 transition-all hover:border-pink-400 overflow-hidden shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-pink-/20 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-10 hide-scrollbar"
                            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                        >
                            <button
                                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors z-10"
                                onClick={() => setSelectedProject(null)}
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="w-full h-48 sm:h-80 rounded-2xl overflow-hidden mb-8 relative border border-white/10">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">{selectedProject.title}</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((t: string, i: number) => (
                                            <span key={i} className="text-[10px] sm:text-xs font-mono font-medium text-pink-300 bg-pink-900/30 border border-pink-500/30 px-3 py-1.5 rounded-full backdrop-blur-md">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-invert max-w-none">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-pink-400" /> About Project
                                </h3>
                                <div className="text-zinc-300 leading-relaxed text-sm sm:text-base space-y-4 whitespace-pre-line">
                                    {selectedProject.description}
                                </div>
                            </div>

                            <div className="mt-10 flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
                                {selectedProject.github && (
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-bold text-white group"
                                    >
                                        <Github className="w-5 h-5 group-hover:scale-110 transition-transform" /> View Source
                                    </a>
                                )}
                                {selectedProject.live && (
                                    <a
                                        href={selectedProject.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3.5 rounded-xl bg-pink-600 border border-pink-500 hover:bg-pink-500 transition-all text-sm font-bold text-white group shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                                    >
                                        <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" /> Live Demo
                                    </a>
                                )}
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
