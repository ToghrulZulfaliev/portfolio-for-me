import { motion } from "framer-motion";
import {
  Bug,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  LayoutDashboard,
  ShieldCheck,
  TerminalSquare,
  TestTube2,
} from "lucide-react";

const categories = [
  {
    title: "QA Testing",
    icon: Bug,
    color: "text-rose-500",
    skills: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "UI Testing",
      "Cross Browser Testing",
      "Responsive Testing",
      "API Testing",
      "Bug Reporting",
      "Test Case Design",
      "Test Scenario Creation",
      "SDLC",
      "STLC",
      "Agile",
      "Scrum",
    ],
  },
  {
    title: "Automation QA",
    icon: TestTube2,
    color: "text-indigo-500",
    skills: [
      "Java",
      "Selenium",
      "TestNG",
      "JUnit",
      "Cucumber",
      "Rest Assured",
      "Maven",
      "Page Object Model",
      "Data Driven Testing",
      "API Automation",
    ],
  },
  {
    title: "API & Database",
    icon: Database,
    color: "text-emerald-500",
    skills: [
      "Postman",
      "Swagger",
      "REST API",
      "JSON",
      "SQL",
      "MySQL",
      "Database Validation",
      "Request / Response Validation",
    ],
  },
  {
    title: "Frontend",
    icon: Globe,
    color: "text-cyan-500",
    skills: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript (ES6+)",
      "React",
      "React Hooks",
      "Redux Toolkit",
      "Axios",
      "Responsive Design",
      "Framer Motion",
      "REST API Integration",
    ],
  },
  {
    title: "Development Tools",
    icon: TerminalSquare,
    color: "text-violet-500",
    skills: [
      "Git",
      "GitHub",
      "IntelliJ IDEA",
      "VS Code",
      "Chrome DevTools",
      "Vite",
      "EmailJS",
    ],
  },
  {
    title: "Methodologies",
    icon: LayoutDashboard,
    color: "text-amber-500",
    skills: [
      "Requirement Analysis",
      "Bug Life Cycle",
      "Test Documentation",
      "Jira",
      "Confluence",
      "Quality Assurance",
      "Problem Solving",
      "Team Collaboration",
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
            <ShieldCheck className="h-4 w-4" />
            Technical Skills
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl lg:text-5xl">
            Technology &
            <span className="text-indigo-600 dark:text-indigo-400">
              {" "}
              QA Stack
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
            My primary expertise is Software Quality Assurance. Frontend
            development serves as a complementary technical skill that helps me
            understand applications from both the tester's and developer's
            perspectives.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-indigo-300 hover:shadow-xl hover:shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40"
              >
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-indigo-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                    <Icon className={`h-7 w-7 ${category.color}`} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
                      {category.title}
                    </h3>

                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {category.skills.length} Technologies
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="
                        rounded-full
                        border
                        border-zinc-200
                        bg-zinc-50
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-zinc-700
                        transition
                        hover:border-indigo-400
                        hover:bg-indigo-50
                        hover:text-indigo-700
                        dark:border-zinc-700
                        dark:bg-zinc-950/60
                        dark:text-zinc-300
                        dark:hover:border-indigo-500/40
                        dark:hover:bg-indigo-500/10
                        dark:hover:text-indigo-300
                      "
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 rounded-3xl border border-zinc-200 bg-gradient-to-r from-indigo-50 via-white to-violet-50 p-6 text-center dark:border-zinc-800 dark:bg-gradient-to-r dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900"
        >
          <div className="flex justify-center">
            <GitBranch className="h-8 w-8 text-indigo-500" />
          </div>

          <h3 className="mt-4 text-xl font-bold text-zinc-950 dark:text-white">
            Always Learning
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            I continuously improve my Manual QA, API Testing, Automation QA and
            Frontend skills through real-world projects, hands-on practice and
            continuous learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}