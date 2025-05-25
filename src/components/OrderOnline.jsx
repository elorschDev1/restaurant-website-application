import React from 'react';
import { Link,Outlet } from 'react-router-dom';

const OrderOnline = () => {
  return (
    <section id="orderOnlineSection"  className='d-flex flex-column justify-content-center align-items-center p-3 m-3  text-center'>
     <div className="d-flex flex-column p-2 m-2">
      <h2 className="text-white">Craving something delicious? Order now and we'll handle the rest</h2>
     </div>
         <div>
              <Outlet/>
              </div>
    </section>
  )
}
export default OrderOnline
