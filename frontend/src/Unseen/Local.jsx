import React from 'react'
import he1 from '../images/he1.png'
import he2 from '../images/he2.png'
import he3 from '../images/he3.png'
import he4 from '../images/he4.png' 

const Local = () => {
  return (
    <section className='bg-[#F5F7FA] py-16'>
      <div className='max-w-7xl mx-auto px-8 lg:px-24 flex flex-col lg:flex-row justify-between items-center gap-12'>
        <div className='max-w-md'>
          <h2 className='text-[28px] lg:text-[34px] text-[#4D4D4D] font-bold leading-tight'>
            Helping businesses launch
          </h2>
          <h2 className='text-[#4CAF4F] text-[28px] lg:text-[34px] font-bold leading-tight'>
            modern web frontends
          </h2>
          <p className='text-[15px] text-[#717171] mt-3 leading-relaxed'>
            We focus on clean code, responsive layouts, and exceptional visual design so your brand shines online.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 w-full lg:w-auto'>
          <div className='flex items-center gap-4'>
            <img src={he1} alt="Projects" className='w-12 h-12 object-contain' />
            <div>
              <div className='text-2xl font-bold text-[#4D4D4D]'>120+</div>
              <div className='text-sm text-[#717171]'>Custom Frontends Delivered</div>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <img src={he2} alt="Responsiveness" className='w-12 h-12 object-contain' />
            <div>
              <div className='text-2xl font-bold text-[#4D4D4D]'>100%</div>
              <div className='text-sm text-[#717171]'>Mobile Responsive Guarantee</div>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <img src={he3} alt="Speed" className='w-12 h-12 object-contain' />
            <div>
              <div className='text-2xl font-bold text-[#4D4D4D]'>&lt; 0.8s</div>
              <div className='text-sm text-[#717171]'>Average Page Load Speed</div>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <img src={he4} alt="Hosting Savings" className='w-12 h-12 object-contain' />
            <div>
              <div className='text-2xl font-bold text-[#4D4D4D]'>Rs. 0/mo</div>
              <div className='text-sm text-[#717171]'>Static Hosting Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Local
