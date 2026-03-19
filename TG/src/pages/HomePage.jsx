import Navbar from '../components/sections/Navbar'
import Hero from '../components/sections/Hero'
import StatsBar from '../components/sections/StatsBar'
import VideoCards from '../components/sections/VideoCards'
import GadgetShowcase from '../components/sections/GadgetShowcase'
import ReviewsSection from '../components/sections/ReviewsSection'
import FounderSection from '../components/sections/FounderSection'
import Footer from '../components/sections/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <VideoCards />
        <GadgetShowcase />
        <ReviewsSection />
        <FounderSection />
      </main>
      <Footer />
    </div>
  )
}
