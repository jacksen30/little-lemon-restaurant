import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer flex">
        <div className="container">
            <div className="footer-image footer-div-1">
                <img src="./images/footer-logo.png" alt="little lemon company logo" className="footer__logo" />
            </div>
            <div className="footer-div-2">
                <ul className="footer__link-list">
                    <li className="footer__list-title">Other Pages</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Menu</Link></li>
                    <li><Link to="/reservation">Reservations</Link></li>
                    <li><Link to="/">Order Online</Link></li>
                    <li><Link to="/">Login</Link></li>
                </ul>
            </div>
            <div className="footer-div-3">
                <ul className="footer__link-list">
                    <li className="footer__list-title">Contact</li>
                    <li>123 Seaseme Street</li>
                    <li>Perth W.A 6000</li>
                    <li>(08) 9922 1234</li>
                    <li>admin@littlelemon.com.au</li>
                </ul>
            </div>
            <div className="footer-div-4">
                <h4 className="footer__list-title">Social Media Links</h4>
                <div className="socialMediaIconWrapper">
                    <p><span>1</span><span>2</span><span>3</span></p>

                </div>
            </div>
        </div>

    </footer>
  )
}
