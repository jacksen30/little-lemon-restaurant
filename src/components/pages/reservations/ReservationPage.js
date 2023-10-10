import React from 'react';
import { useState } from 'react';
import BannerMinimal from '../../layout/BannerMinimal';
import ReservationForm from './ReservationForm';
import ReservationConfirmation from './ReservationConfirmation';

export default function ReservationPage() {

  const [formData, setFormData] = useState({
    guestName: '',
    date: '',
    time: '',
    guestCount: '',
    occasion: '',
    seatingArea: '',
    additionalComment: '',
    contactNumber: '',
    email: ''
});

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormDataChange = (name, value) => {
    setFormData(prev => ({...prev, [name]: value}));
};


  // Form submission handler
  const handleFormSubmit = (event) => {
    event.preventDefault(); /* uncomment when other issues fixed */
    // Handle form submission logic here
    console.log('Submitted name:', formData.guestName);
    setFormSubmitted(true);
  };

  // array of available reservation slots, pass as a prop to ReservationForm
  const availableBookingTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  return (
    <section className="flex reservation">
      <BannerMinimal />
      {!formSubmitted ?
        <ReservationForm
          formData={formData}
          availableBookingTimes={availableBookingTimes}
          onFormDataChange={handleFormDataChange}
          onFormSubmit={handleFormSubmit}
          formSubmitted={formSubmitted}
        />
      :
        <ReservationConfirmation
          formData={formData}
          formSubmitted={formSubmitted} />
      }
    </section>
  )
}
