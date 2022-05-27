import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import useAdmin from '../../Hooks/useAdmin';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    // const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    return (
        <div>
            <div class="navbar bg-purple-500 ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/myportfolio'>MyPortfolio</Link></li>
                            {
                              admin && <li><Link to='/addproduct'>AddProduct</Link></li>
                            }

                            {
                             admin && <li><Link to='/manageorder'>ManageOrder</Link></li>
                            }

                            {
                             admin && <li><Link to='/manageproduct'>ManageProduct</Link></li>
                            }
                            
                            {
                             admin && <li><Link to='/makeadmin'>MakeAdmin</Link></li>
                            }
                            


                            {

                                user ? <span ><li><Link to="/dashboard">Dashboard</Link></li><li > <button onClick={handleSignOut}>Signout</button></li></span> : <li > <Link to="/login">Login</Link></li>

                            }






                        </ul>
                    </div>
                    <a class=" btn-ghost normal-case text-xl">Loyal Digital Platform</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/myportfolio'>MyPortfolio</Link></li>
                        
                            {
                              admin && <li><Link to='/addproduct'>AddProduct</Link></li>
                            }

                            {
                             admin && <li><Link to='/manageorder'>ManageOrder</Link></li>
                            }

                            {
                             admin && <li><Link to='/manageproduct'>ManageProduct</Link></li>
                            }
                            
                            {
                             admin && <li><Link to='/makeadmin'>MakeAdmin</Link></li>
                            }
                            
                        
                        
                        
                        
                        

                        {

                            user ? <span ><div className='flex'><li><Link to="/dashboard">Dashboard</Link></li><li > <button onClick={handleSignOut}>Signout</button></li></div></span> : <li > <Link to="/login">Login</Link></li>

                        }


                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;