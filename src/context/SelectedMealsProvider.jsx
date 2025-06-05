import React,{useState} from "react";
import SelectedMealsContext from "./SelectedMealsContext";
import PropTypes from "prop-types";
const SelectedMealsProvider=({children})=>{
    let [selectedMeals,setSelectedMeals]=useState(()=>{
        const savedMeals=localStorage.getItem("chosenMeals");
        return savedMeals?JSON.parse(savedMeals):[];
    });
    let [foodItemAdded,setFoodItemAdded]=useState(false);
    let [foodItems,setFoodItems]=useState([]);
    let [foodQuantity,setFoodQuantity]=useState(0);
    const addFoodItem=(foodItem)=>{
        setSelectedMeals(foods=>[...foods,foodItem]);
    }
   return  <SelectedMealsContext.Provider value={{selectedMeals,setSelectedMeals,foodItemAdded,setFoodItemAdded,addFoodItem,foodItems,setFoodItems,foodQuantity,setFoodQuantity}}>{children}</SelectedMealsContext.Provider>
}
export default SelectedMealsProvider;
SelectedMealsProvider.propTypes={
    children:PropTypes.node.isRequired
}