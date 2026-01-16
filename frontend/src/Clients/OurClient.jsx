import React from 'react'
import c1 from '../images/c1.png'
import c2 from '../images/c2.png'
import c3 from '../images/c3.png'
import c4 from '../images/c4.png'
import c5 from '../images/c5.png'
import c6 from '../images/c6.png'   
import c7 from '../images/c7.png'
import a1 from '../images/a1.png'
import a2 from '../images/a2.png'
import a3 from '../images/a3.png'
import last from '../images/last.png'

const OurClient = () => {
  return (
    <div className='pt-10'>
        <div className='text-center text-[#4D4D4D] font-semibold text-[25.06px]'>Our Clients</div>
        <div className='text-center text-[#717171] text-[11.14px]'>We have been working with some Fortune 500+ clients</div>
        <div className=' grid grid-cols-1 sm:grid-cols-7 ml-60 mt-10 mr-50 '>
            <div>
                <img src={c1} alt="client1" />
            </div>
            <div>
                <img src={c2} alt="client2" />  
            </div>
            <div>
                <img src={c3} alt="client3" />
            </div>
            <div>
                <img src={c4} alt="client4" />
            </div>
            <div>
                <img src={c5} alt="client5" />
            </div>
            <div>
                <img src={c6} alt="client6" />
            </div>
            <div>
                <img src={c7} alt="client7" />
            </div>
        </div>
        <div className='text-[25.06px] font-semibold text-[#4D4D4D] text-center mt-20'>Manage your entire community </div>
        <div className='text-[25.06px] font-semibold text-[#4D4D4D] text-center'>in a single system</div>
        <div className='text-center text-[11.14px] text-[#4D4D4D]'>Who is Nextcent suitable for?</div>

        <div className='grid grid-cols-1 sm:grid-cols-3 mt-20 w-7xl justify-items-center mx-auto'>
           
            <div className='w-60 h-55 rounded-lg shadow-lg p-3'>
            
                <div className='flex items-center justify-center'>
                    <img src={a1} alt="association" />
                </div>
                <div className='text-[19.49px] font-bold text-center'>Membership {<br></br>} Organization</div>
                <div className='text-[13px] text-[#717171] text-center mt-4'>Our membership management software provides full automation of membership renewals and payments</div>
            </div>


          
            <div className='w-60 h-55 rounded-lg shadow-lg p-3'>
                <div className='flex items-center justify-center'>
                    <img src={a2} alt="national" />
                </div>
                <div className='text-[19.49px] font-bold text-center '>National {<br></br>} Association</div>
                <div className='text-[13px] text-[#717171] text-center mt-4'>Our membership management software provides full automation of membership renewals and payments</div>
            </div>


            <div className='w-60 h-55 rounded-lg shadow-lg p-3'>
                <div className='flex items-center justify-center'>
                    <img src={a3} alt="clubs" />
                </div>
                <div className='text-[19.49px] font-bold text-center'>Clubs And {<br></br>} Groups</div>
                <div className='text-[13px] text-[#717171] text-center mt-4'>Our membership management software provides full automation of membership renewals and payments</div>
            </div>
        </div>


      
    </div>
  )
}

export default OurClient
