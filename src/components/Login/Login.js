import React, { useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
//import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Login.css';



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import Loading from '../Shered/Loading/Loading';
import axios from 'axios';
import useToken from '../../Hooks/useToken';

const Login = () => {

    const emailRef = useRef('');
  const passwordRef = useRef('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [signInWithGoogle, gUser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const onSubmit =async data => {

        await signInWithEmailAndPassword(data.email, data.password)
     //    {data}=await axios.post('http://localhost:5000/login',{data.email});
     //    console.log('data=',data1);
 
     };

    // useEffect( () =>{
    //     if (token) {
    //         navigate(from, { replace: true });
    //         console.log('token',token);
    //     }
    // }, [token, from, navigate])

    if (token) {
        navigate(from, { replace: true });
        console.log('token',token);
    }

    if (error || gerror) {
        return (
          <div>
            errorCase= <p className='text-red-500'><small>{error?.message || gerror?.message }</small></p>
          </div>
        );
      }
      if (loading || gloading) {
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Loading></Loading></div>
      }

    // reset passwoord----------
    const resetPassword = async () => {
        const email =emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
            
        }
        
      }

    return (
        <div className='ml-28 mt-28'>
           
            <form onSubmit={handleSubmit(onSubmit)}>
            
                <div class="form-control w-full max-w-xs ">
                    <label class="label">
                    <span class="label-text">Enter Your Email or UserName</span>
                    </label>
                    <input type="email" placeholder="Type here" class="border-teal-400 rounded-sm input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "email is required"
                            },
                            pattern: {
                                value: /[A-Za-z]{3}/,
                                message: 'error message'
                            }
                        })} />
                    {errors.email?.type === 'required' && <span>{errors.email.message}</span>}


                    <label class="label">
                        <span class="label-text">Enter Your Password</span>
                    </label>
                    <input type="password" placeholder="Type Here" class="border-teal-400 rounded-sm input-bordered w-full max-w-xs"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "password is required"
                            },
                            minLength: {
                                value: 6,
                                message: "password must be six character"
                            }
                        })} />
                    {errors.password?.type === 'minLength' && <span>{errors.password.message}</span>}



                    

                    <button class="btn btn-ghost mt-3"> <input type="submit" value="Login" /></button>
                </div>
            </form>

            <p>Forget Password? <span className='reset-password' onClick={resetPassword}>Reset Password</span> </p>
            <p><Link to='/signup'>Have An Accoount?</Link></p>


            <div class="flex flex-col w-full border-opacity-50">
                
                <div class="divider">OR</div>
                <div class="grid h-20 card  rounded-box place-items-center"> <button class="btn btn-ghost" onClick={() => signInWithGoogle()}>Signin Google</button></div>
            </div>


           
            <ToastContainer />

        </div>
    );
};

export default Login;