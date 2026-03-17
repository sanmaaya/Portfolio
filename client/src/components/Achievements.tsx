import { motion } from "framer-motion";
import { CheckCircle2, Award, Code2, Star, Cloud, Database } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

export default function Achievements() {
    const highlights = [
        {
            title: "Coding Milestone",
            desc: "Solved 200+ problems; Global Rank 22,861 on Codolio based on C Score.",
            icon: <Code2 className="w-6 h-6" />
        },
        {
            title: "Cloud & Architecture",
            desc: "NPTEL Elite Certified in Cloud Computing (Nov '25).",
            icon: <Cloud className="w-6 h-6" />
        },
        {
            title: "Data Science Excellence",
            desc: "From Data to Decisions Training - Obtained Grade 'A' for technical merit.",
            icon: <Database className="w-6 h-6" />
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
                    <h2 className="heading-2 m-0 text-right">Achievements & Highlights<span className="text-pink-500">.</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {highlights.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
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
                            <div className="relative h-full w-full glass-panel p-8 rounded-3xl flex flex-col gap-6 group hover:bg-white/5 transition-all overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="bg-gradient-to-br from-pink-500/20 to-pink-/20 p-4 rounded-2xl text-pink-400 group-hover:scale-110 group-hover:from-pink-500/30 group-hover:to-pink-/30 transition-all self-start shadow-inner">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors leading-tight">{item.title}</h3>
                                    <p className="text-zinc-400 text-lg leading-relaxed font-medium group-hover:text-zinc-300 transition-colors">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* HackerRank Skill Badges Moved Here */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mt-32"
            >
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="heading-2 m-0 text-white">HackerRank <span className="text-emerald-500">Badges.</span></h2>
                    <div className="flex-1 h-[1px] bg-white/10 hidden md:block"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    {[
                        { title: "C++", subtitle: "CPP", stars: 4, color: "bg-[#dce0e5] text-slate-800", isJava: false },
                        { title: "Java", subtitle: "Java", stars: 1, color: "bg-[#ffcba4] text-slate-900", isJava: true },
                        { title: "30", subtitle: "Days of Code", stars: 2, color: "bg-[#ffcba4] text-slate-900", isJava: false },
                        { title: "10", subtitle: "Days of JS", stars: 1, color: "bg-[#ffcba4] text-slate-900", isJava: false },
                        { title: "C", subtitle: "C language", stars: 2, color: "bg-[#ffcba4] text-slate-900", isJava: false },
                    ].map((badge, idx) => (
                        <motion.div
                            key={badge.subtitle}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="relative group cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-white/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div 
                                className={`relative w-36 h-40 md:w-40 md:h-44 flex flex-col items-center justify-center transition-transform group-hover:scale-105 shadow-2xl ${badge.color}`}
                                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                            >
                                <div 
                                    className="absolute inset-[3px] flex flex-col items-center justify-center py-4 px-2 border-[1.5px] border-black/10 bg-black/[0.03]" 
                                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                                >
                                    {badge.isJava ? (
                                        <div className="text-4xl mb-1 opacity-80">☕</div>
                                    ) : (
                                        <h3 className={`font-black mb-1 opacity-80 ${badge.title.length > 2 ? 'text-4xl' : 'text-5xl'}`}>{badge.title}</h3>
                                    )}
                                    <p className="font-bold text-sm tracking-wide text-slate-800 text-center leading-tight whitespace-pre-wrap">{badge.subtitle}</p>
                                    <div className="flex gap-1 mt-2">
                                        {[...Array(badge.stars)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 fill-slate-800 text-slate-800" strokeWidth={0} />
                                        ))}
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
