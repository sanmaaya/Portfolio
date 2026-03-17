import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
    const education = [
        {
            degree: "B.Tech Computer Science and Engineering",
            institution: "Lovely Professional University, Punjab",
            date: "Aug '23 - Present",
            focus: ["CGPA: 7.3"]
        },
        {
            degree: "12th with Science",
            institution: "Presentation Higher Secondary School",
            date: "Mar '21 - May '23",
            focus: ["Percentage: 87.50%", "Kozhikode, Kerala"]
        },
        {
            degree: "10th with Science",
            institution: "Pallotti Hill Public School",
            date: "Mar '20 - May '21",
            focus: ["Percentage: 85%", "Kozhikode, Kerala"]
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
                    <h2 className="heading-2 m-0 text-right">Education<span className="text-pink-500">.</span></h2>
                </div>

                <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-0 md:pl-0">
                    <div className="space-y-6">
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
                                <div className="absolute w-3 h-3 rounded-full border-[3px] border-background -left-[6.5px] top-6 bg-pink-500 animate-pulse" />

                                <div className="glass-panel p-5 md:p-6 rounded-3xl hover:border-pink-500/30 transition-all flex flex-col gap-4">
                                    <div>
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                                            <div className="flex items-center gap-2 text-xs font-mono text-pink-400 uppercase tracking-widest">
                                                <GraduationCap className="w-4 h-4" />
                                                Academic Background
                                            </div>
                                            <div className="text-xs font-mono text-zinc-500 tracking-wider">
                                                {item.date}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-1.5 text-white">{item.degree}</h3>
                                        <div className="text-base text-zinc-400 font-medium">{item.institution}</div>
                                    </div>

                                    <div className="mt-2 pt-4 border-t border-white/10">
                                        <h4 className="text-xs font-medium text-zinc-500 mb-3 uppercase tracking-wider">Relevant Focus Areas</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {item.focus.map((f, i) => (
                                                <span key={i} className="px-3 py-1.5 bg-white/5 rounded-full text-xs font-medium text-zinc-300 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
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
