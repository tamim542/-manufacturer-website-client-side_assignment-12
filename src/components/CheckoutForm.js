import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({payment}) => {

    const stripe=useStripe()
    const elements=useElements();
   const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
  //  const [success, setSuccess] = useState('');
   // const [transactionId, setTransactionId] = useState('');
   // const [processing, setProcessing] = useState(false);

    const { _id, price,email,phoneno,address } = payment;


    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
          }

          const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        
            setCardError(error?.message || '');
            // setSuccess('');
            // setProcessing(true);

             // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        address: address,
                        email: email
                    },
                },
            },
        );

        // if (intentError) {
        //     setCardError(intentError?.message);
        //     setProcessing(false);
        // }
        // else {
        //     setCardError('');
        //     setTransactionId(paymentIntent.id);
        //     console.log(paymentIntent);
        //     setSuccess('Congrats! Your payment is completed.')
            
        //     //store payment on database
        //     const payment1 = {
        //         payment: _id,
        //         transactionId: paymentIntent.id
        //     }


        //     // fetch(`http://localhost:5000/orderpay/${_id}`, {
        //     //     method: 'PATCH',
        //     //     headers: {
        //     //         'content-type': 'application/json',
        //     //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        //     //     },
        //     //     body: JSON.stringify(payment1)
        //     // }).then(res=>res.json())
        //     // .then(data => {
        //     //     setProcessing(false);
        //     //     console.log(data);
        //     // })
        
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