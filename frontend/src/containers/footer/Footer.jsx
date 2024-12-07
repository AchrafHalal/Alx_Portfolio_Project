import React from 'react'
import footerLogo from '../../assets/logo.png'
import './footer.css'

function Footer() {
  return (
    <div className='ashl__footer section__padding'>
        <div className="ashl__footer-links">
          <div className="ashl__footer-links_logo">
            <img src={footerLogo} alt="logo" />
            <p>All Rights Reserved</p>
          </div>
          <div className="ashl__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="ashl__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="ashl__footer-links_div">
            <h4>Get in touch</h4>
            <p>Marocco -casablanca</p>
            <p>0666-666666</p>
            <p>info@payme.net</p>
          </div>
        </div>
        <div className="ashl_footer-copyright">
          <p>© 2024 ASHL. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer