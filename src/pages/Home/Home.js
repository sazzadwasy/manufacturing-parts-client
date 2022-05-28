import React from 'react';
import Feedback from '../Feedback';
import Reviews from '../Review/Reviews';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;