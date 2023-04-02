import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const SignIn = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, resetField } = useForm()
    const [error, setError] = useState()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    // console.log(error);

    const submitHandler = data => {
        const { email, password } = data;

        signIn(email, password)
            .then(result => {
                setError("")
                navigate(from)
                const user = result?.user;
                const userEmail = {
                    email: user?.email
                };
                fetch("http://localhost:5000/getToken", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userEmail)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data?.success) {
                            const token = data?.token;
                            localStorage.setItem("Countriesist", token)
                            toast.success(data?.message)
                        } else {
                            console.log(data);
                            toast.error(data?.message)
                        }
                    })
            })
            .then(error => {
                setError(error)
            })
    }

    const googleHandler = () => {
        signInWithGoogle()
            .then(result => {
                setError("")
                const user = result?.user
                const userData = {
                    name: user?.displayName,
                    email: user?.email
                }
                const userEmail = {
                    email: user?.email
                }
                fetch("http://localhost:5000/addUser", {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data?.success) {
                            navigate(from)
                            fetch("http://localhost:5000/getToken", {
                                method: "POST",
                                headers: {
                                    "content-type": "application/json"
                                },
                                body: JSON.stringify(userEmail)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data?.success) {
                                        const token = data?.token;
                                        localStorage.setItem("Countriesist", token)
                                    } else {
                                        console.log(data);
                                        toast.error(data?.message)
                                    }
                                })
                        } else {
                            toast.error(data?.message)
                        }
                    })
            })
            .then(error => {
                console.log(error);
                setError(error)
            })
    }

    return (
        <section>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col">
                        <div className='py-8'>
                            <h1 className='text-2xl md:text-3xl text-center'>Sign In Now !</h1>
                        </div>
                        <div className="card flex-shrink-0 w-80 md:w-[800px] shadow-2xl bg-base-100 ">

                            {
                                error &&
                                <p className='text-center text-red-500 text-lg mt-10'>{error}</p>
                            }

                            <div className="flex flex-col w-full border-opacity-50">
                                <div>
                                    <form onSubmit={handleSubmit(submitHandler)} className="card-body">
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
                                            <input type="submit" value="Sign In" className='btn btn-md btn-primary' />
                                        </div>

                                    </form>
                                </div>

                                <div className="divider">OR</div>

                                <div className='text-center py-8'>
                                    <button onClick={googleHandler} className='btn btn-sm capitalize text-blue-600 bg-white border-2 border-orange-300 w-1/2 hover:text-white'>Sign in with Google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;