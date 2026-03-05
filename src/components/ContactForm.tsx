'use client';

import { FormEvent, useState } from 'react';
import { SendHorizonal } from 'lucide-react';

type FormStatus =
  | { type: 'idle'; message: '' }
  | { type: 'success'; message: string }
  | { type: 'error'; message: string };

type ContactFormValues = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

const initialValues: ContactFormValues = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
};

const ContactForm = () => {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || 'Unable to send your message right now.');
      }

      setValues(initialValues);
      setStatus({
        type: 'success',
        message: 'Message sent successfully. We will get back to you soon.',
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Unable to send your message right now.';

      setStatus({ type: 'error', message: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0d1a35] md:p-8"
    >
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
            value={values.fullName}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, fullName: event.target.value }))
            }
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
            value={values.email}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
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
            value={values.phone}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, phone: event.target.value }))
            }
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
            value={values.message}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, message: event.target.value }))
            }
            placeholder="Write your message"
            className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-white/15 dark:bg-[#122142] dark:text-white"
          />
        </div>

        <div className="md:col-span-2 space-y-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
          >
            <SendHorizonal className="h-4 w-4" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {status.type !== 'idle' && (
            <p
              aria-live="polite"
              className={`text-sm ${
                status.type === 'success'
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-red-600 dark:text-red-400'
              }`}
            >
              {status.message}
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
