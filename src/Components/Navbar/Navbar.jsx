import { NavLink } from "react-router-dom";
import './navbar.css';
import logo from '../../assets/images/mainlogo.jpg';
import defaultProfile from '../../assets/images/defaultProfile.jpg'

const Navbar = () => {

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/addProduct'}>Add-Product</NavLink></li>
        <li><NavLink to={'/myCart'}>My-Cart</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-purple-200 shadow-md shadow-black">
                {/* mobile */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm md:menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-sky-200 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-12 rounded-full">
                                <img src={logo} />
                            </div>
                        </label>
                        <a className="btn btn-ghost normal-case text-xl">B-Shop</a>
                    </div>
                </div>

                {/* larger device */}
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal menu-title px-1 space-x-8">
                        {links}
                    </ul>
                </div>


                <div className="navbar-end space-x-2">
                    <div className="hidden md:flex md:items-center md:justify-center gap-4">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-12 rounded-full">
                                <img src={defaultProfile} />
                            </div>
                        </label>
                        <a className="">Name</a>
                        <a className="btn btn-outline">Login</a>
                    </div>

                    <div className="dropdown dropdown-end md:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-12 rounded-full">
                                <img src={defaultProfile} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-sky-200 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Navbar