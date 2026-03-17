import { motion } from "framer-motion";
import { Send, Mail, Linkedin, Github, Loader2, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { rtdb } from "../firebase";
import { ref, push, serverTimestamp } from "firebase/database";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setError("Please fill in all fields.");
            return;
        }

        if (!rtdb) {
            setError("Contact service is temporarily unavailable. Please try again later or use the email link.");
            console.error("Firebase RTDB is not initialized.");
            return;
        }

        setIsSubmitting(true);
        setError("");

        try {
            await push(ref(rtdb, "messages"), {
                ...formData,
                timestamp: serverTimestamp()
            });
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            console.error("Error adding message: ", err);
            setError("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">Let's Create Together<span className="text-pink-500">.</span></h2>
                    <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
                        If you are interested in collaborating, discussing projects, or offering internship opportunities, feel free to reach out.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
                    <div className="space-y-8 lg:col-span-2">
                        <div className="glass-panel p-8 lg:p-10 rounded-3xl h-full">
                            <h3 className="text-2xl font-bold mb-8 text-white">Contact Info</h3>
                            <div className="space-y-8">
                                <a href="mailto:your-email@example.com" className="flex items-center gap-5 text-zinc-400 hover:text-pink-400 transition-colors group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-pink-500/10 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <span className="font-medium text-lg">Email Me</span>
                                </a>
                                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 text-zinc-400 hover:text-indigo-400 transition-colors group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-indigo-500/10 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all">
                                        <Linkedin className="w-6 h-6" />
                                    </div>
                                    <span className="font-medium text-lg">LinkedIn</span>
                                </a>
                                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 text-zinc-400 hover:text-white transition-colors group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
                                        <Github className="w-6 h-6" />
                                    </div>
                                    <span className="font-medium text-lg">GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-12 rounded-3xl space-y-6 lg:col-span-3">
                        {submitted ? (
                            <div className="text-center py-12">
                                <div className="text-pink-500 mb-4 flex justify-center">
                                    <ShieldCheck className="w-16 h-16" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                                <p className="text-zinc-400">Thanks for reaching out. I'll get back to you soon.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 text-pink-400 hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 focus:bg-white/5 transition-all"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 focus:bg-white/5 transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Hello, I'd like to collaborate on..."
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 focus:bg-white/5 transition-all resize-none"
                                        required
                                    ></textarea>
                                </div>
                                {error && <p className="text-red-500 text-sm">{error}</p>}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>Submitting... <Loader2 className="w-5 h-5 animate-spin" /></>
                                        ) : (
                                            <>Submit Message <Send className="w-5 h-5" /></>
                                        )}
                                    </button>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </motion.div>
        </section>
    );
}

