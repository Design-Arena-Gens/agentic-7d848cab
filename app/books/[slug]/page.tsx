import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBookById, books } from '@/lib/books';
import { BookCard } from '@/components/book-card';
import { AddToCartButton } from '@/components/add-to-cart-button';
import type { Metadata } from 'next';

interface BookPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.id }));
}

export function generateMetadata({ params }: BookPageProps): Metadata {
  const book = getBookById(params.slug);

  if (!book) {
    return {
      title: 'Book not found | Luminara Stories'
    };
  }

  return {
    title: `${book.title} | Luminara Stories`,
    description: book.description,
    openGraph: {
      title: book.title,
      description: book.description,
      images: [
        {
          url: book.coverImage
        }
      ]
    }
  };
}

export default function BookPage({ params }: BookPageProps) {
  const book = getBookById(params.slug);

  if (!book) {
    notFound();
  }

  const related = books.filter((item) => item.category === book.category && item.id !== book.id).slice(0, 3);

  return (
    <article className="space-y-16">
      <Link href="/catalog" className="btn-secondary inline-flex items-center gap-2">
        ← Back to catalog
      </Link>
      <div className="grid gap-10 rounded-[2.5rem] border border-white/70 bg-white/90 p-10 shadow-lg lg:grid-cols-[0.9fr,1.1fr]">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-gradient-to-b from-primary-100 via-white to-primary-200">
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            sizes="(max-width: 1024px) 80vw, 420px"
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary-500">
            <span className="rounded-full bg-primary-50 px-3 py-1 text-primary-600">
              {book.category}
            </span>
            {book.formats.map((format) => (
              <span key={format} className="rounded-full border border-primary-200 px-3 py-1 text-primary-600">
                {format}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-heading text-ink">{book.title}</h1>
          <p className="text-sm uppercase tracking-[0.25em] text-primary-400">By {book.author}</p>
          <p className="text-base leading-relaxed text-ink/70">{book.description}</p>
          <div className="flex items-baseline gap-6">
            <p className="text-3xl font-heading text-primary-700">${book.price.toFixed(2)}</p>
            <p className="text-sm text-ink/60">Rating: {book.rating.toFixed(1)} / 5</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <AddToCartButton book={book} />
            <Link href="/cart" className="btn-secondary">
              View cart
            </Link>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="space-y-6">
          <h2 className="section-heading text-2xl">More {book.category.toLowerCase()} adventures</h2>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <BookCard key={item.id} book={item} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
