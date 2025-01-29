import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import SplashScreen from "../Components/SplashScreen";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Contact from "../Components/Contact";

export default function ComingSoon() {
    const [showSplash, setShowSplash] = useState(true);

    return (
        <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/BG.png')" }}
        >
            {/* Show Splash Screen */}
            {showSplash ? (
                <SplashScreen onComplete={() => setShowSplash(false)} />
            ) : (
                // Motion div for homepage with smooth fade-in transition
                <motion.div 
                    className="min-h-screen text-white bg-black/20"
                    initial={{ opacity: 0 }} // Initially hidden
                    animate={{ opacity: 1 }} // Fade-in effect
                    transition={{ duration: 1, ease: "easeInOut" }} // Transition timing
                >
                    <Header />
                    <Hero />
                    <Contact />
                </motion.div>
            )}
        </div>
    );
}
