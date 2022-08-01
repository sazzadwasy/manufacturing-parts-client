import React from 'react';
import { StarIcon } from '@heroicons/react/solid'
import revImg from '../../../src/images/prfl.jpg'

const Review = ({ singleReview }) => {
    const { name, review, ratings } = singleReview
    return (
        <div class="card max-w-md bg-gray-200 shadow-xl">
            <div class="card-body">
                <div class="avatar mx-auto">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={revImg} alt="" />
                    </div>
                </div>
                <h2 class="card-title">{name}</h2>
                <p>{review}</p>
                <p className='text-xl text-yellow-900 font-bold text-center'>{ratings} <StarIcon className='w-6 inline text-orange-600'></StarIcon></p>
            </div>
        </div>
    );
};

export default Review;