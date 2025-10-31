'use client';

import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/20/solid';
import { useCart } from '@/components/cart-provider';
import type { Book } from '@/lib/books';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-2xl shadow-primary-900/10 transition duration-300 hover:-translate-y-2 hover:shadow-primary-900/20">
      <div className="relative mb-5 aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-tr from-primary-100 via-white to-primary-200">
        <Image
          src={book.coverImage}
          alt={book.title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex-1 space-y-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary-500">
          <span className="rounded-full bg-primary-50 px-3 py-1 text-primary-600">
            {book.category}
          </span>
          {book.featured && (
            <span className="rounded-full border border-primary-200 px-3 py-1 text-primary-600">
              Featured
            </span>
          )}
        </div>
        <div>
          <h3 className="text-xl font-heading text-ink">
            <Link href={`/books/${book.id}`} className="transition hover:text-primary-600">
              {book.title}
            </Link>
          </h3>
          <p className="text-sm text-ink/60">By {book.author}</p>
        </div>
        <p className="text-sm leading-relaxed text-ink/70 line-clamp-3">{book.description}</p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-1 text-sm font-semibold text-ink">
          <StarIcon className="h-5 w-5 text-accent" />
          {book.rating.toFixed(1)}
        </div>
        <span className="text-lg font-heading text-primary-700">
          ${book.price.toFixed(2)}
        </span>
      </div>
      <div className="mt-5 flex items-center justify-between gap-3">
        <Link
          href={`/books/${book.id}`}
          className="btn-secondary flex-1 justify-center whitespace-nowrap"
        >
          View details
        </Link>
        <button
          type="button"
          onClick={() => addToCart(book)}
          className="btn-primary flex-1 justify-center whitespace-nowrap"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
