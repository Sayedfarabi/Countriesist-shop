import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, resetField } = useForm();

    const submitHandle = (data) => {
        const { name, email, password } = data;
        const userInfo = {
            displayName: name
        }
        createUser(email, password)
            .then(result => {
                setError("")
                updateUserProfile(userInfo)
                    .then(result => {
                        navigate(from)
                    })
                    .then(error => {
                        setError(error?.message)
                    })
            })
            .then(error => {
                setError(error)
            })
        console.log(data);
    }

    return (
        <section>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col">
                        <div className='py-8'>
                            <h1 className='text-2xl md:text-3xl text-center'>Sign Up Now !</h1>
                        </div>
                        <div className="card flex-shrink-0 w-80 md:w-[800px] shadow-2xl bg-base-100">
                            {
                                error &&
                                <p className='text-center text-red-500 text-lg mt-10'>{error}</p>
                            }

                            <form onSubmit={handleSubmit(submitHandle)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input {...register("name", { required: "Your name is required" })} type="text" name='name' placeholder="Enter your name" className="input input-bordered" />
                                    {
                                        errors?.name &&
                                        <p className='text-red-500'>{errors?.name?.message}</p>
                                    }
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email", { required: "Your email is required" })} type="email" name='email' placeholder="Enter your email" className="input input-bordered" />
                                    {
                                        errors?.email &&
                                        <p className='text-red-500'>{errors?.email?.message}</p>
                                    }
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register("password", { required: "Your password is required" })} type="password" name='password' placeholder="Enter your new password" className="input input-bordered" />
                                    {
                                        errors?.password &&
                                        <p className='text-red-500'>{errors?.password?.message}</p>
                                    }
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Sign Up" className='btn btn-primary btn-md' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;