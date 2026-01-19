import { motion } from "framer-motion";
import me from "../../photo/gbt.jpeg";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 pb-12 sm:pt-14 sm:pb-14 md:pt-24 md:pb-16">
      <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-2">
        {/* Left */}
        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs sm:text-sm
            border-zinc-200 text-zinc-700
            dark:border-zinc-800 dark:text-zinc-300"
          >
            Front-End Developer Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="
              mt-4 sm:mt-5
              font-bold tracking-tight
              leading-[1.08] sm:leading-[1.05]
              text-3xl sm:text-4xl lg:text-5xl
              text-zinc-900 dark:text-zinc-100
            "
          >
            I build modern{" "}
            <span className="block">
              <span className="text-indigo-500">React</span>{" "}
              <span className="whitespace-nowrap sm:whitespace-normal">
                interfaces
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="mt-3 sm:mt-4 mx-auto md:mx-0 max-w-xl text-sm sm:text-lg leading-relaxed
            text-zinc-600 dark:text-zinc-400"
          >
            Building scalable, high-performance React applications with clean UI and smooth user experience.
            Available for remote Front-End roles and freelance projects.


          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="mt-6 sm:mt-7 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start"
          >
            <a
              href="#works"
              className="w-full sm:w-auto text-center rounded-xl bg-indigo-500 px-5 sm:px-6 py-3 text-white font-medium hover:bg-indigo-600 transition active:scale-[0.99]"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto text-center rounded-xl border px-5 sm:px-6 py-3 font-medium
              border-zinc-300 dark:border-zinc-700
              hover:bg-zinc-100 dark:hover:bg-zinc-800 transition active:scale-[0.99]"
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
          className="relative w-full"
        >
          <div className="absolute -inset-2 rounded-3xl bg-indigo-500/15 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-white shadow-sm dark:border-zinc-800/70 dark:bg-zinc-900">
            <img
              src={me}
              alt="Toghrul Zulfaliyev"
              loading="eager"
              className="
                w-full object-cover
                h-[280px] xs:h-[320px] sm:h-[380px] md:h-[420px]
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
