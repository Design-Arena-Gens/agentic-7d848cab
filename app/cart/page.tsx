import { CartView } from '@/components/cart-view';

export const metadata = {
  title: 'Your Cart | Luminara Stories',
  description:
    'Review your selected storybooks and prepare for checkout. Adjust quantities or continue discovering luminous tales.'
};

export default function CartPage() {
  return <CartView />;
}
