import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone } from 'lucide-react';

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

                <ContactForm />
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
