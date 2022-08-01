import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ReviewAdd = () => {
    const [user] = useAuthState(auth)
    const handleSubmit = event => {
        event.preventDefault()
        const review = {
            name: user.displayName,
            email: user.email,
            review: event.target.review.value,
            ratings: event.target.ratings.value
        }
        fetch('https://fathomless-falls-46329.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Review added successfully')
            })

    }
    return (
        <div className='px-5'>
            <p className='text-3xl font-bold text-cyan-900'>Add a review</p>
            <form onSubmit={handleSubmit}>
                <input type="text" value={user.displayName} class="input input-bordered input-info w-full max-w-xs mt-2" readOnly disabled />
                <br />
                <input type="text" value={user.email} class="input input-bordered input-info w-full max-w-xs mt-2" readOnly disabled />
                <br />
                <input name='review' type="text" placeholder="Write a review" class="input input-bordered input-info w-full max-w-xs mt-2" />
                <br />
                <input name='ratings' type="text" placeholder="Ratings" class="input input-bordered input-info w-full max-w-xs mt-2" />
                <br />
                <input type="submit" value="Post Review" class="btn btn-info w-full max-w-xs mt-2" />
            </form>
        </div>
    );
};

export default ReviewAdd;