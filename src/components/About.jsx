import { motion } from "framer-motion";

export default function About() {
  const skills = [
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

  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-4 py-14 sm:py-16 md:py-20"
    >
      {/* title */}
      <div className="mb-8 sm:mb-10 text-center lg:text-left">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          About
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          About Me
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="grid gap-6 lg:grid-cols-12 lg:gap-10 items-start"
      >
        {/* Left */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-zinc-200 bg-white/60 p-5 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/40 sm:p-6">
            <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              My name is Toghrul Zulfaliyev, and I’m a Front-End Developer who
              enjoys building clean and modern React interfaces.
            </p>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              I work on responsive layouts, API integrations, form handling, and
              state management using Redux Toolkit. I focus on details that
              improve user experience — smooth animations, clear UI states, and
              readable code.
            </p>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              I’m actively developing my skills through real projects and I’m
              motivated to grow in a professional team environment.
            </p>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              My goal is to help businesses and startups transform ideas into
              reliable, high-quality digital products that users enjoy.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-zinc-200 bg-white/60 p-5 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/40 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Tools & Technologies
            </h3>

            <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full border
                    px-3 py-1.5 sm:px-4 sm:py-2
                    text-xs sm:text-sm
                    leading-none
                    border-zinc-200 text-zinc-700
                    dark:border-zinc-800 dark:text-zinc-200
                    bg-white/50 dark:bg-zinc-950/20
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="mt-5 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              I’m continuously improving and building real projects to strengthen
              my skills.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
