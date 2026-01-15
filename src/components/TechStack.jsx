import { motion } from "framer-motion";

const stack = [
  "React",
  "Redux Toolkit",
  "JavaScript (ES6+)",
  "Axios",
  "REST API Integration",
  "Formik & Yup",
  "Tailwind CSS",
  "Framer Motion",
  "EmailJS",
  "Git & GitHub",
  "Responsive Design",
  "UI/UX Principles",
  "SaaS",
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="
          rounded-3xl border
          p-5 sm:p-8 md:p-10
          border-zinc-200 dark:border-zinc-800
          bg-zinc-50/70 dark:bg-zinc-900/50 backdrop-blur
        "
      >
        <h2 className="text-2xl sm:text-3xl font-bold">
          Tech Stack
        </h2>

        <p className="mt-2 max-w-2xl text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Tools I use to build production-ready interfaces.
        </p>

        {/* STACK TAGS */}
        <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
          {stack.map((s) => (
            <motion.span
              key={s}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
                rounded-full border
                px-3 py-1.5 sm:px-4 sm:py-2
                text-xs sm:text-sm
                border-zinc-200 dark:border-zinc-700
                bg-white/70 dark:bg-zinc-950/30
                hover:border-indigo-400 dark:hover:border-indigo-400
                hover:bg-indigo-50/40 dark:hover:bg-indigo-500/10
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
