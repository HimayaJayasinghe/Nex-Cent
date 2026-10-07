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

const OurClient = () => {
  return (
    <section id="services" className='pt-14 pb-16 max-w-7xl mx-auto px-8 lg:px-24'>
      <div className='text-center text-[#4D4D4D] font-semibold text-[28px]'>Trusted Technology Stack</div>
      <p className='text-center text-[#717171] text-[15px] mt-2'>We build modern interfaces using industry-standard tools and frameworks</p>
      
      <div className='flex flex-wrap items-center justify-center lg:justify-between gap-8 mt-10 px-4 opacity-80'>
        <div><img src={c1} alt="React" className='h-8 w-auto object-contain' /></div>
        <div><img src={c2} alt="Tailwind CSS" className='h-8 w-auto object-contain' /></div>
        <div><img src={c3} alt="JavaScript" className='h-8 w-auto object-contain' /></div>
        <div><img src={c4} alt="HTML5" className='h-8 w-auto object-contain' /></div>
        <div><img src={c5} alt="Vite" className='h-8 w-auto object-contain' /></div>
        <div><img src={c6} alt="Vercel" className='h-8 w-auto object-contain' /></div>
        <div><img src={c7} alt="Figma" className='h-8 w-auto object-contain' /></div>
      </div>

      <div className='mt-20 text-center'>
        <h2 className='text-[28px] font-bold text-[#4D4D4D] leading-tight'>
          What We Build For Our Clients
        </h2>
        <p className='text-[15px] text-[#717171] mt-2 max-w-xl mx-auto'>
          We specialize exclusively in frontend design and development. Check out how we can bring your website to life:
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 justify-items-center'>
        <div className='w-full max-w-[320px] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-7 bg-white flex flex-col items-center text-center border border-gray-100 hover:border-[#4CAF4F]'>
          <div className='flex items-center justify-center mb-4 p-3 bg-green-50 rounded-full'>
            <img src={a1} alt="Landing Pages" />
          </div>
          <h3 className='text-[20px] font-bold text-[#4D4D4D]'>Custom Landing<br />Pages</h3>
          <p className='text-[13px] text-[#717171] text-center mt-3 leading-relaxed'>
            High-converting, responsive single-page websites tailored to launch your products, services, or events with zero server maintenance.
          </p>
        </div>

        <div className='w-full max-w-[320px] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-7 bg-white flex flex-col items-center text-center border border-gray-100 hover:border-[#4CAF4F]'>
          <div className='flex items-center justify-center mb-4 p-3 bg-green-50 rounded-full'>
            <img src={a2} alt="Figma to React" />
          </div>
          <h3 className='text-[20px] font-bold text-[#4D4D4D]'>Figma & XD<br />to React Code</h3>
          <p className='text-[13px] text-[#717171] text-center mt-3 leading-relaxed'>
            Already have designs? We convert your Figma, XD, or Sketch mockups into clean, semantic, and reusable React + Tailwind components.
          </p>
        </div>

        <div className='w-full max-w-[320px] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-7 bg-white flex flex-col items-center text-center border border-gray-100 hover:border-[#4CAF4F]'>
          <div className='flex items-center justify-center mb-4 p-3 bg-green-50 rounded-full'>
            <img src={a3} alt="Business Showcases" />
          </div>
          <h3 className='text-[20px] font-bold text-[#4D4D4D]'>Business & Portfolio<br />Showcases</h3>
          <p className='text-[13px] text-[#717171] text-center mt-3 leading-relaxed'>
            Professional showcase websites for creators, agencies, and businesses looking to present their work with smooth animations and fast loading.
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurClient
