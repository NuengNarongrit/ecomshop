import React from 'react'
import InfoOne from './InfoOne'
import InfoTwo from './InfoTwo'
import CTA from './CTA'
import Testimonials from './Testimonials'
import GetInTouch from './GetInTouch'

function About() {
  return (
    <section className='bg-white py-16'>
        <div className="container mx-auto text-center">
            <h2 className='text-3xl font-semibold text-gray-800'>About US</h2>
            <p className='mt-4 text-gray-600'>We are a team of dedicated individuals.</p>
        </div>
        <InfoOne/>
        <InfoTwo/>
        {/* <CTA/> */}
        <Testimonials/>
        {/* <GetInTouch/> */}
    </section>
  )
}

export default About
