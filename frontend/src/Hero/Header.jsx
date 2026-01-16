import React from 'react';
import logo from '../images/logo.png';



const Header = () => {
  return (
  <div className='flex justify-between px-50 py-5'>
    <div className='flex'>
    <div className='flex items-center'>
        <img src={logo} alt="Logo"/>
    </div>
    <div className='text-[#263238] font-bold text-xl flex items-center'>NexCent</div>
    </div>

    <div className='flex gap-7 items-center'>
    <div>Home</div>
    <div>Features</div>
    <div>Community</div>
    <div>Blog</div>
    <div>Pricing</div>
    <div className='w-[133.25px]  h-[36.49px] text-white bg-[#4CAF4F] flex justify-center items-center'>Register Now</div>

    </div>
  </div>
  )
}

export default Header
