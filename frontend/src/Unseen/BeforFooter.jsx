import React from 'react'
import Right from '../images/Right.png';

const BeforFooter = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 py-2 text-[#263238] '>
        <div className='font-semibold text-center text-[44.55px]'>Pellentesque suscipit</div>
        <div className='font-semibold text-center text-[44.55px]'>fringilla libero eu.</div>
        
        <div className=' flex justify-center items-center text-center w-40 h-10 bg-[#4CAF4F]'>Get a Demo
          <div className='ml-2 flex justify-center items-center'>
            <img src={Right} alt="Right Arrow" className='ml-2'/>
          </div>
        </div>
        
      
    </div>
  )
}

export default BeforFooter
