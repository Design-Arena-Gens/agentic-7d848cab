'use client';

import { FormEvent, useState } from 'react';
import { useCart } from '@/components/cart-provider';
import Link from 'next/link';

export function CheckoutForm() {
  const { summary, items, clear } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    clear();
    setOrderComplete(true);
    setIsSubmitting(false);
  }

  if (orderComplete) {
    return (
      <div className="rounded-[2.5rem] border border-white/70 bg-white/90 p-12 text-center shadow-xl shadow-primary-900/10">
        <h1 className="text-3xl font-heading text-ink">Your order is on the way ✨</h1>
        <p className="mt-4 text-sm text-ink/60">
          A confirmation email is twinkling its way to your inbox. Your stories will arrive packaged with stardust and care.
        </p>
        <Link href="/catalog" className="btn-primary mt-6 inline-flex">
          Continue exploring
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-[2.5rem] border border-dashed border-primary-200 bg-white/90 p-12 text-center shadow-xl">
        <h1 className="text-2xl font-heading text-ink">Your cart is currently empty</h1>
        <p className="mt-4 text-sm text-ink/60">
          Add storybooks to your constellation before completing checkout.
        </p>
        <Link href="/catalog" className="btn-primary mt-6 inline-flex">
          Browse catalog
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-10 rounded-[2.5rem] border border-white/70 bg-white/90 p-10 shadow-xl shadow-primary-900/10"
    >
      <div>
        <h1 className="section-heading text-3xl">Checkout</h1>
        <p className="mt-3 text-sm text-ink/60">
          Provide your details to finalize this enchanting delivery.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <fieldset className="space-y-4">
          <legend className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-500">
            Contact
          </legend>
          <input
            type="text"
            name="name"
            required
            placeholder="Full name"
            className="w-full rounded-2xl border border-primary-100 bg-white px-4 py-3 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-200"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email address"
            className="w-full rounded-2xl border border-primary-100 bg-white px-4 py-3 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-200"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            className="w-full rounded-2xl border border-primary-100 bg-white px-4 py-3 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-200"
          />
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-500">
            Shipping
          </legend>
          <input
            type="text"
            name="address"
            required
            placeholder="Street address"
            className="w-full rounded-2xl border border-primary-100 bg-white px-4 py-3 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-200"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              required
              placeholder="City"
              className="rounded-2xl border border-primary-100 bg-white px-4 py-3 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-200"
            />
            <input
              type="text"
              name="postal"
              required
              placeholder="Postal code"
              className="rounded-2xl border border-primary-100 bg-white px-4 py-3 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-200"
            />
          </div>
          <input
            type="text"
            name="country"
            required
            placeholder="Country"
            className="w-full rounded-2xl border border-primary-100 bg-white px-4 py-3 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-200"
          />
        </fieldset>
      </div>

      <fieldset className="space-y-4">
        <legend className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-500">
          Payment details
        </legend>
        <div className="grid gap-4 md:grid-cols-3">
          <input
            type="text"
            name="cardNumber"
            required
            placeholder="Card number"
            className="md:col-span-2 rounded-2xl border border-primary-100 bg-white px-4 py-3 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-200"
          />
          <input
            type="text"
            name="cvc"
            required
            placeholder="CVC"
            className="rounded-2xl border border-primary-100 bg-white px-4 py-3 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-200"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            name="expiry"
            required
            placeholder="Expiry date"
            className="rounded-2xl border border-primary-100 bg-white px-4 py-3 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-200"
          />
          <input
            type="text"
            name="nameOnCard"
            required
            placeholder="Name on card"
            className="rounded-2xl border border-primary-100 bg-white px-4 py-3 text-sm focus:border-primary-300 focus:ring-2 focus:ring-primary-200"
          />
        </div>
      </fieldset>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-ink/60">
          Total due today: <span className="font-semibold text-primary-600">${summary.total.toFixed(2)}</span>
        </p>
        <button type="submit" className="btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Processing…' : 'Complete order'}
        </button>
      </div>
    </form>
  );
}
