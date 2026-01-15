import React from 'react'
import illustration from '../images/Illustration.png'
import dot from '../images/dot.png'

const Hero = () => {
  return (
    <div>
    <div className='flex justify-between px-40 py-20 bg-[#F5F7FA] ' >
      <div >
        <div className='text-[44.55px] text font-semibold text-[#4D4D4D]'>Lessons and insights</div>
        <div className='text-[#4CAF4F] font-semibold text-[44.55px]'>from 8 years </div>
        <div className='text-[11.14px] text-[#717171]'>Where to grow your business as a photographer: site or social media?</div>
        <div className='w-[88.55px] h-[36.49px] mt-7 bg-[#4CAF4F] text-center text-white '>Register</div>

      </div>

      {/* <div className='py-10'>
          <img src={dot} alt="dot" />
        </div>  */}

      <div>
        <img src={illustration} alt="Illustration" />
          {/* <div className=' mr-100 center'>
          <img src={dot} alt="dot" />
        </div> */}

      </div>

{/* <div className='mt-90 ml-56'>
          <img src={dot} alt="dot" />
        </div> */}


    </div>
    {/* <div className='mb-20'>
          <img src={dot} alt="dot" />
        </div> */}
    </div>
  )
}

export default Hero
