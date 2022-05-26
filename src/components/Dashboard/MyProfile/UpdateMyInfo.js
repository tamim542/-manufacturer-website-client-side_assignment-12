import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';


const UpdateMyInfo = () => {

    const [user] = useAuthState(auth);
    const {id} = useParams();
  
    const [users, setUser] = useState({});
    console.log('id for update page=',user);
    useEffect( () =>{
        const url = `http://localhost:5000/updateuserinfo/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
    }, []);

    const handleUpdateUser = event =>{
        event.preventDefault();
        
        const email = event.target.email.value;
        const name = event.target.name.value;
        const address = event.target.address.value;
        const phoneno = event.target.phoneno.value;
        const profilelink = event.target.profilelink.value;

        const updatedUser = {email, name, address, phoneno, profilelink};

        // send data to the server
        const url = `http://localhost:5000/updateuserinfo/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('users update successfully!!!');
            event.target.reset();
        })
    }
    return (
        <div>
            <div className='form-center'>
                <div >
                    <form  onSubmit={handleUpdateUser}>

                        <h1 style={{ color: '#31c75e' }}>Update Your Information</h1>
                        <span>Email</span>
                        <br />
                        <input type="email" name='email' className='input-feildreview' value={user.email}  required />
                        <br />
                        <span>Name</span>
                        <br />
                        <input type="text" name='name' className='input-feildreview' required />
                        <br />

                        
                        <span>Address</span>
                        <br />
                        <input type="text" name='address' className='input-feildreview' required />
                        
                        <br />


                        <span>Phone No.</span>
                        <br />
                        <input type="text" name='phoneno' className='input-feildreview' required />
                        
                        <br />


                        <span>Linked Profile Link</span>
                        <br />
                        <input type="text"  name='profilelink' className='input-feildreview' required />
                        <br />
                        
                       
                        <button className='button-form mb-4'><span style={{ color: 'white' }}>Update Info</span></button>
                        <br />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateMyInfo;