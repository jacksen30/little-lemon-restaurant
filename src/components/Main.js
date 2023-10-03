import React from 'react'

export default function Main() {
  return (
    <main>
      <section className="hero flex">
        <div className="container">
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p> 
            <button>Reserve A Table</button>
          </div>
          <div>
            <img src="./images/hero-image-resized.png" alt="a plate of colorful entrees" />
          </div>
        </div>
      </section>

      <section className="specials flex">
        <div className="container flex">
          <h3>Specials</h3>
          <button>Online Menu</button>
        </div>
        <div className="container flex">
          <div className="specials__card specials__card-1">
            <p>TEST TEXT</p>
          </div>
          <div className="specials__card specials__card-2">
            <p>TEST TEXT</p>
          </div>
          <div className="specials__card specials__card-3">
            <p>TEST TEXT</p>
          </div>
        </div>
      </section>
    </main>
  )
}
