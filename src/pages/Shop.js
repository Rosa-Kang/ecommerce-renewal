import React from 'react';
import Header from '../components/Nav/Nav2';
import Footer from '../components/Footer/Footer';
import Earings from '../components/Parents/Earings';
import Necklaces from '../components/Parents/Necklaces';
import Rings from '../components/Parents/Rings';

function Shop() {
    return (
        <div className="shop">
        <Header />
        <div id="earing" className="shop__box">
          <div className="shop__box--text">
            <h4>Earings</h4>
            <h5 id="view">View Collection</h5>
          </div>
          <a className="shop__box--img" href="/shop">
            <img
              alt="earing"
              src="https://cdn.shopify.com/s/files/1/0081/5654/5088/collections/earrings_1950x.jpg?v=1543981431"
            />
          </a>
        </div>
        <Earings />
        <div className="shop__box">
          <div className="shop__box--text">
            <h4>Necklaces</h4>
            <h5 id="view">View Collection</h5>
          </div>
          <a className="shop__box--img" href="/shop">
            <img
              alt="second"
              src="https://cdn.shopify.com/s/files/1/0081/5654/5088/collections/necklaces_1950x.jpg?v=1543981732"
            />
          </a>
        </div>
        <Necklaces />
        <div className="shop__box">
          <div className="shop__box--text">
            <h4>Rings</h4>
            <h5 id="view">View Collection</h5>
          </div>
          <a className="shop__box--img" href="/shop">
            <img
              alt="rings"
              src="https://cdn.shopify.com/s/files/1/0081/5654/5088/collections/rings_1950x.jpg?v=1543980851"
            />
          </a>
        </div>
        <Rings />
        <Footer />
      </div>
    )
}

export default Shop
