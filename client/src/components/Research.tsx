import { motion } from "framer-motion";
import { BookOpenText } from "lucide-react";

export default function Research() {
    return (
        <section id="research" className="section-padding relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-4 mb-16">
                    <div className="flex-1 h-[1px] bg-white/10 hidden md:block"></div>
                    <h2 className="heading-2 m-0 text-white font-bold text-right">Research & <span className="text-red-600">Publications.</span></h2>
                </div>

                <div className="glass-panel p-8 md:p-12 rounded-3xl text-center border border-white/10 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6">
                        <BookOpenText className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Exploring New Horizons</h3>
                    <p className="text-zinc-400 max-w-xl mx-auto leading-relaxed">
                        I am currently investigating cutting-edge topics in software engineering, machine learning, and system architecture. Future publications and research abstracts will be listed in this section.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
