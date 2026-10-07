import React from 'react'
import { Link } from 'react-router-dom'
import image9 from '../images/image9.png'
import me1 from '../images/me1.png'
import me2 from '../images/me2.png'
import me3 from '../images/me3.png'
import me4 from '../images/me4.png'
import me5 from '../images/me5.png'
import me6 from '../images/me6.png'
import right from '../images/Right.png'

const MeetCustomers = () => {
  return (
    <section className='bg-[#F5F7FA] py-16'>
      <div className='max-w-7xl mx-auto px-8 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12'>
        <div className='flex justify-center items-center flex-shrink-0'>
          <img src={image9} alt="Client Testimonial" className='max-w-[340px] w-full rounded-2xl shadow-sm object-cover' />
        </div>

        <div className='max-w-2xl'>
          <p className='text-[16px] text-[#717171] leading-relaxed mb-5 font-normal italic'>
            “Nexcent built our custom marketing frontend in less than a week. It was 100% faithful to our design specifications, had buttery-smooth responsiveness across mobile devices, and because it’s a pure frontend build, we host it completely free on Vercel without ever worrying about server crashes.”
          </p>
          <div className='text-[#4CAF4F] font-bold text-[18px]'>Sarah Jenkins</div>
          <div className='text-[14px] text-[#89939E] mt-1'>Product Lead, Lumina Creative Studio</div>

          <div className='flex flex-wrap items-center gap-6 mt-8'>
            <div className='flex items-center gap-5 opacity-75'>
              <img src={me1} alt="Client 1" className='h-7 w-auto object-contain' />
              <img src={me2} alt="Client 2" className='h-7 w-auto object-contain' />
              <img src={me3} alt="Client 3" className='h-7 w-auto object-contain' />
              <img src={me4} alt="Client 4" className='h-7 w-auto object-contain' />
              <img src={me5} alt="Client 5" className='h-7 w-auto object-contain' />
              <img src={me6} alt="Client 6" className='h-7 w-auto object-contain' />
            </div>

            <Link to="/contact" className='flex items-center gap-2 text-[#4CAF4F] hover:text-[#3d913f] font-semibold text-[15px] cursor-pointer ml-auto'>
              <span>Work with us</span>
              <img src={right} alt="Arrow" className='w-4 h-4' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetCustomers
