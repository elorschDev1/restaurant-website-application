import React,{useState,useContext,useEffect} from 'react';
import ContactSuccessToast from './ContactSuccessToast';
import ToastContext from '../context/ToastContext';
const TestimonialsPage = () => {
    let [username,setUsername]=useState('');
    let [usernameError,setUserNameError]=useState('');
    let [emailAddress,setEmailAddress]=useState('');
    let [emailError,setEmailError]=useState('');
    let [testimonial,setTestimonial]=useState('');
    let [testimonialError,setTestimonialError]=useState('');
    let [rating,setRating]=useState("Good");
    let [ratingError,setRatingError]=useState("");
    let [boxchecked,setChecked]=useState(false);
    let [reviews,setReviews]=useState([]);
    let usernamePattern=/^[A-Za-z\s']+$/;
   let emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   let {triggerToast}=useContext(ToastContext);
   
    useEffect(()=>{
      let fetchTestimonials=async()=>{
        let res=await fetch("http://localhost/restaurant_backend-app/gettestimonials.php");
        let data=await res.json();
        setReviews([...data]);
      }
      fetchTestimonials(); 
    },[])



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
     
    if(emailAddress===""){
      setEmailError("Kindly provide your email address.");
      formIsValid=false; 
    }  
    if(emailAddress!==""&&emailPattern.test(emailAddress)===false){
      setEmailError("Kindly ensure the email address provided is valid.");
      formIsValid=false;
     }
     if(testimonial===""){
      setTestimonialError("Kindly add a review that we can use to evaluate our performance.");
      formIsValid=false;
     }
     else if(testimonial.length>250){
      setTestimonialError("Kindly ensure your feedback is not more than 200 words");
      formIsValid=false;
     }
     if(formIsValid){
      let formData=new FormData();
      formData.append("name",username);
      formData.append("email",emailAddress);
      formData.append("rating",rating);
      formData.append("review",testimonial);
      formData.append("consent",boxchecked);
      let response=await fetch("http://localhost/restaurant_backend-app/testimonials.php",{
        method:"POST",
        body:formData,
      })
      let data=await response.json();
     if(data==="Success."){
      triggerToast(`Hello there ${username}, we have successfully saved your feedback, thanks for your willingness to share.`);
     }
     }
     

    
  }
  
  return (
   <section id="testimonialPageSection">
    <div className="d-flex flex-column p-3 m-3">
      <h2>What Our Guests Say</h2>
      <p>At Edu & Christie's, every dish we serve and every moment you spend with us matters. Here's what our valued guests have to say about their experience.</p>
    </div>
    <div className="d-flex flex-column p-3 m-3 justify-content-center align-items-center" id="testimonialArea">
       {reviews.map((review,index)=>(
        <div key={index} className='p-3 m-3 bg-dark'>
          <i className='bi bi-person-circle'></i>
          <p>Name: {review.name}</p>
          <p>Rating:{review.rating}</p>
          <p>Review:{review.review}</p>

        </div>
       ))}

    </div>
    <div className="d-flex flex-column justify-content-center align-items-center p-2 m-2">
      <h4>Add A Review of Your Own:</h4>
      <form    noValidate onSubmit={handleSubmit}>
        <div className="mb-3 p-2">
           <label htmlFor="username" className="form-label">Name:</label>
        <input type="text" className="form-control" id="username" value={username} onChange={(e)=>{
          setUsername(e.target.value);
          if(usernameError!=="")setUserNameError("");
        }}
         />
        <p>{usernameError}</p>
        </div>
       <div className="mb-3 p-2">
         <label htmlFor="useremail" className="form-label">Email:</label>
        <input type="email" name="useremail" id="useremail" className="form-control" value={emailAddress}  onChange={(e)=>{
          setEmailAddress(e.target.value);
          if(emailError!=="")setEmailError("");
        }}/>
        <p>{emailError}</p>
       </div>
       <div className="mb-3 p-2">
         <label htmlFor="rating" className="form-label">How Would You Rate Us:
          <select name="rating" id="rating" className="form-select" value={rating} onChange={(e)=>{
            setRating(e.target.value);
            if(ratingError!=="")setRatingError("");
          }}>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Excellent">Excellent</option>
          </select>
        </label>
        <p>{ratingError}</p>
       </div>
       <div className="mb-3 p-2">
        <label htmlFor="testimonial" className="form-label">Add A Review or Feedback:</label>
        <textarea name="testimonial" id="testimonial" className="form-control" value={testimonial} onChange={(e)=>{
          if(testimonialError!=="")setTestimonialError("");
          setTestimonial(e.target.value);
        }}></textarea>
        <p>{testimonialError}</p>
       </div>
        <div className="mb-3 p-2">
            <label htmlFor="consent" className="form-label">
          <input type="checkbox" className="form-check-input" checked={boxchecked} onChange={()=>{
            if(boxchecked===true)setChecked(false);
            if(boxchecked===false)setChecked(true);
          }} />I agree to have my testimonial displayed on your site
        </label>
        </div>
      
        <button type="submit"  className=" btn bg-dark text-white">Submit</button>

      </form>
       <div id="messageArea" className='p-3 m-3'>
        <ContactSuccessToast/>
      </div>
      
    </div>
   </section>
  )
}

export default TestimonialsPage
