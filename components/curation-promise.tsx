const promises = [
  {
    title: 'Story Artisan Team',
    description: 'Educators, librarians, and illustrators evaluate every narrative for developmental richness and joy.'
  },
  {
    title: 'Sustainable Materials',
    description: 'Certified eco-friendly inks and papers ensure each keepsake honors the worlds it brings to life.'
  },
  {
    title: 'Reader Matching',
    description: 'Personalized recommendations adapt to reading level, interests, and sensory preferences.'
  }
];

export function CurationPromise() {
  return (
    <section id="curation" className="mt-24 rounded-[2.5rem] border border-white/70 bg-white/80 p-10 shadow-xl shadow-primary-900/10">
      <div className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
            Our Curation Promise
          </p>
          <h2 className="section-heading mt-3">Crafted with intention, delivered with magic</h2>
          <p className="mt-4 text-sm text-ink/65">
            Beyond bestsellers, we spotlight hidden gems from independent presses and storytellers around the globe. Each book is evaluated for narrative depth, representation, and enduring re-read value.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {promises.map((promise) => (
            <div key={promise.title} className="card h-full">
              <h3 className="text-lg font-heading text-primary-700">{promise.title}</h3>
              <p className="mt-3 text-sm text-ink/60">{promise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
