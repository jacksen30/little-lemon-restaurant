import React from 'react'
import Nav from './Nav';

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src="./Logo.svg" alt="company logo" />
      <Nav />
    </header>
  )
}
