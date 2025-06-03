import React from 'react'

const DeleteProductButton = () => {
  return (
    <>
     <button className="btn  bg-dark text-white rounded-4" onClick={()=>{
      console.log("delete button clicked")
     }}>Delete Item</button> 
    </>
  )
}

export default DeleteProductButton
