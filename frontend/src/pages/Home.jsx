import React from 'react'
import Header from '../Hero/Header'
import Hero from '../Hero/Hero'
import OurClient from '../Clients/OurClient'
import Unseen from '../Unseen/Unseen'
import Local from '../Unseen/Local'
import Design from '../Unseen/Design'
import MeetCustomers from '../Unseen/MeetCustomers'
import Marketing from '../Unseen/Marketing'
import ContactSection from '../components/ContactSection'
import BeforFooter from '../Unseen/BeforFooter'
import Footer from '../Unseen/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <Hero />
      <OurClient />
      <Unseen />
      <Local />
      <Design />
      <MeetCustomers />
      <Marketing />
      <ContactSection />
      <BeforFooter />
      <Footer />
    </div>
  )
}

export default Home
