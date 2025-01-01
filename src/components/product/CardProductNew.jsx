import React from 'react'
import { useEffect } from 'react';

export default function CardProductNew(){

    useEffect(()=>{
      const callback = function (entries) {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          } else {
            entry.target.classList.remove("animate-fadeIn");
          }
        });
      };
      const observer = new IntersectionObserver(callback,{
        rootMargin: "0px",
        threshold: 0.1
      });
        
      const targets = document.querySelectorAll(".js-show-on-scroll");
      targets.forEach(function (target) {
        target.classList.add("opacity-0");
        observer.observe(target);
      });

      return () => {
        // Cleanup เมื่อคอมโพเนนต์ unmount
        observer.disconnect();
      };
    }, [])
      
      

    return (
        <div className="p-4">
            <div className="grid grid-cols-2 gap-4 my-4">
                <div className="h-64 text-white js-show-on-scroll relative group">
                    <img className='w-full h-64 object-cover' src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span className="cursor-pointer absolute inset-0 flex items-center justify-center text-white font-bold text-2xl bg-opacity-50 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">Read</span>
                </div>
                <div className="bg-red-900  h-64 text-white js-show-on-scroll relative group">
                    <img className='w-full h-64 object-cover'  src="https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span className="cursor-pointer absolute inset-0 flex items-center justify-center text-white font-bold text-2xl bg-opacity-50 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">Read</span>
                </div>
            </div>

            <div className="h-[80vh] bg-blue-300 my-4 js-show-on-scroll relative group">                
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <span className="cursor-pointer absolute inset-0 flex items-center justify-center text-white font-bold text-2xl bg-opacity-50 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">Read</span>
            </div>
            <div className="h-[80vh] bg-red-300 js-show-on-scroll relative group">
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <span className="cursor-pointer absolute inset-0 flex items-center justify-center text-white font-bold text-2xl bg-opacity-50 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">Read</span>
            </div>
        </div>
      );
}
