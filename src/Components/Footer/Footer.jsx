import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/navicon.png'
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";


const links= <>
        <Link to='/'><li>Home</li></Link>
        <Link to='/apoint-list'><li className='m-2'>Bookings-List</li></Link>
        <Link to='/blogs'><li className='m-2'>Blogs</li></Link>
        <Link to='/contact us'><li className='m-2'>Contact Us</li></Link>
        

    </>


const Footer = () => {
    return (
        <div className='mt-20 bg-black text-white p-20'>
            <div className='flex items-center gap-3 justify-center'>
                <img src={logo} alt="" />
                <h3 className='text-3xl font-bold'>Law.BD</h3>
            </div>
            <div>
                    <div className="navbar-center flex items-center justify-center">
                                <ul className="menu menu-horizontal px-1 flex items-center gap-5">
                                    {links}
                                </ul>
                    </div>
                    <div className='border-t-1 border-dashed border-gray-50 '></div>
                    <div className='flex items-center justify-center gap-5 mt-5'>
                    <a href='https://www.facebook.com/skudbjuj' target='_blank' rel='noopener noreferrer'>
                        <span className='text-2xl text-blue-700'><SiFacebook /></span>
                        </a>
                        <a href='https://www.linkedin.com/in/md-jamil-uddin-9886b4303/' target='_blank' rel='noopener noreferrer'>
                            <span className='text-2xl text-blue-700'><FaLinkedin /></span>
                        </a>
                        <a href='www.youtube.com/@MDJAMILUDDINJISHAN' target='_blank' rel='noopener noreferrer'>
                            <span className='text-2xl text-red-700'><IoLogoYoutube /></span>
                        </a>
                        <a href='https://www.instagram.com/jamiluddinjishan/' target='_blank' rel='noopener noreferrer'>
                            <span className='text-2xl'><PiInstagramLogoFill /></span>
                        </a>
                        
                    </div>
            </div>
        </div>
    );
};

export default Footer;