import React from 'react'
import { Link } from 'react-router-dom'
import last from '../images/last.png'

const Unseen = () => {
  return (
    <section id="why-frontend" className='flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-8 lg:px-24 py-16 gap-12'>
      <div className='flex justify-center items-center flex-shrink-0'>
        <img src={last} alt="Frontend Development Illustration" className='max-w-[380px] w-full object-contain' />
      </div>
      
      <div className='max-w-2xl'>
        <div className="inline-block bg-green-50 text-[#4CAF4F] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-3">
          Our Specialization
        </div>

        <h2 className='text-[34px] font-bold text-[#4D4D4D] leading-tight mb-5'>
          Why Choose a Dedicated Frontend-Only Web Studio?
        </h2>

        <p className='text-[15px] text-[#717171] leading-relaxed mb-4'>
          Most marketing sites, portfolios, and company presentations do not need complex backend databases or server maintenance. By focusing strictly on <strong>frontend engineering</strong>, we deliver websites that:
        </p>

        <ul className='space-y-2.5 text-sm text-[#4D4D4D] mb-8'>
          <li className='flex items-center gap-2'>
            <span className='text-[#4CAF4F] font-bold'>✓</span>
            <strong>Ultra-Fast Speeds:</strong> Static frontend pages load in under 1 second, boosting SEO and conversions.
          </li>
          <li className='flex items-center gap-2'>
            <span className='text-[#4CAF4F] font-bold'>✓</span>
            <strong>Zero Hosting Costs:</strong> Host for free or near Rs. 0/month on platforms like Vercel, Netlify, or GitHub Pages.
          </li>
          <li className='flex items-center gap-2'>
            <span className='text-[#4CAF4F] font-bold'>✓</span>
            <strong>Unbreakable Security:</strong> No backend database means zero SQL injection attacks or server downtime.
          </li>
          <li className='flex items-center gap-2'>
            <span className='text-[#4CAF4F] font-bold'>✓</span>
            <strong>Transparent Scope:</strong> You get exactly what you need without paying for unused backend features.
          </li>
        </ul>

        <Link 
          to="/contact" 
          className='inline-flex items-center justify-center bg-[#4CAF4F] hover:bg-[#3d913f] transition-all text-white px-8 py-3.5 rounded-lg font-medium cursor-pointer shadow-sm hover:shadow'
        >
          Contact Our Team →
        </Link>
      </div>
    </section>
  )
}

export default Unseen
