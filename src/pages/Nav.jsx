import React , { useState } from "react";
import { Link } from 'react-router-dom';
function Nav(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen) //!false == true
    }

    return(
        <nav className="bg-gray-100 p-2 sticky top-0 z-10">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between uppercase">
                <div className=" text-2xl font-bold"><Link  to="/ecomshop">Name Ecommerce</Link> </div>

                {/* Toggle Menu Button */}
                <div className="md:hidden">
                    <button id="menu-toggle" className="" onClick={toggleMenu}>
                        <svg 
                            fill="none" 
                            stroke="currentColor" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M4 6h16m4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden md:flex space-x-4">
                    <li className="mt-2"><Link to="/ecomshop" className="">Home</Link></li>
                    <li className="mt-2"><Link to="/ecomshop/about" className="">About</Link></li>
                    {/* <li className="mt-2"><Link to="/ecomshop/services" className="">Services</Link></li> */}
                    <li className="mt-2"><Link to="/ecomshop/contact" className="">Contact</Link></li>
                    <li className="mt-2"><Link to="/ecomshop/Dashboad" className="">Dashboad</Link></li>
                    <li className="mt-2"><Link>Login</Link></li>
                    <a href="#" class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a>
                    <li>
                        <Link to="/basket">
                            <div className="flex justify-center items-center">
                                <div className="relative py-2 ">
                                    <div className="absolute right-0 left-3 top-px flex justify-center items-center bg-red-500 text-white rounded-full h-5 w-5 text-xs">
                                        3 
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* moblie nav */}
            {isMenuOpen ? (
                <ul className="flex-col md:hidden">
                     <li className="py-3"><Link to="/ecomshop" className="">Home</Link></li>
                    <li className="py-3"><Link to="/ecomshop/about" className="">About</Link></li>
                    <li className="py-3"><Link to="/ecomshop/contact" className="">Contact</Link></li>
                    {/* <li className="py-3"><Link to="/ecomshop/services" className="">Services</Link></li> */}
                    <li className="py-3"><Link to="/ecomshop/Dashboad" className="">Dashboad</Link></li>
                    <a href="#" class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a>
                </ul>
            ):null}
           
        </nav>
    )
}

export default Nav