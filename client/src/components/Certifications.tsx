import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Award, Star, ShieldCheck, ExternalLink, X, ZoomIn, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { GlowingEffect } from "./ui/glowing-effect";

export default function Certifications() {
    const [selectedCert, setSelectedCert] = useState<any>(null);
    const [showAll, setShowAll] = useState(false);

    const certs = [
        {
            title: "JavaScript (Basic)",
            issuer: "HackerRank",
            date: "Feb 2026",
            details: [
                "Tested fundamental knowledge of JavaScript",
                "Functions, Objects, Arrays, and Error Handling",
                "Verified experiential learning via HackerRank assessments",
                "Credential ID: 21BEEA1C1FDA"
            ],
            icon: <Star className="w-8 h-8" />,
            color: "blue",
            image: "/certifications/javascript.png"
        },
        {
            title: "CSS (Basic)",
            issuer: "HackerRank",
            date: "Feb 2026",
            details: [
                "Tested fundamental knowledge of CSS styling",
                "Selectors, Box Model, Flexbox, Layouts",
                "Verified experiential learning via HackerRank assessments",
                "Credential ID: 237C4C76A442"
            ],
            icon: <ShieldCheck className="w-8 h-8" />,
            color: "emerald",
            image: "/certifications/css basics.png"
        },
        {
            title: "The Science of Well-Being",
            issuer: "Yale University (Coursera)",
            date: "Feb 2026",
            details: [
                "Psychological science of happiness and productivity",
                "Implementing behavioral changes for performance",
                "Evidence-based strategies for mental well-being",
                "Taught by Professor Laurie Santos"
            ],
            icon: <Star className="w-8 h-8" />,
            color: "blue",
            image: "/certifications/yale- coursera science of well being.png"
        },
        {
            title: "Computational Theory: Turing, Transducers, & Complexity",
            issuer: "Skillsoft",
            date: "Dec 2025",
            details: [
                "Advanced computational theory and complexity classes",
                "Exploration of Turing machines and transducers",
                "Verified experiential learning via Skillsoft",
                "Professional course completion"
            ],
            icon: <BookOpen className="w-8 h-8" />,
            color: "emerald",
            image: "/badges/skillsoft-turing.png"
        },
        {
            title: "Computational Theory: Language Principle & Automata",
            issuer: "Skillsoft",
            date: "Nov 2025",
            details: [
                "Foundations of finite automata theory",
                "Language principles and formal grammar",
                "Verified experiential learning via Skillsoft",
                "Professional course completion"
            ],
            icon: <BookOpen className="w-8 h-8" />,
            color: "emerald",
            image: "/badges/skillsoft-automata.png"
        },
        {
            title: "Building Neural Networks: Development Principles",
            issuer: "Skillsoft",
            date: "Nov 2025",
            details: [
                "Core principles of neural network development",
                "Deep learning foundations and architectures",
                "Verified experiential learning via Skillsoft",
                "Professional course completion"
            ],
            icon: <BookOpen className="w-8 h-8" />,
            color: "emerald",
            image: "/badges/skillsoft-neural-networks.png"
        },
        {
            title: "Cloud Computing (NPTEL Elite)",
            issuer: "NPTEL (IIT Kharagpur)",
            date: "Oct 2025",
            details: [
                "12-week intensive course on cloud infrastructure",
                "Scored Elite certification status (62% consolidated)",
                "Mastery of SaaS, PaaS, and IaaS service models",
                "Funded by MoE, Govt. of India"
            ],
            icon: <Award className="w-8 h-8" />,
            color: "blue",
            image: "/certifications/nptel-cloud computing.png"
        },
        {
            title: "Master Generative AI & AI Tools",
            issuer: "Udemy",
            date: "Aug 2025",
            details: [
                "14 hours of comprehensive GenAI mastery",
                "Advanced prompt engineering and AI solutions",
                "Integration of ChatGPT and multimodal tools",
                "Building automated AI-driven workflows"
            ],
            icon: <Star className="w-8 h-8" />,
            color: "indigo",
            image: "/certifications/udemy-master generative ai and generative ai tools(chatgpt more).png"
        },
        {
            title: "Build Generative AI Apps (No-Code)",
            issuer: "Udemy",
            date: "Aug 2025",
            details: [
                "Building AI solutions with no-code platforms",
                "Rapid prototyping of LLM-based applications",
                "Designing user-centric AI experiences",
                "Leveraging modern AI orchestration tools"
            ],
            icon: <ShieldCheck className="w-8 h-8" />,
            color: "blue",
            image: "/certifications/udemy-build generative ae apps and soln.png"
        },
        {
            title: "ChatGPT Made Easy: AI Essentials",
            issuer: "Udemy",
            date: "Aug 2025",
            details: [
                "Foundational AI concepts and terminology",
                "Practical applications for productivity",
                "Ethical considerations in AI deployment",
                "Beginner-to-Intermediate AI workflow design"
            ],
            icon: <Star className="w-8 h-8" />,
            color: "blue",
            image: "/certifications/udemy-chatgpt made easy.png"
        },
        {
            title: "From Data to Decisions: Data Science",
            issuer: "Lovely Professional University",
            date: "Aug 2025",
            details: [
                "Hands-on approach to modern Data Science",
                "Statistical analysis for business decision making",
                "Data visualization and predictive modeling",
                "Obtained Grade 'A' for technical merit"
            ],
            icon: <Star className="w-8 h-8" />,
            color: "blue",
            image: "/certifications/summer training - data to decisions.png"
        },
        {
            title: "Mastering DSA using C and C++",
            issuer: "Udemy (Abdul Bari)",
            date: "Jan 2025",
            details: [
                "58.5 hours of master-level DSA training",
                "In-depth complexity analysis and optimization",
                "Core implementation of advanced algorithms",
                "Renowned training by Abdul Bari"
            ],
            icon: <BookOpen className="w-8 h-8" />,
            color: "blue",
            image: "/certifications/udemy-mastering dsa using c and cpp.png"
        },
        {
            title: "Object Oriented Programming",
            issuer: "Lovely Professional University (iamneo)",
            date: "Dec 2024",
            details: [
                "72 hours of intensive OOP paradigm training",
                "Mastery of inheritance and polymorphism",
                "Practical software engineering principles",
                "Verified LPU technical completion"
            ],
            icon: <BookOpen className="w-8 h-8" />,
            color: "blue",
            image: "/certifications/lpu-opject operating programing.png"
        },
        {
            title: "Data Structures and Algorithm",
            issuer: "Lovely Professional University (iamneo)",
            date: "Dec 2024",
            details: [
                "72 hours of intensive algorithmic training",
                "Implementation on iamneo specialized platform",
                "Core mastery of efficient data structures",
                "Verified LPU technical completion"
            ],
            icon: <BookOpen className="w-8 h-8" />,
            color: "blue",
            image: "/certifications/dsa lpu.png"
        },
        {
            title: "Computer Communications Specialization",
            issuer: "University of Colorado (Coursera)",
            date: "Sep 2024",
            details: [
                "Comprehensive 4-course networking specialization",
                "Peer-to-Peer protocols and Local Area Networks",
                "Packet Switching Networks and TCP/IP architecture",
                "Honed essential skills in fundamental network design"
            ],
            icon: <Award className="w-8 h-8" />,
            color: "indigo",
            image: "/certifications/computer communication-coursera.png"
        },
        {
            title: "Fundamentals of Network Communication",
            issuer: "University of Colorado (Coursera)",
            date: "Sep 2024",
            details: [
                "Authorized professional training by CU System",
                "In-depth study of network communication layers",
                "Verified technical credential from Coursera",
                "Foundation for advanced systems engineering"
            ],
            icon: <BookOpen className="w-8 h-8" />,
            color: "blue",
            image: "/certifications/courserafuntamentals of network.png"
        },
        {
            title: "Peer-to-Peer Protocols and Local Area Networks",
            issuer: "University of Colorado (Coursera)",
            date: "Sep 2024",
            details: [
                "Authorized professional training by CU System",
                "Study of peer-to-peer protocols and LAN architecture",
                "Verified technical credential from Coursera"
            ],
            icon: <BookOpen className="w-8 h-8" />,
            color: "blue",
            image: "/certifications/peer to peer coursera.png"
        },
        {
            title: "The Bits and Bytes of Computer Networking",
            issuer: "Google (Coursera)",
            date: "Sep 2024",
            details: [
                "Authorized Google IT Support professional training",
                "In-depth study of computer networking components and protocols",
                "Verified technical credential from Coursera"
            ],
            icon: <ShieldCheck className="w-8 h-8" />,
            color: "indigo",
            image: "/certifications/coursera-google bits and bytes of computerr networks.png"
        },
        {
            title: "Packet Switching Networks and Algorithms",
            issuer: "University of Colorado (Coursera)",
            date: "Sep 2024",
            details: [
                "Authorized professional training by CU System",
                "Detailed study of packet switching networks and routing algorithms",
                "Verified technical credential from Coursera"
            ],
            icon: <ShieldCheck className="w-8 h-8" />,
            color: "blue",
            image: "/certifications/coursera-packet switching networks and algo.png"
        },
        {
            title: "Introduction to Hardware and Operating Systems",
            issuer: "IBM (Coursera)",
            date: "Aug 2024",
            details: [
                "Core hardware architecture and component theory",
                "OS management and file system fundamentals",
                "Authorized IBM professional training",
                "Systems administration and troubleshooting"
            ],
            icon: <ShieldCheck className="w-8 h-8" />,
            color: "indigo",
            image: "/certifications/intro hardware operations IBM coursera.png"
        },
        {
            title: "Certificate of Appreciation (Community Support)",
            issuer: "DevTown",
            date: "July 2024",
            details: [
                "Recognition for community growth contributions",
                "Leadership in peer-to-peer technical support",
                "Exceptional dedication to community building"
            ],
            icon: <Award className="w-8 h-8" />,
            color: "blue",
            image: "/certifications/appriciation dewtown.png"
        },
        {
            title: "Backend Web Development (NodeJS & Express)",
            issuer: "DevTown (GDSC Giet)",
            date: "June 2024",
            details: [
                "7-Day intensive server-side development bootcamp",
                "Building RESTful APIs and middleware logic",
                "Database integration and async architecture"
            ],
            icon: <BookOpen className="w-8 h-8" />,
            color: "emerald",
            image: "/certifications/devtown backend.png"
        },
        {
            title: "Responsive Web Design Developer",
            issuer: "freeCodeCamp",
            date: "Dec 2023",
            details: [
                "Advanced HTML5 & CSS3 layout techniques",
                "300+ hours of rigorous web development training",
                "Mobile-first design and accessibility standards",
                "Certified by freeCodeCamp.org"
            ],
            icon: <ShieldCheck className="w-8 h-8" />,
            color: "emerald",
            image: "/certifications/freecodecamp-responsive web design.png"
        },
        {
            title: "Advanced Excel, Tableau and Power BI",
            issuer: "LPU (Centre for Professional Enhancement)",
            date: "Dec 2023",
            details: [
                "Mastery of data analysis & visualization tools",
                "Advanced spreadsheet modeling and reporting",
                "Industry-standard BI dashboard creation",
                "Grade 'B' obtained for technical merit"
            ],
            icon: <Star className="w-8 h-8" />,
            color: "blue",
            image: "/certifications/Excel, powerbi.png"
        },
        {
            title: "Human Resource Beginner Course",
            issuer: "Infosys Springboard",
            date: "Nov 2023",
            details: [
                "Fundamental HR practices and ethics",
                "Organizational management core principles",
                "Completed via Infosys Springboard platform"
            ],
            icon: <ShieldCheck className="w-8 h-8" />,
            color: "blue",
            image: "/certifications/human resoursce beginner infosys.png"
        },
        {
            title: "BinaryBlitz Web Hackathon",
            issuer: "Certificate of Appreciation",
            date: "2024",
            details: [
                "Outstanding innovation in web technologies",
                "Exceptional team collaboration and leadership",
                "Rapid prototyping and problem-solving excellence",
                "Contributed significantly to project success"
            ],
            icon: <Award className="w-8 h-8" />,
            color: "blue",
            image: "/certifications/binary bits hackathon.png"
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
                    <h2 className="heading-2 m-0 text-white">Certifications & <span className="text-blue-500">Badges.</span></h2>
                    <div className="flex-1 h-[1px] bg-white/10 hidden md:block"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {certs.slice(0, showAll ? certs.length : 3).map((cert, idx) => (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                layout
                                className="glass-panel p-[2px] rounded-[2rem] group transition-all relative"
                            >
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div className="relative h-full w-full glass-panel rounded-[calc(2rem-2px)] group flex flex-col overflow-hidden bg-slate-950/40 hover:bg-white/[0.02] transition-colors">
                                    {/* Certificate Image Preview Header */}
                                    <div className="relative h-44 overflow-hidden bg-slate-950/50 p-4">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent z-10 pointer-events-none" />
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-700"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = `https://placehold.co/600x400/1e293b/3b82f6?text=${cert.issuer}+Certificate`;
                                            }}
                                        />
                                        <div className="absolute top-3 right-3 z-20">
                                            <button
                                                onClick={() => setSelectedCert(cert)}
                                                className="p-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 hover:bg-blue-500 hover:border-blue-400 transition-all group/btn"
                                            >
                                                <ZoomIn className="w-4.5 h-4.5 text-white group-hover/btn:scale-110 transition-transform" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-start gap-4 mb-6 mt-1">
                                            <div className={`p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform shadow-inner`}>
                                                {cert.icon}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1.5">
                                                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20">
                                                        {cert.issuer}
                                                    </span>
                                                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-500">
                                                        {cert.date}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                                                    {cert.title}
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="space-y-3 flex-1">
                                            {cert.details.map((detail, i) => (
                                                <div key={i} className="flex items-start gap-2.5">
                                                    <div className="w-1 h-1 rounded-full bg-blue-500/40 mt-2 flex-shrink-0" />
                                                    <span className="text-zinc-400 text-xs leading-relaxed group-hover:text-zinc-300 transition-colors">
                                                        {detail}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                                            <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                                                <ShieldCheck className="w-3.5 h-3.5 text-blue-500/50" />
                                                Verified
                                            </span>
                                            <div className="w-6 h-6 rounded-full bg-blue-500/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                                <div className="w-1 h-1 rounded-full bg-blue-500" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* See More Toggle Button */}
                {certs.length > 3 && (
                    <div className="mt-12 flex justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowAll(!showAll)}
                            className="group relative px-6 py-3 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3 text-white font-bold hover:bg-blue-500 transition-all hover:border-blue-400 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative z-10 text-xs tracking-widest uppercase">
                                {showAll ? "Show Less" : "See More Certificates"}
                            </span>
                            {showAll ? (
                                <ChevronUp className="w-4 h-4 relative z-10 group-hover:translate-y-[-2px] transition-transform" />
                            ) : (
                                <ChevronDown className="w-4 h-4 relative z-10 animate-bounce group-hover:animate-none" />
                            )}
                        </motion.button>
                    </div>
                )}
            </motion.div>



            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full bg-slate-900 rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-6 right-6 z-50 p-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors group"
                            >
                                <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
                            </button>

                            <div className="flex flex-col lg:flex-row h-full">
                                <div className="lg:w-2/3 bg-black flex items-center justify-center p-4 min-h-[300px] lg:min-h-[500px]">
                                    <img
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        className="max-w-full max-h-full object-contain shadow-2xl"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://placehold.co/1200x800/111827/3b82f6?text=${selectedCert.title}+Full+View`;
                                        }}
                                    />
                                </div>
                                <div className="lg:w-1/3 p-8 md:p-12 border-l border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 flex flex-col">
                                    <div className="mb-8">
                                        <span className="text-xs font-bold uppercase tracking-[0.3em] px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 mb-6 inline-block">
                                            {selectedCert.issuer}
                                        </span>
                                        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                                            {selectedCert.title}
                                        </h2>
                                        <p className="text-zinc-500 font-medium tracking-wide">
                                            Issued: <span className="text-zinc-300">{selectedCert.date}</span>
                                        </p>
                                    </div>

                                    <div className="space-y-6 flex-1">
                                        <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">About this Certification</h4>
                                        <div className="space-y-4">
                                            {selectedCert.details.map((detail: string, i: number) => (
                                                <div key={i} className="flex gap-4">
                                                    <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                                        <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                                                    </div>
                                                    <p className="text-zinc-400 leading-relaxed text-sm">
                                                        {detail}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-12">
                                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                            <div className="flex items-center gap-4 mb-2">
                                                <Award className="w-5 h-5 text-blue-400" />
                                                <span className="text-sm font-bold text-white">Verified Credential</span>
                                            </div>
                                            <p className="text-xs text-zinc-500 leading-relaxed">
                                                This certification represents authentic technical validation of skills and knowledge.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
