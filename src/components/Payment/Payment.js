import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm';
import Loading from '../Shered/Loading/Loading';

const stripePromise = loadStripe('pk_test_51L42zjKNWIkPqTQTI6AsuYLPyX2snpTbodqIXmOdJdgDOf2ewYQMp587KuuLUnCbXpBbTJVd5w0UYUQJPZZNVTAE00nngYcSBb');

const Payment = () => {
    const { id } = useParams();
   // const url = `http://localhost:5000/productorder/${id}`;

    // const { data: appointment, isLoading } = useQuery(['productorder', id], () => fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => res.json()));

    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    const [payment, setPayment] = useState([])


    useEffect( () => {
        
        

        fetch(`http://localhost:5000/productorder/${id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res =>res.json())
    
      .then(data =>setPayment(data));
    
    }, [payment])
 

console.log('payment=',payment);
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                <h2 class="card-title">Product Id: {payment.productId}</h2>
                <p>Phone No: {payment.phoneNo}</p>
                <p>Address: {payment.address}</p>
                <p>Quantity: {payment.quantity}</p>
                    
                    <p>Please pay: ${payment.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm payment={payment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;