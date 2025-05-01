import React from 'react';
import logo from '../../assets/navicon.png'
import { Link } from 'react-router';

const links= <>
        <Link to='/'><li>Home</li></Link>
        <Link to='/apoint-list'><li className='m-2'>Bookings-List</li></Link>
        <Link to='/blogs'><li className='m-2'>Blogs</li></Link>
        <Link to='/contact us'><li className='m-2'>Contact Us</li></Link>
</>

const Navbar = () => {
    return (
        <div className='w-full bg-cyan-50 z-50 sticky top-0 bottom-0'>
           <div className="navbar w-10/12 mx-auto ">
                    <div className="navbar-start">
                        
                        <img src={logo} alt="" />
                        <a className="btn btn-ghost text-xl">Law.BD</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex items-center gap-5">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="px-6 py-2 bg-green-700 hidden lg:block font-semibold rounded-4xl text-white">Contact Us</a>
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex flex-col items-start text-start gap-1">
                            {links}
                        </ul>
                        </div>
            </div>
        </div>
        );
};

export default Navbar;