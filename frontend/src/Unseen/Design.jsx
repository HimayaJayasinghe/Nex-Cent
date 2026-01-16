import React from 'react'
import pana from '../images/pana.png'


const Design = () => {
  return (
    <div className='flex items-center justify-center px-40 py-16'>
      <div className='flex justify-center items-center mr-20'>
              <img src={pana} alt="illustration" />
            </div>
            
            <div className='max-w-[800px]'>
              <div className='text-[36px] font-bold text-[#4D4D4D] mb-6'>
                How to design your site footer like we did
              </div>
      
              <div className='text-[14px] text-[#717171] leading-relaxed mb-8'>
                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
              </div>
      
              <button className='bg-[#4CAF4F] text-white px-8 py-3 rounded flex justify-center items-center '>
                Learn More
              </button>
            </div>
    </div>
  )
}

export default Design
