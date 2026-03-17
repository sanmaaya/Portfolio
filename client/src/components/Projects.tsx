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
            description: "Full-stack workforce management platform designed to streamline team coordination, task monitoring, and internal communication in organizations. Developed a real-time employee management system implementing Role-Based Access Control (RBAC) for Admin, Manager, and Employee roles. Built peer-to-peer instant messaging using Socket.io with live user presence indicators and unread message counters. Designed a centralized Operational Command Center including a Risk Monitor for overdue tasks and a synchronized company-wide Leave Calendar. Implemented scalable REST APIs and modular backend architecture for efficient data handling and real-time updates. Delivered a modern responsive UI with smooth animations and optimized component structure.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "REST APIs", "Full-Stack Development"],
            image: "/Projects/smart-study planner.png",
            github: "https://github.com/sanmaaya", 
            live: ""
        },
        {
            title: "Paise Bachaaoo – Premium Financial Command Centre",
            description: "Advanced financial management and market-tracking dashboard designed to help users monitor personal finances alongside global financial indicators. Built a real-time financial tracking platform integrating global market benchmarks such as the DXY Index and EUR/USD exchange rate. Designed a multi-session data synchronization architecture using Firebase Firestore to securely maintain user financial records. Developed interactive analytics dashboards using Recharts for visualizing savings trends, expenses, and financial insights. Engineered a premium glassmorphic UI system with five dynamic themes and proximity-based kinetic animations for enhanced UX. Implemented secure authentication and scalable state management for reliable multi-device usage.",
            tech: ["React.js", "Firebase", "JavaScript", "Tailwind CSS", "Front-End Development"],
            image: "/Projects/finace-tracker.png",
            github: "https://github.com/sanmaaya/Finance-Tracker",
            live: "https://paisa-lemon.vercel.app/"
        },
        {
            title: "SOHAM – Pranic Healing & Meditation Platform",
            description: "Soham is a modern web platform designed to provide a structured and accessible space for Pranic Healing learners and meditation enthusiasts. The aim of the project was to create a calm, intuitive, and visually clean digital environment where users can explore healing courses, understand guidelines, and register for sessions seamlessly. I designed and developed the entire platform from scratch, including the UI layout, page structure, navigation flow, and responsive design. The website features dedicated sections for course listings, healing principles, and registration tools, all crafted to maintain clarity and easy usability. The project reflects my skills in frontend development, UI/UX thinking, and creating real-world, purpose-driven web applications. It combines aesthetic simplicity with functional design to offer a smooth experience aligned with the peaceful nature of meditation practices.",
            tech: ["HTML", "CSS", "JavaScript", "UI/UX Design", "Responsive Web Design"],
            image: "/Projects/soham.png",
            github: "https://github.com/sanmaaya",
            live: ""
        },
        {
            title: "Drug Review Sentiment Analysis (Machine Learning Project)",
            description: "This project focuses on analyzing patient drug reviews to automatically classify their sentiments as positive or negative using Machine Learning techniques. The goal was to understand user experiences, identify patterns in medication feedback, and build a reliable sentiment prediction system. The workflow included dataset preprocessing, handling missing values, cleaning text, and applying NLP techniques such as tokenization, stop-word removal, and TF-IDF vectorization. Multiple machine learning models were trained and compared, including Logistic Regression and Random Forest, to determine the best-performing approach. As the evaluation lead (Member 4), my role involved loading pre-trained .pkl files, testing models on unseen data, generating predictions, and calculating key performance metrics such as accuracy, precision, recall, F1-score, and confusion matrices. I also prepared the final output files containing predictions and performance reports. This project demonstrates practical experience in machine learning pipelines, model evaluation, and real-world text-based sentiment classification.",
            tech: ["Python", "Machine Learning", "NLP", "Scikit-Learn", "Data Analysis"],
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
            github: "https://github.com/sanmaaya",
        },
        {
            title: "Hybrid Renewable Energy Generation System",
            description: "This project focuses on designing a hybrid renewable energy system that combines solar power, wind energy, and battery storage solutions to improve overall energy efficiency and reliability. The goal is to develop a sustainable system capable of delivering uninterrupted power by intelligently switching between multiple renewable sources based on availability and demand. Our ongoing work includes understanding the energy flow, optimizing power output, designing the hybrid control mechanism, and analyzing battery integration for stable energy storage. The project will also evaluate system performance, cost-effectiveness, and real-world feasibility. This is an active project and is currently in the design and research phase, with more components and technical implementation being developed.",
            tech: ["Renewable Energy Systems", "Energy Management Systems (EMS)", "Research & Analysis"],
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
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
