import React, { useContext,useEffect } from 'react';
import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material';
import SelectedMealsContext from '../context/SelectedMealsContext';
import CartsFoodsContext from '../context/CartsFoodsContext';
import OrderButton from './OrderButton';
import DeleteProductButton from './DeleteProductButton';
const Cart = () => {
  let {selectedMeals}=useContext(SelectedMealsContext);
  let {setCartFoods}=useContext(CartsFoodsContext);
 const mealMap={};//The essence of declaring this object is to store each meal as a key
  selectedMeals.forEach(({meal,price})=>{
    if(mealMap[meal]){
      mealMap[meal].quantity+=1;
      mealMap[meal].totalPrice+=price;
    }else{
      mealMap[meal]={
        price,
        quantity:1,
        totalPrice:price
      }
    }
  })
  const uniqueMeals=Object.entries(mealMap).map(([mealName,data])=>({
    meal:mealName,
    price:data.price,
    quantity:data.quantity,
    totalPrice:data.totalPrice
  }))
  useEffect(()=>{
    setCartFoods(uniqueMeals);
  },[])
  return (
    <div>
        <TableContainer component={Paper}>
            <Table aria-label='simple-table'>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <strong>Name:</strong>
                        </TableCell>
                          <TableCell>
                            <strong>Price:</strong>
                        </TableCell>
                          <TableCell>
                            <strong>Quantity:</strong>
                        </TableCell>
                           <TableCell>
                            <strong>Total:</strong>
                        </TableCell>

                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {uniqueMeals.map((uniqueMeal,index)=>(
                    <TableRow key={index}>
                      <TableCell>{uniqueMeal.meal}</TableCell>
                      <TableCell>{uniqueMeal.price}</TableCell>
                      <TableCell>{uniqueMeal.quantity}</TableCell>
                      <TableCell>{uniqueMeal.totalPrice}</TableCell>
                      <TableCell><OrderButton meal={uniqueMeal.meal} price={uniqueMeal.price} quantity={uniqueMeal.quantity} totalprice={uniqueMeal.totalPrice}/></TableCell>
                      <TableCell><DeleteProductButton meal={uniqueMeal.meal} price={uniqueMeal.price} quantity={uniqueMeal.quantity} totalprice={uniqueMeal.totalPrice}/></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
             </Table>
          </TableContainer>     
    </div>
  )
}
export default Cart
