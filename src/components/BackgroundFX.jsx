import { motion, useReducedMotion } from "framer-motion";

export default function BackgroundFX() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white dark:bg-zinc-950"
    >
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(99,102,241,0.28) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.28) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.25), transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.25), transparent)",
        }}
      />

      <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-indigo-50/80 via-white/30 to-transparent dark:from-indigo-950/20 dark:via-zinc-950/20" />

      <motion.div
        className="absolute -left-32 -top-28 h-[26rem] w-[26rem] rounded-full blur-[110px]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 35, 0],
                y: [0, 24, 0],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.32) 0%, rgba(99,102,241,0.12) 42%, transparent 72%)",
        }}
      />

      <motion.div
        className="absolute -right-36 top-20 h-[30rem] w-[30rem] rounded-full blur-[120px]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -40, 0],
                y: [0, 30, 0],
                scale: [1, 0.94, 1],
              }
        }
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.22) 0%, rgba(16,185,129,0.1) 45%, transparent 72%)",
        }}
      />

      <motion.div
        className="absolute bottom-[-220px] left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full blur-[130px]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -30, 0],
                scale: [1, 1.06, 1],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(236,72,153,0.08) 45%, transparent 72%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.045]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(24,24,27,0.9) 0.7px, transparent 0.7px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-zinc-950 dark:via-zinc-950/75" />
    </div>
  );
}