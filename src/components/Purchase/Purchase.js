import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shered/Loading/Loading';
import './Purchase.css';

const Purchase = () => {
    const {id} = useParams();
  
    const [purchase, setPurchase] = useState({})


    useEffect(() => {
        
        const url=`http://localhost:5000/product/${id}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [purchase])
 

    const [user,loading] = useAuthState(auth);
    

    if (loading) {
        return <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Loading></Loading></div>
    }

    
   

//-----------order add item -------------

const handleForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const productId = event.target.productid.value;
    const img = event.target.img.value;
    const phoneNo = event.target.phoneno.value;
    const address = event.target.address.value;
    const price1 = event.target.price.value;
    const quantity = event.target.quantity.value;



    let quantity1 = parseInt(quantity);
   
    const priceInt=parseInt(price1);
    const price=quantity1*priceInt;
   
    const item = {email, productId, img, phoneNo, address, price, quantity };
    fetch('http://localhost:5000/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    })

        .then(response => response.json())
        .then(data => console.log(data));

        event.target.reset();

}

//-----------end order add item -------------

    return (
        
             <div className='purchase-order'>

<div className=' row row-cols-1 row-cols-md-2 row-cols-lg-3 card-item card-align'>
    <div className='col'>
        <div className='card h-100'>
        <Card style={{}}>
            <Card.Img variant="top" src={purchase.img} />
            <Card.Body>
                <Card.Title>Name: {purchase.name}</Card.Title>
                <Card.Text>Price: {purchase.price}</Card.Text>
                <Card.Text>
                    {purchase.description}
                </Card.Text>
                <Card.Title>Minimum Quantity: {purchase.minquantity}</Card.Title>
                <Card.Title>Available Quantity: {purchase.availablequantity}</Card.Title>
                {/* <Button variant="primary">Pay</Button> */}
            </Card.Body>
        </Card>
    </div>
</div>
</div>



 {/* --------order Add  item -------- */}

 <div className='form-center1'>
                <div >
                    <form className='form-control' onSubmit={handleForm}>

                        <h1 style={{ color: '#31c75e' }}>Order Form</h1>
                        <span>Email</span>
                        
                        <input type="email" name='email' className='input-feild' value={user.email} readOnly required />
                        <br />
                        <span> Product Id</span>
                        
                        <input type="text" name='productid' className='input-feild' value={purchase._id} readOnly required />
                        <br />

                        <span>Image</span>
                       

                        <input type="text" name='img' className='input-feild' value={purchase.img} readOnly required />
                        <br />
                        
                        <span>Phone No.</span>
                        
                        <input type="text" name='phoneno' className='input-feild' required />
                        <br />
                       
                        <span>Address</span>
                       
                        <input type="text" name='address' className='input-feild' required />
                        <br />
                        <span>Per Unit Price</span>
                       
                        <input type="number" name='price' className='input-feild' value={purchase.price} required />
                        <br />
                        
                        <span>Quantity</span>
                        
                        <input type="number" name='quantity' className='input-feild' value={purchase.minquantity} required />
                        <br />
                        
                      
                        <button className='button-form'><span style={{ color: 'white' }} disabled>Order</span></button>
                        <br />
                    </form>

                </div>
            </div>

            {/* end order item form */}
</div>
        
    );
};

export default Purchase;