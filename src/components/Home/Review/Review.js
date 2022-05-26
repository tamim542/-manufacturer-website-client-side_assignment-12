import React, { useEffect, useState } from 'react';
import './Review.css';

const Review = () => {
    const [reviews, setReviews]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
  
    return (
        <div>
            <h2 className='text-2xl font-bold text-purple-500 text-center mb-24'>Review Section</h2>
        <div className='review-design'>
            
            {
                reviews.map(review=><div class="card w-96 bg-purple-500 pl-3 pt- pb-3 mb-4 text-primary-content">
                <div class="card-body">
                    <h2 class="card-title">Name: {review.name}</h2>
                    <p>Description: {review.description}</p>
                    <p>Product Name: {review.productname}</p>
                    <p>Rating: {review.rating}</p>
                    
                </div>
            </div>)
            }
        </div>
        </div>
    );
};

export default Review;