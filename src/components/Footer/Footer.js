import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/logo/sc-effort.png';

function Footer() {
    return (
    <footer className="footer">
        <div className="footer__myfooter">
          <div className="footer__myfooter--logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <h1 className="footer__myfooter--title">Get In Touch</h1>
          <div className="footer__myfooter--images">
            <a href="https://www.instagram.com/wolf_circus/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.pinterest.ca/wolfcircus/">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>

        <div className="footer__text">
          <div className="footer__text--left">
            <div id="thick">
              Richard Rovner
              <br />
              The Bees Knees Management
            </div>
            <div id="slim">
              460 King Street West
              <br />
              Toronto, Ontario M5V 1L7
            </div>
            <div id="slim">
              <a href="mailto:therosessom@gmail.com"> info@thebeesknees.com</a>
            </div>
          </div>
          <div className="footer__text--mid">
            <div id="thick">
              Marsha Vlasic
              <br />
              Artist Group International
            </div>
            <div id="slim">
              Booking Agent for
              <br />
              US / South America / Japan
            </div>
            <div id="slim">
              <a href="mailto:therosessom@gmail.com">
                marsha.vlasic@artistgrp.com
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          Copyright The Bees Knees © 2021 All Rights Reserved
        </div>
      </footer>
    )
}

export default Footer
