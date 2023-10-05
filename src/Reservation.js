import React from 'react';
import { useState } from 'react';

export default function Reservation() {

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [seatingArea, setSeatingArea] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');


  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Submitted name:', name);
  };

  return (
    <>
      <section className="flex reservation">
        <div className="flex reservation-form-wrapper">
          <h1>Online Table Reservation</h1>
          <form className="flex reservation-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name </label>
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="date">Select A Date </label>
            <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />

            <label htmlFor="time">Select A Time</label>
            <input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} />

            <label htmlFor="guestCount">Number of Guests (Maximum 10)</label>
            <input id="guestCount" type="number" min="1" max="10" value={guestCount} onChange={(e) => setGuestCount(e.target.value)} />

            <fieldset>
              <legend>Preferred Seating Area</legend>
              <label>
                <input
                  type="radio"
                  value="Inside"
                  checked={seatingArea === 'Inside'}
                  onChange={(e) => setSeatingArea(e.target.value)}
                />
                Inside
              </label>
              <label>
                <input
                  type="radio"
                  value="Outside"
                  checked={seatingArea === 'Outside'}
                  onChange={(e) => setSeatingArea(e.target.value)}
                />
                Outside
              </label>
            </fieldset>

            <label htmlFor="contactNumber">Phone Number</label>
            <input id="contactNumber" type="number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <button type="submit">Book Table</button>

          </form>
        </div>

        <div>
          <h2>Print State</h2>
          <h3>Testing controlled form components</h3>
          <p>Name: {name}</p>
          <p>Date: {date}</p>
          <p>Time: {time}</p>
          <p>Number of Guests: {guestCount}</p>
          <p>Seating Area: {seatingArea}</p>
          <p>Contact Number: {contactNumber}</p>
          <p>Email: {email}</p>
        </div>
      </section>
    </>
  )
}
