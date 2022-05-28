import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardTool.css';

const CardTool = ({ tools }) => {

    const navigate = useNavigate();

    const navigateToInventory = id => {
        
      const id1= id.toString();
      navigate(`/purchase/${id1}`)
    }

    return (
        <div className='card-align'>
            <div class="card  bg-base-100 shadow-xl">
                <figure><img src={tools.img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Name: {tools.name}</h2>
                    <p>Price: {tools.price}</p>
                    <p>Description: {tools.description}</p>
                    <p>Minimum Quantity: {tools.minquantity}</p>
                    <p>Available Quantity: {tools.availablequantity}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary" onClick={() => navigateToInventory(tools._id)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardTool;