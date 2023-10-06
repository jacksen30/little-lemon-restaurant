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
            <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
            >
                <option value="" disabled>Choose a time</option>
                <option value="11:00 AM" >Lunch - 11:00 AM</option>
                <option value="12:00 PM">Lunch - 11:30 AM</option>
                <option value="1:00 PM">Lunch - 12:00 PM</option>
                <option value="6:00 PM">Dinner - 12:30 PM</option>
                <option value="7:00 PM">Dinner - 1:00 PM</option>
                <option value="8:00 PM">Dinner - 1:00 PM</option>
            </select>


            <label htmlFor="guestCount">Number of Guests (Maximum 10)</label>
            <input id="guestCount" name="guestCount" type="number" min="1" max="10" value={formData.guestCount} onChange={handleChange} />

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

            <label htmlFor="contactNumber">Phone Number</label>
            <input id="contactNumber" name="contactNumber" type="number" value={formData.contactNumber} onChange={handleChange} />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />

            <button class="btn--primary btn-form" type="submit">Book Table</button>
          </form>
        </div>

        <div>
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
        </div>
    </>
  )
}

export default ReservationForm;
