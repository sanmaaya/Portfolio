import { motion } from "framer-motion";

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
            ]
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
                    <h2 className="heading-2 m-0 text-right">Professional Experience<span className="text-blue-500">.</span></h2>
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
                            <div className="absolute w-4 h-4 rounded-full bg-blue-500 border-4 border-background -left-[1.35rem] md:-left-[2.5rem] mt-1.5 z-10" />

                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                                    <div className="text-blue-400 font-medium text-lg mt-1">{exp.company}</div>
                                </div>
                                <div className="text-zinc-500 text-sm font-mono mt-2 md:mt-0 tracking-wide">
                                    {exp.date} • {exp.location}
                                </div>
                            </div>

                            <ul className="list-disc list-outside ml-4 mt-6 text-zinc-400 space-y-3 leading-relaxed">
                                {exp.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
