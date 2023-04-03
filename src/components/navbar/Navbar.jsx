import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const signOutHandler = () => {
        logOut()
            .then(result => {
                toast.success("Sign Out successfully")
            })
            .then(err => {
                console.log(err);
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='mx-2'><Link to={"/"}>Home</Link></li>
                        {
                            !user?.uid &&
                            <li className='mx-2'><Link to={"/signIn"}>Sign in</Link></li>
                        }
                        {
                            !user?.uid &&
                            <li className='mx-2'><Link to={"/signUp"}>Sign up</Link></li>
                        }
                        {
                            user?.uid &&
                            <li className='mx-2'>
                                <button className='btn btn-sm border-2 border-orange-500 text-white py-1'>
                                    Sign out
                                </button>
                            </li>
                        }
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost normal-case text-xl"><span>Countriesist</span></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex justify-center items-center">
                    <li className='mx-2'><Link to={"/"}>Home</Link></li>
                    {
                        !user?.uid &&
                        <li className='mx-2'><Link to={"/signIn"}>Sign in</Link></li>
                    }
                    {
                        !user?.uid &&
                        <li className='mx-2'><Link to={"/signUp"}>Sign up</Link></li>
                    }
                    {
                        user?.uid &&
                        <li className='mx-2'>
                            <button onClick={signOutHandler} className='btn btn-sm border-2 border-orange-500 text-white py-1'>
                                Sign out
                            </button>
                        </li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;