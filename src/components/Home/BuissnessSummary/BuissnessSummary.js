import React from 'react';



const BuissnessSummary = () => {
    return (
        <div className='ml-32 mr-32 mt-28 mb-16'>
            <div className='flex'>
                <div className='ml-20 mr-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 pb-6 text-center" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                        <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                        <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                    </svg>
                    <h2 className='text-center text-2xl font-bold pb-6' >500+ </h2>
                    <h2 className='text-center text-2xl font-bold pb-6'>customers</h2>
                </div>
                <div className='ml-20 mr-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 pb-6 text-center" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                    </svg>
                    <h2 className='text-center text-2xl font-bold pb-6'>220M+</h2>
                    <h2 className='text-center text-2xl font-bold pb-6'> Annual revenue</h2>
                </div>
                <div className='ml-20 mr-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 pb-6 text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <h2 className='text-center text-2xl font-bold pb-6'>3K+</h2>
                    <h2 className='text-center text-2xl font-bold pb-6'> Reviews</h2>
                </div>
                <div className='ml-20 mr-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 pb-6 text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <h2 className='text-center text-2xl font-bold pb-6'>10+</h2>
                    <h2 className='text-center text-2xl font-bold pb-6'> Products</h2>
                </div>
            </div>
        </div>
    );
};

export default BuissnessSummary;