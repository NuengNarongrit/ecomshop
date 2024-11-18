import React , { useState } from "react";
import { Link } from 'react-router-dom';
function Nav(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen) //!false == true
    }

    return(
        <nav className="bg-slate-800 p-4">
            <div className="flex items-center justify-between">
                <div className="text-white text-2xl font-bold"><Link  to="/">Ecommerce</Link> </div>

                {/* Toggle Menu Button */}
                <div className="md:hidden">
                    <button id="menu-toggle" className="text-white" onClick={toggleMenu}>
                        <svg 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-Linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M4 6h16m4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden md:flex space-x-4">
                    <li><Link to="/" className="text-white">Home</Link></li>
                    <li><Link to="/about" className="text-white">About</Link></li>
                    <li><Link to="/services" className="text-white">Services</Link></li>
                    <li><Link to="/contact" className="text-white">Contact</Link></li>
                    <li><Link to="/account" className="text-white">Account</Link></li>
                </ul>
            </div>

            {/* moblie nav */}
            {isMenuOpen ? (
                <ul className="flex-col md:hidden">
                     <li className="py-3"><Link to="/" className="text-white">Home</Link></li>
                    <li className="py-3"><Link to="/about" className="text-white">About</Link></li>
                    <li className="py-3"><Link to="/services" className="text-white">Services</Link></li>
                    <li className="py-3"><Link to="/contact" className="text-white">Contact</Link></li>
                </ul>
            ):null}
           
        </nav>
    )
}

export default Nav