import './testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/companheiro.png'
import user2 from '../../assets/jaguar.png'
import user3 from '../../assets/panda.png'
import user4 from '../../assets/tatu.png'
import 'boxicons'
import { useRef } from 'react'

const Testimonials: React.FC = () => {
  const slider = useRef<HTMLUListElement>(null);
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    if (slider.current) {
      slider.current.style.transform = `translateX(${tx}%)`
    }
  }

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    if (slider.current) {
      slider.current.style.transform = `translateX(${tx}%)`
    }
  }

  return (
    <div className="testimonials">
      <h3>TESTIMONIALS</h3>
      <h1>What do project users have to say about it? <i className='bx bxs-conversation' /></h1>

      <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user1} alt="John Philippi" />
                <div>
                  <h3>John Philippi</h3>
                  <span>Okinawa, JPN</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, aspernatur, ullam maxime labore minima, fugiat quas iure nemo impedit nesciunt error nam debitis deserunt veniam nostrum? Sapiente in non ullam.</p>
            </div>
          </li>

          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user2} alt="Jaguar" />
                <div>
                  <h3>Jaguar</h3>
                  <span>America</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, aspernatur, ullam maxime labore minima, fugiat quas iure nemo impedit nesciunt error nam debitis deserunt veniam nostrum? Sapiente in non ullam.</p>
            </div>
          </li>

          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user3} alt="Panda" />
                <div>
                  <h3>Panda</h3>
                  <span>China</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, aspernatur, ullam maxime labore minima, fugiat quas iure nemo impedit nesciunt error nam debitis deserunt veniam nostrum? Sapiente in non ullam.</p>
            </div>
          </li>

          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user4} alt="Tatu" />
                <div>
                  <h3>Tatu</h3>
                  <span>Brazil</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, aspernatur, ullam maxime labore minima, fugiat quas iure nemo impedit nesciunt error nam debitis deserunt veniam nostrum? Sapiente in non ullam.</p>
            </div>
          </li>
        </ul>
      </div>

      <h3 className='help-us'>You can help us by leaving a report for our team!</h3>
      <h3 className='help-us'>Contact us</h3>
    </div>
  )
}

export default Testimonials
