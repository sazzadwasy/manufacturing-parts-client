import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, img, description, minOrderQuantity, availableQuantity, perUnitPrice } = part
    const navigate = useNavigate()
    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div class="card md:max-w-md bg-base-100 shadow-xl">
            <figure><img src={img} alt="tools" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p className='text-2xl'>Min-order-quantity : {minOrderQuantity}</p>
                <p className='text-2xl'>Available Quantity : {availableQuantity}</p>
                <p className='text-2xl'>Price : {perUnitPrice}</p>
                <div class="card-actions justify-end">
                    <button onClick={() => navigateToPurchase(_id)} class="btn btn-active">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;