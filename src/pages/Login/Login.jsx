import React, { useContext } from 'react';
import image from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContex } from '../../provider/AuthProvider';

const Login = () => {
const {singIn} = useContext(AuthContex)
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log( email , password)
        singIn(email , password)
        .then(result =>{
            const logUser = result.user;
            console.log(logUser)
        })
        .catch(err =>{
            console.log(ree)
        })

    }


    return (
        <div className="hero min-h-screen bg-base-200 mb-4 rounded-sm">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-10 ">
                    <img src={image} alt="" />

                </div>
                <div className="  card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl font-bold p-4 text-center">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <p className='my-2'>New to car doctor <Link className='text-orange-500 font-bold' to='/singup'> Sing up</Link></p>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;