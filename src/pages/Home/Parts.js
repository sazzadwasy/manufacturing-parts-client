import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h2 className='py-14 text-5xl text-center text-cyan-900 font-bold'>Parts We Import</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}

                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;