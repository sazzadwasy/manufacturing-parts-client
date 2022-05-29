import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageProducts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [parts])
    const handleDelete = id => {
        console.log(id)
        const proceed = window.confirm('Are you want to delete a part?')
        if (proceed) {
            const url = `http://localhost:5000/parts/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = parts.filter(part => part._id !== id)
                    setParts(remaining)
                    toast.success('A part deleted from manage parts')
                })
        }
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Min-Order Quantity</th>
                            <th>Available Quantity</th>
                            <th>Per Unit Price</th>
                            <th>Delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map(part => <tr>
                                <td>{part.name}</td>
                                <td>{part.minOrderQuantity}</td>
                                <td>{part.availableQuantity}</td>
                                <td>{part.perUnitPrice}</td>
                                <td><button onClick={() => handleDelete(part._id)} className='btn btn-sm btn-error'>Delete part</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;