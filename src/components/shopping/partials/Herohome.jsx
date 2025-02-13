import React from 'react'

export default function Herohome() {
  return (
    <div className='w-full h-screen mb-4'>
      <img className='top-0 left-0 w-full h-screen object-cover' src="./images/banner-3.png" alt="" />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"/>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>DEMO</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Ecommerce Shop</h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti quibusdam vel repellendus fuga aliquid magnam dicta veritatis nam minus.</p>
          <button className='button-1 bg-white text-black '>Reserve Now</button>
        </div>
      </div>
    </div>
  )
}
