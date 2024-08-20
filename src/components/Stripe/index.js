import React from 'react';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as DEMODATA from '../../constants/demoData';


import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './checkoutForm';

// Load Stripe with your publishable key
const stripePromise = loadStripe('your-publishable-key-here');

function Stripe() {
  return (
    <Elements stripe={stripePromise}>
      <div style={{marginLeft: 20 +'em'}}>
        <CheckoutForm />
      </div>
    </Elements>
  );
}

export default Stripe;