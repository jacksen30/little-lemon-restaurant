import React from 'react';
import { useState } from 'react';
import BannerMinimal from './BannerMinimal';
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

  return (
    <section className="flex reservation">
      <BannerMinimal />
      {!formSubmitted ?
        <ReservationForm
          formData={formData}
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
