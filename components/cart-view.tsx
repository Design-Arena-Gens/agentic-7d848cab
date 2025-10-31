'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/components/cart-provider';

export function CartView() {
  const { items, summary, decrement, increment, removeItem, clear } = useCart();

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="section-heading text-3xl">Your basket of stories</h1>
          {items.length > 0 && (
            <button
              type="button"
              onClick={clear}
              className="text-sm font-semibold text-primary-500 hover:text-primary-600"
            >
              Clear cart
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-primary-200 bg-white/80 p-12 text-center">
            <p className="text-sm text-ink/60">
              Your cart is awaiting its first tale. Browse the catalog to add luminous adventures.
            </p>
            <Link href="/catalog" className="btn-primary mt-6 inline-flex">
              Explore catalog
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-3xl border border-white/60 bg-white/80 p-5 shadow-md sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex flex-1 items-center gap-4">
                  <div className="relative h-24 w-20 overflow-hidden rounded-2xl bg-primary-50">
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-heading text-ink">{item.title}</h2>
                    <p className="text-sm text-ink/60">{item.author}</p>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-400"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center rounded-full border border-primary-100 bg-white shadow-sm">
                    <button
                      type="button"
                      onClick={() => decrement(item.id)}
                      className="h-10 w-10 rounded-l-full text-lg font-semibold text-primary-500"
                    >
                      –
                    </button>
                    <div className="w-12 text-center text-sm font-semibold text-ink">
                      {item.quantity}
                    </div>
                    <button
                      type="button"
                      onClick={() => increment(item.id)}
                      className="h-10 w-10 rounded-r-full text-lg font-semibold text-primary-500"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-ink/60">Price</p>
                    <p className="text-lg font-heading text-primary-700">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <aside className="space-y-6 rounded-3xl border border-white/70 bg-white/90 p-8 shadow-lg">
        <h2 className="text-2xl font-heading text-ink">Order Summary</h2>
        <div className="space-y-4 text-sm text-ink/70">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${summary.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${summary.shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated tax</span>
            <span>${summary.tax.toFixed(2)}</span>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-primary-100 pt-4 text-lg font-heading text-primary-700">
          <span>Total</span>
          <span>${summary.total.toFixed(2)}</span>
        </div>
        <Link
          href={items.length > 0 ? '/checkout' : '/catalog'}
          className="btn-primary w-full justify-center"
        >
          {items.length > 0 ? 'Proceed to checkout' : 'Browse stories'}
        </Link>
      </aside>
    </div>
  );
}
