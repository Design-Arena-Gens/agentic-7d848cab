import { books, categories } from '@/lib/books';
import { CatalogBrowser } from '@/components/catalog-browser';

export const metadata = {
  title: 'Catalog | Luminara Stories',
  description:
    'Browse curated storybooks across fantasy, science fiction, and mystery genres. Filter by category, price, or format to find your next luminous read.'
};

export default function CatalogPage() {
  return (
    <div className="space-y-6">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
        Catalog
      </p>
      <CatalogBrowser books={books} categories={categories} />
    </div>
  );
}
