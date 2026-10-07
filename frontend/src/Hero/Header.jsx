import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import Right from '../images/Right.png';  

const Header = () => {
  return (
    <header className='flex justify-between items-center px-8 lg:px-24 py-5 max-w-7xl mx-auto'>
      <Link to="/" className='flex items-center gap-2 cursor-pointer'>
        <img src={logo} alt="Nexcent Studio Logo" className='h-6 w-auto' />
        <span className='text-[#263238] font-bold text-2xl tracking-tight'>Nexcent</span>
      </Link>

      <nav className='flex gap-5 lg:gap-7 items-center text-[#4D4D4D] text-[15px] font-medium'>
        <Link to="/" className='hover:text-[#4CAF4F] transition-colors'>Home</Link>
        <a href="#services" className='hover:text-[#4CAF4F] transition-colors'>Services</a>
        <a href="#why-frontend" className='hover:text-[#4CAF4F] transition-colors'>Why Frontend</a>
        <a href="#work" className='hover:text-[#4CAF4F] transition-colors'>Portfolio</a>
        <Link to="/contact" className='hover:text-[#4CAF4F] transition-colors font-semibold text-[#4CAF4F]'>
          Contact Us
        </Link>
        
        <Link 
          to="/login" 
          className='hover:text-[#4CAF4F] transition-colors text-xs text-gray-400 hidden sm:block'
          title="Client Portal Login"
        >
          Client Login
        </Link>

        <Link 
          to="/contact"
          className='ml-2 px-5 py-2.5 text-white bg-[#4CAF4F] hover:bg-[#3d913f] transition-colors rounded font-medium flex items-center justify-center cursor-pointer shadow-sm'
        >
          <span>Get a Quote</span>
          <img src={Right} alt="Right Arrow" className='ml-2' />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
