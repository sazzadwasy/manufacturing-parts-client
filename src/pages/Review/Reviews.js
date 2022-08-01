import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://fathomless-falls-46329.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-6'>
            <h2 className='py-14 text-5xl
             text-center text-cyan-900 
             font-bold'>Customer Reviews</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    reviews.slice(0, 3).map(singleReview => <Review
                        key={singleReview._id}
                        singleReview={singleReview}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;