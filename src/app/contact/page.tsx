import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Mail, Phone, SendHorizonal } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden border-t border-slate-200/70 bg-[linear-gradient(180deg,#f8f9fc_0%,#eef4ff_45%,#f9fbff_100%)] py-16 dark:border-white/10 dark:bg-[#061226] md:py-24">
          <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-20 bottom-8 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-7 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-[#0d1a35]/90 md:p-9">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                    Contact Us
                  </p>
                  <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                    Let&apos;s Start a Conversation
                  </h1>
                  <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                    Share your query and our team will get back to you with the
                    right guidance.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/90 px-4 py-3 dark:border-white/10 dark:bg-[#122142]">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Mail className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">
                          Email
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          info@wefi.institute
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/90 px-4 py-3 dark:border-white/10 dark:bg-[#122142]">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Phone className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">
                          Phone
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          +91 9633 687 336
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0d1a35] md:p-8">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="md:col-span-1">
                      <label
                        htmlFor="fullName"
                        className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-white/15 dark:bg-[#122142] dark:text-white"
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-white/15 dark:bg-[#122142] dark:text-white"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Enter your phone number"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-white/15 dark:bg-[#122142] dark:text-white"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Write your message"
                        className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-white/15 dark:bg-[#122142] dark:text-white"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 md:w-auto"
                      >
                        <SendHorizonal className="h-4 w-4" />
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
