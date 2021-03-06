import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';

const Signup = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [email, setEmail] = useState('');
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});

      const [displayName, setDisplayName] = useState('');
      const [updateProfile, updating, uerror] = useUpdateProfile(auth);

      const navigate=useNavigate();
      const [token]  = useToken(user || gUser);

      if (token) {
        navigate('/home');
    }

      const onSubmit = async data =>{
         
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName:data.name});
        
      };

    return (
        <div className='ml-28 mt-28'>
                  <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Enter Your Name</span>
  </label>
  <input type="text" placeholder="Type here" class="border-teal-400 rounded-sm input-bordered w-full max-w-xs"
   {...register("name", { 
    required: {
        value:true,
        message:"name is required"
    } })} />
      {errors.name?.type === 'required' && <span>{errors.name.message}</span>}


      <label class="label">
    <span class="label-text">Enter Your Email</span>
  </label>
  <input type="email" placeholder="Type here" class="border-teal-400 rounded-sm input-bordered w-full max-w-xs"
   {...register("email", { 
    required: {
        value:true,
        message:"email is required"
    },   
    pattern: {
      value: /[A-Za-z]{3}/,
      message: 'error message' 
    } })} />
      {errors.email?.type === 'required' && <span>{errors.email.message}</span>}


  <label class="label">
    <span class="label-text">Enter is your Password</span>
  </label>
  <input type="password" placeholder="password" class="border-teal-400 rounded-sm input-bordered w-full max-w-xs"
   {...register("password", { 
    required: {
        value:true,
        message:"password is required"
    },   
    minLength:{
        value: 6,
        message:"password must be six character"
    } })} />
      {errors.password?.type === 'minLength' && <span>{errors.password.message}</span>}
     


      
      
      <button class="btn btn-ghost mt-3"> <input type="submit" value="Signup"/></button>
      </div>
    </form>
   
            <p><Link to='/login'>Already Have an Account?</Link></p>
           


        


        </div>
    );
};

export default Signup;