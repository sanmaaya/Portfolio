import { motion } from "framer-motion";
import { GlowingEffect } from "./ui/glowing-effect";

export default function Experience() {
    const experiences = [
        {
            role: "Software Engineering Virtual Experience",
            company: "Skyscanner | Forage",
            location: "Remote",
            date: "Jan 2026 - Feb 2026",
            points: [
                "Constructed RESTful microservices utilizing Java and Dropwizard, ensuring structured API endpoints via YAML configuration.",
                "Developed a modular Android application in Kotlin by integrating Backpack UI components and React.js features.",
                "Translated Figma UI designs into technical specifications while managing project tasks through JIRA user stories."
            ],
            certificate: "/certifications/skyscanner-swe virtual.png"
        },
        {
            role: "Solutions Architecture Job Simulation",
            company: "AWS | Forage",
            location: "Remote",
            date: "Feb 2026",
            points: [
                "Practical task-based cloud infrastructure simulation focused on AWS.",
                "Designed simple, scalable, and highly-available hosting architectures.",
                "Implemented AWS best practices for availability and reliability."
            ],
            certificate: "/certifications/aws job simulation.png"
        }
    ];

    return (
        <section id="experience" className="section-padding relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-4 mb-16">
                    <div className="flex-1 h-[1px] bg-white/10 hidden md:block"></div>
                    <h2 className="heading-2 m-0 text-right">Virtual Experience & Internships<span className="text-red-600">.</span></h2>
                </div>

                <div className="relative border-l border-zinc-800 ml-4 md:ml-0 md:pl-8 space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="relative pl-6 md:pl-0"
                        >
                            {/* Timeline dot */}
                            <div className="absolute w-4 h-4 rounded-full bg-red-600 border-4 border-background -left-[1.35rem] md:-left-[2.5rem] mt-1.5 z-10" />

                            <div className="relative p-[2px] rounded-3xl group">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div className="relative glass-panel p-8 rounded-3xl hover:bg-white/[0.02] transition-colors">
                                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold">{exp.role}</h3>
                                            <div className="text-red-500 font-medium text-lg mt-1">{exp.company}</div>
                                        </div>
                                        <div className="text-zinc-400 text-sm font-mono mt-2 md:mt-0 tracking-wide flex flex-col items-start md:items-end">
                                            <span>{exp.date} • {exp.location}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col lg:flex-row gap-8 mt-4">
                                        <ul className="list-disc list-outside ml-4 mt-2 text-zinc-300 space-y-3 leading-relaxed flex-1">
                                            {exp.points.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>

                                        {exp.certificate && (
                                            <div className="relative group/cert rounded-xl overflow-hidden border border-white/10 w-full lg:w-80 shadow-2xl shrink-0 self-start">
                                                <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover/cert:opacity-100 transition-opacity z-10 pointer-events-none" />
                                                <img 
                                                    src={exp.certificate} 
                                                    alt={`${exp.role} Certificate`} 
                                                    className="w-full h-auto object-cover transform group-hover/cert:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
