import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile px-12">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h3 className='text-3xl text-green-600 font-bold'>Dashboard</h3>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/addreview">Add Review</Link></li>
                    {admin && <li><Link to="/dashboard/users">Make Admin</Link></li>}
                    {admin && <li><Link to="/dashboard/addProduct">Add a part</Link></li>}
                    {admin && <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>}
                    {admin && <li><Link to="/dashboard/manageAllOrders">Manage All Orders</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;