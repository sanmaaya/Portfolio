import { motion } from "framer-motion";
import { Code2, Cpu, Globe2, Sparkles } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

export default function About() {
    const cards = [
        {
            icon: <Globe2 className="w-6 h-6 text-pink-400" />,
            title: "End-to-End Applications",
            desc: "From designing responsive user interfaces to implementing backend APIs and databases."
        },
        {
            icon: <Sparkles className="w-6 h-6 text-pink-" />,
            title: "Machine Learning Concepts",
            desc: "Explored sentiment analysis and natural language processing techniques in Python."
        },
        {
            icon: <Code2 className="w-6 h-6 text-purple-400" />,
            title: "Problem Solver",
            desc: "Passionate about resolving real problems through clean code practices and scalable architecture."
        },
        {
            icon: <Cpu className="w-6 h-6 text-zinc-400" />,
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
                    <h2 className="heading-2 m-0">About Me<span className="text-pink-500">.</span></h2>
                    <div className="flex-1 h-[1px] bg-white/10 hidden md:block"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
                        <p>
                            I am a B.Tech Computer Science student at <strong className="text-white font-medium">Lovely Professional University</strong>, currently focused on Full Stack Web Development. I enjoy designing and developing web applications that are both functional and visually intuitive.
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
                                <div className="relative h-full w-full glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors cursor-default">
                                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed">{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
