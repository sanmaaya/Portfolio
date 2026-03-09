import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseenter", onMouseEnter);
            document.addEventListener("mouseleave", onMouseLeave);
            document.addEventListener("mousedown", onMouseDown);
            document.addEventListener("mouseup", onMouseUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
        };

        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseLeave = () => setHidden(true);
        const onMouseEnter = () => setHidden(false);
        const onMouseDown = () => setClicked(true);
        const onMouseUp = () => setClicked(false);

        const handleLinkHoverEvents = () => {
            document.querySelectorAll("a, button, input, textarea").forEach((el) => {
                el.addEventListener("mouseenter", () => setLinkHovered(true));
                el.addEventListener("mouseleave", () => setLinkHovered(false));
            });
        };

        addEventListeners();
        handleLinkHoverEvents();

        setTimeout(handleLinkHoverEvents, 2000); // Re-run for dynamic elements

        return () => removeEventListeners();
    }, []);

    if (hidden) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500 pointer-events-none z-[100] mix-blend-difference"
                animate={{
                    x: position.x - 16,
                    y: position.y - 16,
                    scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
                    backgroundColor: linkHovered ? "rgba(59, 130, 246, 0.2)" : "transparent",
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[100] mix-blend-difference"
                animate={{
                    x: position.x - 4,
                    y: position.y - 4,
                    scale: clicked ? 0.5 : linkHovered ? 0 : 1,
                }}
                transition={{ type: "spring", stiffness: 1000, damping: 40 }}
            />
        </>
    );
}
