import React from 'react'
import Nav from './Nav';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <img className="header__logo" src="./images/Logo.svg" alt="company logo" />
        <Nav />
      </div>
    </header>
  )
}
