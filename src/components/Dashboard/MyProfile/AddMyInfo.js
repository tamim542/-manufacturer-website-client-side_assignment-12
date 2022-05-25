import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddMyInfo = () => {

    const [user] = useAuthState(auth);
      //----------- add user info -------------

      const addUserInfo = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const name = event.target.name.value;
        const address = event.target.address.value;
        const phoneno = event.target.phoneno.value;
        const profilelink = event.target.profilelink.value;
        const item = {email, name, address, phoneno, profilelink};
        fetch('http://localhost:5000/userinfo', {
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
             <div className='form-center'>
                <div >
                    <form  onSubmit={addUserInfo}>

                        <h1 style={{ color: '#31c75e' }}>Add Your Information</h1>
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
                        
                       
                        <button className='button-form'><span style={{ color: 'white' }}>Add Info</span></button>
                        <br />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddMyInfo;