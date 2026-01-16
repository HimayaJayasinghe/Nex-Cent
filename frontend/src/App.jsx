import React from 'react'
import Header from './Hero/Header'
import Hero from './Hero/Hero'
import OurClient from './Clients/OurClient'
import Unseen from './Unseen/Unseen'
import Local from './Unseen/Local'
import Design from './Unseen/Design'
import MeetCustomers from './Unseen/MeetCustomers'
import Marketing from './Unseen/Marketing'
import BeforFooter from './Unseen/BeforFooter'
MeetCustomers
Design
Local
Unseen
OurClient
Hero
Header
Marketing
BeforFooter
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <OurClient />
      <Unseen />
      <Local />
      <Design />
      <MeetCustomers />
      <Marketing />
      <BeforFooter />
    </div>
  )
}

export default App
