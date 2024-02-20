import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { FaBars, FaTimes } from 'react-icons/fa';

const Layout = () => {
    const navLinks = [
        { id: 1001, label: "Home", key: "/" },
        { id: 1002, label: "About Us", key: "/about-us" },
        { id: 1003, label: "Challenge", key: "/challenge" },
        { id: 1004, label: "Values", key: "/values" },
        { id: 1005, label: "Contact Us", key: "/contact-us" },
    ];
    const [nav, setNav] = useState(false);

    return (
        <>
            <div className="flex justify-between w-full shadow-lg p-4 bg-white" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}>
                <nav className='flex justify-around items-center pl-3 text-gray w-full'>
                    <ul className='hidden md:flex text-center gap-x-10'>
                        {navLinks.map(({ _id, label, key }) => (
                            <li
                                key={_id}
                                className="cursor-pointer capitalize font-bold text-slate-500 hover:text-red duration-200"
                            >
                                {/* Use Link from react-scroll with to prop */}
                                <Link to={key} smooth duration={500}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 pt-2  text-black md:hidden'>
                {nav ? <FaTimes size={25} className=' text-black' /> : <FaBars size={25} className='text-black' />}

                {/* Mobile Menu */}
                {nav && (
                    <div className='fixed top-0 left-0 w-full h-screen bg-slate-400'>
                      
                        <ul className='flex flex-col justify-center items-center h-full'>
                            {navLinks.map(({ _id, label, key }) => (
                                <li key={_id}
                                className='px-4 cursor-pointer capitalize py-3 text-2xl'>
                                <Link onClick={() => setNav(!nav)}
                                  to={key}
                                  smooth duration={500}>{label}</Link>
                              </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>

    );
};

export default Layout;
