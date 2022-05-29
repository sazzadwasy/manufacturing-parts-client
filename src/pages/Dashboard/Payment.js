import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L4iIuGJgr2a8I4qTDXiw7K8GPSZvV3IVfUQ5YXoW24PbR4FQYwyjjyn6R79SS2u86vgmEp59d3loCuF2Ez2NieO00d7mrVNGd');
const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/orders/${id}`
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <p className='text-5xl text-cyan-800'>Please pay for : {id}</p>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-cyan-800 font-bold">Part : {order.PartName}</p>
                    <h2 class="card-title">Payment of : {order._id}</h2>
                    <p>Please pay: {order.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;