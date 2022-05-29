import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch(`https://fathomless-falls-46329.herokuapp.com/orders/admin`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => setOrders(data))
    }, [user])
    const handleDelete = id => {
        console.log(id)
        const proceed = window.confirm('Are you want to delete a part?')
        if (proceed) {
            const url = `https://fathomless-falls-46329.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE',
            })

                .then(data => {
                    console.log(data)
                    const remaining = orders.filter(part => part._id !== id)
                    setOrders(remaining)
                    toast.success('A part deleted from manage parts')
                })
        }
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Quantity</th>
                            <th>Email</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr>
                                <td>{order.PartName}</td>
                                <td>{order.Quantity}</td>
                                <td>{order.UserEmail}</td>
                                <td><button onClick={() => handleDelete(order._id)} className='btn btn-xs btn-error'>Cancel</button></td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;