import React from 'react'

const ReservationForm = ({formData, onFormDataChange, onFormSubmit, formSubmitted}) => {
    const handleChange = (event) => {
        const { name, value } = event.target;
        onFormDataChange(name, value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(event);
    };

    return (
    <>
        <div className="flex reservation-form-wrapper">
          <h1>Online Table Reservation</h1>
          <form className="flex reservation-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name </label>
            <input id="name" name="guestName" type="text" value={formData.guestName} onChange={handleChange} />
            <p className="name-input-error-text error-text">{formData.guestName.length < 3 && "must include valid name"} </p>

            <label htmlFor="date">Select A Date </label>
            <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} />

            <label htmlFor="time">Select A Time</label>
            <input id="time" name="time" type="time" value={formData.time} onChange={handleChange} />

            <label htmlFor="guestCount">Number of Guests (Maximum 10)</label>
            <input id="guestCount" name="guestCount" type="number" min="1" max="10" value={formData.guestCount} onChange={handleChange} />

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

            <label htmlFor="contactNumber">Phone Number</label>
            <input id="contactNumber" name="contactNumber" type="number" value={formData.contactNumber} onChange={handleChange} />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />

            <button type="submit">Book Table</button>

          </form>
        </div>

        <div>
          <h2>Print State</h2>
          <h3>Testing controlled form components</h3>
          <p>Name: {formData.guestName}</p>
          <p>Date: {formData.date}</p>
          <p>Time: {formData.time}</p>
          <p>Number of Guests: {formData.guestCount}</p>
          <p>Seating Area: {formData.seatingArea}</p>
          <p>Contact Number: {formData.contactNumber}</p>
          <p>Email: {formData.email}</p>
          <p>Has Form Been Submitted ?: {formSubmitted ? 'Yes' : 'No'}</p>
        </div>
    </>
  )
}

export default ReservationForm;
