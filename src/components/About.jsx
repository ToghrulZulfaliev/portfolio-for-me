import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "React",
    "JavaScript (ES6+)",
    "Redux Toolkit",
    "Axios & REST APIs",
    "Tailwind CSS",
    "Form Handling (Formik / React Hook Form)",
    "Responsive Layouts",
    "Git & GitHub",
    "Basic UI Animations",
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="grid gap-10 md:gap-12 md:grid-cols-2 items-start"
      >
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            My name is Toghrul Zulfaliyev, and I’m a Front-End Developer who enjoys building clean and modern React interfaces.
          </p>

          <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I work on responsive layouts, API integrations, form handling, and state management using Redux Toolkit.
            I focus on details that improve user experience — smooth animations, clear UI states, and readable code.
          </p>

          <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I’m actively developing my skills through real projects and I’m motivated to grow in a professional team environment.
          </p>

          <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            My goal is to help businesses and startups transform ideas into reliable, high-quality digital products that users enjoy.
          </p>
        </div>

        {/* Right */}
        <div className="text-center md:text-left">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">
            Tools & Technologies
          </h3>

          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
            {skills.map((skill) => (
              <span
                key={skill}
                className="
                  rounded-full border
                  px-3 py-1.5 sm:px-4 sm:py-2
                  text-xs sm:text-sm
                  border-zinc-200 text-zinc-700
                  dark:border-zinc-800 dark:text-zinc-300
                  bg-white/50 dark:bg-zinc-950/20
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
