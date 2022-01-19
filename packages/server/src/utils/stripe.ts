import Stripe from 'stripe';
import config from 'config';

const stripeConfig = new Stripe(config.get('stripeSecret') || '', {
  apiVersion: '2020-08-27',
});

export default stripeConfig;
