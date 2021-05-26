import React from 'react'

function Collection() {
    return (
        <div className="collection">
        <div className="collection__One reveal">
          <div className="collection__One--text">
            <div className="collection__One--text--type">
              <h2 className="reveal">Winter Collection</h2>
              <p className="reveal">Check out the latest winter collection</p>
            </div>
          </div>
          <div className="collection__One--link">
            <a
              href="/shop"
              className="collection__One--link--type"
            >
              <span className="reveal">Winter Vibe</span>
            </a>
          </div>
        </div>
        <div className="collection__Two reveal">
          <div className="collection__Two—-text">
            <div className="collection__Two—-text--type">
              <h2 className="reveal">Check the goods</h2>
              <p className="reveal">Don't take our word for it, see for yourself</p>
            </div>
          </div>
          <div className="collection__Two—-link">
            <a className="collection__Two—-link--type" href="/shop">
              <span className="reveal">Shop Now</span>
            </a>
          </div>
        </div>
      </div>
    )
}

export default Collection
