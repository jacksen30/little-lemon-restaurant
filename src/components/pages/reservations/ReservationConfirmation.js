import React from 'react';
import { Link } from 'react-router-dom';

export default function ReservationConfirmation({formData, formSubmitted}) {
  return (
    <div className="flex reservation-confirmation-wrapper">
        <h1>Your Reservation<br />was Successful</h1>
        <div>
          <h2>Booking Details Below:</h2>
          <h3>Contact Details:</h3>
          <p>Name: {formData.guestName}</p>
          <p>Contact Number: {formData.contactNumber}</p>
          <p>Email: {formData.email}</p>
          <h3>Reservation:</h3>
          <p>Date: {formData.date}</p>
          <p>Time: {formData.time}</p>
          <p>Number of Guests: {formData.guestCount}</p>
          <p>Seating Area: {formData.seatingArea}</p>
          <p>Occasion: {formData.occasion}</p>

          <p className="comment">additionalComment: {formData.additionalComment}</p>
        </div>
        <div>
          <p>A Paragraph of text explaining what to do in theevent of wrong details entered or needing toupdate the booking details at a later date aswell as any other terms or conditions the customer should be aware of in relation to online table reservation.</p>
          <Link class="btn--primary btn-form" to="/">Return Home</Link>
        </div>
    </div>
  )
}
