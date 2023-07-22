import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Lottie from "lottie-react";
import animation from "../../animation.json";
import { Link,useLocation, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const {createUser,googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogle=()=>{
      googleSignIn()
      .then(result=>{
        const user= result.user;
        navigate(from,{replace:true})
        console.log(user)
      })
      .catch(error=>console.error(error))
    }
    const handleSubmit=(event)=>{
         event.preventDefault();
         const form=event.target;
         const name=form.name.value;
         const email=form.email.value;
         const password=form.password.value;
         createUser(email,password)
         .then(result=>{
            const user = result.user;
            form.reset()
            navigate(from,{replace:true})
            console.log(user)
         })
         .catch(error=>console.error(error))
    }
    return (
        <div className="hero container min-h-screen bg-base-200 py-28">
  <div className="hero-content flex-col lg:flex-row lg:gap-52 items-center">
  
    <div className="text-left lg:text-left w-full lg:w-2/5 gap-20">
    <Lottie animationData={animation} />
    </div>
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-10 lg:mb-0">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name='name' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="password" name='confirmPassword' required className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Sign Up</button>
        </div>
        <p className='font-semibold text-center mt-2'>New in this account  <span className='text-blue-500'><u><Link to='/login'>Log In</Link></u></span></p>
      </form>
      <div className="divider">OR</div> 
      <div className='text-center mx-auto mb-2'>
      <button onClick={handleGoogle} type='submit' className="btn btn-success ">Log In With Google</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignUp;