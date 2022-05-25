import React from 'react';
import Banner from './Banner';
import BuissnessSummary from './BuissnessSummary/BuissnessSummary';
import History from './History/History';
import Review from './Review/Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
              {/* -----------Project Title----------- */}

      <h1 style={{ fontWeight: 'bold', textAlign: 'center' }} className='mt-16 mb-16 text-2xl'><span style={{ color: 'green' }}>Loyal Digital Platform</span> <span style={{ color: 'red' }}>Store House</span></h1>
      <br></br>
            <Tools></Tools>
            <BuissnessSummary></BuissnessSummary>
            <Review></Review>
            <History></History>
        </div>
    );
};

export default Home;