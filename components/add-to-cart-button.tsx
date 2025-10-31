'use client';

import { useCart } from '@/components/cart-provider';
import type { Book } from '@/lib/books';

interface AddToCartButtonProps {
  book: Book;
}

export function AddToCartButton({ book }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button type="button" className="btn-primary" onClick={() => addToCart(book)}>
      Add to cart
    </button>
  );
}
