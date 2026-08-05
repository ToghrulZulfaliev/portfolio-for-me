import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bug,
  CheckCircle2,
  Code2,
  Download,
  Mail,
  SearchCheck,
  ShieldCheck,
  TestTube2,
} from "lucide-react";

import me from "../../photo/newphoto.jpeg";

const expertise = [
  {
    icon: SearchCheck,
    label: "Manual Testing",
  },
  {
    icon: ShieldCheck,
    label: "API Testing",
  },
  {
    icon: TestTube2,
    label: "Automation QA",
  },
  {
    icon: Code2,
    label: "Frontend Knowledge",
  },
];

const highlights = [
  "Functional & regression testing",
  "Postman, Swagger & REST APIs",
  "Java, Selenium & Rest Assured",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-indigo-500/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm backdrop-blur dark:border-indigo-500/20 dark:bg-zinc-900/70 dark:text-indigo-300 sm:text-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>

            QA Engineer Portfolio
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.45 }}
            className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-400"
          >
            Manual QA · API Testing · Automation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="mt-4 text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-zinc-950 dark:text-white sm:text-5xl lg:text-[4.25rem]"
          >
            Ensuring software quality
            <span className="mt-2 block bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-violet-400 dark:to-cyan-400">
              from requirement to release
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-8 lg:mx-0"
          >
            I am a QA Engineer focused on manual testing, REST API validation
            and test automation. I design structured test scenarios, identify
            product risks and report defects clearly. My frontend development
            background helps me understand applications from both the user and
            developer perspectives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.5 }}
            className="mt-7 flex flex-wrap justify-center gap-2.5 lg:justify-start"
          >
            {expertise.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white/80 px-3.5 py-2.5 text-sm font-medium text-zinc-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-700 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-indigo-500/40 dark:hover:text-indigo-300"
              >
                <Icon
                  aria-hidden="true"
                  className="h-4 w-4 text-indigo-600 dark:text-indigo-400"
                />

                {label}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.5 }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start"
          >
            <a
              href="#works"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 active:translate-y-0 sm:w-auto sm:text-base"
            >
              Explore My Work

              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-800 transition duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 active:translate-y-0 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300 sm:w-auto sm:text-base"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              Contact Me
            </a>

            <a
              href="/cv/Toghrul Zulfaliyev - CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-transparent px-6 py-3.5 text-sm font-semibold text-zinc-700 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-100 focus:outline-none focus:ring-4 focus:ring-zinc-500/10 active:translate-y-0 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 sm:w-auto sm:text-base"
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.44, duration: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-zinc-600 dark:text-zinc-400 lg:justify-start"
          >
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2
                  aria-hidden="true"
                  className="h-4 w-4 text-emerald-500"
                />

                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.65, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-cyan-500/10 blur-3xl"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white p-2 shadow-2xl shadow-zinc-900/10 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/30">
            <div className="relative overflow-hidden rounded-[1.6rem] bg-zinc-100 dark:bg-zinc-800">
              <img
                src={me}
                alt="Toghrul Zulfaliev, QA Engineer"
                loading="eager"
                className="h-[390px] w-full object-cover object-[center_20%] sm:h-[470px] lg:h-[540px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/15 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 text-left sm:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    <BadgeCheck className="h-3.5 w-3.5 text-emerald-400" />
                    QA Engineer
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    <Code2 className="h-3.5 w-3.5 text-indigo-300" />
                    Frontend Background
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-bold tracking-tight text-white">
                  Toghrul Zulfaliev
                </h2>

                <p className="mt-1 text-sm text-zinc-300">
                  Manual QA · API Testing · Automation QA
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.58, duration: 0.5 }}
            className="absolute -bottom-7 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl border border-zinc-200 bg-white/95 p-4 shadow-xl backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/95 sm:left-auto sm:right-[-22px] sm:w-auto sm:min-w-[250px] sm:translate-x-0"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                <Bug aria-hidden="true" className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-bold text-zinc-950 dark:text-white">
                  Quality-driven approach
                </p>

                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  Detect risks · Validate flows · Improve releases
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}