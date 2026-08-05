import { motion } from "framer-motion";
import {
  Bug,
  Code2,
  Database,
  SearchCheck,
  ShieldCheck,
  TestTube2,
} from "lucide-react";

const services = [
  {
    icon: Bug,
    title: "Manual Testing",
    description:
      "Creating detailed test scenarios, executing functional, regression, smoke and UI testing while ensuring software quality from the user's perspective.",
  },
  {
    icon: ShieldCheck,
    title: "API Testing",
    description:
      "Testing REST APIs using Postman and Swagger, validating request and response structures, status codes, authentication and business logic.",
  },
  {
    icon: TestTube2,
    title: "Automation QA",
    description:
      "Building automation frameworks with Java, Selenium, TestNG, Cucumber and Rest Assured to improve testing efficiency and reliability.",
  },
  {
    icon: Database,
    title: "SQL & Data Validation",
    description:
      "Writing SQL queries to validate application data, verify business rules and ensure database consistency during testing.",
  },
  {
    icon: SearchCheck,
    title: "Bug Analysis",
    description:
      "Finding critical defects, reproducing issues consistently and creating professional bug reports with clear reproduction steps and expected results.",
  },
  {
    icon: Code2,
    title: "Frontend Knowledge",
    description:
      "Strong React development background helps me understand UI architecture, component behavior and communicate effectively with developers.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
            Professional Skills
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl lg:text-5xl">
            What I bring as a
            <span className="text-indigo-600 dark:text-indigo-400">
              {" "}
              QA Engineer
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-8">
            My primary expertise is Software Quality Assurance. Frontend
            development is an additional technical advantage that helps me
            understand applications from both the user and developer
            perspectives.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.45,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-indigo-300 hover:shadow-xl hover:shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40 dark:hover:shadow-black/20"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 transition group-hover:scale-110 dark:bg-indigo-500/15 dark:text-indigo-400">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-zinc-950 transition group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}