import { motion } from "framer-motion";
import {
  Bug,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Users,
} from "lucide-react";

const qaSkills = [
  "Manual Testing",
  "Functional Testing",
  "Regression Testing",
  "Smoke Testing",
  "Sanity Testing",
  "UI Testing",
  "Responsive Testing",
  "Cross-browser Testing",
  "Test Case Design",
  "Bug Reporting",
  "SDLC",
  "STLC",
  "Agile",
  "Scrum",
];

const qaTools = [
  "Postman",
  "Swagger",
  "Jira",
  "Confluence",
  "Selenium",
  "Java",
  "TestNG",
  "JUnit",
  "Cucumber",
  "Rest Assured",
  "Maven",
  "SQL",
  "Chrome DevTools",
  "Git",
  "GitHub",
];

const frontendSkills = [
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "JavaScript",
  "React",
  "React Hooks",
  "Redux Toolkit",
  "React Router",
  "Vite",
  "Axios",
  "REST API Integration",
  "Responsive Design",
  "Framer Motion",
  "LocalStorage",
  "Git & GitHub",
];

const strengths = [
  {
    title: "Quality-focused mindset",
    description:
      "I approach software from the user’s perspective and focus on identifying risks before they affect the final product.",
    icon: ShieldCheck,
  },
  {
    title: "Analytical testing",
    description:
      "I create structured test scenarios, investigate unexpected behaviour and document defects clearly.",
    icon: SearchCheck,
  },
  {
    title: "Technical understanding",
    description:
      "My frontend knowledge helps me understand UI behaviour, API integrations and communicate effectively with developers.",
    icon: Code2,
  },
  {
    title: "Continuous learning",
    description:
      "I continuously improve my Manual QA, API testing and Automation QA knowledge through practical projects.",
    icon: Sparkles,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
            <ShieldCheck className="h-4 w-4" />
            About Me
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl lg:text-5xl">
            QA Engineer with a strong
            <span className="text-indigo-600 dark:text-indigo-400">
              {" "}
              frontend foundation
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-8">
            I focus on software quality through structured Manual Testing, API
            Testing and Automation QA while using my frontend development
            knowledge as an additional technical advantage.
          </p>
        </motion.div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                    <TestTube2 className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
                      Professional Profile
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-zinc-950 dark:text-white">
                      Toghrul Zulfaliev
                    </h3>
                  </div>
                </div>

                <div className="mt-7 space-y-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
                  <p>
                    I am a QA Engineer focused on building reliable,
                    user-friendly and high-quality software products. My main
                    areas of interest are Manual Testing, API Testing and
                    Automation QA.
                  </p>

                  <p>
                    I work with test scenarios, test cases, functional testing,
                    regression testing, responsive testing, API validation and
                    defect reporting. I pay close attention to business
                    requirements, edge cases and user experience.
                  </p>

                  <p>
                    My previous frontend development experience gives me a
                    stronger technical perspective. I understand React
                    components, state management, API integrations, responsive
                    layouts and common UI problems, which helps me communicate
                    effectively with development teams.
                  </p>

                  <p>
                    My goal is to grow as an Automation QA Engineer, contribute
                    to professional software teams and help deliver stable,
                    secure and high-quality digital products.
                  </p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/60">
                    <Bug className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />

                    <p className="mt-3 text-sm font-bold text-zinc-950 dark:text-white">
                      Manual QA
                    </p>

                    <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                      Functional, regression and UI testing
                    </p>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/60">
                    <Database className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />

                    <p className="mt-3 text-sm font-bold text-zinc-950 dark:text-white">
                      API Testing
                    </p>

                    <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                      Postman, Swagger and REST validation
                    </p>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/60">
                    <Code2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />

                    <p className="mt-3 text-sm font-bold text-zinc-950 dark:text-white">
                      Automation
                    </p>

                    <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                      Java, Selenium and Rest Assured
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="space-y-6 lg:col-span-5"
          >
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                    Current Focus
                  </h3>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    QA as the main professional direction
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  "Manual and functional software testing",
                  "REST API testing with Postman and Swagger",
                  "Automation testing with Java and Selenium",
                  "API automation with Rest Assured",
                  "SQL and database validation",
                  "Professional bug reports and test documentation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-zinc-50 p-3 dark:bg-zinc-950/60"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />

                    <span className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                  <Users className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                    Working Style
                  </h3>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    How I approach quality
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {strengths.map(({ title, description, icon: Icon }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-zinc-200 p-4 transition hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-zinc-800 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-500/5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-zinc-950 dark:text-white">
                          {title}
                        </h4>

                        <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="mt-8 grid gap-6 lg:grid-cols-3"        >
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-100 text-rose-600 dark:bg-rose-500/15 dark:text-rose-400">
                <Bug className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-bold text-zinc-950 dark:text-white">
                  QA Knowledge
                </h3>

                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Testing processes and techniques
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {qaSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950/60 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                <TestTube2 className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-bold text-zinc-950 dark:text-white">
                  QA Tools
                </h3>

                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Manual, API and automation stack
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {qaTools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950/60 dark:text-zinc-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400">
                <GitBranch className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-bold text-zinc-950 dark:text-white">
                  Frontend Skills
                </h3>

                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Additional technical strength
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {frontendSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950/60 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}