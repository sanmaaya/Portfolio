import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "WORK Balance – Premium Employee & Team Management",
            description: "Architected a full-stack real-time management system with Role-Based Access Control (RBAC). Spearheaded the integration of Socket.io for peer-to-peer instant messaging and designed an operational command center including a Risk Monitor.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
            github: "https://github.com/sanmaaya",
            live: ""
        },
        {
            title: "Paise Bachaaoo – Premium Financial Command Centre",
            description: "Engineered a high-end finance tracker that tracks real-time global market benchmarks. Implemented a 'Sync to Vault' architecture using Firebase Firestore to maintain data integrity and crafted a premium Glassmorphic UI.",
            tech: ["React 18", "Firebase", "Recharts", "JavaScript", "Tailwind CSS"],
            github: "https://github.com/sanmaaya",
        },
        {
            title: "Electrosystem – Hybrid Renewable Energy Platform",
            description: "Architected a full-stack web platform to simulate and evaluate hybrid renewable energy systems. Engineered complex energy-flow logic and designed modular simulation workflows that enable data-driven analysis.",
            tech: ["Node.js", "Express.js", "MongoDB", "JavaScript", "HTML", "CSS"],
            github: "https://github.com/sanmaaya",
        },
        {
            title: "SOHAM – Pranic Healing & Meditation (Client Project)",
            description: "Architected a professional, client-ready web platform using PHP and MySQL to manage official guidelines. Engineered a custom registration workflow with automated email notifications.",
            tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
            github: "https://github.com/sanmaaya",
            live: ""
        },
        {
            title: "TechnoGrowX – Smart Agriculture Support Platform",
            description: "Developed a robust three-tier architecture featuring specialized portals for Farmers, Experts, and Admins. Implemented a report-submission engine and integrated a secure Node.js authentication system.",
            tech: ["Node.js", "MySQL", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
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
