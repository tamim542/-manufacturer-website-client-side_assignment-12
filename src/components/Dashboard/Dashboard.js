import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* side bar route */}
                    <li><Link to="/dashboard">My Profile</Link></li>

                    { !admin && <span>
                   <li><Link to="/dashboard/order">My Order</Link></li>
                    <li><Link to="/dashboard/review">Add Review</Link></li></span>
                  }
                   
                </ul>
               
            </div>
        </div>
    );
};

export default Dashboard;