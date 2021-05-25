import React from 'react'

function Collection() {
    return (
        <div className="collection">
        <div className="collection__One">
          <div className="collection__One--text">
            <div className="collection__One--text--type">
              <h2>Winter Collection</h2>
              <p>Check out the latest winter collection</p>
            </div>
          </div>
          <div className="collection__One--link">
            <a
              href="/shop"
              className="collection__One--link--type"
            >
              <span>Winter Vibe</span>
            </a>
          </div>
        </div>
        <div className="collection__Two">
          <div className="collection__Two—-text">
            <div className="collection__Two—-text--type">
              <h2>Check the goods</h2>
              <p>Don't take our word for it, see for yourself</p>
            </div>
          </div>
          <div className="collection__Two—-link">
            <a className="collection__Two—-link--type" href="/shop">
              <span>Shop Now</span>
            </a>
          </div>
        </div>
      </div>
    )
}

export default Collection
