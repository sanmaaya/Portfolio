import { motion } from "framer-motion";
import {
    SiReact, SiTailwindcss, SiNodedotjs, SiExpress,
    SiMongodb, SiFirebase, SiPython, SiCplusplus, SiC, SiMysql,
    SiJavascript, SiBootstrap, SiFigma, SiJupyter,
    SiGit, SiGithub
} from "react-icons/si";
import { FaJava, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { GlowingEffect } from "./ui/glowing-effect";

export default function Skills() {
    const categories = [
        {
            title: "Frontend Development",
            skills: [
                { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
                { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
                { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
            ]
        },
        {
            title: "Backend & Databases",
            skills: [
                { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
                { name: "Express.js", icon: <SiExpress className="text-white" /> },
                { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
                { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
                { name: "REST APIs", icon: <span className="font-mono text-blue-400 font-bold px-1">{'{}'}</span> },
            ]
        },
        {
            title: "Languages & Tools",
            skills: [
                { name: "Java", icon: <FaJava className="text-[#007396]" /> },
                { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
                { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
                { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
                { name: "SQL", icon: <FaDatabase className="text-slate-400" /> },
                { name: "Git & GitHub", icon: <SiGithub className="text-white" /> },
                { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
                { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
                { name: "Jupyter", icon: <SiJupyter className="text-[#F37626]" /> },
                { name: "Power BI", icon: <IoStatsChart className="text-[#F2C811]" /> },
            ]
        },
        {
            title: "Soft Skills",
            skills: [
                { name: "Problem Solving", icon: '🧩' },
                { name: "Team Management", icon: '🤝' },
                { name: "Event Management", icon: '📅' },
                { name: "Communication", icon: '🗣️' },
                { name: "Creative Thinking", icon: '💡' }
            ]
        }
    ];

    return (
        <section id="skills" className="section-padding relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-4 mb-16">
                    <div className="flex-1 h-[1px] bg-white/10 hidden md:block"></div>
                    <h2 className="heading-2 m-0 text-right">Technical Skills<span className="text-blue-500">.</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="relative p-[2px] rounded-3xl group transition-all"
                        >
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                borderWidth={3}
                            />
                            <div className="relative h-full w-full glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors overflow-hidden">
                                <h3 className="text-xl font-bold mb-6 text-zinc-200 group-hover:text-blue-400 transition-colors">{cat.title}</h3>
                                <div className="flex flex-wrap gap-4">
                                    {cat.skills.map((skill, i) => (
                                        <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-full hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all shadow-sm">
                                            <span className="text-xl flex items-center justify-center w-6 h-6">{skill.icon}</span>
                                            <span className="text-sm font-medium text-zinc-300">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
