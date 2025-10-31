'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const highlightCards = [
  {
    title: 'Curated worlds',
    description: 'Handpicked stories that illuminate imagination, reviewed by educators and storytellers.'
  },
  {
    title: 'Inclusive voices',
    description: 'Perspectives from diverse authors so every child can see themselves in the stories they read.'
  },
  {
    title: 'Beautiful editions',
    description: 'Premium prints with archival paper, foil accents, and immersive illustrations.'
  }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[3rem] bg-radial-hero px-6 py-16 sm:px-12 sm:py-20 lg:px-20">
      <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-8"
        >
          <span className="inline-flex items-center gap-3 rounded-full border border-primary-200 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.3em] text-primary-500">
            STORYBOOK MARKETPLACE
          </span>
          <h1 className="text-4xl font-heading text-ink sm:text-5xl lg:text-6xl">
            Where every night becomes an adventure under starlit pages.
          </h1>
          <p className="max-w-xl text-base text-ink/70 sm:text-lg">
            Luminara Stories curates exceptional storybooks for dreamers, explorers, and gentle rebels. From cosmic odysseys to whispered woodland mysteries, discover editions that glow in your hands and linger in hearts.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/catalog" className="btn-primary">
              Browse catalog
            </Link>
            <Link href="/#collections" className="btn-secondary">
              Explore collections
            </Link>
          </div>
          <div className="grid gap-4 pt-6 sm:grid-cols-3">
            {highlightCards.map((card) => (
              <div key={card.title} className="card">
                <h3 className="font-heading text-lg text-primary-700">{card.title}</h3>
                <p className="mt-2 text-sm text-ink/60">{card.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/90 p-4 shadow-2xl shadow-primary-900/20">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-gradient-to-b from-primary-200/40 to-primary-600/30">
              <Image
                src="https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=800&q=80"
                alt="Child reading a magical book"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 60vw, 420px"
              />
            </div>
            <div className="absolute -bottom-6 right-8 w-40 rounded-3xl bg-white/90 p-4 shadow-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-primary-500">Staff Pick</p>
              <p className="mt-1 font-heading text-base text-ink">Nebula Garden</p>
              <p className="text-xs text-ink/50">“Bloom constellations with every page turn.”</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
