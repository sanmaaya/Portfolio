import { motion } from "framer-motion";
import { Code2, Cpu, Globe2, Sparkles, MapPin, Languages } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

export default function About() {
    const cards = [
        {
            icon: <Globe2 className="w-6 h-6 text-red-500" />,
            title: "End-to-End Applications",
            desc: "From designing responsive user interfaces to implementing backend APIs and databases."
        },
        {
            icon: <Sparkles className="w-6 h-6 text-red-" />,
            title: "Machine Learning Concepts",
            desc: "Explored sentiment analysis and natural language processing techniques in Python."
        },
        {
            icon: <Code2 className="w-6 h-6 text-purple-400" />,
            title: "Problem Solver",
            desc: "Passionate about resolving real problems through clean code practices and scalable architecture."
        },
        {
            icon: <Cpu className="w-6 h-6 text-slate-600" />,
            title: "Continuous Learner",
            desc: "Always exploring modern development tools and seeking opportunities to grow."
        }
    ];

    return (
        <section id="about" className="section-padding relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="heading-2 m-0">About Me<span className="text-red-600">.</span></h2>
                    <div className="flex-1 h-[1px] bg-slate-200/50 hidden md:block"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                        <p>
                            I am a B.Tech Computer Science student at <strong className="text-slate-900 font-bold font-medium">Lovely Professional University</strong>, currently focused on Full Stack Web Development. I enjoy designing and developing web applications that are both functional and visually intuitive.
                        </p>
                        <p>
                            My primary interest lies in building complete end-to-end applications—from designing responsive user interfaces to implementing backend APIs and managing databases.
                        </p>
                        <p>
                            Alongside web development, I have also explored data science and machine learning, where I worked on a sentiment analysis model for drug reviews using natural language processing techniques. I enjoy solving real problems through technology and continuously improving my understanding of modern development tools, scalable architecture, and clean code practices.
                        </p>
                        <p>
                            Currently, I am seeking opportunities to grow as a developer through challenging projects, collaborations, and internships.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-slate-200">
                            <div className="flex items-center gap-3 bg-red-600/5 px-4 py-2.5 rounded-xl border border-red-600/10 hover:bg-red-600/10 transition-colors">
                                <div className="p-1.5 bg-red-600/10 rounded-lg">
                                    <MapPin className="w-4 h-4 text-red-600" />
                                </div>
                                <span className="text-sm font-semibold text-slate-700">Kozhikode, Kerala (India)</span>
                            </div>
                            <div className="flex items-center gap-3 bg-slate-100/80 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-200/80 transition-colors">
                                <div className="p-1.5 bg-slate-200 rounded-lg">
                                    <Languages className="w-4 h-4 text-slate-700" />
                                </div>
                                <span className="text-sm font-semibold text-slate-700">English, Malayalam, Hindi</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {cards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="relative p-[2px] rounded-2xl group transition-all"
                            >
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div className="relative h-full w-full glass-panel p-6 rounded-2xl hover:bg-slate-100/50 transition-colors cursor-default">
                                    <div className="w-12 h-12 bg-slate-100/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
