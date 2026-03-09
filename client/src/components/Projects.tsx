import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "Employee Leave Management System",
            description: "A full-stack web application that simulates a real company HR workflow for managing employee leave requests. Includes role-based dashboards, secure auth, and protected routing.",
            tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
            github: "https://github.com/",
            live: "https://example.com"
        },
        {
            title: "Drug Review Sentiment Analysis",
            description: "A machine learning project that analyzes user drug reviews and classifies them into positive, negative, or neutral sentiments using feature extraction with TF-IDF.",
            tech: ["Python", "Scikit-learn", "Pandas", "Power BI"],
            github: "https://github.com/",
        },
        {
            title: "Academic Performance Tracker",
            description: "A personalized web application designed to track academic performance across different semesters. Evaluates marks tracking with custom weightage and automatic CGPA generation.",
            tech: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript", "Chart.js"],
            github: "https://github.com/",
            live: "https://example.com"
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
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-panel p-8 rounded-3xl flex flex-col group transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-500/30"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all">
                                    <Folder className="w-8 h-8" strokeWidth={1.5} />
                                </div>
                                <div className="flex items-center gap-3">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10 relative">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10 relative">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors leading-snug">{project.title}</h3>
                            <p className="text-zinc-400 leading-relaxed mb-8 flex-1">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs font-mono font-medium text-zinc-300 bg-black/40 border border-white/5 px-3 py-1.5 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
