import { Github, Linkedin, Briefcase } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 py-12 bg-black relative z-10 mt-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold tracking-tighter mb-1">Sanmaya M B<span className="text-red-600">.</span></h2>
                    <p className="text-slate-500 text-sm font-medium">Full Stack Developer</p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="p-3 bg-slate-100/50 hover:bg-slate-200/50 rounded-full transition-colors text-slate-600 hover:text-slate-900 font-bold hover:-translate-y-1 transition-transform">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 bg-slate-100/50 hover:bg-slate-200/50 rounded-full transition-colors text-slate-600 hover:text-slate-900 font-bold hover:-translate-y-1 transition-transform">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 bg-slate-100/50 hover:bg-slate-200/50 rounded-full transition-colors text-slate-600 hover:text-slate-900 font-bold hover:-translate-y-1 transition-transform">
                        <Briefcase className="w-5 h-5" />
                    </a>
                </div>

                <div className="text-slate-500 text-sm font-medium">
                    © 2026 Sanmaya M B. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
