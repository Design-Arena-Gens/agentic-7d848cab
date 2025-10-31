'use client';

import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  type ReactNode
} from 'react';
import {
  cartReducer,
  calculateCartSummary,
  initialCartState,
  type CartItem
} from '@/lib/cart';
import type { Book } from '@/lib/books';

interface CartContextValue {
  items: CartItem[];
  summary: ReturnType<typeof calculateCartSummary>;
  addToCart: (book: Book) => void;
  decrement: (bookId: string) => void;
  increment: (bookId: string) => void;
  removeItem: (bookId: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const value = useMemo(() => {
    const summary = calculateCartSummary(state);

    return {
      items: state.items,
      summary,
      addToCart: (book: Book) => dispatch({ type: 'ADD', book }),
      decrement: (bookId: string) => dispatch({ type: 'DECREMENT', bookId }),
      increment: (bookId: string) => dispatch({ type: 'INCREMENT', bookId }),
      removeItem: (bookId: string) => dispatch({ type: 'REMOVE', bookId }),
      clear: () => dispatch({ type: 'CLEAR' })
    } satisfies CartContextValue;
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
