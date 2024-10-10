import './aboutus.css'
import Logoabout from '../../assets/logo.png'
import 'boxicons'

const AboutUs: React.FC = () => {
  return (
    <div className='about-us' id="aboutus">
      <div className='about-left'>
        <img src={Logoabout} alt="Project Logo" className='logo-img'/>
      </div>
      <div className="about-right">
        <h3>ABOUT PROJECT</h3>
        <br />
        <h2>YOU CAN MAKE THE DIFFERENCE</h2>
        <br />
        <p>Our project aims to rescue animals that are victims of mistreatment and abandonment, offering a real chance for recovery and reintegration into family environments through responsible adoptions, with the essential support of environmental police and NGOs around the world.</p>
        <br />
        <p>Through strategic partnerships, we have created a global support network that enables a quick and effective response to cases of abuse, ensuring that rescued animals receive the care and protection they deserve.</p>
        <br />
        <p>Additionally, our innovative website will allow anyone to report cases of abuse and abandonment using Google Maps, automatically notifying the relevant authorities so they can take immediate and coordinated action to save lives.</p>
        <br /><br />
        <button className='article'>READ THE ARTICLE</button>
      </div>
    </div>
  )
}

export default AboutUs;
