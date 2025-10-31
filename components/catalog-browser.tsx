'use client';

import { useMemo, useState } from 'react';
import type { Book, BookCategory } from '@/lib/books';
import { BookCard } from '@/components/book-card';
import clsx from 'clsx';

interface CatalogBrowserProps {
  books: Book[];
  categories: BookCategory[];
}

export function CatalogBrowser({ books, categories }: CatalogBrowserProps) {
  const [activeCategory, setActiveCategory] = useState<BookCategory | 'All'>('All');
  const [maxPrice, setMaxPrice] = useState(40);
  const [search, setSearch] = useState('');
  const [format, setFormat] = useState<'Any' | 'Hardcover' | 'Paperback' | 'E-book' | 'Audiobook'>('Any');

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchCategory = activeCategory === 'All' || book.category === activeCategory;
      const matchPrice = book.price <= maxPrice;
      const matchSearch =
        search.trim().length === 0 ||
        [book.title, book.author, book.description]
          .join(' ')
          .toLowerCase()
          .includes(search.toLowerCase());
      const matchFormat = format === 'Any' || book.formats.includes(format);
      return matchCategory && matchPrice && matchSearch && matchFormat;
    });
  }, [books, activeCategory, maxPrice, search, format]);

  return (
    <div className="grid gap-8 lg:grid-cols-[280px,1fr]">
      <aside className="space-y-8 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-md">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-500">
            Search
          </h3>
          <input
            type="search"
            placeholder="Search by title or author"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="mt-3 w-full rounded-full border border-primary-100 bg-white px-4 py-2 text-sm outline-none transition focus:border-primary-300 focus:ring-2 focus:ring-primary-200"
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-500">
            Category
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {['All', ...categories].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category as BookCategory | 'All')}
                className={clsx(
                  'rounded-full border px-4 py-2 text-sm transition',
                  activeCategory === category
                    ? 'border-primary-500 bg-primary-500 text-white'
                    : 'border-primary-100 bg-white text-primary-600 hover:border-primary-200'
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-500">
            Format
          </h3>
          <div className="mt-3 grid gap-2">
            {['Any', 'Hardcover', 'Paperback', 'E-book', 'Audiobook'].map((option) => (
              <label key={option} className="flex items-center gap-3 text-sm text-ink/70">
                <input
                  type="radio"
                  name="format"
                  value={option}
                  checked={format === option}
                  onChange={() => setFormat(option as typeof format)}
                  className="h-4 w-4 text-primary-500 focus:ring-primary-300"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-sm font-semibold text-primary-600">
            <span>Max price</span>
            <span>${maxPrice.toFixed(0)}</span>
          </div>
          <input
            type="range"
            min={10}
            max={40}
            value={maxPrice}
            onChange={(event) => setMaxPrice(Number(event.target.value))}
            className="mt-3 w-full accent-primary-500"
          />
        </div>
      </aside>
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="section-heading text-2xl">Storybook catalog</h2>
          <p className="text-sm text-ink/60">
            Showing <strong>{filteredBooks.length}</strong> {filteredBooks.length === 1 ? 'title' : 'titles'}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        {filteredBooks.length === 0 && (
          <div className="rounded-3xl border border-dashed border-primary-200 bg-white/80 p-12 text-center text-sm text-ink/60">
            No stories match those filters yet. Adjust your constellation and explore again.
          </div>
        )}
      </section>
    </div>
  );
}
