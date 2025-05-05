import React, { useReducer } from 'react';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import formReducer from '../reducers/formReducer';
const initialFormState={
  fullname:"",
  userphone:"",
  useremail:"",
  guestNumber:"",
  preferredDate:"",
  specialRequests:""
};
const ReservationsPage = () => {
  const [formState,dispatch]=useReducer(formReducer,initialFormState);
  let handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formState.fullname);
    console.log(formState.phonenumber);
    console.log(formState.preferredDate);
    console.log(formState.specialRequests);
  }
  let handleInputChange=(e)=>{
    dispatch({
      type:"HANDLE INPUT CHANGE",
      payload:e.target.value,
      field:e.target.name
    })
  }
  return (
    <section id="reservationPageSection"  className='d-flex flex-column justify-content-center align-items-center p-3 m-3  text-center' >
     <div className="d-flex flex-column p-3 m-2">
      <h2>Reserve Your Spot With Us</h2>
      <p>Whether you're planning a cozy dinner for two, a family gathering, or a celebration with friends, we're here to make it special. Use the form below to reserve a table and let us take care of the rest.</p>
      </div>
      <div className="d-flex flex-column p-3 m-2">
        <h3>How It Works</h3>
        <ul className="list-group">
          <li className="list-group-item list-group-item-warning">Choose your date, time, and number of guests.</li>
          <li className="list-group-item list-group-item-warning">Let us know if you have any special requests - we love going the extra mile.</li>
          <li className="list-group-item list-group-item-warning">We'll confirm your reservation via email or phone shortly after you submit the form.</li>
        </ul>

      </div>
      <form  className='form d-flex flex-column justify-content-center align-items-center' noValidate onSubmit={handleSubmit}>
        <h3 className='text-center'>Book a spot:</h3>
        <div className="mb-3 p-2">
          <label htmlFor="fullname" className="form-label">Full Name:</label>
          <input type="text" name="fullname" id="fullname" className="form-control" value={formState.fullname} onChange={handleInputChange} />
          <p></p>
        </div>
        <div className="mb-3 p-2">
          <label htmlFor="userphone" className="form-label">Phone Number:</label>
          <PhoneInput  name='userphone' id="userphone" autoComplete="tel" country={'ke'} onlyCountries={['ke']} disableDropdown={true} className="form-control" />
           <p></p>
        </div>
        <div className="mb-3 p-2">
          <label htmlFor="useremail" className="form-label">Email Address:</label>
          <input type="email" className="form-control" id="useremail" name='useremail'  value={formState.useremail} onChange={handleInputChange}/>
          <p></p>
        </div>
        <div className="mb-3 p-2">
          <label htmlFor="guestNumber" className="form-label">Expected Number of Guests</label>
          <input type="number" name='guestNumber' className="form-control" id="guestNumber"  max={10} min={2} value={formState.guestNumber} onChange={handleInputChange}/>
          <p></p>
        </div>
        <div className="mb-3 p-2">
          <label htmlFor="preferredDate" className="form-label">Preferred Date & Time:</label>
          <input type="date" name="preferredDate" id="preferredDate" className="form-control" value={formState.preferredDate} onChange={handleInputChange} />
          <p></p>
        </div>
        <div className="mb-3 p-2">
          <label htmlFor="specialRequests" className="form-label">Any Special Requests or Allergies You May Have:</label>
          <textarea name="specialRequests" id="specialRequest" className='form-control' value={formState.specialRequests} onChange={handleInputChange}></textarea>
        </div>
        <div className="mb-3 p-2">
        <button type="submit" className=" btn bg-dark text-white">Submit</button>
        </div>
      </form>
      <div className="d-flex flex-column p-3 m-2">
     <p>We can't wait to welcome you! Walk-ins are always welcome, but reservations help us serve you better.</p>
      </div>

    </section>
  )
}

export default ReservationsPage
