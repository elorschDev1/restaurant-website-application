import React,{useContext}from 'react';
import { useNavigate } from 'react-router-dom';
import CartsFoodsContext from '../context/CartsFoodsContext';
import PropTypes from 'prop-types';
const OrderButton = ({meal,price,quantity,totalprice}) => {
  let {cartFoods,setMealName,setMealPrice,setMealQuantity,setTotalMealPrice}=useContext(CartsFoodsContext);
  let navigate=useNavigate();
  return (
    <>
     <button className="btn  bg-dark text-white rounded-4" onClick={()=>{
    let orderedMeal=meal;
      let specificFoodInfo=cartFoods.filter((cartFood)=>cartFood.meal===orderedMeal);
      setMealName(meal);
      setMealPrice(price);
      setMealQuantity(quantity);
      setTotalMealPrice(totalprice);
      console.log(specificFoodInfo)
      setTimeout(()=>{
        navigate("/orderonline/checkout");
      },1000);
           }}>Place Order</button> 
    </>
  )
}
export default OrderButton
OrderButton.propTypes={
  meal:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
  quantity:PropTypes.number.isRequired,
  totalprice:PropTypes.number.isRequired
}