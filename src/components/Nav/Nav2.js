import React, {useState } from 'react';
import {Link} from 'react-router-dom';
import logoG from '../../assets/logo/sc-effort.png';



function Nav() {
   const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

    return (
        <header className='header white'>
        <div className='header--container'>
          <div className='header--container__logo'>  
           <Link to='/' className='header--logo' onClick={closeMobileMenu}>
             <img id='logo' src={logoG} alt="effortless-logo"/>
          </Link>
          </div>
          <div className='menu-bar' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        <ul className={click ? 'header--container__nav-menu active' : 'header--container__nav-menu'}>
            <li className='header--container__nav-item black '>
              <Link to='/' 
              className='header--container__nav-item__nav-links' 
              onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='header--container__nav-item black '>
              <Link
                to='/shop'
                className='header--container__nav-item__nav-links'
                onClick={closeMobileMenu}
              >
                Shop
              </Link>
            </li>
            <li className='header--container__nav-item black '>
              <Link
                to='/news'
                className='header--container__nav-item__nav-links'
                onClick={closeMobileMenu}
              >
                News
              </Link>
            </li>

            <li className='header--container__nav-item black '>
              <Link
                to='/contact'
                className='header--container__nav-item__nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className='header--container__right'>  
          <i className="fas fa-search black" ></i>
          <i className="fas fa-shopping-cart black"></i>
          </div>
          </div>
        </header>
    )
}

export default Nav
