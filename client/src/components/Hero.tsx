import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { SparklesCore } from "./ui/sparkles";

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <SparklesCore
                    id="tsparticleshero"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor={["#ffffff", "#dc2626"]}
                    speed={1}
                />
                {/* Heartbeat Pulse Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-800/20 rounded-full blur-[120px] animate-heartbeat"></div>
                
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/15 rounded-full blur-[128px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-white/5 rounded-full blur-[128px]" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm inline-flex items-center gap-3"
                >
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
                    <span className="text-sm font-semibold text-zinc-100 uppercase tracking-widest">Open to new opportunities</span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Hi, I'm <span className="text-gradient">Sanmaya M B</span>
                </motion.h1>

                <motion.h2
                    className="text-2xl md:text-3xl font-light text-zinc-200 mb-6 max-w-3xl leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    Full Stack Developer | Building Scalable and User-Focused <span className="text-red-600 font-bold">Web Applications</span>
                </motion.h2>



                <motion.div
                    className="flex flex-col sm:flex-row items-center gap-4 mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                    <ScrollLink
                        to="projects"
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="group px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-all cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                        View Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </ScrollLink>
                    <Link
                        to="/resume"
                        className="px-8 py-4 bg-black border border-white/10 text-white rounded-full font-bold flex items-center gap-3 hover:bg-white/5 transition-all cursor-pointer shadow-xl"
                    >
                        <Download className="w-5 h-5" /> Download Resume
                    </Link>
                    <ScrollLink
                        to="contact"
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="px-8 py-4 bg-red-800 text-white rounded-full font-bold flex items-center gap-3 hover:bg-red-900 transition-all cursor-pointer shadow-[0_0_30px_rgba(153,27,27,0.4)] border border-red-700/50"
                    >
                        Contact Me
                    </ScrollLink>
                </motion.div>
            </div>

            {/* Decorative vertical line */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
            >
                <span className="text-xs uppercase tracking-widest text-slate-500">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"></div>
            </motion.div>
        </section>
    );
}
