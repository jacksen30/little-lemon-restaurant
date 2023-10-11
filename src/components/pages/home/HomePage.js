import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main>
      <section className="hero flex">
        <div className="container">
          <div className="hero__text-wrapper">
            <h1 className="hero__title">Little Lemon</h1>
            <h2 className="hero__sub-title">Chicago</h2>
            <p className="hero__body-text">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link className="btn--primary hero__btn" to="/reservation">Reserve A Table</Link>
            {/* <button className="btn--primary hero__btn"><Link to="/reservation">Reserve A Table</Link></button> */}
          </div>
          <div className="hero-img-wrapper">
            <img className="hero-img--desktop" src="./images/hero-image-resized.png" alt="a plate of colorful entrees" />
            <img className="hero-img--mobile" src="./images/hero-image-mobile-cropped.png" alt="a plate of colorful entrees" />
          </div>
        </div>
      </section>

      <section className="specials flex">
        <div className="container flex">
          <h3 className="specials__title">Specials</h3>
          <Link className="btn--primary" to="/"> Online Menu</Link>
        </div>
        <div className="container flex specials__3-card-wrapper">
          <div className="specials__card specials__card-1">
            <img className="specials__card__img" src="./images/greek-salad-resized.png" alt="Greek Salad"></img>
            <div className="specials__card__text-wrapper">
              <div className="specials__card__title-wrapper">
                <h3 className="specials__card__title">Greek Salad</h3>
                <p className="specials__card__title-price">$12.99</p>
              </div>
              <p className="specials__card__body-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <p className="specials__card__delivery-text">Order a delivery<img src="./images/delivery-icon.png" alt="delivery bike" /></p>
            </div>
          </div>

          <div className="specials__card specials__card-2">
          <img className="specials__card__img" src="./images/bruchetta-resized.png" alt="Bruchetta"></img>
            <div className="specials__card__text-wrapper">
              <div className="specials__card__title-wrapper">
                <h3 className="specials__card__title">Bruchetta</h3>
                <p className="specials__card__title-price">$5.99</p>
              </div>
              <p className="specials__card__body-text">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
              <p className="specials__card__delivery-text">Order a delivery<img src="./images/delivery-icon.png" alt="delivery bike" /></p>
            </div>
          </div>

          <div className="specials__card specials__card-3">
          <img className="specials__card__img" src="./images/lemon dessert.jpg" alt="Lemon Dessert"></img>
            <div className="specials__card__text-wrapper">
              <div className="specials__card__title-wrapper">
                <h3 className="specials__card__title">Lemon Dessert</h3>
                <p className="specials__card__title-price">$5.00</p>
              </div>
              <p className="specials__card__body-text">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
              <p className="specials__card__delivery-text">Order a delivery<img src="./images/delivery-icon.png" alt="delivery bike" /></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
