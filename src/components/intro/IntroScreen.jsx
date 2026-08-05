import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Code2,
} from "lucide-react";

import me from "../../photo/newphoto.jpeg";

export default function IntroScreen() {
  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#050816] flex items-center justify-center px-6">

      {/* Background Glow */}

      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-indigo-600/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .7 }}
        className="relative text-center"
      >

        {/* Photo */}

        <motion.div
          initial={{ scale: .8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: .2 }}
          className="relative inline-block"
        >
          <div className="absolute inset-0 rounded-full bg-indigo-500 blur-3xl opacity-30" />

          <img
            src={me}
            alt="Toghrul Zulfaliev"
            className="relative h-36 w-36 rounded-full border-4 border-white/10 object-cover shadow-2xl"
          />
        </motion.div>

        {/* Badge */}

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: .35 }}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300"
        >
          <ShieldCheck className="h-4 w-4" />

          QA Engineer Portfolio
        </motion.div>

        {/* Name */}

        <motion.h1
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: .45 }}
          className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl"
        >
          Toghrul Zulfaliev
        </motion.h1>

        {/* Profession */}

        <motion.p
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: .6 }}
          className="mt-4 text-lg text-zinc-300"
        >
          Manual QA • API Testing • Automation QA
        </motion.p>

        <motion.p
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: .75 }}
          className="mt-2 text-sm text-zinc-500"
        >
          Frontend Development with React as an additional strength
        </motion.p>

        {/* Skills */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .9 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >

          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 backdrop-blur">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            Quality Assurance
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-indigo-400" />
            API Testing
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 backdrop-blur">
            <Code2 className="h-4 w-4 text-violet-400" />
            React
          </div>

        </motion.div>

        {/* Loading */}

        <div className="mx-auto mt-10 w-72 overflow-hidden rounded-full bg-white/10">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            className="h-1.5 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400"
          />

        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: .7 }}
          transition={{ delay: 1.2 }}
          className="mt-4 text-xs tracking-[4px] uppercase text-zinc-500"
        >
          Quality First
        </motion.p>

      </motion.div>
    </div>
  );
}