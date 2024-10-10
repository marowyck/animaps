import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import Testimonials from './components/Testimonials/testimonials'
import About from './components/AboutUs/aboutus'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
