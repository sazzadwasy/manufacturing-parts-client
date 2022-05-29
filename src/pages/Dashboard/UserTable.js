import React from 'react';
import { toast } from 'react-toastify';

const UserTable = ({ user, refetch }) => {
    const { email, role } = user
    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make Admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Successfully made an admin');
                }

            })
    }
    return (
        <tr>
            <th></th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-sm'>Make Admin</button>}</td>
            <td><button className='btn btn-sm'>Remove User</button></td>
        </tr>
    );
};

export default UserTable;