import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx';
import HomePage from './components/HomePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import ContactUs from './components/ContactUs.jsx';
import OrderOnline from './components/OrderOnline.jsx';
import GalleryPage from './components/GalleryPage.jsx';
import TestimonialsPage from './components/TestimonialsPage.jsx';
import ReservationsPage from './components/ReservationsPage.jsx';
import LocationPage from './components/LocationPage.jsx';
import Menu from './components/Menu.jsx';
import CheckOutForm from './components/CheckOutForm.jsx';
import Cart from './components/Cart.jsx';
import SearchBar from './components/SearchBar.jsx';
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/about",
        element:<AboutPage/>
      },
      {
        path:"/contact",
        element:<ContactUs/>
      },
      {
        path:"/location",
        element:<LocationPage/>
      },
      {
        path:"/gallery",
        element:<GalleryPage/>
      },
      {
        path:"/testimonials",
        element:<TestimonialsPage/>
      },
      {
        path:"/orderonline",
        element:<OrderOnline/>,
        children:[
          {
            path:"/orderonline/menu",
            element:<SearchBar/>
          },
          {
            path:"/orderonline/checkout",
            element:<CheckOutForm/>
          },
            {
            path:"/orderonline/cart",
            element:<Cart/>
          },


        ]
      },
      {
        path:"/reservations",
        element:<ReservationsPage/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
