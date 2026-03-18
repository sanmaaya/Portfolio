import Hero from "../components/Hero";
import About from "../components/About";
import ResumeSection from "../components/ResumeSection";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Achievements from "../components/Achievements";
import Experience from "../components/Experience";
import Hackathons from "../components/Hackathons";
import Research from "../components/Research";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <ResumeSection />
            <Education />
            <Skills />
            <Projects />
            <Certifications />
            <Achievements />
            <Experience />
            <Hackathons />
            <Research />
            <Contact />
        </>
    );
}
