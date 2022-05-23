import React from 'react';

const CardTool = ({ tools }) => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={tools.img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Name: {tools.name}</h2>
                    <p>Price: {tools.price}</p>
                    <p>Description: {tools.description}</p>
                    <p>Minimum Quantity: {tools.minquantity}</p>
                    <p>Available Quantity: {tools.availablequantity}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardTool;