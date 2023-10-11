import React from 'react';
import { Link } from 'react-router-dom';

export default function ReservationConfirmation({formData}) {

  // Function to convert a date from YYYY-MM-DD To DD-MM-YYYY
  const formatDateToDDMMYYYY = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="flex reservation-confirmation-wrapper">
        <h1>Your Reservation<br />was Successful</h1>
        <svg className="icon--confimation-tick" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
        <div>
          <h2>Booking Details Below:</h2>
          <h3>Contact Details:</h3>
          <p>Name: {formData.guestName}</p>
          <p>Contact Number: {formData.contactNumber}</p>
          <p>Email: {formData.email}</p>
          <h3>Reservation:</h3>
          <p>Date: {formatDateToDDMMYYYY(formData.date)}</p>
          <p>Time: {formData.time}</p>
          <p>Number of Guests: {formData.guestCount}</p>
          <p>Seating Area: {formData.seatingArea}</p>
          {formData.occasion && <p>Occasion: {formData.occasion}</p>}

          {formData.additionalComment && <p className="comment">Additional Info:<br /> {formData.additionalComment}</p>}
        </div>
        <div>
          <p className="ourContactDetails">If these details are incorrect, or if updates and cancellations to your reservation are required, please contact us directly at (08) 9999 0000 or via email at <a href="mailto:bookings@littlelemon.com">bookings@littlelemon.com</a></p>
          <Link class="btn--primary btn-form" to="/">Return Home</Link>
        </div>
    </div>
  )
}
