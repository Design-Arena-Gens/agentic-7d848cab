import { Hero } from '@/components/hero';
import { FeaturedBooks } from '@/components/featured-books';
import { CollectionShowcase } from '@/components/collection-showcase';
import { CurationPromise } from '@/components/curation-promise';
import { Testimonials } from '@/components/testimonials';
import { Newsletter } from '@/components/newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedBooks />
      <CollectionShowcase />
      <CurationPromise />
      <Testimonials />
      <Newsletter />
    </>
  );
}
