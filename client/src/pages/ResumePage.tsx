import { motion } from "framer-motion";
import { Download, Briefcase, Trophy, ChevronLeft, Award, Code2, BookOpen, Fingerprint } from "lucide-react";
import { Link } from "react-router-dom";

export default function ResumePage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto print:pt-0 print:pb-0 print:px-0 print:bg-white">
            <style>{`
                @media print {
                    body {
                        background-color: white !important;
                        color: black !important;
                        print-color-adjust: exact;
                        -webkit-print-color-adjust: exact;
                    }
                    .glass-panel {
                        background: none !important;
                        border: none !important;
                        box-shadow: none !important;
                        border-radius: 0 !important;
                    }
                    .text-white {
                        color: #1e3a8a !important; /* pink-900 */
                    }
                    .text-zinc-400, .text-zinc-500, .text-zinc-300, .text-zinc-200 {
                        color: #1f2937 !important; /* gray-800 */
                    }
                    .text-pink-400, .text-pink-500 {
                        color: #2563eb !important; /* pink-600 */
                    }
                    .bg-white\\/5, .hover\\:bg-white\\/5 {
                        background: none !important;
                        border-color: #e5e7eb !important; /* gray-200 */
                    }
                    .border-white\\/10, .border-white\\/5, .border-zinc-800 {
                        border-color: #d1d5db !important; /* gray-300 */
                    }
                    .bg-pink-500 { background-color: #2563eb !important; }
                    .bg-green-500 { background-color: #16a34a !important; }
                    .bg-purple-500 { background-color: #9333ea !important; }
                    .bg-amber-500 { background-color: #d97706 !important; }
                    
                    /* Hide non-print elements */
                    .print\\:hidden { display: none !important; }
                    
                    /* Adjust spacing for A4 fitting */
                    section { break-inside: avoid; }
                    .space-y-12 > :not([hidden]) ~ :not([hidden]) { margin-top: 1.5rem !important; }
                    .space-y-10 > :not([hidden]) ~ :not([hidden]) { margin-top: 1rem !important; }
                    .space-y-8 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.75rem !important; }
                    .space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.5rem !important; }
                    .p-8, .md\\:p-12 { padding: 0 !important; }
                }
            `}</style>
            <Link to="/" className="inline-flex items-center text-zinc-400 hover:text-pink-400 mb-8 transition-colors print:hidden">
                <ChevronLeft className="w-4 h-4 mr-2" /> Back to Portfolio
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-white/10 pb-8 gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">Sanmaya M B</h1>
                        <h2 className="text-xl text-pink-400 font-medium tracking-wide">LinkedIn: <a href="https://www.linkedin.com/in/sanmaya-m-b-/" target="_blank" rel="noreferrer" className="text-white hover:text-pink-300">/in/sanmaya-m-b-</a></h2>
                        <h2 className="text-xl text-pink-400 font-medium tracking-wide mt-1">GitHub: <a href="https://github.com/sanmaaya" target="_blank" rel="noreferrer" className="text-white hover:text-pink-300">/sanmaaya</a></h2>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 text-zinc-400">
                        <div className="flex items-center gap-2">
                            <span className="font-medium text-pink-400">Email:</span> sanmayabimal@gmail.com
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-medium text-pink-400">Mobile:</span> +91 8075230575
                        </div>
                        <button onClick={() => window.print()} className="mt-4 bg-gradient-to-r from-pink-600 to-pink- text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] print:hidden">
                            <Download className="w-4 h-4" /> Download CV
                        </button>
                    </div>
                </div>

                <div className="space-y-12">
                    {/* SKILLS */}
                    <section>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                            <span className="p-2 bg-pink-500/10 rounded-lg text-pink-400"><Code2 className="w-5 h-5" /></span> SKILLS
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 gap-x-2 text-lg">
                            <div className="text-zinc-300 font-bold uppercase text-sm tracking-wider mt-1">Languages:</div>
                            <div className="md:col-span-3 text-zinc-400">C/C++, JavaScript, SQL, Java, Python</div>
                            
                            <div className="text-zinc-300 font-bold uppercase text-sm tracking-wider mt-1">Tools/Platforms:</div>
                            <div className="md:col-span-3 text-zinc-400">Git, GitHub, MongoDB, Tableau, MySQL</div>
                            
                            <div className="text-zinc-300 font-bold uppercase text-sm tracking-wider mt-1">Framework/Library:</div>
                            <div className="md:col-span-3 text-zinc-400">React.js, Node.js, Tailwind CSS, Bootstrap</div>
                            
                            <div className="text-zinc-300 font-bold uppercase text-sm tracking-wider mt-1">Core Competencies:</div>
                            <div className="md:col-span-3 text-zinc-400">Data Structures & Algorithms (DSA), DBMS, Responsive Web Design</div>
                            
                            <div className="text-zinc-300 font-bold uppercase text-sm tracking-wider mt-1">Soft Skills:</div>
                            <div className="md:col-span-3 text-zinc-400">Problem-Solving, Team Player, Adaptability</div>
                        </div>
                    </section>

                    {/* VIRTUAL INTERNSHIP */}
                    <section>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                            <span className="p-2 bg-green-500/10 rounded-lg text-green-400"><Briefcase className="w-5 h-5" /></span> VIRTUAL INTERNSHIP
                        </h3>
                        <div className="space-y-8">
                            <div className="relative pl-6 border-l border-zinc-800">
                                <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[6.5px] top-2"></div>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                    <h4 className="text-xl font-medium text-white">Skyscanner Software Engineering Virtual Experience</h4>
                                    <span className="text-zinc-500 text-sm md:text-right mt-1 md:mt-0 whitespace-nowrap">Jan '26 - Feb '26</span>
                                </div>
                                <p className="text-pink-400 text-sm mb-4 tracking-wide font-medium">Forage | GitHub</p>
                                <ul className="list-disc list-outside ml-5 text-zinc-400 space-y-2 leading-relaxed text-lg">
                                    <li>Built RESTful microservices using Java, Dropwizard, Jackson, and Maven, implementing structured API endpoints with YAML-based configuration.</li>
                                    <li>Engineered an Android application in Kotlin (Android SDK, Gradle) integrating Backpack UI components. Implemented modular UI features using React.js (ES6+).</li>
                                    <li>Authored structured JIRA user stories, translating Figma UI designs into technical specification.</li>
                                </ul>
                                <p className="text-zinc-500 text-sm mt-4 font-mono">Tech: Java, Dropwizard, REST APIs, Kotlin, Android SDK, React.js, Maven, Gradle, Jackson, YAML, Jira, Figma</p>
                            </div>

                            <div className="relative pl-6 border-l border-zinc-800">
                                <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[6.5px] top-2 border-2 border-[#0a0a0a]"></div>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                    <h4 className="text-xl font-medium text-white">AWS Solutions Architecture Job Simulation</h4>
                                    <span className="text-zinc-500 text-sm md:text-right mt-1 md:mt-0 whitespace-nowrap">Feb '26</span>
                                </div>
                                <p className="text-pink-400 text-sm mb-4 tracking-wide font-medium">AWS | Forage</p>
                                <ul className="list-disc list-outside ml-5 text-zinc-400 space-y-2 leading-relaxed text-lg">
                                    <li>Completed practical task-based cloud infrastructure simulation focused on AWS.</li>
                                    <li>Designed simple, scalable, and highly-available hosting architectures.</li>
                                    <li>Implemented AWS best practices for availability, scalability, and reliability.</li>
                                </ul>
                                <p className="text-zinc-500 text-sm mt-4 font-mono">Tech: AWS, Cloud Infrastructure, Systems Architecture</p>
                            </div>
                        </div>
                    </section>

                    {/* PROJECTS */}
                    <section>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                            <span className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><Fingerprint className="w-5 h-5" /></span> PROJECTS
                        </h3>
                        <div className="space-y-10">
                            <div className="relative pl-6 border-l border-zinc-800">
                                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[6.5px] top-2 border-2 border-[#0a0a0a]"></div>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                    <h4 className="text-xl font-medium text-white">Electrosystem – Hybrid Renewable Energy Platform</h4>
                                    <span className="text-zinc-500 text-sm md:text-right mt-1 md:mt-0 whitespace-nowrap">Dec '25</span>
                                </div>
                                <p className="text-pink-400 text-sm mb-4 tracking-wide font-medium">Full Stack Development | GitHub</p>
                                <ul className="list-disc list-outside ml-5 text-zinc-400 space-y-2 leading-relaxed text-lg">
                                    <li>Architected a web-based platform to model and evaluate hybrid renewable energy systems (solar, wind, battery) using data-driven simulations for sustainable power planning.</li>
                                    <li>Engineered energy-flow logic, hybrid control mechanisms, and battery integration strategies while contributing to full stack system architecture.</li>
                                    <li>Designed modular simulation workflows enabling comparative analysis of hybrid renewable configurations across solar, wind and battery systems.</li>
                                </ul>
                                <p className="text-zinc-500 text-sm mt-4 font-mono">Tech: HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, Renewable Energy Systems, EMS</p>
                            </div>

                            <div className="relative pl-6 border-l border-zinc-800">
                                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[6.5px] top-2 border-2 border-[#0a0a0a]"></div>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                    <h4 className="text-xl font-medium text-white">SOHAM – Pranic Healing & Meditation Website</h4>
                                    <span className="text-zinc-500 text-sm md:text-right mt-1 md:mt-0 whitespace-nowrap">Jan '25 – Sep '25</span>
                                </div>
                                <p className="text-pink-400 text-sm mb-4 tracking-wide font-medium">Web Development (Client Project) | GitHub</p>
                                <ul className="list-disc list-outside ml-5 text-zinc-400 space-y-2 leading-relaxed text-lg">
                                    <li>Designed and developed an informative website presenting Pranic Healing courses, official guidelines, and center information.</li>
                                    <li>Implemented a registration workflow that stores form submissions in a database and triggers email notifications for course enrollments.</li>
                                    <li>Successfully delivered a fully functional client-ready website that enabled seamless course registrations and improved user engagement.</li>
                                </ul>
                                <p className="text-zinc-500 text-sm mt-4 font-mono">Tech: HTML, CSS, JavaScript, PHP, MySQL</p>
                            </div>

                            <div className="relative pl-6 border-l border-zinc-800">
                                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[6.5px] top-2 border-2 border-[#0a0a0a]"></div>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                    <h4 className="text-xl font-medium text-white">TechnoGrowX – Smart Agriculture Support Platform</h4>
                                    <span className="text-zinc-500 text-sm md:text-right mt-1 md:mt-0 whitespace-nowrap">Feb '25</span>
                                </div>
                                <p className="text-pink-400 text-sm mb-4 tracking-wide font-medium">Full Stack Development | GitHub</p>
                                <ul className="list-disc list-outside ml-5 text-zinc-400 space-y-2 leading-relaxed text-lg">
                                    <li>Built a three-panel platform (Farmer, Expert, Admin) for reporting and resolving crop diseases with secure login and user management.</li>
                                    <li>Enabled farmers to submit reports with symptoms/images, experts to manage solutions, and admins to track analytics.</li>
                                    <li>Improved issue resolution workflow by structuring a 3-role architecture (Farmer, Expert, Admin) with secure authentication and centralized data tracking.</li>
                                </ul>
                                <p className="text-zinc-500 text-sm mt-4 font-mono">Tech: HTML, CSS, JavaScript, Tailwind CSS, Node.js, MySQL</p>
                            </div>

                            <div className="relative pl-6 border-l border-zinc-800">
                                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[6.5px] top-2 border-2 border-[#0a0a0a]"></div>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                    <h4 className="text-xl font-medium text-white">Expense Report Generator with Chatbot</h4>
                                    <span className="text-zinc-500 text-sm md:text-right mt-1 md:mt-0 whitespace-nowrap">Dec '24</span>
                                </div>
                                <p className="text-pink-400 text-sm mb-4 tracking-wide font-medium">Web + AI Integration | GitHub</p>
                                <ul className="list-disc list-outside ml-5 text-zinc-400 space-y-2 leading-relaxed text-lg">
                                    <li>Developed a PHP-based expense tracker with monthly PDF reports and category-wise visualizations.</li>
                                    <li>Integrated AI chatbot using OpenAI API for expense-related queries.</li>
                                    <li>Automated monthly financial reporting and improved user convenience with an AI-powered expense assistant.</li>
                                </ul>
                                <p className="text-zinc-500 text-sm mt-4 font-mono">Tech: PHP, HTML, JavaScript, Chart.js, jsPDF, OpenAI API</p>
                            </div>
                        </div>
                    </section>

                    {/* TRAINING */}
                    <section>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                            <span className="p-2 bg-amber-500/10 rounded-lg text-amber-400"><BookOpen className="w-5 h-5" /></span> TRAINING
                        </h3>
                        <div className="space-y-8">
                            <div className="relative pl-6 border-l border-zinc-800">
                                <div className="absolute w-3 h-3 bg-amber-500 rounded-full -left-[6.5px] top-2 border-2 border-[#0a0a0a]"></div>
                                <h4 className="text-xl font-medium text-white mb-1 whitespace-pre-wrap">From Data to Decisions: A Hands-On Approach to Data Science <span className="text-pink-400 text-base font-normal">| Certificate</span></h4>
                                
                                <div className="mt-6 bg-white/5 rounded-2xl p-6 border border-white/5 shadow-inner">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                        <h5 className="text-lg font-bold text-white">Drug Review Sentiment Analysis</h5>
                                        <span className="text-zinc-500 text-sm md:text-right mt-1 md:mt-0 whitespace-nowrap">Jun '25 – Jul '25</span>
                                    </div>
                                    <p className="text-pink-400 text-sm mb-5 tracking-wide font-medium">NLP, Machine Learning, Power BI | GitHub</p>
                                    <ul className="list-disc list-outside ml-5 text-zinc-400 space-y-3 leading-relaxed text-lg">
                                        <li>Completed an intensive summer training program covering the full data science workflow — data collection, preprocessing, exploratory data analysis, feature engineering, model building, and result interpretation.</li>
                                        <li>Worked on a sentiment analysis model to classify drug reviews into Positive, Negative, or Neutral using Logistic Regression with TF-IDF text vectorization.</li>
                                        <li>Evaluated model performance using accuracy, precision, recall, F1-score, and confusion matrix; visualized sentiment insights through an interactive Power BI dashboard.</li>
                                    </ul>
                                    <p className="text-zinc-500 text-sm mt-4 font-mono">Tech: Python, Pandas, Scikit-learn, Power BI</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CERTIFICATES */}
                    <section>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                            <span className="p-2 bg-pink-600/10 rounded-lg text-pink-"><Award className="w-5 h-5" /></span> CERTIFICATES
                        </h3>
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center py-3 border-b border-white/5 group hover:bg-white/5 px-2 rounded-lg transition-colors">
                                <div className="text-zinc-200 text-lg font-medium group-hover:text-pink-300 transition-colors print:font-bold">HackerRank Verified Skills <span className="text-pink-500/50 text-base font-normal ml-1">| HackerRank</span></div>
                                <div className="text-zinc-500 text-sm mt-1 sm:mt-0 italic">JavaScript (Basic), CSS (Basic)</div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center py-3 border-b border-white/5 group hover:bg-white/5 px-2 rounded-lg transition-colors">
                                <div className="text-zinc-200 text-lg font-medium group-hover:text-pink-300 transition-colors print:font-bold">Cloud Computing <span className="text-pink-500/50 text-base font-normal ml-1">| NPTEL</span></div>
                                <div className="text-zinc-500 text-sm mt-1 sm:mt-0">Nov '25</div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center py-3 border-b border-white/5 group hover:bg-white/5 px-2 rounded-lg transition-colors">
                                <div className="text-zinc-200 text-lg font-medium group-hover:text-pink-300 transition-colors print:font-bold">Backend Web Development (Node.js & Express) <span className="text-pink-500/50 text-base font-normal ml-1">| DevTown</span></div>
                                <div className="text-zinc-500 text-sm mt-1 sm:mt-0">Jul '24</div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center py-3 border-b border-white/5 group hover:bg-white/5 px-2 rounded-lg transition-colors border-b-0">
                                <div className="text-zinc-200 text-lg font-medium group-hover:text-pink-300 transition-colors print:font-bold">Advanced Excel, Tableau & Power BI — Certificate of Merit <span className="text-pink-500/50 text-base font-normal ml-1 whitespace-nowrap">| LPU</span></div>
                                <div className="text-zinc-500 text-sm mt-1 sm:mt-0">Feb '24</div>
                            </div>
                        </div>
                    </section>

                    {/* ACHIEVEMENTS */}
                    <section>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                            <span className="p-2 bg-red-500/10 rounded-lg text-red-400"><Trophy className="w-5 h-5" /></span> ACHIEVEMENTS
                        </h3>
                        <div className="space-y-4">
                            <div className="flex flex-col md:flex-row justify-between md:items-center py-4 border-b border-white/5 gap-4 group hover:bg-white/5 px-2 rounded-lg transition-colors">
                                <div className="text-zinc-400 leading-relaxed text-lg group-hover:text-zinc-300 transition-colors">Solved 200+ coding problems across competitive programming platforms like <span className="text-pink-400 font-medium">LeetCode</span>, <span className="text-pink-400 font-medium">HackerRank</span> and <span className="text-pink-400 font-medium">GeeksforGeeks</span>.</div>
                                <div className="text-zinc-500 text-sm whitespace-nowrap">Nov '25</div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between md:items-center py-4 border-b border-white/5 gap-4 group hover:bg-white/5 px-2 rounded-lg transition-colors">
                                <div className="text-zinc-400 leading-relaxed text-lg group-hover:text-zinc-300 transition-colors">Earned multiple <span className="text-pink-400 font-medium">HackerRank</span> skill badges, including C++ (4 Star), Java, 30 Days of Code and C language.</div>
                                <div className="text-zinc-500 text-sm whitespace-nowrap">Nov '25</div>
                            </div>
                        </div>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
