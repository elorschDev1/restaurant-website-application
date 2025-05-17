import React,{useState,useContext}  from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from "react-phone-input-2";
import {parsePhoneNumberFromString} from "libphonenumber-js";
import 'react-phone-input-2/lib/style.css';
import ContactSuccessToast from './ContactSuccessToast';
import ToastContext from '../context/ToastContext';
const ReservationsPage = () => {
  let [username,setUsername]=useState('');
  let [usernameError,setUserNameError]=useState('');
  let [emailAddress,setEmailAddress]=useState('');
  let [emailError,setEmailError]=useState('');
  let [phoneValue,setPhoneValue]=useState("");
  let [phoneValueError,setPhoneValueError]=useState("");
  let [expectedGuests,setExpectedGuests]=useState("");
  let [guestsError,setGuestsError]=useState("");
  let [preferredDate,setPreferredDate]=useState('');
  let [preferredDateError,setPreferredDateError]=useState('');
  let [preferredTime,setPreferredTime]=useState("");
  let [preferredTimeError,setPreferredTimeError]=useState("");
  let [seatingPreferrence,setSeatingPreferrence]=useState("Indoor");
  let [seatingPreferrenceError,setSeatingPreferrenceError]=useState("");
  let [occasion,setOccasion]=useState("Anniversary");
  let [occasionError,setOccasionError]=useState("");
  let [requests,setRequests]=useState("");
  let usernamePattern=/^[A-Za-z\s']+$/;
  let emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let currentDate=new Date();
  let reservationDate=new Date(preferredDate);
  let hourPortion="";
  let minutePortion="";
   let {triggerToast}=useContext(ToastContext);
   let navigate=useNavigate();
  let handleSubmit=async (e)=>{
    e.preventDefault();
    let formIsValid=true;
    if(username===""){
      setUserNameError("Kindly provide your name for easier contacting.");
      formIsValid=false;
    }
    if(username!==""&&usernamePattern.test(username)===false){
      setUserNameError("Kindly ensure the name you provide is valid.");
      formIsValid=false;
    }
    if(phoneValue===""){
      setPhoneValueError("Provide your phone number for contacting.");
      formIsValid=false;
    }else{
      const phoneNumber=parsePhoneNumberFromString("+" + phoneValue);
      if(!phoneNumber||!phoneNumber.isValid()){
        setPhoneValueError("Invalid phone number, ensure its in the correct format.");
        formIsValid=false;
      }
     }
     if(emailAddress===""){
      setEmailError("Kindly provide your email address here.");
      formIsValid=false;
     }
     if(emailAddress!==""&&emailPattern.test(emailAddress)===false){
      setEmailError("Kindly ensure the email address provided is valid.");
      formIsValid=false;
     }
     if(expectedGuests===""){
      setGuestsError("Kindly specify the number of guests we should expect.");
      formIsValid=false;
     }
     if(expectedGuests!==""&&expectedGuests<2){
      setGuestsError("The least number of people you can reserve a spot for is 2.");
      formIsValid=false;
     }
     if(expectedGuests!==""&&expectedGuests>16){
      setGuestsError("The maximum number of guests that can be reserved a spot for is 16.");
      formIsValid=false;
     }
     if(preferredDate===""){
      setPreferredDateError("Kindly pick a date for your reservation.");
      formIsValid=false;
     }
     if(preferredDate!==""){
      console.log(reservationDate.getDay());
      if(reservationDate.getDate()<currentDate.getDate()){
        setPreferredDateError("Kindly pick a relevant date for your reservation.");
        formIsValid=false;
      }
      if(reservationDate>currentDate)console.log("A future date");
      if(reservationDate>currentDate&&reservationDate.getDay()===0){
        setPreferredDateError("Kindly pick a different day, we are closed on Sundays.");
        formIsValid=false;
      }
      if(reservationDate.getTime()===currentDate.getTime())console.log("The dates are equal.");
      if(reservationDate.getDate()===currentDate.getDate()&&reservationDate.getDay()===0){
          setPreferredDateError("Kindly pick a different day, we are closed on Sundays.");
        formIsValid=false;
      }
     }
     if(preferredTime===""){
      setPreferredTimeError("Kindly pick a specific time for the reservation.");
      formIsValid=false;
     }  
     if(preferredTime!==""){
     hourPortion=Math.abs(preferredTime.slice(0,2));
     minutePortion=Math.abs(preferredTime.slice(3));
     }
    if(preferredTime!==""&&preferredTime.startsWith('00')|| preferredTime!==""&&preferredTime.startsWith('01')|| preferredTime!==""&&preferredTime.startsWith('02')|| preferredTime!==""&&preferredTime.startsWith('04')||preferredTime!==""&&preferredTime.startsWith('05')|| preferredTime!==""&&preferredTime.startsWith('06')||preferredTime!==""&&preferredTime.startsWith('07')){
    setPreferredTimeError("Kindly make your reservation as from 8 AM");
    formIsValid=false;
    }
    if(preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('21')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('22')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('23')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('24')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('25')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('26')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('27')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('28')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('29')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('30')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('31')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('32')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('33')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('34')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('35')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('36')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('37')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('38')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('39')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('40')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('41')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('42')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('43')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('44')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('45')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('46')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('47')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('48')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('49')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('50')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('51')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('52')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('53')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('54')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('55')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('56')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('57')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('58')||
    preferredTime!==""&&preferredTime.startsWith('21')&&preferredTime.endsWith('59')
    ){
      setPreferredTimeError("Sorry, we can't reserve a spot for you past 9.20pm");
      formIsValid=false;
    }
    if(preferredTime!==""&&preferredTime.startsWith('22')||preferredTime!==""&&preferredTime.startsWith('23')){
       setPreferredTimeError("Sorry, we can't reserve a spot for you past 9.20pm");
      formIsValid=false;
    }
      if(reservationDate.getDate()===currentDate.getDate()&&preferredTime!==""){
      if(hourPortion<currentDate.getHours()){
        setPreferredTimeError("Kindly ensure that you're not making a reservation for time that's already passed.");
        formIsValid=false;
      }
      if(hourPortion===currentDate.getHours()&&minutePortion<currentDate.getMinutes()){
      setPreferredTimeError("Kindly ensure that you're not making a reservation for time that's already passed.");
        formIsValid=false;
      }   
     }
     if(occasion===""){
      setOccasionError("Kindly pick an occasion for which you would like to make a reservation.");
      formIsValid=false;
     }
     if(seatingPreferrence===""){
      setSeatingPreferrenceError("Kindly pick an area you would prefer to sit at.");
      formIsValid=false;
     }
     if(formIsValid){
      let formData=new FormData();
      formData.append("username",username);
      formData.append("userphone",phoneValue);
      formData.append("useremail",emailAddress);
      formData.append("guestcount",expectedGuests);
      formData.append("date",preferredDate);
      formData.append("time",preferredTime);
      formData.append("area",seatingPreferrence);
      formData.append("occasion",occasion);
      formData.append("requests",requests);
      let response=await fetch("http://localhost/restaurant_backend-app/reservations.php",{
        method:"POST",
        body:formData
      })
      let data=await response.json();
      if(data==="Data saved successfully."){
          triggerToast(`Hi ${username} your reservation has been successfully received and saved, we will contact you shortly.`);
          alert("Redirecting you to the homepage in a bit.");
          setTimeout(()=>{
            navigate("/")
          },3500);
      }
     }
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
          <input type="text" name="fullname" id="fullname" className="form-control"  value={username} onChange={(e)=>{
            setUsername(e.target.value);
            if(usernameError!=="")setUserNameError("");
          }} />
          <p>{usernameError}</p>
        </div>
        <div className="mb-3 p-2">
          <label htmlFor="userphone" className="form-label">Phone Number:</label>
          <PhoneInput  name='userphone' id="userphone" autoComplete="tel" country={'ke'} onlyCountries={['ke']} disableDropdown={true} className="form-control" value={phoneValue} onChange={(value)=>{
            setPhoneValue(value);
            if(phoneValueError!==""){
              setPhoneValueError("");
            }
          }} />
           <p>{phoneValueError}</p>
        </div>
        <div className="mb-3 p-2">
          <label htmlFor="useremail" className="form-label">Email Address:</label>
          <input type="email" className="form-control" id="useremail" name='useremail' value={emailAddress} onChange={(e)=>{
            setEmailAddress(e.target.value);
            if(emailError!=="")setEmailError("");
          }}/>
          <p>{emailError}</p>
        </div>
        <div className="mb-3 p-2">
          <label htmlFor="guestNumber" className="form-label">Expected Number of Guests</label>
          <input type="number" name='guestNumber' className="form-control" id="guestNumber"  max={16} min={2} value={expectedGuests} onChange={(e)=>{
            setExpectedGuests(e.target.value);
            if(guestsError!=="")setGuestsError("");
          }}/>
          <p>{guestsError}</p>
        </div>
        <div className="mb-3 p-2">
          <label htmlFor="preferredDate" className="form-label">Preferred Date:</label>
          <input type="date" name="preferredDate" id="preferredDate" className="form-control" value={preferredDate} onChange={(e)=>{
            if(preferredDateError!=="")setPreferredDateError("");
            setPreferredDate(e.target.value);
          }}/>
          <p>{preferredDateError}</p>
        </div>
        <div className="mb-3 p-2">
          <label htmlFor="preferredTime" className="form-label">Choose Your Preferred Time:</label>
           <input type="time" name="preferredTime" id="preferredTime" className='form-control' min="08.00" max="20:00"  value={preferredTime} onChange={(e)=>{
            if(preferredTimeError!=="")setPreferredTimeError("");
            setPreferredTime(e.target.value);
           }}/>
           <p>{preferredTimeError}</p>
        </div>
        <div className="mb-3 p-2">
          <label htmlFor="seatingPreferrence" className="form-label">
            Choose Your Preferred Seating Area:
            <select name="seatingPreferrence" id="seatingPreferrence" className="form-select" value={seatingPreferrence} onChange={(e)=>{
            setSeatingPreferrence(e.target.value);
            if(seatingPreferrenceError!=="")setSeatingPreferrenceError("");
            }}>
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
              <option value="No Preferrence">No Preferrence</option>
            </select>
          </label>
          <p>{seatingPreferrenceError}</p>
        </div>
        <div className="mb-3 p-2">
          <label htmlFor="occasion" className="form-label">
            Specify An Occasion:
            <select name="occasion" id="occasion" className="form-select" value={occasion} onChange={(e)=>{
            setOccasion(e.target.value);
            if(occasionError!=="")setOccasionError("");
            }}>
            <option value="Anniversary">Anniversary</option>
            <option value="Birthday">Birthday</option>
            <option value="Business">Business</option>
            <option value="Date">Date</option>
            <option value="Other">Other</option>
            </select>
          </label>
          <p>{occasionError}</p>
        </div>
        <div className="mb-3 p-2">
          <label htmlFor="specialRequests" className="form-label">Any Special Requests or Allergies You May Have:</label>
          <textarea name="specialRequests" id="specialRequest" className='form-control' value={requests} onChange={(e)=>{
            setRequests(e.target.value);
          }}></textarea>
        </div>
        <div className="mb-3 p-2">
        <button type="submit" className=" btn bg-dark text-white">Submit</button>
        </div>
      </form>
      <div className="d-flex flex-column p-3 m-2">
     <p>We can't wait to welcome you! Walk-ins are always welcome, but reservations help us serve you better.</p>
      </div>
       <ContactSuccessToast/>
    </section>
  )
}
export default ReservationsPage
