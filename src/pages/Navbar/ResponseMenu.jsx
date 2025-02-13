import React from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import { NavbarMenu } from './dataNav'
import { Link } from 'react-router-dom';

export const ResponseMenu = ({open}) => {
  return (
    <AnimatePresence mode='wait'>
        {
            open && (
                <motion.div
                    initial={{ opacity:0, y:-100}}
                    animate={{ opacity:1, y:0 }}
                    exit={{ opacity:0, y:-100 }}
                    className='absolute top-20 left-0 w-full h-screen z-20'
                >
                    <div className='text-xl font-semibold uppercase bg-gray-900 bg-opacity-70 text-white py-10 m-6 rounded-3xl'>
                        <ul className='flex flex-col items-center justify-center gap-10'>
                            {NavbarMenu.map((item)=>{
                                return(
                                    <li key={item.id}><Link to={item.link}>{item.title}</Link></li>
                                )
                            })}
                            {/* <li>Home</li>
                            <li>About</li>
                            <li>Conract</li>
                            <li>Dashboad</li> */}
                        </ul>
                    </div>
                </motion.div>
            )
        }
    </AnimatePresence>
  )
}
