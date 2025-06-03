import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import ToastProvider from './context/ToastProvider';
import MealProvider from './context/MealProvider';
import SelectedMealsProvider from './context/SelectedMealsProvider';

const App = () => {
  return (
    <ToastProvider>
        <MealProvider>
            <SelectedMealsProvider>
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
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
                        <li className="nav-item"><Link to="/" className='nav-link text-white'>Home</Link></li>
                        <li className="nav-item"><Link to="/about" className='nav-link text-white'>About Us</Link></li>
                        <li className="nav-item"><Link to="/contact" className='nav-link text-white'>Contact us</Link></li>
                        <li className="nav-item"><Link to="/location" className='nav-link text-white'>Our Location</Link></li>
                        <li className="nav-item"><Link to="/gallery" className='nav-link text-white'>View Our Gallery</Link></li>
                        <li className="nav-item"><Link to="/testimonials" className='nav-link text-white'>Testimonials</Link></li>
                        <li className="nav-item dropdown"><Link to="/orderonline" className='nav-link text-white dropdown-toggle'id="navbarDropdown" data-bs-toggle="dropdown" role='button' aria-expanded="false">Order Online</Link>
                          <ul className="dropdown-menu bg-dark" aria-labelledby='navbarDropdown'>
                            <li className="nav-item"><Link to="/orderonline/menu" className='nav-link text-white dropdown-item'>Menu</Link></li>
                             <li className="nav-item"><Link to="/orderonline/checkout" className='nav-link text-white  dropdown-item'>Checkout</Link></li>
                              <li className="nav-item"><Link to="/orderonline/cart" className='nav-link text-white dropdown-item'>Cart</Link></li>
                         </ul> 
                        </li>
                       
                         <li className="nav-item"><Link to="/reservations" className='nav-link text-white'>Make Reservations</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet/>
      
    </div>
    </SelectedMealsProvider>
    </MealProvider>
    </ToastProvider>
  )
}

export default App
