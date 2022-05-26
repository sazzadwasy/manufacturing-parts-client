import React from 'react';

const Part = ({ part }) => {
    const { name, img, description, minOrderQuantity, availableQuantity, perUnitPrice } = part
    return (
        <div class="card md:max-w-md bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p className='text-2xl'>{minOrderQuantity}</p>
                <p className='text-2xl'>{availableQuantity}</p>
                <p className='text-2xl'>{perUnitPrice}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-active">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;