import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { Link,Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <button 
                className="navbar-toggler"
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/*Collapsible Menu*/}
                <div className="collapse navbar-collapse" id='navbarNav'>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link to="/" className='nav-link'>Home</Link></li>
                        <li className="nav-item"><Link to="/about" className='nav-link'>About Us</Link></li>
                        <li className="nav-item"><Link to="/contact" className='nav-link'>Contact us</Link></li>
                        <li className="nav-item"><Link to="/location" className='nav-link'>Our Location</Link></li>
                        <li className="nav-item"><Link to="/gallery" className='nav-link'>View Our Gallery</Link></li>
                        <li className="nav-item"><Link to="/testimonials" className='nav-link'>Testimonials</Link></li>
                        <li className="nav-item"><Link to="/orderonline" className='nav-link'>Order Online</Link></li>
                        <li className="nav-item"><Link to="/reservations" className='nav-link'>Make Reservations</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet/>
      
    </div>
  )
}

export default App
