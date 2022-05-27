import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch(`http://localhost:5000/orders?buyer=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])
    return (
        <div>
            <h1>My Orders : {orders.length}</h1>
        </div>
    );
};

export default MyOrders;