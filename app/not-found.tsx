import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl rounded-[2.5rem] border border-white/70 bg-white/90 p-10 text-center shadow-xl shadow-primary-900/10">
      <h1 className="text-4xl font-heading text-ink">Page not found</h1>
      <p className="mt-4 text-sm text-ink/60">
        The story you are seeking seems to be nestled elsewhere. Explore our catalog to discover luminous adventures.
      </p>
      <Link href="/catalog" className="btn-primary mt-6 inline-flex">
        Browse catalog
      </Link>
    </div>
  );
}
