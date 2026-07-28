"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorMagnifier() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth, optimized spring for fluid cursor tracking
  const springConfig = { damping: 35, stiffness: 500, mass: 0.05 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // States: "default" | "textZoom" (headings & paragraphs) | "interactive" (buttons & links)
  const [cursorState, setCursorState] = useState("default");

  useEffect(() => {
    const updateMousePosition = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const tName = target.tagName?.toLowerCase();

      // 1. Buttons, links, inputs, and clickable interactive elements
      const isInteractive =
        ["a", "button", "input", "select", "textarea"].includes(tName) ||
        Boolean(target.closest("a, button, [role='button'], input, select, textarea")) ||
        window.getComputedStyle(target).cursor === "pointer";

      // 2. Heading and Paragraph text elements ONLY
      const isHeadingOrParagraph =
        ["p", "h1", "h2", "h3", "h4", "h5", "h6"].includes(tName) ||
        Boolean(target.closest("p, h1, h2, h3, h4, h5, h6"));

      if (isInteractive) {
        setCursorState("interactive");
      } else if (isHeadingOrParagraph) {
        setCursorState("textZoom");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    document.body.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      height: 16,
      width: 16,
      backgroundColor: "rgba(242, 127, 12, 0.95)",
      mixBlendMode: "normal",
      border: "0px solid transparent",
      boxShadow: "0 0 10px rgba(242, 127, 12, 0.5)",
      scale: 1,
    },
    // Circle text magnifier for Headings and Paragraphs ONLY
    textZoom: {
      height: 76,
      width: 76,
      backgroundColor: "rgba(242, 127, 12, 0.12)",
      mixBlendMode: "difference",
      border: "2px solid rgba(242, 127, 12, 0.85)",
      boxShadow: "0 0 20px rgba(242, 127, 12, 0.3)",
      scale: 1.1,
    },
    // Sleek focus ring for Buttons and Links (NO text zoom)
    interactive: {
      height: 36,
      width: 36,
      backgroundColor: "rgba(242, 127, 12, 0.2)",
      mixBlendMode: "normal",
      border: "1.5px solid rgba(242, 127, 12, 0.9)",
      boxShadow: "0 0 15px rgba(242, 127, 12, 0.4)",
      scale: 1,
    },
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
        animate={cursorState}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 28,
          mass: 0.2,
        }}
      >
        {/* Inner center dot for text zoom mode */}
        {cursorState === "textZoom" && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="w-1.5 h-1.5 rounded-full bg-[#f27f0c] shadow-[0_0_8px_#f27f0c]"
          />
        )}
      </motion.div>
    </motion.div>
  );
}

