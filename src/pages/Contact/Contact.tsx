import { motion, useReducedMotion } from "motion/react";
import Footer from "../../components/Footer/Footer";

function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative z-10 isolate flex flex-col items-center scroll-mt-0 px-5 pb-2 pt-16 sm:px-8 sm:pb-4 sm:pt-16 lg:px-16 lg:pb-4 lg:pt-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <header className="text-center">
          <p className="text-2xl font-bold uppercase tracking-[0.28em] text-accent-soft">
           ~ Contact ~
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-3xl">
            Let's Work Together
          </h1>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#aaa099] sm:text-base">
            Have an idea in mind ? Let's connect and turn it into something meaningful.
          </p>
        </header>

        <div className="mx-auto mt-4 grid max-w-5xl items-center gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-8 lg:mt-6">
          <form onSubmit={handleSubmit} className="mx-auto w-full max-w-md space-y-3">
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-[#d8d1ca]">
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="w-full rounded-sm border border-white/15 bg-transparent px-3 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[#756c65] focus:border-accent-soft"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-[#d8d1ca]">
                Your Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-sm border border-white/15 bg-transparent px-3 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[#756c65] focus:border-accent-soft"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-[#d8d1ca]">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                className="w-full rounded-sm border border-white/15 bg-transparent px-3 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[#756c65] focus:border-accent-soft"
                placeholder="How can I help?"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-[#d8d1ca]">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={3}
                required
                className="w-full resize-none rounded-sm border border-white/15 bg-transparent px-3 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[#756c65] focus:border-accent-soft"
                placeholder="Tell me a little about your project..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-sm bg-accent px-4 py-2.5 text-sm font-semibold text-[#fff8f2] transition-colors hover:bg-accent-soft"
            >
              Let's Connect
            </button>
          </form>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-0 items-center justify-center text-center md:min-h-64"
          >
            <p className="max-w-xl font-display text-2xl leading-tight font-semibold tracking-[-0.025em] text-white sm:text-3xl lg:text-4xl">
              Have a question, project, or just want to say hi? I am always happy to connect.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="w-full [&>footer]:mt-6 [&>footer]:py-4">
        <Footer />
      </div>
    </section>
  );
}

export default Contact;
