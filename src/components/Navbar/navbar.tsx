import './navbar.css'
import logo from '../../assets/name.png'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const Navbar: React.FC = () => {
  const [sticky, setSticky] = useState<boolean>(false)
  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    document.body.classList.toggle('dark-mode', darkMode); 
  }, [darkMode])

  const [mobileMenu, setMobileMenu] = useState<boolean>(false)

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <nav className={`container ${sticky ? 'sticky' : ''} ${darkMode ? 'dark' : ''}`}>
        <img src={logo} alt="Logo" className="logo" />
        <i className='mm bx bx-menu' onClick={toggleMenu}></i>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li className='choice'><Link to='hero' smooth={true} offset={0} duration={500}>HOME</Link></li>
            <li className='choice'><Link to='aboutus' smooth={true} offset={0} duration={500}>ABOUT US</Link></li>
            <li className='choice'><Link to='testimonials' smooth={true} offset={0} duration={500}>TESTIMONIALS</Link></li>
            <li className='choice'><Link to='contact' smooth={true} offset={0} duration={500}>CONTACT US</Link></li>
            <li><button className='btn-access'>ACCESS</button></li>
            <li>

            <label className="change">
                <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
                <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
                <input type="checkbox" className="input" onClick={toggleDarkMode}/>
                <span className="changer"></span>
                </label>

            </li>
        </ul>
    </nav>
  )
}

export default Navbar
