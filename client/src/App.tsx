import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResumePage from "./pages/ResumePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/ui/CustomCursor";
import ScrollProgress from "./components/ui/ScrollProgress";
import Snowfall from "react-snowfall";
import { SparklesCore } from "./components/ui/sparkles";

function App() {
  return (
    <Router>
      <CustomCursor />
      <ScrollProgress />
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <Snowfall color="rgba(255,255,255,0.25)" snowflakeCount={120} speed={[0.5, 1.5]} wind={[-0.5, 0.5]} />
        <SparklesCore
          id="tsparticlesglobal"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={20}
          className="w-full h-full"
          particleColor="#ffffff"
          speed={0.5}
        />
      </div>
      <Navbar />
      <main className="min-h-screen relative z-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
