import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Myportfolio from '../Home/Myportfolio';

const Navbar = () => {
    const [user, loading] = useAuthState(auth)
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };
    const navbarOptions =
        <>
            <li><Link to='/home' className='font-bold'>Home</Link></li>
            <li><Link to='/blogs' className='font-bold'>Blogs</Link></li>
            <li><Link to='/myportfolio' className='font-bold'>Portfolio</Link></li>
            <li>{user && <Link to='/dashboard' className='font-bold'>Dashboard</Link>}</li>
            <li>{user
                ? <button onClick={logout} class="btn btn-ghost font-bold" >Logout</button>
                : <Link to='/login' className='font-bold'>Login</Link>}</li>
        </>
    return (
        <div class="navbar bg-base-100 py-4">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbarOptions}
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-2xl font-bold text-cyan-800">Manufacturer Parts</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navbarOptions}
                </ul>
            </div>
            <div className='navbar-end'>
                <label tabindex="1" for="dashboard-sidebar" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;