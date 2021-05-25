import React from 'react';
import footage from '../../assets/img/footage.jpg';

function ContactComp() {
    return (
        <div className="contact">
        <h3>Contact</h3>
        <img alt="footage" src={footage} />
        <h5> Get in touch</h5>
        <form className="contact__form">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
          <textarea
            className="contact__form--text"
            type="text"
            placeholder="Message"
            rows="10"
          />
          <p id="optional">Optional :</p>
          <div className="contact__form--checkbox">
            <label>
              <input type="checkbox" id="subscription" />
              Subscribe to the newsletter
            </label>
          </div>
          <fieldset className="contact__form--fieldset">
            <label>How did you hear about us:</label>
            <select>
              <option>-Pick an option-</option>
              <option>Facebook / Instagram</option>
              <option>Radio / Spotify Ad</option>
              <option>Magazine Ad</option>
              <option>From a friend</option>
            </select>
          </fieldset>
          <div className="contact__form--submit">
            <input id="btn" type="submit" value="send" />
          </div>
        </form>
      </div>
    )
}

export default ContactComp;
