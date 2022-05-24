import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [user] = useAuthState(auth);
    
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
        
        const getItems = async() =>{
        //    const email = user.email;
        //     const url = `https://afternoon-badlands-12006.herokuapp.com/item?email=${email}`;
         
        //       fetch(url)
        //       .then(res=>res.json())
        //       .then(data=>setItems(data))
            ///---------------
            const email = user.email;
           
            const url = `http://localhost:5000/myorder?email=${email}`;
            
            const {data} = await axios.get(url)
            setItems(data);
           
            
        }
        getItems();

    }, [user])
    console.log('items=',items);


    return (
        <div>
           <div class="card w-96 bg-primary text-primary-content">
  <div class="card-body">
    <h2 class="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn">Buy Now</button>
    </div>
  </div>
</div>

<p>label:{items.length}</p>
        </div>
    );
};

export default MyOrder;