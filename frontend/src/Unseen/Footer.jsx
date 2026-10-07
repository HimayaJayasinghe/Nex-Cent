import React from 'react'
import { Link } from 'react-router-dom'
import insta from '../images/insta.png'
import internet from '../images/internet.png'
import you from '../images/you.png'
import twitter from '../images/twitter.png'
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <footer className='bg-[#263238] text-white py-16'>
      <div className='max-w-7xl mx-auto px-8 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
        {/* Brand & Scope Note */}
        <div className='lg:col-span-2'>
          <Link to="/" className='flex items-center gap-3'>
            <img src={logo} alt="Nexcent Logo" className='h-8 w-auto' />
            <span className='text-2xl font-bold tracking-tight'>Nexcent</span>
          </Link>
          <p className='text-xs text-green-400 font-semibold mt-2'>
            Custom Frontend Web Development Studio
          </p>
          <p className='text-xs text-gray-400 mt-2 max-w-sm leading-relaxed'>
            We design and build high-performance frontend pages and landing pages for businesses. We specialize exclusively in pure client-side code (no backend / databases).
          </p>
          <div className='mt-6 text-xs text-gray-400 space-y-1'>
            <p>© 2026 Nexcent Studio. All rights reserved.</p>
          </div>

          <div className='flex mt-6 gap-3'>
            <a href="#instagram" className='w-9 h-9 rounded-full bg-[#374151] hover:bg-[#4CAF4F] transition-colors flex items-center justify-center cursor-pointer'>
              <img src={insta} alt="Instagram" className='w-4 h-4' />
            </a>
            <a href="#website" className='w-9 h-9 rounded-full bg-[#374151] hover:bg-[#4CAF4F] transition-colors flex items-center justify-center cursor-pointer'>
              <img src={internet} alt="Website" className='w-4 h-4' />
            </a>
            <a href="#youtube" className='w-9 h-9 rounded-full bg-[#374151] hover:bg-[#4CAF4F] transition-colors flex items-center justify-center cursor-pointer'>
              <img src={you} alt="YouTube" className='w-4 h-4' />
            </a>
            <a href="#twitter" className='w-9 h-9 rounded-full bg-[#374151] hover:bg-[#4CAF4F] transition-colors flex items-center justify-center cursor-pointer'>
              <img src={twitter} alt="Twitter" className='w-4 h-4' />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className='font-semibold text-lg text-white mb-4'>Services</h4>
          <ul className='space-y-3 text-sm text-gray-300'>
            <li><a href="#services" className='hover:text-[#4CAF4F] transition-colors'>Landing Pages</a></li>
            <li><a href="#services" className='hover:text-[#4CAF4F] transition-colors'>Figma to React</a></li>
            <li><a href="#services" className='hover:text-[#4CAF4F] transition-colors'>UI/UX Redesign</a></li>
            <li><a href="#services" className='hover:text-[#4CAF4F] transition-colors'>Portfolio Sites</a></li>
            <li><Link to="/contact" className='text-[#4CAF4F] hover:underline font-semibold'>Get a Quote →</Link></li>
          </ul>
        </div>

        {/* Company & Scope */}
        <div>
          <h4 className='font-semibold text-lg text-white mb-4'>Navigation</h4>
          <ul className='space-y-3 text-sm text-gray-300'>
            <li><Link to="/" className='hover:text-[#4CAF4F] transition-colors'>Home</Link></li>
            <li><a href="#why-frontend" className='hover:text-[#4CAF4F] transition-colors'>Why Frontend-Only</a></li>
            <li><a href="#work" className='hover:text-[#4CAF4F] transition-colors'>Portfolio</a></li>
            <li><Link to="/contact" className='hover:text-[#4CAF4F] transition-colors'>Contact Us</Link></li>
            <li><Link to="/login" className='hover:text-[#4CAF4F] transition-colors'>Client Portal</Link></li>
          </ul>
        </div>

        {/* Direct Contact */}
        <div>
          <h4 className='font-semibold text-lg text-white mb-4'>Direct Inquiries</h4>
          <div className='text-sm text-gray-300 space-y-3'>
            <div>
              <div className='text-xs text-gray-400'>Email:</div>
              <a href="mailto:hbinushi@gmail.com" className='hover:text-[#4CAF4F] transition-colors text-white font-medium'>
                hbinushi@gmail.com
              </a>
            </div>
            <div>
              <div className='text-xs text-gray-400'>Phone:</div>
              <a href="tel:0706767619" className='hover:text-[#4CAF4F] transition-colors text-white font-medium'>
                0706767619
              </a>
            </div>
            <div>
              <Link
                to="/contact"
                className='inline-block mt-2 px-4 py-2 bg-[#4CAF4F] hover:bg-[#3d913f] text-white rounded text-xs font-semibold uppercase tracking-wider transition-colors'
              >
                Send Inquiry Form
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
