import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/workflow'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import ContactUs from './components/ContactUs'
import Contact  from './components/Contact'
import Faqs from './components/Faqs'

export const App = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <AboutUs />
      <Services />
      <FeatureSection />
      <Workflow />
      <Testimonials />
      <ContactUs />
      <Contact />
      <Faqs />
      <Footer />
    </div>
  </>
  )
}
export default App