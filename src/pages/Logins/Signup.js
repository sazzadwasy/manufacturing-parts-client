import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Signup = () => {
    const [signInWithGoogle, gUser, googleLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, UError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    let signInError;
    const navigate = useNavigate()
    if (loading || googleLoading || updating) {
        return <Loading></Loading>
    }
    if (error || gError) {
        signInError = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        console.log(data);
        navigate('/home')
    }
    if (user || gUser) {
        navigate('/home')
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-accent text-3xl font-bold">SignUp</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* email field  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required!'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                            </label>
                        </div>
                        {/* email field  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required!'
                                    },
                                    pattern: {
                                        value: /[A-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Enter a valid input!'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                            </label>
                        </div>
                        {/* password field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required!'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 charecter or longer!'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <br />
                        <input className='btn btn-accent w-full max-w-xs text-white' type="submit" value='Login' />
                    </form>
                    <p>Already have an account ? <Link className='text-primary' to='/login'>Please login</Link></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;