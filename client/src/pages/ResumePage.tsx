import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Trophy, ChevronLeft, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function ResumePage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors">
                <ChevronLeft className="w-4 h-4 mr-2" /> Back to Portfolio
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-white/10 pb-8 gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">Sanmaya M B</h1>
                        <h2 className="text-xl text-blue-400 font-medium">Full Stack Developer</h2>
                        <p className="text-zinc-400 mt-4 max-w-md">
                            You can download my resume to learn more about my experience, projects, and technical skills.
                        </p>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-medium flex items-center gap-3 hover:scale-105 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        <Download className="w-5 h-5" /> Download CV
                    </button>
                </div>

                <div className="space-y-12">
                    <section>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                            <span className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Briefcase className="w-5 h-5" /></span> Summary
                        </h3>
                        <p className="text-zinc-400 leading-relaxed text-lg">
                            B.Tech Computer Science student at Lovely Professional University focused on Full Stack Web Development. Experienced in designing responsive user interfaces, implementing backend APIs, and managing databases with React, Node.js, and Firebase. Also skilled in Data Science and Machine Learning with hands-on sentiment analysis models.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                            <span className="p-2 bg-green-500/10 rounded-lg text-green-400"><GraduationCap className="w-5 h-5" /></span> Education
                        </h3>
                        <div className="space-y-8">
                            <div className="relative pl-6 border-l border-zinc-800">
                                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-2 border-2 border-[#0a0a0a]"></div>
                                <h4 className="text-xl font-medium">B.Tech Computer Science and Engineering</h4>
                                <p className="text-blue-400 mt-1">Lovely Professional University, Punjab</p>
                                <p className="text-zinc-500 text-sm mt-1">Aug '23 - Present</p>
                                <div className="mt-4 flex flex-wrap gap-2 text-sm text-zinc-400">
                                    <span className="bg-white/5 px-3 py-1.5 rounded border border-white/5">CGPA: 7.3</span>
                                </div>
                            </div>
                            <div className="relative pl-6 border-l border-zinc-800">
                                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-2 border-2 border-[#0a0a0a]"></div>
                                <h4 className="text-xl font-medium">12th with Science</h4>
                                <p className="text-blue-400 mt-1">Presentation Higher Secondary School</p>
                                <p className="text-zinc-500 text-sm mt-1">Mar '21 - May '23</p>
                                <div className="mt-4 flex flex-wrap gap-2 text-sm text-zinc-400">
                                    <span className="bg-white/5 px-3 py-1.5 rounded border border-white/5">Percentage: 87.50%</span>
                                    <span className="bg-white/5 px-3 py-1.5 rounded border border-white/5">Kozhikode, Kerala</span>
                                </div>
                            </div>
                            <div className="relative pl-6 border-l border-zinc-800">
                                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-2 border-2 border-[#0a0a0a]"></div>
                                <h4 className="text-xl font-medium">10th with Science</h4>
                                <p className="text-blue-400 mt-1">Pallotti Hill Public School</p>
                                <p className="text-zinc-500 text-sm mt-1">Mar '20 - May '21</p>
                                <div className="mt-4 flex flex-wrap gap-2 text-sm text-zinc-400">
                                    <span className="bg-white/5 px-3 py-1.5 rounded border border-white/5">Percentage: 85%</span>
                                    <span className="bg-white/5 px-3 py-1.5 rounded border border-white/5">Kozhikode, Kerala</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                            <span className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><Award className="w-5 h-5" /></span> Training & Experience
                        </h3>
                        <div className="space-y-8">
                            <div className="relative pl-6 border-l border-zinc-800">
                                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[6.5px] top-2"></div>
                                <h4 className="text-xl font-medium">From Data to Decisions: A Hands-On Approach to Data Science</h4>
                                <p className="text-zinc-400 mt-3 leading-relaxed">Specialized in Data preprocessing, Exploratory data analysis, Feature engineering, and ML model development.</p>
                                <p className="text-blue-400 mt-3 font-medium flex items-center gap-2">✨ Project completed: Drug Review Sentiment Analysis</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                            <span className="p-2 bg-amber-500/10 rounded-lg text-amber-400"><Trophy className="w-5 h-5" /></span> Highlights
                        </h3>
                        <ul className="list-disc list-inside text-zinc-400 space-y-3 leading-relaxed text-lg">
                            <li>Hacker Rank Awards: 4-Star in C++, 2-Star in C, 2-Star in 30 Days of Code, Java, and 10 Days of JS.</li>
                            <li>Hacker Rank Verified Skills: JavaScript (Basic), CSS (Basic).</li>
                            <li>Coding Stats: Solved 200+ problems; Global Rank 22,861 on Codolio based on C Score.</li>
                            <li>NPTEL Certified in Cloud Computing (Nov '25).</li>
                        </ul>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
