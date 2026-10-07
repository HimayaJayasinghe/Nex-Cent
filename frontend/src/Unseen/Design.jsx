import React from 'react'
import { Link } from 'react-router-dom'
import pana from '../images/pana.png'

const Design = () => {
  return (
    <section className='flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-8 lg:px-24 py-16 gap-12'>
      <div className='flex justify-center items-center flex-shrink-0'>
        <img src={pana} alt="Modern Frontend Design Illustration" className='max-w-[380px] w-full object-contain' />
      </div>
      
      <div className='max-w-2xl'>
        <div className="inline-block bg-green-50 text-[#4CAF4F] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-3">
          Design & Code Quality
        </div>

        <h2 className='text-[34px] font-bold text-[#4D4D4D] leading-tight mb-5'>
          Pixel-Perfect Design Meets Seamless Frontend Interactivity
        </h2>

        <p className='text-[15px] text-[#717171] leading-relaxed mb-6'>
          From fluid layout shifts to engaging micro-interactions, we obsess over every visual detail. Every page we deliver is built with clean, modular React and Tailwind CSS. You get complete ownership of the source code, ready to deploy effortlessly on any static host with zero database dependencies.
        </p>

        <div className='flex items-center gap-4'>
          <Link 
            to="/contact"
            className='inline-flex items-center justify-center bg-[#4CAF4F] hover:bg-[#3d913f] transition-all text-white px-8 py-3.5 rounded-lg font-medium cursor-pointer shadow-sm hover:shadow'
          >
            Start Your Project →
          </Link>
          <a 
            href="#contact" 
            className='text-sm font-semibold text-[#4CAF4F] hover:underline'
          >
            Ask a Question
          </a>
        </div>
      </div>
    </section>
  )
}

export default Design
