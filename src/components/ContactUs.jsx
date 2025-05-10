import React,{useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from "react-phone-input-2";
import {parsePhoneNumberFromString} from "libphonenumber-js";
import 'react-phone-input-2/lib/style.css';
import ContactSuccessToast from './ContactSuccessToast';
import ToastContext from '../context/ToastContext';
const ContactUs = () => {
  let [username,setUsername]=useState('');
  let [usernameError,setUserNameError]=useState('');
  let [emailAddress,setEmailAddress]=useState('');
  let [emailError,setEmailError]=useState('');
  let [queryArea,setQueryArea]=useState('');
  let [queryAreaError,setQueryAreaError]=useState('');
  let [phoneValue,setPhoneValue]=useState('');
  let [phoneValueError,setPhoneValueError]=useState('');
  let [boxChecked,setBoxChecked]=useState(false);
  let {triggerToast}=useContext(ToastContext);
    let usernamePattern=/^[A-Za-z\s']+$/;
  let emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let navigate=useNavigate();
  let handleSubmit=async (e)=>{
    e.preventDefault();
    let formIsValid=true;
    if(username===""){
      setUserNameError("Kindly fill in your name.");
      formIsValid=false;
    }
    if(username!==""&&usernamePattern.test(username)===false){
      setUserNameError("Kindly ensure the name you provide is valid.");
      formIsValid=false;
    }
    if(emailAddress===""){
      setEmailError("Kindly provide your email address.");
      formIsValid=false;
    
    }  
    if(emailAddress!==""&&emailPattern.test(emailAddress)===false){
      setEmailError("Kindly ensure the email address provided is valid.");
      formIsValid=false;
     }
    if(queryArea===""){
      setQueryAreaError("Kindly specify what you would like to know or if you have something you would like to discuss with us.");
      formIsValid=false;
    
    }else if(queryArea.length>250){
      setQueryAreaError("Kindly ensure your message is not more than 200 words.");
      formIsValid=false;
    
    }
    if(phoneValue===""){
      setPhoneValueError("Kindly provide your phone number for contacting.");
      formIsValid=false;
    }else{
          const phoneNumber=parsePhoneNumberFromString("+" + phoneValue);
          if(!phoneNumber||!phoneNumber.isValid()){
            setPhoneValueError("Invalid phone number, ensure its in the correct format.");
            formIsValid=false;
          }
         }
    if(formIsValid){
      const formData=new FormData();
      formData.append("username",username);
      formData.append("emailAddress",emailAddress);
      formData.append("phoneValue",phoneValue);
      formData.append("queryArea",queryArea);
      if(boxChecked===true)formData.append("notificationsApproved",boxChecked);
      let res=await fetch("http://localhost/restaurant_backend-app/contactinfo.php",{
        method:'POST',
        body:formData,
      });
      let data= await res.json();
      console.log(data);
      if(data==="Data saved successfully"){
       // alert(`Hi ${username}, your data has been successfully received and saved, we will contact you shortly.`);
       triggerToast(`Hi ${username} your data has been successfully received and saved, we will contact you shortly.`);
        setTimeout(()=>{
          alert("Redirecting you to the homepage in a bit.")
        },2000);
       setTimeout(()=>{
          setUsername("");
          setEmailAddress("");
          setPhoneValue("");
          setQueryArea("");
          if(boxChecked===true)setBoxChecked(false);
          navigate("/");
        },4000);
      } 
    }   
  }
  let handleNameChange=(e)=>{
    if(usernameError!=="")setUserNameError("");
    setUsername(e.target.value);
  }
  let handleEmailChange=(e)=>{
    if(emailError!=="")setEmailError("");
    setEmailAddress(e.target.value);
  }
  let handleQueryChange=(e)=>{
    if(queryAreaError!=="")setQueryAreaError("");
    setQueryArea(e.target.value);
  }
  return (
    <section className='d-flex flex-column justify-content-center align-items-center p-3 m-3  text-center' id="contactPageSection">
      <div className="d-flex flex-column p-3 m-3">
        <h2>Contact Us - Your Favourite Restaurant for Grilled Delights and Swahili Cuisine in Nairobi</h2>
        <p>We'd love to hear from you! Whether you have a question, want to make a reservation, or simply want to give us feedback, we're here to listen.</p>
      </div>
      <div className="d-flex flex-column p-3 m-3">
        <p>For immediate assistance call us at 0114483839</p>
        <p>You can also email us at edgarlorsch00@gmail.com</p>
      </div>

      <form  noValidate className='form d-flex flex-column justify-content-center align-items-center' onSubmit={handleSubmit} >
        <h4 className="text-center">Fill in the form below and we will get back to you in 24 hours</h4>
        <div className="mb-3 p-2">
        <label htmlFor="username" className="form-label">Enter Your Name:</label>
        <input type="text" name='username' className="form-control"  id='username'value={username} onChange={handleNameChange} />
        <p>{usernameError}</p>
        </div>
        <div className="mb-3 p-2">
        <label htmlFor="emailAddress" className="form-label">Enter Your Email Address:</label>
          <input type="email" name="emailAddress" id="emailAddress" className="form-control" value={emailAddress} onChange={handleEmailChange} />
          <p>{emailError}</p>
        </div>
        <div className="mb-3">
                      <label  htmlFor="userphone" className="form-label" >Enter Your Telephone Number Here:</label>
                       <PhoneInput className='form-control' name='userphone' id='userphone' autoComplete='tel' onlyCountries={['ke']} disableCountryGuess={true} value={phoneValue} onChange={(value)=>{setPhoneValue(value)
                        if(phoneValueError!=="")setPhoneValueError("");
                       }}/>
                      <p>{phoneValueError}</p>
                      </div>
        <div className="mb-3 p-2">
        <label htmlFor="queryArea" className="form-label">Enter Your Query or Feedback</label>
        <textarea name="queryArea" id="queryArea" className="form-control" value={queryArea} onChange={handleQueryChange}></textarea>
        <p>{queryAreaError}</p>
        </div>
        <div className="mb-3 p-2 d-flex flex-row">
        <input type="checkbox" name="emailAcceptance" id="emailAcceptance" className="form-check-input"  checked={boxChecked} onChange={()=>{
          if(boxChecked===true)setBoxChecked(false);
          if(boxChecked===false)setBoxChecked(true);
        }}/>
        <label htmlFor="emailAcceptance" className="form-check-label">Notify Me About New Events </label>
        </div>
        <button type="submit" className=" btn bg-dark text-white">Submit</button>
       </form>
      <div id="messageArea" className='p-3 m-3'></div>
      <ContactSuccessToast/>
     </section>
  )
}
export default ContactUs;
