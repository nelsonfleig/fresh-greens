import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

type Props = {
  children: React.ReactNode;
};

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string);

export const StripeProvider = ({ children }: Props) => {
  return <Elements stripe={stripeLib}>{children}</Elements>;
};
