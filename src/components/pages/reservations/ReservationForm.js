import React from 'react';
import { useState } from 'react';

const ReservationForm = ({formData, availableBookingTimes, onFormDataChange, onFormSubmit, formSubmitted}) => {

  const [error, setError] = useState({});

  const handleChange = (event) => {
        const { name, value } = event.target;
        onFormDataChange(name, value);
    };

  // Map Field Names to Validation Functions
  // Each function takes a value and returns an error message if the value is invalid or an empty string if the value is valid.
  const fieldValidations = {
    guestName: value => value.trim() === '' ? '*Name is required' : '',
    guestCount: value => (value < 1 || value > 10) ? '*Must be between 1 and 10' : '',
    date: value => value === '' ? '*Date is required' : '',
    time: value => value === '' ? '*Time is required' : '',
    contactNumber: value => (value.length < 7 || value.length > 12) ? '*Valid Contact Number required' : '',
    email: value => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return !emailRegex.test(value) ? '*Valid email address required' : '';
    },
  };

  // Validate All Fields - For Form Submission - Also uses above fieldValidation functions
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    // Validate all fields
    Object.keys(fieldValidations).forEach((field) => {
      const value = formData[field];
      const validateFunc = fieldValidations[field];
      if (validateFunc) {
        const errorMessage = validateFunc(value);
        if (errorMessage) {
          newErrors[field] = errorMessage;
        }
      }
    });
    setError(newErrors);
    // If there are no errors, proceed with submission
    if (Object.keys(newErrors).length === 0) {
      onFormSubmit(event);
    }
  };

  // Validate Individual Fields - onBlur - Also uses above fieldValidation functions
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const validateFunc = fieldValidations[name];
    if (validateFunc) {
      const errorMessage = validateFunc(value);
      setError(prevErrors => ({
        ...prevErrors,
        [name]: errorMessage,
      }));
    }
  };


  // Map over availableBookingTimes to create an option element for each that
  // can be an option within the choose a time form field
  const resTimes = availableBookingTimes.map ((item) =>
  <option key={item} value={item}>{item}</option>
  );

  // Converts the Javascript Date String - to "YYYY-MM-DD" format
  // Referenced in min attribute on date picker to ensure only today and future dates can be picked
  const formatDateString = (date) => {
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return year + '-' + month + '-' + day;
  };

    return (
    <>
        <div className="flex reservation-form-wrapper">
          <h1>Online Table Reservation</h1>
          <form className="flex reservation-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" name="guestName" type="text" value={formData.guestName} onChange={handleChange} onBlur={handleBlur} />
            <div className="error-div"><p className="error-message name-input-error-text">{error.guestName}</p></div>

            <label htmlFor="date">Select A Date </label>
            <input id="date" name="date" type="date" min={formatDateString(new Date())} value={formData.date} onChange={handleChange} onBlur={handleBlur} />
            <div className="error-div"><p className="error-message date-input-error-text">{error.date}</p></div>

            <label htmlFor="time">Select A Time</label>
            <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                onBlur={handleBlur}
            >
                <option value="" disabled>Choose a time</option>
                {resTimes}
            </select>
            <div className="error-div"><p className="error-message time-input-error-text">{error.time}</p></div>


            <label htmlFor="guestCount">Number of Guests</label>
            <input id="guestCount" name="guestCount" type="number" value={formData.guestCount} onChange={handleChange} onBlur={handleBlur} />
            <div className="error-div"><p className="error-message guestount-input-error-text">{error.guestCount}</p></div>

            <label htmlFor="occassion">Choose Occasion</label>
            <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
            >
                <option value="None">None</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversay">Anniversary</option>
                <option value="Business">Business</option>
            </select>
            <div className="error-div"></div>

            <fieldset>
              <legend>Preferred Seating Area</legend>
              <label>
                <input
                  type="radio"
                  name="seatingArea"
                  value="Inside"
                  checked={formData.seatingArea === 'Inside'}
                  onChange={handleChange}
                />
                Inside
              </label>
              <label>
                <input
                  type="radio"
                  name="seatingArea"
                  value="Outside"
                  checked={formData.seatingArea === 'Outside'}
                  onChange={handleChange}
                />
                Outside
              </label>
            </fieldset>

            <label htmlFor="additionalComment">Additional Comment</label>
            <input id="additionalComment" name="additionalComment" type="text" value={formData.additionalComment} onChange={handleChange} />
            <div className="error-div"></div>

            <label htmlFor="contactNumber">Phone Number</label>
            <input id="contactNumber" name="contactNumber" type="number" value={formData.contactNumber} onChange={handleChange} onBlur={handleBlur} />
            <div className="error-div"><p className="error-message">{error.contactNumber}</p></div>

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} />
            <div className="error-div"><p className="error-message">{error.email}</p></div>
            <button class="btn--primary btn-form" type="submit">Book Table</button>
          </form>
        </div>

        {/* Below DIV  for testing purposes remove once finished */}
        {/* <div>
          <h2>Print State</h2>
          <h3>Testing controlled form components</h3>
          <p>Name: {formData.guestName}</p>
          <p>Date: {formData.date}</p>
          <p>Time: {formData.time}</p>
          <p>Number of Guests: {formData.guestCount}</p>
          <p>Occasion: {formData.occasion}</p>
          <p>Seating Area: {formData.seatingArea}</p>
          <p>Contact Number: {formData.contactNumber}</p>
          <p>Email: {formData.email}</p>
          <p>additionalComment: {formData.additionalComment}</p>
          <p>Has Form Been Submitted ?: {formSubmitted ? 'Yes' : 'No'}</p>
        </div> */}
    </>
  )
}

export default ReservationForm;
