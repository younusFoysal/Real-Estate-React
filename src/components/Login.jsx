import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Link, useNavigate} from "react-router-dom";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa6";
import React, {useContext, useState} from "react";
import {AuthContext} from "../providers/AuthProvider.jsx";
import {FaGithub} from "react-icons/fa";
import {Helmet} from "react-helmet-async";

const Login = () => {

    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                toast('Logged In Successfully')
                e.target.reset();
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
                toast('Email & Password not match!')
            })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
            })
    }

    const bgStyle = {
        "background-image" : "url(https://i.ibb.co/m8yxc71/Modern-Office-Interior-with-Open-Floor-Plan-scaled.jpg)",
        "background-size" : "cover"
    }

    return (
        <div>
            <Helmet>SK Real estate | Login </Helmet>
            <div className="preview flex min-h-[6rem] min-w-[18rem] flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)] undefined"
                 style={bgStyle}>


                <div>

                        <div className=" glass rounded-2xl flex max-w-3xl p-5 items-center">
                            <div className="md:w-1/2 px-8">
                                <h2 className="font-bold text-3xl text-indigo-800">Login</h2>
                                <p className="text-sm mt-4 text-indigo-800">If you already a member, easily log in
                                    now.</p>

                                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                                    <input
                                        className="p-2 mt-8 rounded-xl border"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required/>
                                    <div className="relative">
                                        <input
                                            className="p-2 rounded-xl border w-full"
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            placeholder="Password"
                                            required/>
                                        <span className="absolute top-3 right-3"
                                              onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                            }
                                        </span>
                                    </div>
                                    <button
                                        className="bg-indigo-600 text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                                        type="submit">Login
                                    </button>
                                </form>


                                <div className="mt-6  items-center text-gray-100">
                                    <hr className="border-gray-300"/>
                                    <p className="text-center text-sm">OR</p>
                                    <hr className="border-gray-300"/>
                                </div>


                                <button
                                    onClick={handleGoogleSignIn}
                                    className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium">
                                    <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                                         width="25px">
                                        <path fill="#FFC107"
                                              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                        <path fill="#FF3D00"
                                              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                        <path fill="#4CAF50"
                                              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                        <path fill="#1976D2"
                                              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    </svg>

                                    Login with Google
                                </button>

                                <button
                                    onClick={handleGithubSignIn}
                                    className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium">
                                    <FaGithub className="mr-3"></FaGithub>

                                    Login with Github
                                </button>


                                <div className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip">Forget
                                    password?
                                </div>

                                <div className="mt-4 text-sm flex justify-between items-center container-mr">
                                    <p className="mr-3 md:mr-0 ">If you don{`'`}t have an account..</p>
                                    <Link to="/register">
                                        <button
                                            className="hover:border register text-white bg-indigo-600 hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300">Register
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="md:block hidden w-1/2">
                                <img className="rounded-2xl max-h-[1600px]"
                                     src="https://i.ibb.co/q7bZV5n/Mirro-Flex-Japanese-Weave-Crosshatch-Silver-Modern-Office-2.jpg"
                                     alt="login form image"/>
                            </div>
                        </div>

                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;