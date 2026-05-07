"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorMagnifier() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // We are re-adding the spring but with highly optimized "smooth but fast" configuration
  // This removes the "laggy" feeling while keeping the premium trailing animation.
  const springConfig = { damping: 40, stiffness: 600, mass: 0.05 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const tName = target.tagName?.toLowerCase();
      
      // Comprehensive list of text and interactive tags
      const textTags = [
        "p", "h1", "h2", "h3", "h4", "h5", "h6", "span", "a", "button", 
        "img", "svg", "li", "label", "strong", "em", "b", "i", "td", "th"
      ];

      if (
        textTags.includes(tName) ||
        target.closest(textTags.join(", ")) ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    // Add a class to body to hide default cursor
    document.body.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      height: 20,
      width: 20,
      backgroundColor: "rgba(242, 127, 12, 1)",
      mixBlendMode: "normal",
      border: "0px solid rgba(242, 127, 12, 0)",
    },
    text: {
      height: 100,
      width: 100,
      backgroundColor: "transparent",
      mixBlendMode: "difference",
      border: "2px solid rgba(255, 255, 255, 0.8)",
    }
  };

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <motion.div
        className="rounded-full flex items-center justify-center overflow-hidden"
        style={{
          x: "-50%",
          y: "-50%",
        }}
        variants={variants}
        animate={isHovering ? "text" : "default"}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.5
        }}
      >
        {/* Optional internal dot/crosshair */}
        {isHovering && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-1 h-1 bg-white rounded-full mix-blend-difference"
          />
        )}
      </motion.div>
    </motion.div>
  );
}
