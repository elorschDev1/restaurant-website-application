import React,{useState} from 'react';
import CartsFoodsContext from './CartsFoodsContext';
import PropTypes from 'prop-types';
const CartsFoodProvider = ({children}) => {
    let [cartFoods,setCartFoods]=useState([]);
    let [mealName,setMealName]=useState("");
    let [mealPrice,setMealPrice]=useState(0);
    let [mealQuantity,setMealQuantity]=useState(0);
    let [totalMealPrice,setTotalMealPrice]=useState(0);
  return <CartsFoodsContext.Provider value={{cartFoods,setCartFoods,mealName,setMealName,mealPrice,setMealPrice,mealQuantity,setMealQuantity,totalMealPrice,setTotalMealPrice}}>{children}</CartsFoodsContext.Provider>
}
export default CartsFoodProvider;
CartsFoodProvider.propTypes={
    children:PropTypes.node.isRequired
}
