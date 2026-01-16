import React from 'react'
import last from '../images/last.png'

const Unseen = () => {
  return (
    <div className='flex items-center justify-center px-40 py-16'>
      <div className='flex justify-center items-center mr-20'>
        <img src={last} alt="illustration" />
      </div>
      
      <div className='max-w-[800px]'>
        <div className='text-[36px] font-bold text-[#4D4D4D] mb-6'>
          The unseen of spending three years at Pixelgrade
        </div>

        <div className='text-[14px] text-[#717171] leading-relaxed mb-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
        </div>

        <button className='bg-[#4CAF4F] text-white px-8 py-3 rounded flex justify-center items-center '>
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Unseen
