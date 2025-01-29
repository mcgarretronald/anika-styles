import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function SplashScreen({ onComplete }) {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        // Fade-out after 4 seconds
        const fadeTimer = setTimeout(() => {
            setOpacity(0); // Start fading out
        }, 3000);

        // Transition to homepage after the fade-out ends (total 5 seconds)
        const transitionTimer = setTimeout(() => {
            onComplete(); // Transition to homepage after 5 seconds
        }, 5000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(transitionTimer);
        };
    }, [onComplete]);

    return (
        <div 
            className="fixed inset-0 flex items-center justify-center bg-black text-white z-50"
            style={{ opacity: opacity, transition: "opacity 2s ease-out" }}
        >
            <img 
                src="./logo.svg" 
                alt="Anika Styles"
                className="w-[500px]" // Adjust size as needed
            />
        </div>
    );
}

SplashScreen.propTypes = {
    onComplete: PropTypes.func.isRequired,
};
