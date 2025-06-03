import React from 'react'

const OrderButton = () => {
  return (
    <>
     <button className="btn  bg-dark text-white rounded-4" onClick={(e)=>
      console.log(e.target.parentNode.previousSibling.innerText)
     }>Place Order</button> 
    </>
  )
}

export default OrderButton
