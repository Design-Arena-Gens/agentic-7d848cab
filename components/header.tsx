'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingBagIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/components/cart-provider';
import Image from 'next/image';
import clsx from 'clsx';

const navigation = [
  { name: 'Discover', href: '/' },
  { name: 'Catalog', href: '/catalog' },
  { name: 'Featured', href: '/#featured' },
  { name: 'Collections', href: '/#collections' },
  { name: 'Cart', href: '/cart' }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.24em] text-primary-700">
          <div className="book-shadow flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg">
            <Image
              src="/logo-mark.svg"
              alt="Luminara Stories logo"
              width={30}
              height={30}
              priority
            />
          </div>
          LUMINARA
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/80 lg:flex">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="transition hover:text-primary-600">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-primary-100 bg-white text-primary-600 shadow-sm transition hover:border-primary-200 hover:text-primary-700"
            aria-label="View cart"
          >
            <ShoppingBagIcon className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-accent px-1 text-xs font-semibold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-primary-100 p-2 text-primary-600 transition hover:border-primary-200 hover:text-primary-700 lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={clsx(
          'lg:hidden',
          'px-6 pb-4 pt-2 text-sm font-medium text-ink/80 transition-all duration-200',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        )}
      >
        <div className="flex flex-col gap-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-xl bg-white/60 px-4 py-3 shadow-sm transition hover:bg-white"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
