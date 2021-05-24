import React, {useState } from 'react';
import {Link} from 'react-router-dom';
import logoG from '../../assets/logo/sc-effort.png';
import logoT from '../../assets/logo/effortless.png'



function Nav() {
   const [click, setClick] = useState(false);
   const [bg, setBg] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
   
   const changeBackground =() => {
    if(window.scrollY >= 80) {
        setBg(true)
    } else {
       setBg(false)
    }
  };

  window.addEventListener('scroll', changeBackground);

    return (
        <header className={bg ? 'header white' : 'header'}>
        <div className='header--container'>
          <div className='header--container__left'>            
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
          </div>
          <div className='header--container__logo'>  
           <Link to='/' className='header--logo' onClick={closeMobileMenu}>
             <img id='logo' src={bg ? logoG : logoT} alt="effortless-logo"/>
          </Link>
          </div>
          <div className={bg ? 'menu-bar':'menu-icon'} onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div className='header--container__right'>  
          <i className="fas fa-search"></i>
          <i className="fas fa-shopping-cart"></i>
          </div>
        </div>
        <ul className={click ? 'header--container__nav-menu active' : 'header--container__nav-menu'}>
            <li className='header--container__nav-item'>
              <Link to='/' 
              className='header--container__nav-item__nav-links' 
              onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='header--container__nav-item'>
              <Link
                to='/shop'
                className='header--container__nav-item__nav-links'
                onClick={closeMobileMenu}
              >
                Shop
              </Link>
            </li>
            <li className='header--container__nav-item'>
              <Link
                to='/news'
                className='header--container__nav-item__nav-links'
                onClick={closeMobileMenu}
              >
                News
              </Link>
            </li>

            <li className='header--container__nav-item'>
              <Link
                to='/contact'
                className='header--container__nav-item__nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </header>
    )
}

export default Nav
