import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

export default function HeroProduct() {
  return (
    <div className='container mx-auto'>
        <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
            <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative hover:scale-105 transition-transform duration-300 ease-in-out" >
                <img className='w-full h-full object-cover rounded-lg' src='./images/product/product4.jpg' alt="Product1" />
                <div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4'> 
                    <p className='text-2xl hidden sm:block'>100% Origin Dry</p>
                    <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold' data-aos="zoom-y-out">Product Name ...</h2>
                    <p className='text-gray-500 text-xl pt-4 sm:pt-8'>Starting At</p>
                    <div className='font-medium text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-8'>$18.36</div>
                    <div className="bg-green-950 hover:bg-green-700 text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
                        Shop Now <BsArrowRight/>
                    </div>
                </div>
            </div>
            <div className="relative hover:scale-105 transition-transform duration-300 ease-in-out" >
                <img className='h-full w-full object-cover rounded-lg' src="./images/product/product2.jpg" alt="Product 2" />
                <div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2'>
                    <p className='text-2xl sm:text-3xl font-bold' data-aos="zoom-y-out">Product Name ...</p>
                    <p className='text-gray-500 text-xl pt-4 '>Starting At</p>
                    <div className='font-medium text-red-600 text-2xl sm:text-4xl pb-8'>$18.36</div>
                    <div className="bg-green-950 hover:bg-green-700 text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer">
                        Shop Now <BsArrowRight/>
                    </div>
                </div>
            </div>
            <div className="relative hover:scale-105 transition-transform duration-300 ease-in-out" >
                <img className='h-full w-full object-cover rounded-lg' src="./images/product/product1.jpg" alt="Product 3" />
                <div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2'>
                    <p className='text-2xl sm:text-3xl font-bold' data-aos="zoom-y-out">Product Name ...</p>
                    <p className='text-gray-500 text-xl pt-4 '>Starting At</p>
                    <div className='font-medium text-red-600 text-2xl sm:text-4xl pb-8'>$18.36</div>
                    <div className="bg-green-950 hover:bg-green-700 text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer">
                        Shop Now <BsArrowRight/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
