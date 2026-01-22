import React from 'react'
import insta from '../images/insta.png'
import internet from '../images/internet.png'
import you from '../images/you.png'
import twitter from '../images/twitter.png'
import logo from '../images/logo.png'



const Footer = () => {
  return (
    <div className='bg-[#263238] flex gap-60 text-white py-10 mt-2'>
      <div className=''>
<div className='ml-35 '>
<div className='flex items-center gap-2'>
  <img src={logo} alt="logo" />
  <div className='text-2xl font-semibold'>Nexcent</div>
</div>
<div className='mt-9'>Copyright © 2020 Landify UI Kit.</div>
<div className='mt-2'>All rights reserved</div>


  <div className='flex mt-4 gap-6'>
    <img src={insta} alt="insta" />
    <img src={internet} alt="internet" />
    <img src={you} alt="you" />
    <img src={twitter} alt="twitter" />
    
    
  </div>
 </div>
 </div>
  

<div>
<div className='font-semibold text-[20px]'>Company
  </div>
  <div className='mt-2 text-[15px]'>About us</div>
  <div className='mt-2 text-[15px]'>Blog</div>
  <div className='mt-2 text-[15px]'>Contact us</div>
  <div className='mt-2 text-[15px]'>Pricing</div>
  <div className='mt-2 text-[15px]'>Testimonials</div>
</div>

<div>
<div className='font-semibold text-[20px]'>Support
  </div>
  <div className='mt-2 text-[15px]'>Help center</div>
  <div className='mt-2 text-[15px]'>Terms of service</div>
  <div className='mt-2 text-[15px]'>Legal</div>
  <div className='mt-2 text-[15px]'>Privacy policy</div>
  <div className='mt-2 text-[15px]'>Status</div>
</div>

<div className='font-semibold text-[20px]'>Stay up to date
  <div className='flex'>
    <div className='flex '>
    <input cl
              type="email" 
              placeholder="Your email address" 
              className='bg-[#374151] text-gray-400 placeholder-gray-500 px-4 py-3 rounded-l-md text-sm outline-none w-48 mt-2'
            />
    
    </div>

  </div>

</div>


      
      
    </div>
  )
}

export default Footer
