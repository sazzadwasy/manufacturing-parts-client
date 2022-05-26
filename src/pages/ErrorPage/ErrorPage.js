import React from 'react';

const ErrorPage = () => {
    return (
        <div className='py-10'>
            <h2 className='text-6xl text-center font-bold'>Sorry!<br />Page not found</h2>
            <br />
            <br />
            <h3 className='text-6xl text-center font-bold'>404 <span className='text-red-600'>:-(</span></h3>
        </div>
    );
};

export default ErrorPage;