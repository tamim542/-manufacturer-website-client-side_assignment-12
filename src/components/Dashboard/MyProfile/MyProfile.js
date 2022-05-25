import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './MyProfile.css';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    

    const [myprofile, setMyprofile] = useState([]);
   
    const navigate = useNavigate();
    useEffect( () => {
        
        const myProfileInfo = async() =>{
        
            const email = user.email;
           
            const url = `http://localhost:5000/myprofileinfo?email=${email}`;
            
            const {data} = await axios.get(url)
            setMyprofile(data);
           
            
        }
        myProfileInfo();

    }, [user])
  

    return (
        <div>
            
            <div className='mt-16 mb-16 my-order'>
          
          {
              myprofile.map(myprofileinfo=> <div >
            
              <div >
                <h2>Name: {myprofileinfo.name}</h2>
                <p>Email: {myprofileinfo.email}</p>
                <p>Phone No: {myprofileinfo.phoneno}</p>
                <p>Address: {myprofileinfo.address}</p>
                <a style={{color:'blue'}} href={myprofileinfo.profilelink}>Linked Profile: {myprofileinfo.profilelink}</a>
                
                </div>
                </div>
              
            )
          }
            </div>

            <button class="btn btn-primary mt-20" ><Link to='addmyinfo'>Add Info</Link></button> 
            <button class="btn btn-primary ml-3 mt-20" ><Link to='updatemyinfo'>Update Info</Link></button>

        </div>
        
    );
};

export default MyProfile;