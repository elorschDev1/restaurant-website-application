import React from 'react'

const LocationPage = () => {
  return (
    <section  className='d-flex flex-column justify-content-center align-items-center p-3 m-3  text-center'  id="locationPageSection">
     <div className="d-flex flex-column p-3 m-3">
      <h2>Find Us With Ease!</h2>
      <p>Whether you're craving sizzling grills, juicy steaks, or rich Swahili cuisine, we're just a turn away. Visit us today and enjoy authentic Kenyan flavours in a cozy, family-friendly setting.</p>
     </div>
     <div className="d-flex flex-column p-3 m-3">
      <h4>Address:</h4>
      <p>Fedha Estate, Masai Court, First Building To Your Left, Masai Court Is To Your Right Just Before Dolphin Court Ahead of You</p>
      <p>Nairobi,Kenya</p>
      <p>Open Monday to Sunday | 9 AM - 11 PM</p>
     </div>
     <div className='d-flex flex-column w-100 p-3 m-3'>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12153.313632467009!2d36.88057216349641!3d-1.307271179502115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13fe7e50f479%3A0x55b1c24ba105241f!2sDOLPHIN%20COURT!5e1!3m2!1sen!2ske!4v1744568916152!5m2!1sen!2ske" width="600" height="450" style={{border:0}}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="EDU & CHRISTIES'S-Located in Masai Court, right before you get to Dolphin Court, Fedha Estate"></iframe>

     </div>
    </section>
  )
}

export default LocationPage
