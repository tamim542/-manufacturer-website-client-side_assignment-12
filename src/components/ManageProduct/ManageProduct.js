import React from 'react';
import useManufactures from '../../Hooks/useManufactures';
import './ManageProduct.css';

const ManageProduct = () => {

    const [manufacture, setManufacture] = useManufactures();
    //------------Delete item tools----------------

    const handleDelete = id =>{
        const deleteItem = window.confirm('Are you confirm to delete this order?');
        if(deleteItem){
            const url = `http://localhost:5000/deletetools/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = manufacture.filter(item => item._id !== id);
                setManufacture(remaining);
            })
        }
    }
    return (
        <div>
            {
                manufacture.map(product => <div class="card lg:card-side bg-base-100 shadow-xl manage-product">
                    <figure><img src={product.img} style={{padding:'20px'}} alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Name: {product.name}</h2>
                        <p>Price: {product.price}</p>
                        <p>Description: {product.description}</p>
                        <p>Minimum Quantity: {product.minquantity}</p>
                        <p>Available Quantity: {product.availablequantity}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary" onClick={() => handleDelete(product._id)}>Delete</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageProduct;