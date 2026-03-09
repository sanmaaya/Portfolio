import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
    const education = [
        {
            degree: "Bachelor of Technology – Computer Science & Engineering",
            institution: "Lovely Professional University, Punjab, India",
            focus: ["Web Development", "Data Science", "Software Engineering", "Database Management"]
        }
    ];

    return (
        <section id="education" className="section-padding relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-4 mb-16">
                    <div className="flex-1 h-[1px] bg-white/10 hidden md:block"></div>
                    <h2 className="heading-2 m-0 text-right">Education<span className="text-blue-500">.</span></h2>
                </div>

                <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-0 md:pl-0">
                    <div className="space-y-12">
                        {education.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                className="relative pl-8 md:pl-12"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute w-4 h-4 rounded-full border-4 border-background -left-[9px] top-6 bg-blue-500 animate-pulse" />

                                <div className="glass-panel p-8 rounded-3xl hover:border-blue-500/30 transition-all flex flex-col gap-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4 text-sm font-mono text-blue-400 uppercase tracking-widest">
                                            <GraduationCap className="w-5 h-5" />
                                            Academic Background
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 text-white">{item.degree}</h3>
                                        <div className="text-xl text-zinc-400 font-medium">{item.institution}</div>
                                    </div>

                                    <div className="mt-4 pt-6 border-t border-white/10">
                                        <h4 className="text-sm font-medium text-zinc-500 mb-4 uppercase tracking-wider">Relevant Focus Areas</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {item.focus.map((f, i) => (
                                                <span key={i} className="px-5 py-2.5 bg-white/5 rounded-full text-sm font-medium text-zinc-300 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
