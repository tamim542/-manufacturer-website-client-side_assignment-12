import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './MyProfile.css';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    

     

    return (
        <div>
            <p>{user.displayName}</p>
            <p>{user.email}</p>

            <button class="btn btn-primary mt-20" ><Link to='addmyinfo'>Add Info</Link></button> 
            <button class="btn btn-primary ml-3 mt-20" ><Link to='updatemyinfo'>Update Info</Link></button> 
        </div>
    );
};

export default MyProfile;