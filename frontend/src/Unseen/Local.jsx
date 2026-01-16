import React from 'react'
import he1 from '../images/he1.png'
import he2 from '../images/he2.png'
import he3 from '../images/he3.png'
import he4 from '../images/he4.png' 

const Local = () => {
  return (
    <div className='grid grid-cols-2 bg-[#F5F7FA] pt-4 pr-40 pb-4  pl-[100.23px]  '>
      <div className='ml-60 my-20 '>
        <div className='text-[25.06px] text-[#4D4D4D] font-semibold '>Helping a local  </div>
        <div className='text-green-700 text-[25.06px]  font-semibold'>business reinvent itself</div>
        <div className='text-[11.14px] text-[#4D4D4D]'>We reached here with our hard work and dedication</div>
      </div>


      <div className=' max-w-[800px] grid grid-cols-2 gap-5 justify-items-center mr-60'>
        <div className='mr-10'>
            <div>
            <img src={he1} alt="he1" />
            </div>
            <div>2,245,341</div>
            <div>Members</div>
        </div>

        <div className='ml-15'>
            <div >
                <img src={he2} alt="he2" />
            </div>
            <div>46,328</div>
            <div>Clubs</div>
        </div>

        <div className=''>
            <div>
                <img src={he3} alt="he3" />
            </div>
            <div>828,867</div>
            <div>Event Bookings</div>
        </div>

        <div className='ml-19'>
            <div className=''>
                <img src={he4} alt="he4" /> 
            </div>
            <div>1,926,436</div>
            <div>Payments</div>
        </div>

        </div>

    </div>
  )
}

export default Local
