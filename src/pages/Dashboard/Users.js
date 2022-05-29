import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserTable from './UserTable';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://fathomless-falls-46329.herokuapp.com/users').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-4xl'>users {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserTable
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;