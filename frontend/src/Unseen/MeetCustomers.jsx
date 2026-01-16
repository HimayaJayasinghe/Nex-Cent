import React from 'react'
import image9 from '../images/image9.png'
import me1 from '../images/me1.png'
import me2 from '../images/me2.png'
import me3 from '../images/me3.png' 
import me4 from '../images/me4.png'
import me5 from '../images/me5.png'
import me6 from '../images/me6.png'
import right from '../images/right.png'


const MeetCustomers = () => {
  return (
    <div className='flex items-center justify-center  py-10 bg-[#F5F7FA]'>
      <div className='flex justify-center items-center mr-20'>
        <img src={image9} alt="customers" />
      </div>
      <div className='max-w-[850px]'>
              <div className='text-[14px] text-[#717171] leading-relaxed mb-4'>
                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
              </div>
              <div className='text-[#4CAF4F] font-semibold text-[13.92px]'>Tim Smith</div>
              <div className='text-[11.14px] text-[#89939E]'>British Dragon Boat Racing Association</div>
              <div className='grid grid-cols-8  mt-6'>
                <div>
                    <img src={me1} alt="me1" /></div>
                <div>
                    <img src={me2} alt="me2" />
                </div>
                <div>
                    <img src={me3} alt="me3" />
                </div>
                <div>
                    <img src={me4} alt="me4" />
                </div>
                <div>
                <img src={me5} alt="me5" />
                </div>
                <div>
                <img src={me6} alt="me6" />
                </div>
                <div className='text-[#4CAF4F] font-semibold text-[13.92px]'>Meet all customers</div>
                <div className=''>
                    <img src={right} alt="right" />
                </div>
              </div>
            </div>
    </div>
  )
}

export default MeetCustomers
