import { CardElement, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = () => {

    const stripe=useStripe()
    const handleSubmit = async (event) => {
        event.preventDefault();

        // if (!stripe || !elements) {
        //     return;
        // }
    }

    return (
        <div>
               <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;