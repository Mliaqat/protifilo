import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);

  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        href="/"
        onClick={() => setShowNav(false)}>
          <h1>L</h1>
        {/* <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <Link 
          className={pathname == "/" ? 'active' : ''}
          href="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          
        </Link>
       <Link 
          className={pathname == "/about-us" ? 'active about-link' : 'about-link'}
          href="/about-us"
          onClick={() => setShowNav(false)}>          
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </Link>
          <Link
          className={pathname == "/portfolio" ? 'active portfolio-link' : 'portfolio-link'}
          href="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </Link>
       <Link
          className={pathname == "/contact" ? 'active contact-link' : 'portfolio-link'}
          href="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </Link>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/liaqatshehzad"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Mliaqat"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>       
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
