import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.25,
  });

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="
          fixed left-0 top-0 z-[9999]
          h-[4px] w-full origin-left
          bg-gradient-to-r
          from-indigo-500
          via-violet-500
          to-cyan-400
          shadow-[0_0_18px_rgba(99,102,241,0.55)]
        "
      />

      {/* Glow */}
      <motion.div
        style={{ scaleX }}
        className="
          fixed left-0 top-0 z-[9998]
          h-[10px] w-full origin-left
          bg-gradient-to-r
          from-indigo-500/30
          via-violet-500/30
          to-cyan-400/30
          blur-md
        "
      />
    </>
  );
}