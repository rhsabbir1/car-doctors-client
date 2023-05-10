import React from 'react';
import image from '../../assets/images/login/login.svg'

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-4 rounded-sm">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-10 ">
                    <img src={image} alt="" />

                </div>
                <div className="  card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl font-bold p-4 text-center">Login now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;