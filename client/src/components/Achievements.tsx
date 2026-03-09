import { motion } from "framer-motion";
import { CheckCircle2, Award, Code2, Star } from "lucide-react";

export default function Achievements() {
    const highlights = [
        {
            title: "Hacker Rank Awards",
            desc: "4-Star in C++, 2-Star in C, 2-Star in 30 Days of Code, Java, and 10 Days of JS.",
            icon: <Star className="w-6 h-6" />
        },
        {
            title: "Verified Skills",
            desc: "Hacker Rank Certified in JavaScript (Basic) and CSS (Basic).",
            icon: <CheckCircle2 className="w-6 h-6" />
        },
        {
            title: "Coding Milestone",
            desc: "Solved 200+ problems; Global Rank 22,861 on Codolio based on C Score.",
            icon: <Code2 className="w-6 h-6" />
        }
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {highlights.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-panel p-8 rounded-3xl flex flex-col gap-6 group hover:border-blue-500/50 transition-all hover:bg-white/5 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-4 rounded-2xl text-blue-400 group-hover:scale-110 group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-all self-start shadow-inner">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">{item.title}</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed font-medium group-hover:text-zinc-300 transition-colors">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
