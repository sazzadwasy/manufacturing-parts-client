import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth)
    const handleSubmit = event => {
        event.preventDefault()
        const part = {
            name: event.target.name.value,
            img: event.target.img.value,
            description: event.target.description.value,
            minOrderQuantity: parseInt(event.target.minOrderQuantity.value),
            availableQuantity: parseInt(event.target.availableQuantity.value),
            perUnitPrice: parseInt(event.target.perUnitPrice.value)
        }
        fetch('https://fathomless-falls-46329.herokuapp.com/parts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(part)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Part added successfully')
            })

    }
    return (

        <div className='px-5'>
            <p className='text-3xl font-bold text-cyan-900'>Add a part</p>
            <form onSubmit={handleSubmit}>
                <input name='name' type="text" placeholder="Part name" class="input input-bordered input-primary w-full max-w-xs mt-2" />
                <br />
                <input name='img' type="text" placeholder="Photo url" class="input input-bordered input-primary w-full max-w-xs mt-2" />
                <br />
                <input name='description' type="text" placeholder="Description" class="input input-bordered input-primary w-full max-w-xs mt-2" />
                <br />
                <input name='minOrderQuantity' type="number" placeholder="Min order quantity" class="input input-bordered input-primary w-full max-w-xs mt-2" />
                <br />
                <input name='availableQuantity' type="number" placeholder="Available Quantity" class="input input-bordered input-primary w-full max-w-xs mt-2" />
                <br />
                <input name='perUnitPrice' type="text" placeholder="Per unit price" class="input input-bordered input-primary w-full max-w-xs mt-2" />
                <br />
                <input type="submit" value="Add part" class="btn btn-primary w-full max-w-xs mt-2" />
            </form>
        </div>
    );
};

export default AddProduct;