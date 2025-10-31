'use client';

import { useState } from 'react';

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get('email');

    if (!email) return;

    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' }
      });
      setSubmitted(true);
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section id="newsletter" className="mt-24 rounded-[2.5rem] border border-white/70 bg-white/90 p-10 shadow-xl shadow-primary-900/10">
      <div className="grid gap-8 lg:grid-cols-[1fr,0.8fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
            Join the constellation
          </p>
          <h2 className="section-heading">Receive luminous recommendations monthly</h2>
          <p className="text-sm text-ink/65">
            Our newsletter highlights new arrivals, author conversations, and storytelling rituals to keep your library glowing. Subscribers gain first access to limited-run prints.
          </p>
        </div>
        <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email to subscribe"
            className="h-12 flex-1 rounded-full border border-primary-100 bg-white px-5 text-sm outline-none transition focus:border-primary-300 focus:ring-2 focus:ring-primary-200"
          />
          <button type="submit" className="btn-primary h-12 justify-center">
            Subscribe
          </button>
        </form>
        {submitted && (
          <p className="text-sm font-medium text-primary-600">
            Thank you! Your reading constellation awaits 🌙
          </p>
        )}
      </div>
    </section>
  );
}
