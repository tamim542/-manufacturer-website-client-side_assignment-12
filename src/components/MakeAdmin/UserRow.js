import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user }) => {
    const { email, role } = user;
    //, role
    const makeAdmin = () => {
        fetch(`http://localhost:5000/adminuser/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
             .then(res => res.json())
             .then(data=>{
                 console.log(data);
             })
            // {
            //     if(res.status === 403){
            //         toast.error('Failed to Make an admin');
            //     }
            //     return res.json()})
            // .then(data => {
            //     if (data.modifiedCount > 0) {
            //         refetch();
            //         toast.success(`Successfully made an admin`);
            //     }

            // })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' &&  <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;