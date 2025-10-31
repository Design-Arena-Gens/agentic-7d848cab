import type { Book } from '@/lib/books';
import { books } from '@/lib/books';
import { BookCard } from '@/components/book-card';

export function FeaturedBooks() {
  const featured = books.filter((book) => book.featured);

  return (
    <section id="featured" className="mt-24 space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
            Featured Stories
          </p>
          <h2 className="section-heading mt-3">Curated editions that glow after dusk</h2>
        </div>
        <p className="max-w-md text-sm text-ink/60">
          Our featured shelf rotates monthly with celebrated titles, festival award winners, and handcrafted keepsakes that readers cherish long after the final chapter.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {featured.map((book: Book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
