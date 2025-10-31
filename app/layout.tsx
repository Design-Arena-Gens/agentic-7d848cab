import type { Metadata } from 'next';
import { Inter, Cinzel } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/components/cart-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel'
});

export const metadata: Metadata = {
  title: 'Luminara Stories | Enchanted Storybook Marketplace',
  description:
    'Discover curated storybooks that spark imagination. Explore fantasy, adventure, and science fiction tales beautifully crafted for young readers.',
  metadataBase: new URL('https://agentic-7d848cab.vercel.app'),
  openGraph: {
    title: 'Luminara Stories',
    description:
      'Discover handpicked storybooks that spark imagination and wonder.',
    url: 'https://agentic-7d848cab.vercel.app',
    siteName: 'Luminara Stories',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Storybooks on a wooden table'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luminara Stories',
    description:
      'Curated storybooks that spark imagination for every type of reader.'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-br from-[#f7f5ff] via-[#fff] to-[#f1ebff] text-ink">
        <CartProvider>
          <div className="flex min-h-screen flex-col" id="top">
            <Header />
            <main className="flex-1 px-6 pb-16 pt-28 sm:px-8 lg:px-24">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
