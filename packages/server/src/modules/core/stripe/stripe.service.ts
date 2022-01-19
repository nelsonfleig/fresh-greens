import config from 'config';
import Stripe from 'stripe';
import { Service } from 'typedi';
import { PaymentIntentType } from './stripe.types';

@Service()
export class StripeService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(config.get('stripeSecret') || '', {
      apiVersion: '2020-08-27',
    });
  }

  createPayment(paymentIntent: PaymentIntentType) {
    return this.stripe.paymentIntents.create(paymentIntent);
  }
}
