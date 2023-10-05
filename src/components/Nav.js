import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav">
        <ul className="nav__link-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Menu</Link></li>
            <li><Link to="/reservation">Reservations</Link></li>
            <li><Link to="/">Order Online</Link></li>
            <li><Link to="/">Login</Link></li>
        </ul>
    </nav>
  )
}
