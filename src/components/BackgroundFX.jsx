import { motion } from "framer-motion";

export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* soft grid */}
      <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(99,102,241,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,.35) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* blobs */}
      <motion.div
        className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, rgba(99,102,241,.45), transparent 60%)" }}
      />
      <motion.div
        className="absolute top-24 -right-32 h-96 w-96 rounded-full blur-3xl"
        animate={{ x: [0, -35, 0], y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, rgba(16,185,129,.35), transparent 60%)" }}
      />
      <motion.div
        className="absolute bottom-[-120px] left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full blur-3xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, rgba(236,72,153,.22), transparent 60%)" }}
      />
    </div>
  );
}
