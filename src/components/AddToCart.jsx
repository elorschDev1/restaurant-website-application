import React,{useContext,useEffect} from 'react';
import SelectedMealsContext from '../context/SelectedMealsContext';
const AddToCart = () => {
  let {selectedMeals,addFoodItem}=useContext(SelectedMealsContext);
  useEffect(() => {
    localStorage.setItem("chosenMeals",JSON.stringify(selectedMeals))
  }, [selectedMeals]);
  return (
    <>
      <button className="addFood btn bg-dark text-white rounded-4" onClick={(e)=>{
        let newMeal={
          meal:e.target.parentNode.className,
          price:Math.abs(e.target.parentNode.id)          
        }
      addFoodItem(newMeal);
     }}>Add To Cart</button>
    </>
  )
}
export default AddToCart
