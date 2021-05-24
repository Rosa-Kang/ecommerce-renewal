import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo/effortless.png';


function Nav() {
   const {click, setClick} = useState(false);

   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);
  
    return (
        <div className="header">
        <div className="header--container">
          <div className='header--container__left'>            
            <i class="fab fa-instagram"></i>
            <i class="fab fa-pinterest"></i>
          </div>
          <div className='header--container__logo'>  
           <Link to='/' className='header--logo' onClick={closeMobileMenu}>
             <img id='logo' src={logo} alt="effortless-logo"/>
          </Link>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div className='header--container__right'>  
          <i class="fas fa-search"></i>
          <i class="fas fa-shopping-cart"></i>
          </div>
        </div>
        <ul className={click ? 'header--container__nav-menu active' : 'header--container__nav-menu'}>
            <li className='header--container__nav-item'>
              <Link to='/' className='header--container__nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='header--container__nav-item'>
              <Link
                to='/services'
                className='header--container__nav-links'
                onClick={closeMobileMenu}
              >
                Shop
              </Link>
            </li>
            <li className='header--container__nav-item'>
              <Link
                to='/products'
                className='header--container__nav-links'
                onClick={closeMobileMenu}
              >
                News
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='header--container__nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
    )
}

export default Nav
