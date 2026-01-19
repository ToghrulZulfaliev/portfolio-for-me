import { motion } from "framer-motion";

const stack = [
  
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "JavaScript (ES6+)",
  "React",
  "React Hooks",
  "Redux Toolkit",
  "Vite",
  "Axios",
  "REST API Integration",
  "Async/Await",
  "Formik & Yup",
  "Framer Motion",
  "EmailJS",
  "LocalStorage",
  "Lazy Loading",
  "SPA Architecture",
  "Component-Based Architecture",
  "Responsive Design",
  "UI/UX Principles",
  "Git & GitHub"


];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="mx-auto max-w-6xl px-4 py-14 sm:py-16 md:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="
          rounded-3xl border
          p-5 sm:p-8 md:p-10
          border-zinc-200 dark:border-zinc-800
          bg-zinc-50/70 dark:bg-zinc-900/50 backdrop-blur
        "
      >
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Tech Stack
          </h2>

          <p className="mt-2 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Tools I use to build production-ready interfaces.
          </p>
        </div>

        {/* STACK TAGS */}
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
          {stack.map((s) => (
            <motion.span
              key={s}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
                rounded-full border
                px-3 py-1.5 sm:px-4 sm:py-2
                text-xs sm:text-sm leading-none
                border-zinc-200 dark:border-zinc-700
                bg-white/70 dark:bg-zinc-950/30
                md:hover:border-indigo-400 md:dark:hover:border-indigo-400
                md:hover:bg-indigo-50/40 md:dark:hover:bg-indigo-500/10
                transition cursor-default
              "
            >
              {s}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
