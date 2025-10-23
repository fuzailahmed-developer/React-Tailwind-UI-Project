import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Collabes from "../../Components/Collabes/Collabes"
import Growth from '../../Components/Growth/Growth'
import SeoSection from '../../Components/SeoSection/SeoSection'
import OurClients from '../../Components/OurClients/OurClents'
import Pricing from '../../Components/Pricing/Pricing'
import JoinWaitList from '../../Components/JoinWaitList/JoinWaitList'
import Footer from '../../Components/Footer/Footer'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Collabes />
      <Growth />
      <SeoSection />
      <OurClients />
      <Pricing />
      <JoinWaitList />
      <Footer />
    </div>
  )
}

export default Home