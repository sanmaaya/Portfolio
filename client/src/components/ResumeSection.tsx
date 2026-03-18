import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";

export default function ResumeSection() {
    return (
        <section id="resume" className="section-padding relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="glass-panel p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10"
            >
                <div>
                    <h2 className="text-3xl md:text-4xl font-black mb-4 flex items-center gap-3 text-white">
                        <FileText className="w-8 h-8 text-red-500" />
                        My Resume
                    </h2>
                    <p className="text-zinc-300 text-lg max-w-2xl">
                        Looking for a detailed breakdown of my professional journey, academic background, and core competencies? You can view or download my complete resume here.
                    </p>
                </div>
                <Link
                    to="/resume"
                    className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold flex items-center gap-3 hover:bg-red-600 transition-all cursor-pointer whitespace-nowrap shadow-lg border border-white/10 hover:border-red-500 group"
                >
                    View Full Resume
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>
        </section>
    );
}
