import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h1>Manage : {parts.length}</h1>
        </div>
    );
};

export default ManageProducts;