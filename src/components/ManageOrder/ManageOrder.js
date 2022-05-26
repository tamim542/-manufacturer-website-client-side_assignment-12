import React, { useEffect, useState } from 'react';
import './ManageOrder.css';

const ManageOrder = () => {
    const [allorder, setAllorder]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allorders')
        .then(res=>res.json())
        .then(data=>setAllorder(data))
    },[])
    

 //------------Delete order----------------

 const handleDelete = id =>{
    const deleteItem = window.confirm('Are you confirm to delete this order?');
    if(deleteItem){
        const url = `http://localhost:5000/allorder/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = allorder.filter(item => item._id !== id);
            setAllorder(remaining);
        })
    }
}


    return (
        <div>
             <div className='mt-16 mb-16 manage-order'>
          
          {
              allorder.map(order=> <div class="card w-96 bg-base-100 shadow-xl image-full mb-8">
              <figure><img src={order.img} alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">Product Id: {order.productId}</h2>
                <p>Phone No: {order.phoneNo}</p>
                <p>Address: {order.address}</p>
                <p>Quantity: {order.quantity}</p>
                <div style={{display:'flex'}}>
                <div class="card-actions justify-end mr-4">
                  <button class="btn btn-primary">Pay Now</button>
                </div>
                <div class="card-actions justify-start">
                  <button class="btn btn-primary" onClick={() => handleDelete(order._id)}>Delete</button>
                </div>
                </div>
              </div>
            </div>)
          }


        </div>
        </div>
    );
};

export default ManageOrder;