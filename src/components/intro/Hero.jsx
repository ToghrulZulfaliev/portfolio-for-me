import { motion } from "framer-motion";
import me from "../../photo/ownphoto.jpg";
// şəklinin adı fərqlidirsə dəyiş

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 pb-16 md:pt-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="inline-flex items-center rounded-full border px-3 py-1 text-sm
            border-zinc-200 text-zinc-700
            dark:border-zinc-800 dark:text-zinc-300"
          >
            Front-End Developer Portfolio

          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-6 text-5xl md:text-6xl font-bold leading-tight"
          >
            I build modern <br />
            <span className="text-indigo-500">React</span> interfaces
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="mt-6 max-w-xl text-zinc-600 dark:text-zinc-400"
          >
            Experienced in React, Redux Toolkit, Tailwind CSS, and modern front-end
            workflows for production applications.

          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#works"
              className="rounded-xl bg-indigo-500 px-6 py-3 text-white font-medium hover:bg-indigo-600 transition"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded-xl border px-6 py-3 font-medium
              border-zinc-300 dark:border-zinc-700
              hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="relative"
        >
          <div className="absolute -inset-2 rounded-3xl bg-indigo-500/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-white shadow-sm dark:border-zinc-800/70 dark:bg-zinc-900">
            <img
              src={me}
              alt="Toghrul Zulfaliyev"
              className="h-[420px] w-full object-cover"
            />
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
