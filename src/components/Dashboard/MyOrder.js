import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './MyOrder.css';


const MyOrder = () => {

    const [user] = useAuthState(auth);
    
    const [myorders, setMyorders] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
        
        //const getOrders = async() =>{
        
            const email = user?.email;
           
            // const url = `http://localhost:5000/myorder?email=${email}`,{
               
            //     headers: {
            //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            //     };
            
            // const {data} = await axios.get(url)
            // setMyorders(data);
           
            
        //}
        //getOrders();

        fetch(`http://localhost:5000/myorder?email=${email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res =>{
            console.log('res', res);
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/');
            }
            return res.json()
       })
    
      .then(data =>{
        setMyorders(data);
       
            
       });
    
    }, [user])
  

 //------------Delete order----------------

 const handleDelete = id =>{
    const deleteItem = window.confirm('Are you confirm to delete this order?');
    if(deleteItem){
        const url = `http://localhost:5000/myorders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = myorders.filter(item => item._id !== id);
            setMyorders(remaining);
        })
    }
}



    return (
        <div className='mt-16 mb-16 my-order'>
          
          {
              myorders.map(myorder=> <div class="card w-96 bg-base-100 shadow-xl image-full mb-8">
              <figure><img src={myorder.img} alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">Product Id: {myorder.productId}</h2>
                <p>Phone No: {myorder.phoneNo}</p>
                <p>Address: {myorder.address}</p>
                <p>Quantity: {myorder.quantity}</p>
                <div style={{display:'flex'}}>
                <div class="card-actions justify-end mr-4">
                  <button class="btn btn-primary">Pay Now</button>
                </div>
                <div class="card-actions justify-start">
                  <button class="btn btn-primary" onClick={() => handleDelete(myorder._id)}>Cancle</button>
                </div>
                </div>
              </div>
            </div>)
          }


        </div>
    );
};

export default MyOrder;