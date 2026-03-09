import { motion } from "framer-motion";
import { Send, Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="section-padding relative min-h-[90vh] flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full"
            >
                <div className="flex items-center gap-4 mb-16 text-center justify-center flex-col">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">Let's Create Together<span className="text-blue-500">.</span></h2>
                    <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
                        If you are interested in collaborating, discussing projects, or offering internship opportunities, feel free to reach out.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
                    <div className="space-y-8 lg:col-span-2">
                        <div className="glass-panel p-8 lg:p-10 rounded-3xl h-full">
                            <h3 className="text-2xl font-bold mb-8 text-white">Contact Info</h3>
                            <div className="space-y-8">
                                <a href="#" className="flex items-center gap-5 text-zinc-400 hover:text-blue-400 transition-colors group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/10 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <span className="font-medium text-lg">Email Me</span>
                                </a>
                                <a href="#" className="flex items-center gap-5 text-zinc-400 hover:text-indigo-400 transition-colors group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-indigo-500/10 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all">
                                        <Linkedin className="w-6 h-6" />
                                    </div>
                                    <span className="font-medium text-lg">LinkedIn</span>
                                </a>
                                <a href="#" className="flex items-center gap-5 text-zinc-400 hover:text-white transition-colors group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
                                        <Github className="w-6 h-6" />
                                    </div>
                                    <span className="font-medium text-lg">GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="glass-panel p-8 md:p-12 rounded-3xl space-y-6 lg:col-span-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Your Name</label>
                                <input type="text" id="name" placeholder="John Doe" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/5 transition-all" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Your Email</label>
                                <input type="email" id="email" placeholder="john@example.com" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/5 transition-all" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                            <textarea id="message" rows={5} placeholder="Hello, I'd like to collaborate on..." className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/5 transition-all resize-none"></textarea>
                        </div>
                        <div className="pt-2">
                            <button type="submit" onClick={(e) => e.preventDefault()} className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-1">
                                Submit Message <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}
