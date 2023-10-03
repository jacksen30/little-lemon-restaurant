import React from 'react'

export default function Footer() {
  return (
    <footer className="footer flex">
        <div className="container">
            <div className="footer-image footer-div-1">
                <img src="" alt="" />
            </div>
            <div className="footer-div-2">
                <ul className="footer__link-list">
                    <li>Other Pages</li>
                    <li><a href="http://example.com">Home</a></li>
                    <li><a href="http://example.com">About</a></li>
                    <li><a href="http://example.com">Menu</a></li>
                    <li><a href="http://example.com">Reservations</a></li>
                    <li><a href="http://example.com">Order Online</a></li>
                    <li><a href="http://example.com">Login</a></li>
                </ul>
            </div>
            <div className="footer-div-3">
                <ul className="footer__link-list">
                    <li>Contact</li>
                    <li>123 Seaseme Street</li>
                    <li>Perth W.A 6000</li>
                    <li>(08) 9922 1234</li>
                    <li>admin@littlelemon.com.au</li>
                </ul>
            </div>
            <div className="footer-div-4">
                <h4>Social Media Links</h4>
                <div className="socialMediaIconWrapper">
                    <p><span>1</span><span>2</span><span>3</span></p>

                </div>
            </div>
        </div>

    </footer>
  )
}
