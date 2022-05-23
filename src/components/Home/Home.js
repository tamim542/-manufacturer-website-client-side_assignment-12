import React from 'react';
import Banner from './Banner';
import BuissnessSummary from './BuissnessSummary/BuissnessSummary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Tools></Tools>
            <BuissnessSummary></BuissnessSummary>
        </div>
    );
};

export default Home;