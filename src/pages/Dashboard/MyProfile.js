import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)

    const handleUpdateUser = event => {
        event.preventDefault()
        const user = {
            name: event.target.name.value,
            email: event.target.email.value,
            education: event.target.education.value,
            location: event.target.location.value,
            phone: event.target.phone.value,
            linkedin: event.target.linkedin.value
        }
        fetch(`https://fathomless-falls-46329.herokuapp.com/user/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => {
                toast.success('Updated profile successfully')
                console.log(res)
            })


    }
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-4xl font-bold text-cyan-400 mb-6">Profile</h1>
                    <p class="text-xl text-cyan-900 py-2 mb-4">Name : {user.displayName}  </p>
                    <p class="text-xl text-cyan-900 py-2 mb-4">Email : {user.email}</p>
                </div>
                <div class="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleUpdateUser}>
                            <input name='name' type="text" value={user.displayName} placeholder="Part name" class="input input-bordered input-info w-full max-w-xs mt-2" disabled />
                            <br />
                            <input name='email' value={user.email} type="text" placeholder="Email address" class="input input-bordered input-info w-full max-w-xs mt-2" disabled />
                            <br />
                            <input name='education' type="text" placeholder="Education" class="input input-bordered input-info w-full max-w-xs mt-2" />
                            <br />
                            <input name='location' type="text" placeholder="Location" class="input input-bordered input-info w-full max-w-xs mt-2" />
                            <br />
                            <input name='phone' type="number" placeholder="Phone number" class="input input-bordered input-info w-full max-w-xs mt-2" />
                            <br />
                            <input name='linkedin' type="text" placeholder="Linkedin profile link" class="input input-bordered input-info w-full max-w-xs mt-2" />
                            <br />
                            <input type="submit" value="Update profile" class="btn btn-info w-full max-w-xs mt-2" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;