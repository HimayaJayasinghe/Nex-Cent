import React from 'react'
import insta from '../images/insta.png'
import internet from '../images/internet.png'
import you from '../images/you.png'
import twitter from '../images/twitter.png'


const Footer = () => {
  return (
    <div className='bg-[#263238] flex gap-10 text-white py-10'>
<div className=''>
<div className=''>Nexcent</div>
<div className=''>Copyright © 2020 Landify UI Kit.</div>
<div>All rights reserved</div>

  <div className='flex'>
    <img src={insta} alt="insta" />
    <img src={internet} alt="internet" />
    <img src={you} alt="you" />
    <img src={twitter} alt="twitter" />
    
  </div>
 </div>
  


<div>Company
  <div>About us</div>
  <div>Blog</div>
  <div>Contact us</div>
  <div>Pricing</div>
  <div>Testimonials</div>
</div>

<div>Support</div>

<div>Stay up to date</div>
      
      
    </div>
  )
}

export default Footer
