import React from 'react'
import { Link } from 'react-router-dom';
import Right from '../images/Right.png';

const BeforFooter = () => {
  return (
    <section className='bg-[#F5F7FA] py-16 px-6 border-t border-gray-100'>
      <div className='flex flex-col items-center justify-center text-center max-w-4xl mx-auto'>
        <h2 className='font-bold text-[34px] lg:text-[42px] text-[#263238] leading-tight'>
          Have a Project in Mind?
        </h2>
        <h2 className='font-bold text-[34px] lg:text-[42px] text-[#4CAF4F] leading-tight mb-4'>
          Let’s Build Your Custom Frontend Website.
        </h2>
        
        <p className='text-[#717171] text-base max-w-xl mb-8 leading-relaxed'>
          Send us your ideas or designs today. We'll deliver a lightweight, high-performance frontend ready to launch with zero backend complexity.
        </p>

        <Link 
          to="/contact"
          className='inline-flex justify-center items-center px-8 py-3.5 bg-[#4CAF4F] hover:bg-[#3d913f] transition-all rounded-lg text-white font-semibold cursor-pointer shadow-sm hover:shadow'
        >
          <span>Get in Touch With Us</span>
          <img src={Right} alt="Right Arrow" className='ml-3' />
        </Link>
      </div>
    </section>
  )
}

export default BeforFooter
