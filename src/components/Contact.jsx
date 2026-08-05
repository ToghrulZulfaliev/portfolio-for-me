import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const contactItems = [
  {
    label: "Email",
    value: "toghrulzulfaliev8@gmail.com",
    href: "mailto:toghrulzulfaliev8@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+994 50 777 22 88",
    href: "tel:+994507772288",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/toghrulzulfaliev",
    href: "https://www.linkedin.com/in/toghrulzulfaliev",
    icon: FaLinkedin,
  },
  {
    label: "Location",
    value: "Azerbaijan",
    href: null,
    icon: MapPin,
  },
];

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);

  const [status, setStatus] = useState({
    type: "",
    text: "",
  });

  const [loading, setLoading] = useState(false);

  const emailConfigurationIsValid = useMemo(() => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    return Boolean(serviceId && templateId && publicKey);
  }, []);

  useEffect(() => {
    if (!status.text) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setStatus({
        type: "",
        text: "",
      });
    }, 5000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [status.text]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));

    if (status.text) {
      setStatus({
        type: "",
        text: "",
      });
    }
  };

  const validateForm = () => {
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      return "Please complete all required fields.";
    }

    if (!EMAIL_PATTERN.test(form.email.trim())) {
      return "Please enter a valid email address.";
    }

    if (form.name.trim().length < 2) {
      return "Your name must contain at least 2 characters.";
    }

    if (form.subject.trim().length < 3) {
      return "The subject must contain at least 3 characters.";
    }

    if (form.message.trim().length < 10) {
      return "Your message must contain at least 10 characters.";
    }

    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      type: "",
      text: "",
    });

    const validationMessage = validateForm();

    if (validationMessage) {
      setStatus({
        type: "error",
        text: validationMessage,
      });

      return;
    }

    if (!emailConfigurationIsValid) {
      setStatus({
        type: "error",
        text: "Email service is not configured. Please contact me directly by email, LinkedIn or WhatsApp.",
      });

      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          to_email:
            import.meta.env.VITE_RECEIVE_EMAIL ||
            "toghrulzulfaliev8@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        text: "Your message has been sent successfully. I will get back to you soon.",
      });

      setForm(INITIAL_FORM);
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        text:
          error?.text ||
          "The message could not be sent. Please contact me directly by email or LinkedIn.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClassName =
    "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-950/60 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-indigo-500";

  return (
    <section
      id="contact"
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
            Let&apos;s Connect
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl lg:text-5xl">
            Let&apos;s build
            <span className="text-indigo-600 dark:text-indigo-400">
              {" "}
              quality software
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-8">
            I am open to QA Engineer, Manual QA, API Testing and Automation QA
            opportunities. You can also contact me regarding frontend projects
            and technical collaboration.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <div className="h-full rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
                  Contact Information
                </p>

                <h3 className="mt-2 text-2xl font-bold text-zinc-950 dark:text-white">
                  Available for QA opportunities
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Contact me directly for job opportunities, internship roles,
                  freelance projects or professional collaboration.
                </p>
              </div>

              <div className="mt-7 space-y-3">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  const content = (
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
                          {item.label}
                        </p>

                        <p className="mt-1 break-words text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  if (!item.href) {
                    return (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/60"
                      >
                        {content}
                      </div>
                    );
                  }

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-zinc-800 dark:bg-zinc-950/60 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-500/10"
                    >
                      {content}
                    </a>
                  );
                })}
              </div>

              <div className="mt-7 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-500/20 dark:bg-emerald-500/10">
                <div className="flex items-start gap-3">
                  <span className="relative mt-1 flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>

                  <div>
                    <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
                      Open to opportunities
                    </p>

                    <p className="mt-1 text-xs leading-5 text-emerald-700 dark:text-emerald-400">
                      Available for QA Engineer, Manual QA, API Testing and
                      Automation QA roles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href="https://github.com/ToghrulZulfaliev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300"
                >
                  <FaGithub className="h-4 w-4" />
                  GitHub
                </a>

                <a
                  href="https://wa.me/994507772288?text=Hello%20Toghrul%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20QA%20opportunity."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
                  Send a Message
                </p>

                <h3 className="mt-2 text-2xl font-bold text-zinc-950 dark:text-white">
                  Tell me about the opportunity
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Fill out the form and I will respond as soon as possible.
                </p>
              </div>

              {status.text && (
                <div
                  role="alert"
                  aria-live="polite"
                  className={`mt-6 flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300"
                      : "border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  ) : (
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  )}

                  <span className="leading-6">{status.text}</span>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                noValidate
                className="mt-8 grid gap-5 sm:grid-cols-2"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-zinc-800 dark:text-zinc-200"
                  >
                    Full name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="Your full name"
                    autoComplete="name"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold text-zinc-800 dark:text-zinc-200"
                  >
                    Email address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="you@example.com"
                    inputMode="email"
                    autoComplete="email"
                    className={inputClassName}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-semibold text-zinc-800 dark:text-zinc-200"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="QA opportunity, project or collaboration"
                    className={inputClassName}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-semibold text-zinc-800 dark:text-zinc-200"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="Tell me about the role, project or opportunity..."
                    rows={6}
                    className={`${inputClassName} resize-y`}
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:text-base"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending message...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}