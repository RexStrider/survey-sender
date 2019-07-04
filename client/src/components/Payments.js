import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
    state = {  }

    render() { 
        return (
            <StripeCheckout
                // 5 dollars or 500 cents
                amount={5 * 100}
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            />
        );
    }
}
 
export default Payments;