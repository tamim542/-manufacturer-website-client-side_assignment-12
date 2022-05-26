import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddProduct = () => {

    const [user,loading] = useAuthState(auth);
    //----------- add item -------------

    const handleForm = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        const price = event.target.price.value;
       
        const description = event.target.description.value;
        const minquantity = event.target.minquantity.value;
        const availablequantity = event.target.availablequantity.value;
        const item = { name, img, price, description, minquantity, availablequantity };
        fetch('http://localhost:5000/manufacture', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })

            .then(response => response.json())
            .then(data => console.log(data));

            event.target.reset();

    }
    return (
        <div>
            <div className='form-center1'>
                <div >
                    <form className='form-control' onSubmit={handleForm}>

                        <h1 style={{ color: '#31c75e' }}>Add Tool</h1>
                        <span>Name</span>
                        
                        <input type="text" name='name' className='input-feild' required />
                        <br />
                       
                        <span>Image</span>
                        
                        <input type="text" name='img' className='input-feild'  required />
                        <br />
                        

                        <span>Price</span>
                       

                        <input type="text" name='price' className='input-feild'  required />
                        <br />
                        
                        
                       
                        <span>Description</span>
                       
                        <input type="text" name='description' className='input-feild' required />
                        <br />
                        
                        <span>Minimum Quantity</span>
                        
                        <input type="number" name='minquantity' className='input-feild'  required />
                        <br />
                        <span>Available Quantity</span>
                        
                        <input type="number" name='availablequantity' className='input-feild'  required />
                        <br />
                        
                      
                        <button className='button-form'><span style={{ color: 'white' }} disabled>Add Item</span></button>
                        <br />
                    </form>

                </div>
            </div>

            {/* end order item form */}

        </div>
    );
};

export default AddProduct;