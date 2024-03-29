import React from 'react'

function Categories() {
    return (
        <div className="categories">
        <div className="categories__box reveal">
          <a className="categories__box--img" href="">
            <img
              alt="earinginct"
              loading="lazy"
              src="https://cdn.shopify.com/s/files/1/0081/5654/5088/collections/earrings_1950x.jpg?v=1543981431"
            />
          </a>
          <div className="categories__box--text">
            <h3 className="reveal">Earings</h3>
          </div>
        </div>
        <div className="categories__box reveal">
          <a className="categories__box--img" href="">
            <img
              alt="neckct"
              loading="lazy"
              src="https://cdn.shopify.com/s/files/1/0081/5654/5088/collections/necklaces_1950x.jpg?v=1543981732"
            />
          </a>
          <div className="categories__box--text">
            <h3 className="reveal">Necklaces</h3>
          </div>
        </div>
        <div className="categories__box reveal">
          <a className="categories__box--img" href="">
            <img
              alt="ringinct"
              loading="lazy"
              src="https://cdn.shopify.com/s/files/1/0081/5654/5088/collections/rings_1950x.jpg?v=1543980851"
            />
          </a>
          <div className="categories__box--text">
            <h3 className="reveal">Rings</h3>
          </div>
        </div>
      </div>
    )
}

export default Categories
