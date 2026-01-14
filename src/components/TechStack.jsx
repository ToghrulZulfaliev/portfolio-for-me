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
  "SAAS"
];

export default function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border p-8 md:p-10
        border-zinc-200 dark:border-zinc-800
        bg-zinc-50/70 dark:bg-zinc-900/50 backdrop-blur"
      >
        <h2 className="text-3xl font-bold">Tech Stack</h2>
        <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Tools I use to build production-ready interfaces.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full border px-4 py-2 text-sm
              border-zinc-200 dark:border-zinc-700
              bg-white/70 dark:bg-zinc-950/30"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
