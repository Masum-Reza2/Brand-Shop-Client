import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { Link, useLocation, useNavigate } from "react-router-dom"
import useGlobal from "../../Hooks/useGlobal";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import hurray from '../../assets/images/loginHurray-removebg-preview.png';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const { loginUser, googleLogin } = useGlobal();
    const navigate = useNavigate();
    const { state } = useLocation();


    const [showPaas, setShowPaas] = useState(false);
    const handleTogglePass = () => {
        setShowPaas(!showPaas)
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // logging in user
        loginUser(email, password)
            .then(result => {
                if (result.user) {
                    navigate(state || '/');
                    Swal.fire({
                        title: `Hurray!`,
                        text: 'You have successfully logged in!',
                        imageUrl: hurray,
                        imageWidth: 400,
                        // imageHeight: 200,
                        imageAlt: 'Custom image',
                    })
                }
            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    // google login
    const googleProvider = new GoogleAuthProvider();
    const handleGoogle = () => {
        googleLogin(googleProvider)
            .then(result => {
                if (result.user) {
                    navigate(state || '/');
                    Swal.fire({
                        title: `Hurray!`,
                        text: 'You have successfully logged in!',
                        imageUrl: hurray,
                        imageWidth: 400,
                        // imageHeight: 200,
                        imageAlt: 'Custom image',
                    })
                }
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div className="py-5 min-h-screen flex flex-col items-center justify-center">
            <form onSubmit={handleLogin} className="relative flex w-[90vw] md:w-[60vw] lg:w-[40vw] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto py-5">

                <h1 className="text-center font-bold text-xl md:text-2xl">Login</h1>

                <div className="flex flex-col gap-4 p-6">

                    {/* email */}
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            required
                            type="email"
                            name="email"
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Email
                        </label>
                    </div>

                    {/* password */}
                    <div className="relative h-11 w-full min-w-[200px]">
                        {
                            showPaas ? <AiFillEyeInvisible onClick={handleTogglePass} className="absolute right-2 text-xl top-3 cursor-pointer " />
                                :
                                <AiFillEye onClick={handleTogglePass} className="absolute right-2 text-xl top-3 cursor-pointer " />
                        }
                        <input
                            required
                            type={showPaas ? 'text' : 'password'}
                            name="password"
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Create Password
                        </label>

                    </div>
                </div>

                {/* submit button */}
                <div className="p-6 pt-0">
                    <button
                        className="block w-full select-none rounded-lg bg-purple-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black/20 transition-all hover:shadow-lg hover:shadow-black active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="submit"
                        data-ripple-light="true"
                    >
                        Login
                    </button>
                    <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                        Don't have an account?
                        <Link to={'/register'}
                            href="#signup"
                            className="ml-1 block font-sans text-sm font-bold leading-normal  antialiased"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </form>

            <div className="flex w-[90vw] md:w-[60vw] lg:w-[40vw] border flex-col rounded-xl text-gray-700 shadow-md mx-auto py-5 mt-5">
                <p className="text-center border-y border-black my-2">or</p>
                <div className="w-full flex justify-center">
                    <button onClick={handleGoogle} className="mt-2 btn hover:bg-black rounded-md w-[90%] bg-purple-600 text-white ">Login with Google<FcGoogle className="text-2xl" /></button>
                </div>
            </div>


        </div>
    )
}

export default Login