import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Portfolio from './components/Portfolio'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (

    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App