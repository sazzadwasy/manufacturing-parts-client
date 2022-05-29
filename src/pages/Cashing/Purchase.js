import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { partId } = useParams()
    const [part, setPart] = useState({})
    const [user] = useAuthState(auth)
    const { _id, name, perUnitPrice, img } = part
    useEffect(() => {
        fetch(`https://fathomless-falls-46329.herokuapp.com/purchase/${partId}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [])
    const handleSubmit = event => {
        event.preventDefault()
        const order = {
            partId: _id,
            PartName: name,
            UserName: user.displayName,
            UserEmail: user.email,
            Quantity: parseInt(event.target.quantity.value),
            price: parseInt(event.target.price.value),
            UserLocation: event.target.location.value
        }
        fetch('https://fathomless-falls-46329.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast('Order placed successfully')
            })


    }
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={img} alt="" />
                    <div>
                        <h1 class="text-5xl font-bold mb-6">{name}</h1>
                        <form onSubmit={handleSubmit}>
                            <input type="text" value={name} class="input input-bordered input-primary w-full max-w-xs mt-2" readOnly />
                            <br />
                            <input name='price' type="text" value={perUnitPrice} placeholder="Price" class="input input-bordered input-primary w-full max-w-xs mt-2" readOnly />
                            <br />
                            <input type="text" value={user.displayName} class="input input-bordered input-primary w-full max-w-xs mt-2" readOnly />
                            <br />
                            <input type="text" value={user.email} class="input input-bordered input-primary w-full max-w-xs mt-2" readOnly />
                            <br />
                            <input name='quantity' type="number" placeholder="Quantity" class="input input-bordered input-primary w-full max-w-xs mt-2" />
                            <br />
                            <input name='location' type="text" placeholder="Location" class="input input-bordered input-primary w-full max-w-xs mt-2" />
                            <br />
                            <input type="submit" value="place Order" class="btn btn-primary w-full max-w-xs mt-2" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;