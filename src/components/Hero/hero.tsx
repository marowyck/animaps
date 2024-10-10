import './hero.css'
import HeroImg from '../../assets/hero-img.png'
import 'boxicons'

const Hero: React.FC = () => {
  return (
    <div className='hero'>
      <img src={HeroImg} alt="Hero Image" className='hero-img' />
      <div className='hero-text'>
        <h1>Our goal is to help animals all around the world.<i className='bx bx-globe bx-tada bx-rotate-180'></i></h1>
        <p>Our mission is to report cases of <span>mistreatment, abandonment, and animals in need of responsible adoption</span> to the appropriate authorities. You can be a part of this effort. <br /> 
        <span>JOIN US</span> in making a difference!</p>
        <br />
        <button className='explore-more'>EXPLORE MORE</button>
      </div>
    </div>
  )
}

export default Hero
