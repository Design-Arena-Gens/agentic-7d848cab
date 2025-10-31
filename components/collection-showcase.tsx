const collections = [
  {
    name: 'Moonlit Mythos',
    description: 'Folklore retold with constellations, perfect for bedtime rituals that whisk dreamers to twinkling realms.',
    color: 'from-[#f8f1ff] to-[#e5dcff]'
  },
  {
    name: 'Voyager Guild',
    description: 'STEM-infused adventures featuring brave cartographers, daring pilots, and cosmic botanists.',
    color: 'from-[#fef4ec] to-[#ffe1c2]'
  },
  {
    name: 'Whispered Woods',
    description: 'Earthbound tales with mossy libraries, enchanted fauna, and gentle lessons on stewardship.',
    color: 'from-[#eefcf3] to-[#c7efd8]'
  }
];

export function CollectionShowcase() {
  return (
    <section id="collections" className="mt-24 space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
            Signature Collections
          </p>
          <h2 className="section-heading mt-3">Curations to match every reader&apos;s heart</h2>
        </div>
        <p className="max-w-md text-sm text-ink/60">
          Thoughtfully assembled universes to accompany readers through seasons—ideal for gifting, classroom libraries, and family storytelling traditions.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {collections.map((collection) => (
          <div
            key={collection.name}
            className={`relative overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br ${collection.color} p-8 shadow-lg shadow-primary-900/10`}
          >
            <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-white/60 blur-2xl" aria-hidden />
            <h3 className="text-2xl font-heading text-ink">{collection.name}</h3>
            <p className="mt-3 text-sm text-ink/65">{collection.description}</p>
            <div className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-primary-500">
              Includes 5-7 titles · Gift wrapped · Personalized insert
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
