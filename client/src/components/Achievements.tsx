import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Achievements() {
    const highlights = [
        "Hacker Rank Awards: 4-Star in C++, 2-Star in C, 2-Star in 30 Days of Code, Java, and 10 Days of JS.",
        "Hacker Rank Verified Skills: JavaScript (Basic), CSS (Basic).",
        "Coding Stats: Solved 200+ problems; Global Rank 22,861 on Codolio based on C Score."
    ];

    return (
        <section id="achievements" className="section-padding relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-4 mb-16">
                    <div className="flex-1 h-[1px] bg-white/10 hidden md:block"></div>
                    <h2 className="heading-2 m-0 text-right">Achievements & Highlights<span className="text-blue-500">.</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-panel p-6 md:p-8 rounded-2xl flex items-start gap-5 group hover:border-blue-500/30 transition-all hover:bg-white/5"
                        >
                            <div className="bg-blue-500/10 p-2 rounded-xl text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <p className="text-zinc-300 leading-relaxed font-medium text-lg">{item}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
