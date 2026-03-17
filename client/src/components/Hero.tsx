import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { SparklesCore } from "./ui/sparkles";

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 z-0">
                <SparklesCore
                    id="tsparticleshero"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor={["#ec4899", "#db2777", "#94a3b8"]}
                    speed={1}
                />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-100/50 rounded-full blur-[128px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-pink-50/50 rounded-full blur-[128px]" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 p-3 bg-pink-50 border border-pink-100 rounded-2xl backdrop-blur-sm inline-flex items-center gap-3"
                >
                    <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping"></span>
                    <span className="text-sm font-semibold text-pink-700">Open to new opportunities</span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Hi, I'm <span className="text-gradient">Sanmaya M B</span>
                </motion.h1>

                <motion.h2
                    className="text-2xl md:text-3xl font-medium text-slate-600 mb-6 max-w-3xl leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    Full Stack Developer | Building Scalable and User-Focused <span className="text-pink-600 font-bold">Web Applications</span>
                </motion.h2>

                <motion.p
                    className="text-lg text-slate-500 mb-10 max-w-2xl font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                    I am a Computer Science student at Lovely Professional University passionate about turning ideas into functional, user-friendly digital products using React, Node.js, and Firebase.
                </motion.p>

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
                        className="group px-8 py-4 bg-slate-900 text-slate-900 font-bold rounded-full font-semibold flex items-center gap-3 hover:scale-105 transition-all cursor-pointer shadow-lg hover:shadow-pink-200"
                    >
                        View Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </ScrollLink>
                    <Link
                        to="/resume"
                        className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-semibold flex items-center gap-3 hover:bg-slate-50 transition-all cursor-pointer shadow-sm"
                    >
                        <Download className="w-5 h-5" /> Download Resume
                    </Link>
                    <ScrollLink
                        to="contact"
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="px-8 py-4 bg-pink-100 text-pink-700 border border-pink-200 rounded-full font-semibold flex items-center gap-3 hover:bg-pink-200 transition-all cursor-pointer"
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
