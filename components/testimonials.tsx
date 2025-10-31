const testimonials = [
  {
    quote:
      'Every delivery feels like a miniature festival. Our bedtime ritual transformed into a cosmic journey we look forward to nightly.',
    name: 'Dara & Miles, Seattle',
    role: 'Parent & 7-year-old explorer'
  },
  {
    quote:
      'As an elementary librarian, the curated collections save hours. Representation is beautifully woven into every tale.',
    name: 'Maribel Ortiz',
    role: 'Elementary librarian'
  },
  {
    quote:
      'The tactile finishes and author spotlights make these editions perfect for gifting. They become heirlooms instantly.',
    name: 'Hannah Li',
    role: 'Bookshop owner'
  }
];

export function Testimonials() {
  return (
    <section className="mt-24 rounded-[2.5rem] bg-gradient-to-br from-primary-900 to-primary-700 px-8 py-14 text-white shadow-xl shadow-primary-900/20 sm:px-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Voices from our readers
          </p>
          <h2 className="text-3xl font-heading sm:text-4xl">
            Stories that echo beyond the final page
          </h2>
          <p className="text-sm text-white/70">
            Educators, families, and gift-givers choose Luminara Stories to elevate reading moments into multi-sensory journeys.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="rounded-3xl bg-white/10 p-6 text-sm text-white/80 shadow-lg shadow-primary-900/10 backdrop-blur"
            >
              <p className="leading-relaxed">“{testimonial.quote}”</p>
              <footer className="mt-4 space-y-1 text-xs uppercase tracking-[0.25em] text-white/60">
                <div>{testimonial.name}</div>
                <div>{testimonial.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
