import { motion } from "framer-motion";
import { BookOpen, Award } from "lucide-react";

export default function Certifications() {
    const certs = [
        {
            title: "From Data to Decisions: A Hands-On Approach to Data Science",
            details: [
                "Data preprocessing and cleaning",
                "Exploratory data analysis",
                "Feature engineering",
                "Machine learning model development",
                "Model evaluation and interpretation"
            ],
            project: "Project completed: Drug Review Sentiment Analysis"
        }
    ];

    return (
        <section id="certifications" className="section-padding relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="heading-2 m-0">Training & Certifications<span className="text-blue-500">.</span></h2>
                    <div className="flex-1 h-[1px] bg-white/10 hidden md:block"></div>
                </div>

                <div className="space-y-8">
                    {certs.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-panel p-8 md:p-10 rounded-3xl group hover:border-blue-500/30 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row items-start gap-8">
                                <div className="bg-indigo-500/10 p-5 rounded-2xl text-indigo-400 hidden sm:block shadow-inner">
                                    <Award className="w-10 h-10" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-8 text-white group-hover:text-blue-400 transition-colors leading-snug">{cert.title}</h3>
                                    <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">Key Learning Areas</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
                                        {cert.details.map((detail, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <BookOpen className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                                                <span className="text-zinc-300 font-medium">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/10 text-blue-400 rounded-lg font-medium border border-blue-500/20">
                                        ✨ {cert.project}
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
