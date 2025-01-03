import React , { useState } from "react";
import { Link } from 'react-router-dom';
function Nav(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen) //!false == true
    }
    return(
        <nav className="bg-white p-2 sticky top-0 z-10 uppercase">
            <div className="mx-auto max-w-5xl flex justify-between items-center px-4">{/*  */}
                <div className="text-2xl font-bold">
                    <Link to="/ecomshop">Name Ecommerce</Link>
                </div>
                {/* Mobile Menu Icon */}
                <div className="block md:hidden cursor-pointer" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="24" viewBox="0 0 52 24">
                        <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
                        <rect id="Rectangle_3" data-name="Rectangle 3" width="42" height="4" rx="2" transform="translate(304 47)" fill="#574c4c" />
                        <rect id="Rectangle_5" data-name="Rectangle 5" width="42" height="4" rx="2" transform="translate(304 67)" fill="#574c4c" />
                        <rect id="Rectangle_4" data-name="Rectangle 4" width="52" height="4" rx="2" transform="translate(294 57)" fill="#574c4c" />
                        </g>
                    </svg>
                </div>
                {/* Navigation Links */}
                <div className={`fixed top-12 right-0 h-[calc(100vh-3.5rem)] w-0 overflow-hidden bg-gray-100 transition-all duration-300 py-4 md:px-4 md:static md:flex md:h-auto md:w-auto md:items-center md:bg-transparent ${isMenuOpen ? "w-64 px-7 " : ""}`}>
                    <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                        <li><Link to="/ecomshop" className="text-gray-700 hover:text-gray-900">Home</Link></li>
                        <li><Link to="/ecomshop/about" className="text-gray-700 hover:text-gray-900">About</Link></li>
                        <li><Link to="/ecomshop/contact" className="text-gray-700 hover:text-gray-900">Contact</Link></li>
                        <li><Link to="/ecomshop/Dashboad" className="text-gray-700 hover:text-gray-900">Dashboad</Link></li>
                        <li><Link to="/ecomshop/login" className="text-gray-700 hover:text-gray-900">Login</Link></li>
                        <li>
                            <Link to="/basket">
                                <div className="relative flex items-center">
                                    <div className="absolute top-0 right-0 flex justify-center items-center bg-red-500 text-white rounded-full h-5 w-5 text-xs translate-x-[50%] translate-y-[-50%]">3</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav