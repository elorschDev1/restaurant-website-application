import React,{useState} from 'react';
import PhoneInput from "react-phone-input-2";
import {parsePhoneNumberFromString} from "libphonenumber-js";
import 'react-phone-input-2/lib/style.css';
const CheckOutForm = () => {
        let [username,setUsername]=useState('');
        let [usernameError,setUserNameError]=useState('');
        let [emailAddress,setEmailAddress]=useState('');
        let [emailError,setEmailError]=useState('');
        let [phoneValue,setPhoneValue]=useState("");
        let [phoneValueError,setPhoneValueError]=useState("");
        let [deliveryInstructions,setDeliveryInstructions]=useState("");
        let [deliveryAddress,setDeliveryAddress]=useState("Tumaini Estate");
        let [addressError,setAddressError]=useState("");
        let [paymentMethod,setPaymentMethod]=useState("Pay on delivery");
        let [paymentMethodError,setPaymentMethodError]=useState("");
        let [boxChecked,setBoxChecked]=useState(false);
        let usernamePattern=/^[A-Za-z\s']+$/;
        let emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handleSubmit=async (e)=>{
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
             if(deliveryAddress===""){
                setAddressError("Kindly select a location from the list:");
                formIsValid=false;
             }
             if(paymentMethod===""){
                setPaymentMethodError("Kindly select a payment method.");
                formIsValid=false;
             }
        if(formIsValid){
            console.log("form is valid.");
            const formData=new FormData();
            formData.append("name",username);
            formData.append("email",emailAddress);
            formData.append("deliveryAddress",deliveryAddress);
            formData.append("instructions",deliveryInstructions);
            formData.append("paymentMethod",paymentMethod);
            formData.append("saveInfo",boxChecked);
            let res=await fetch("http://localhost/restaurant_backend-app/onlineorders.php",{
                method:"POST",
                body:formData
            })
            let data=await res.json();
            console.log(data);
        }

    }
  return (
   <form noValidate onSubmit={handleSubmit}  className='form d-flex flex-column justify-content-center align-items-center'>
   <h3 className='text-center'>Place Your Order:</h3>
    <div className="mb-3 p-3">
         <label htmlFor="fullname" className="form-label">Full Name:</label>
           <input type="text" name="fullname" id="fullname" className="form-control"  value={username} onChange={(e)=>{
            setUsername(e.target.value);
            if(usernameError!=="")setUserNameError("");
          }} />
          <p>{usernameError}</p>
    </div>
    <div className="mb-3 p-3">
          <label htmlFor="userphone" className="form-label">Phone Number:</label>
          <PhoneInput  name='userphone' id="userphone" autoComplete="tel" country={'ke'} onlyCountries={['ke']} disableDropdown={true} className="form-control" value={phoneValue} onChange={(value)=>{
            setPhoneValue(value);
            if(phoneValueError!==""){
              setPhoneValueError("");
            }
          }} />
           <p>{phoneValueError}</p>
    </div>
    <div className="mb-3 p-3">
       <label htmlFor="useremail" className="form-label">Email Address:</label>
          <input type="email" className="form-control" id="useremail" name='useremail' value={emailAddress} onChange={(e)=>{
            setEmailAddress(e.target.value);
            if(emailError!=="")setEmailError("");
          }}/>
          <p>{emailError}</p>
    </div>
    <div className="mb-3 p-3">
        <label htmlFor="address" className="form-label">
            Delivery Address /Pickup Location:
            <select name="address" id="address" className="form-select" value={deliveryAddress} onChange={(e)=>{
                if(addressError!=="")setAddressError("");
                setDeliveryAddress(e.target.value);
            }}>
                <option value="Tumaini Estate">Tumaini Estate</option>
                <option value="Tel Aviv">Tel Aviv</option>
                <option value="Church Road">Church Road</option>
                <option value="Pipeline">Pipeline</option>
                <option value="Avenue Park">Avenue Park</option>
                <option value="Tassia">Tassia</option>
                <option value="Nyayo Estate">Nyayo Estate</option>
                <option value="Old Donholm">Old Donholm</option>
                <option value="New Donholm">New Donholm</option>
                <option value="Donholm Phase 5">Donholm Phase 5</option>
                <option value="Donholm Phase 8">Donholm Phase 8</option>
                <option value="Greenspan">Greenspan</option>
                <option value="Harambee Sacco">Harambee Sacco</option>
                <option value="Harambee Sacco B">Harambee Sacco B</option>
                <option value="Savannah Estate">Savannah Estate</option>
                <option value="Mara Savannah">Mara Savannah</option>
                <option value="Green Fields">Green Fields</option>
                <option value="Sunrise">Sunrise</option>
                <option value="Umoja 1">Umoja 1</option>
                <option value="Umoja 2">Umoja 2</option>
                <option value="Tena Estate">Tena Estate</option>
                <option value="Umoja Innercore">Umoja Innercore</option>
                <option value="Buruburu Phase 1">Buruburu Phase 1</option>
                <option value="Buruburu Phase 2">Buruburu Phase 2</option>
                <option value="Buruburu Phase 3">Buruburu Phase 3</option>
                <option value="Buruburu Phase 4">Buruburu Phase 4</option>
                <option value="Buruburu Phase 5">Buruburu Phase 5</option>
            </select>
        </label>
        <p>{addressError}</p>

    </div>
    <div className="mb-3 p-3">
        <label htmlFor="instructions" className="form-label">Any additional delivery instructions</label>
        <textarea name="instructions" id="instructions" className="form-control" value={deliveryInstructions} onChange={(e)=>{
            setDeliveryInstructions(e.target.value);
        }}></textarea>
    </div>
    <div className="mb-3 p-3">
        <label htmlFor="paymentmethod" className="form-label">Payment Method:
            <select name="paymentmethod" id="paymentmethod" className="form-select" value={paymentMethod} onChange={(e)=>{
                if(paymentMethodError!=="")setPaymentMethodError("");
                setPaymentMethod(e.target.value);
            }}>
                <option value="Pay on delivery">Pay on delivery</option>
                <option value="MPESA">MPESA</option>
                <option value="Credit Card">Credit Card</option>
            </select>
        </label>
        <p>{paymentMethodError}</p>
    </div>
    <div className="mb-3 p-3">
        <label htmlFor="savedetails" className="form-check-label">
            <input type="checkbox" name="savedetails" id="savedetails" className="form-check-input" checked={boxChecked} onChange={()=>{
                if(boxChecked===false)setBoxChecked(true);
                if(boxChecked===true)setBoxChecked(false);
            }} />Save my info for next time
        </label>
    </div>
    <div className="mb-3 p-3">
        <button className="btn bg-dark text-white" type='submit'>Submit</button>
    </div>
   </form>
  )
}
export default CheckOutForm
