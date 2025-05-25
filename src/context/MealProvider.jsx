import React,{useState} from 'react';
import PropTypes from "prop-types";
import MealContext from './MealContext';

const MealProvider = ({children}) => {
    let [userMeal,setUserMeal]=useState([]);
  return <MealContext.Provider value={{userMeal,setUserMeal}}>{children}</MealContext.Provider>
}

export default MealProvider;
MealProvider.propTypes={
    children:PropTypes.node.isRequired
}
