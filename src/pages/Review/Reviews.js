import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h2 className='py-14 text-4xl
             text-center text-cyan-900 
             font-bold'>Customers Reviews</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(singleReview => <Review
                        key={singleReview._id}
                        singleReview={singleReview}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;