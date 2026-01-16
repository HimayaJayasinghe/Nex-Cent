import React from 'react'
import cc1 from '../images/cc1.png'
import cc2 from '../images/cc2.png'
import cc3 from '../images/cc3.png'

const Marketing = () => {
  return (
    <div className='px-40 py-10'>
      <div className='text-center mx-auto max-w-[500px]'>
        <h2 className='text-[25.06px] font-semibold  text-[#4D4D4D] mb-2'>
          Caring is the new marketing
        </h2>
        
        <p className='text-[#717171] text-[14px] text-center mx-auto'>
          The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
        </p>
      </div>

      <div className='flex justify-center gap-10 mt-10 mb-10'>
        <div>
          <img src={cc1} alt="cc1" />
          <div className='w-65 h-30 rounded-lg shadow-lg p-3 overflow-hidden '>
                
          </div>
        </div>
        <div>
          <img src={cc2} alt="cc2" />
          <div className='w-65 h-30 rounded-lg shadow-lg p-3 '></div>
        </div>
        <div>
          <img src={cc3} alt="cc3" /> 
          <div className='w-65 h-30 rounded-lg shadow-lg p-3 '></div>
        </div>
      </div>

      <div></div>
    </div>
  )
}

export default Marketing
