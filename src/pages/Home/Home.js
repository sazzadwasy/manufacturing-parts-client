import React from 'react';
import Feedback from '../Feedback';
import Reviews from '../Review/Reviews';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Factory from './Factory';
import Parts from './Parts';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Factory></Factory>
            <Reviews></Reviews>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;