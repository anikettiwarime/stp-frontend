import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            path: "/",
            name: "Home",
        },
        {
            id: 2,
            path: "curriculum",
            name: "Curriculum",
        },
        {
            id: 3,
            path: "login",
            name: "Login",
        },
        {
            id: 4,
            path: "register",
            name: 'Register',
        },
        {
            id: 5,
            path: "contact",
            name: "Contact",
        },

    ];

    return (
        <div className=' flex justify-between items-center w-full h-16 px-4 text-white bg-black'>
            <div className='text-2xl font-signature ml-2' >Student Teacher Portal</div>
            <ul className='hidden md:flex items-center'>
                {links.map(({ id, name, path }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                        <NavLink to={path}>
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div onClick={() => { setNav(!nav) }} className='md:hidden cursor-pointer pr-4 z-10 to-gray-500'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {
                nav && (
                    <ul className='flex flex-col justify-center items-center absolute  left-0 top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                        {links.map(({ id, name, path }) => (
                            <li key={id} className='px-4 cursor-pointer capitalize pt-6 text-4xl'>
                                <NavLink to={path} onClick={() => { setNav(!nav) }}>
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}

export default Navbar