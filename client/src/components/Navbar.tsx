import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, Briefcase, GraduationCap, Award, MessageSquare, Sparkles } from "lucide-react";
import { NavBar as TubelightNavbar } from "./ui/tubelight-navbar";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", url: "about", icon: User },
        { name: "Skills", url: "skills", icon: Sparkles },
        { name: "Experience", url: "experience", icon: Briefcase },
        { name: "Projects", url: "projects", icon: Briefcase },
        { name: "Education", url: "education", icon: GraduationCap },
        { name: "Achievements", url: "achievements", icon: Award },
        { name: "Contact", url: "contact", icon: MessageSquare },
    ];

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? "bg-black/40 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl" : "bg-transparent py-6"}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between relative h-12">
                <Link to="/" className="text-2xl font-black tracking-tighter hover:text-pink-400 transition-colors flex items-center gap-1 group z-50">
                    <span className="text-white group-hover:text-zinc-200 transition-colors">Sanmaya M B</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></span>
                </Link>

                <div className="hidden md:flex flex-1 justify-center pointer-events-none">
                    <div className="pointer-events-auto">
                        {isHome ? (
                            <TubelightNavbar items={navLinks} />
                        ) : (
                            <div className="bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md">
                                <Link to="/" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors">
                                    Back to Portfolio
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                <div className="hidden md:flex z-50">
                    <Link to="/resume" className="text-sm font-bold bg-white text-black hover:bg-zinc-200 px-6 py-2.5 rounded-full transition-colors shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                        Resume
                    </Link>
                </div>

                {/* Mobile menu toggle */}
                <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-4 right-4 bg-zinc-900 border border-white/10 rounded-3xl flex flex-col items-center py-8 gap-6 md:hidden shadow-2xl backdrop-blur-xl"
                        >
                            {isHome ? (
                                navLinks.map((link) => (
                                    <ScrollLink
                                        key={link.name}
                                        to={link.url}
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        onSetActive={() => {}} // Could be used if we had mobile active state
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-bold text-zinc-400 hover:text-white cursor-pointer transition-colors"
                                    >
                                        {link.name}
                                    </ScrollLink>
                                ))
                            ) : (
                                <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-bold text-zinc-400 hover:text-white transition-colors">
                                    Back to Portfolio
                                </Link>
                            )}
                            <Link to="/resume" onClick={() => setIsOpen(false)} className="mt-4 px-8 py-3 bg-white text-black rounded-full text-lg font-bold shadow-lg">
                                View Resume
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
