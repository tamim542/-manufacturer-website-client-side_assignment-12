import React from 'react';
import Banner from './Banner';
import BuissnessSummary from './BuissnessSummary/BuissnessSummary';
import Review from './Review/Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Tools></Tools>
            <BuissnessSummary></BuissnessSummary>
            <Review></Review>
        </div>
    );
};

export default Home;