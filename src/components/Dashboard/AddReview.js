import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shered/Loading/Loading';
import './AddReview.css';

const AddReview = () => {
    const [user,loading] = useAuthState(auth);

    if (loading) {
        return <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Loading></Loading></div>
    }

    //----------- add review -------------

    const handleReview = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const name = event.target.name.value;
       
       
        const description = event.target.description.value;
        const rating = event.target.quantity.value;
      
        const item = {email, name, description, rating};
        fetch('https://afternoon-badlands-12006.herokuapp.com/products', {
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
            {/* --------Add review -------- */}

            <div className='form-center'>
                <div >
                    <form  onSubmit={handleReview}>

                        <h1 style={{ color: '#31c75e' }}>Add New Item</h1>
                        <span>Email</span>
                        <br />
                        <input type="email" name='email' className='input-feildreview' value={user.email} readOnly required />
                        <br />
                        <span>Name</span>
                        <br />
                        <input type="text" name='name' className='input-feildreview' required />
                        <br />

                        
                        <span>Description</span>
                        <br />
                        <input type="text" name='description' className='input-feildreview' required />
                        <br />
                        <br />
                        <span>Rating</span>
                        <br />
                        <input type="number" placeholder='Min value 1 Maximum value 5' name='quantity' className='input-feildreview' required />
                        <br />
                        <br />
                       
                        <button className='button-form'><span style={{ color: 'white' }}>Add Review</span></button>
                        <br />
                    </form>

                </div>
            </div>


        </div>
    );
};

export default AddReview;