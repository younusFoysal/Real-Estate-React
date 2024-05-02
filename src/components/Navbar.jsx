import {Link, NavLink} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider.jsx";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

    const {user, logOut} =useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast('Logged Out Successfully')
            })
            .catch(
                error => {
                    console.error(error)
                }
            )
    }

    const navLinks = <>
        <li><NavLink to="/" className="mr-2">Home</NavLink></li>
        <li><NavLink to="/properties" className="mr-2">Properties</NavLink></li>

        {user ? <>
                <li><NavLink to="/favproperties" className="mr-2">Favourite Properties</NavLink></li>
                <li><NavLink to="/profile" className="mr-2">Profile</NavLink></li>
            </>
            :
            <>

            </>
        }


        <li><NavLink to="/about" className="mr-2">About</NavLink></li>
        <li><NavLink to="/contact" className="mr-2">Contact Us</NavLink></li>
        {/*<li><NavLink to="/contact" className={({ isActive }) => ["text-white", isActive ? "text-white bg-indigo-600" : "text-black "].filter(Boolean).join(" ")}*/}
        {/*>Contact Us</NavLink></li>*/}

        {/*<li><NavLink to="/login" className="mr-2">Login</NavLink></li>*/}
        {/*<li><NavLink to="/register" className="mr-2">Register</NavLink></li>*/}

    </>


    return (
        <div className="navbar bg-base-100 px-20">
            <div className="navbar-start ">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
            <Link to="/">
                <button className="btn btn-ghost text-xl hover:bg-indigo-600 hover:text-white">SK Real Estate</button>
            </Link>

        </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar lg:tooltip lg:tooltip-bottom" data-tip={user.displayName}>
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component"
                                         src={user.photoURL}/>
                                </div>
                            </div>
                            <ul tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
                                <li>
                                    <a className="justify-between">
                                        Hello! {
                                        user ? user.displayName : "User"
                                    }

                                    </a>
                                </li>
                                <li><Link to='/updateProfile'>Update Profile</Link></li>
                                <li><a onClick={handleLogOut}>Logout</a></li>
                            </ul>
                        </div>
                    </>
                        :
                        <Link to="/login">
                            <button className="ml-4 btn btn-primary bg-indigo-600 text-white">Login</button>
                        </Link>
                }


            </div>
            <ToastContainer />
        </div>
    );
};

export default Navbar;