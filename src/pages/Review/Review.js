import React from 'react';
import { StarIcon } from '@heroicons/react/solid'

const Review = ({ singleReview }) => {
    const { name, review, ratings } = singleReview
    return (
        <div class="card max-w-md bg-pink-200 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{review}</p>
                <p className='text-xl text-yellow-900 font-bold'>{ratings} <StarIcon className='w-6 inline text-orange-600'></StarIcon></p>
            </div>
        </div>
    );
};

export default Review;