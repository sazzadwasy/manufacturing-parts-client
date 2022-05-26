import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Parts></Parts>

        </div>
    );
};

export default Home;