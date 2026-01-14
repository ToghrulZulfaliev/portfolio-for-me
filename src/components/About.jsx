import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-4 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid gap-12 md:grid-cols-2"
      >
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            My name is Toghrul Zulfaliyev, and I’m a Front-End Developer who enjoys building clean and modern
React interfaces.

I work on responsive layouts, API integrations, form handling, and state management using
Redux Toolkit. I like focusing on details that improve user experience, such as smooth animations,
clear UI states, and readable code.

I’m actively developing my skills through real projects and I’m motivated to grow in a professional
team environment.

          </p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            My goal is to help businesses and startups transform ideas into
            reliable, high-quality digital products that users enjoy.
          </p>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "JavaScript (ES6+)",
              "Redux Toolkit",
              "Axios & REST APIs",
              "Tailwind CSS",
              "Form Handling (Formik / React Hook Form)",
              "Responsive Layouts",
              "Git & GitHub",
              "Basic UI Animations",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border px-4 py-2 text-sm
                border-zinc-200 text-zinc-700
                dark:border-zinc-800 dark:text-zinc-300"
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
