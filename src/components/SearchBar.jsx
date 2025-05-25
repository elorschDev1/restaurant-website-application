import React,{useState,useEffect} from 'react';
import SwahiliDelights from './SwahiliDelights';
import FastFoods from './FastFoods';
import GrillsSteaks from './GrillsSteaks';
import DrinksBeverages from './DrinksBeverages';
import { Card,Row ,Col} from 'react-bootstrap';
import AddToCart from './AddToCart';
const SearchBar = () => {
    let [searchedMeal,setSearchedMeal]=useState("");
   let [userMeals,setUserMeals]=useState([]);
   let [buttonClicked,setButtonClicked]=useState(false);
   let [selectedCategory,setSelectedCategory]=useState("");
   let [retrievedCategories,setRetrievedCategories]=useState([]);
   let [selectedPrice,setSelectedPrice]=useState("");
   let [retrievedPrices,setRetrievedPrices]=useState([]);
     let lowerPriceLimit=Math.abs(selectedPrice.slice(0,3));
    let upperPriceLimit=Math.abs(selectedPrice.slice(4));
     let priceSearch=async ()=>{
        let formData=new FormData();
        formData.append("lowerPriceLimit",lowerPriceLimit);
        formData.append("upperPriceLimit",upperPriceLimit);
        let res= await fetch("http://localhost/restaurant_backend-app/prices.php",{
            method:"POST",
            body:formData
        })
        let data=await res.json();
        console.log(data);
        setRetrievedPrices([...data]);
    }
    let categorySearch=async()=>{
        if(selectedCategory!==""&&selectedPrice===""&&buttonClicked===false&&searchedMeal===""){
            let formData=new FormData();
            formData.append("selectedCategory",selectedCategory);
             let res=await fetch("http://localhost/restaurant_backend-app/mealsearch.php",{
            method:"POST", 
            body:JSON.stringify(selectedCategory)
        })
        let data=await res.json();
        console.log(data);
        setRetrievedCategories([...data]);

        }
    }
      let handlePriceChange=(e)=>{
    setSelectedPrice(e.target.value);
   }
     let handleCategoryChange=(e)=>{
    setSelectedCategory(e.target.value);
   }
    let handleClick=async ()=>{
        if(searchedMeal!==""){
        let formData=new FormData();
        formData.append("searchedMeal",searchedMeal);
        let res=await fetch("http://localhost/restaurant_backend-app/mealsearch.php",{
            method:"POST", 
            body:JSON.stringify(searchedMeal)
        })
        let data=await res.json();
        setUserMeals(data);
        console.log(data);
        }   
        setButtonClicked(true); 
    }
    useEffect(()=>{
        priceSearch()
    },[selectedPrice]);
    useEffect(()=>{
        categorySearch()
    },[selectedCategory])
   if(buttonClicked===true&&searchedMeal!==""&&userMeals.length>0){
     return (
    <>
    <div className='d-flex flex-row p-3 m-3'>
        <input type="search" name="searchfood" id="searchfood" placeholder='Search for a specific food' className='p-2 m-2 w-50 form-control' value={searchedMeal} onChange={(e)=>setSearchedMeal(e.target.value)}/>
        <button type="button" className="btn bg-dark text-white rounded-4" onClick={handleClick}>Search</button>   
    </div>
    <div className="d-flex flex-row p-3 m-3">
        <div className="row">
            <div className="col">
                <label htmlFor="prices" className="form-label">
                      Fiter By Price:
                    <select name="prices" id="prices" className="form-select" value={selectedPrice} onChange={handlePriceChange}>
                        <option value="100-200">Ksh 100-Ksh 200</option>
                        <option value="201-300">Ksh 201-Ksh 300</option>
                        <option value="301-400">Ksh 301-Ksh 400</option>
                        <option value="401-500">Ksh 401-500</option>
                        <option value="501+">Above Ksh 500+</option>
                    </select>
                  
                </label>
            </div>
            <div className="col">
                <label htmlFor="categories" className="form-label">
                      Filter By Category:
                    <select name="categories" id="categories" className="form-select" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="Swahili Delights">Swahili Delights</option>
                        <option value="Grills and Steaks">Grills and Steaks</option>
                        <option value="Fast Foods">Fast Foods</option>
                        <option value="Drinks and Beverages">Drinks and Beverages</option>
                    </select>
                  
                </label>

            </div>
        </div>
    </div>
    <div className='p-3 m-3 text-white '>
        {userMeals.map((userMeal,index)=>(
            <div key={index}>
                <Row className='p-3 m-4'>
                    <Col className="d-flex certainCol">
                       <Card className="w-100 card-hover">
                    <Card.Img src={userMeal.image} variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>{userMeal.meal}</Card.Title>
                      <Card.Text>{userMeal.description}</Card.Text>
                      <Card.Text className='price'>Ksh.{userMeal.price}</Card.Text>
                   <AddToCart/> 
                    </Card.Body>
                  </Card>     
                    </Col>
                </Row>
        
            </div>
        ))}
    
    </div>
    </>
  )

   }
   if(buttonClicked===true&&searchedMeal!==""&&userMeals.length===0){
    return(
        <>
          <div className='d-flex flex-row p-3 m-3'>
        <input type="search" name="searchfood" id="searchfood" placeholder='Search for a specific food' className='p-2 m-2 w-50 form-control' value={searchedMeal} onChange={(e)=>setSearchedMeal(e.target.value)}/>
        <button type="button" className="btn bg-dark text-white rounded-4" onClick={handleClick}>Search</button>   
    </div>
    <div className="d-flex flex-row p-3 m-3">
        <div className="row">
            <div className="col">
                <label htmlFor="prices" className="form-label">
                      Fiter By Price:
                    <select name="prices" id="prices" className="form-select" value={selectedPrice} onChange={handlePriceChange}>
                        <option value="100-200">Ksh 100-Ksh 200</option>
                        <option value="201-300">Ksh 201-Ksh 300</option>
                        <option value="301-400">Ksh 301-Ksh 400</option>
                        <option value="401-500">Ksh 401-500</option>
                        <option value="501+">Above Ksh 500+</option>
                    </select>
                  
                </label>
            </div>
            <div className="col">
                <label htmlFor="categories" className="form-label">
                      Filter By Category:
                    <select name="categories" id="categories" className="form-select" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="Swahili Delights">Swahili Delights</option>
                        <option value="Grills and Steaks">Grills and Steaks</option>
                        <option value="Fast Foods">Fast Foods</option>
                        <option value="Drinks and Beverages">Drinks and Beverages</option>
                    </select>
                  
                </label>

            </div>
        </div>
    </div>
    <div className="bg-dark text-white text-center p-2 m-2">
        <p>Sorry, this meal is currently unavailable</p>
    </div>
        </>

    )
   }
   if(selectedPrice!==""&&searchedMeal===""&&buttonClicked===false&&selectedCategory===""){
    return(
        <>
            <div className='d-flex flex-row p-3 m-3'>
        <input type="search" name="searchfood" id="searchfood" placeholder='Search for a specific food' className='p-2 m-2 w-50 form-control' value={searchedMeal} onChange={(e)=>setSearchedMeal(e.target.value)}/>
        <button type="button" className="btn bg-dark text-white rounded-4" onClick={handleClick}>Search</button>   
    </div>
    <div className="d-flex flex-row p-3 m-3">
        <div className="row">
            <div className="col">
                <label htmlFor="prices" className="form-label">
                      Fiter By Price:
                    <select name="prices" id="prices" className="form-select" value={selectedPrice} onChange={handlePriceChange}>
                        <option value="100-200">Ksh 100-Ksh 200</option>
                        <option value="201-300">Ksh 201-Ksh 300</option>
                        <option value="301-400">Ksh 301-Ksh 400</option>
                        <option value="401-500">Ksh 401-500</option>
                        <option value="501-10000">Above Ksh 500+</option>
                    </select>
                  
                </label>
            </div>
            <div className="col">
                <label htmlFor="categories" className="form-label">
                      Filter By Category:
                    <select name="categories" id="categories" className="form-select" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="Swahili Delights">Swahili Delights</option>
                        <option value="Grills and Steaks">Grills and Steaks</option>
                        <option value="Fast Foods">Fast Foods</option>
                        <option value="Drinks and Beverages">Drinks and Beverages</option>
                    </select>
                  
                </label>

            </div>
        </div>
    </div>
    <div>
        {retrievedPrices.map((retrievedPrice,index)=>(
            <div key={index}>
                  <div key={index}>
                <Row className='p-3 m-4'>
                    <Col className="d-flex certainCol mx-auto" md={6}>
                       <Card className="w-100 card-hover">
                    <Card.Img src={retrievedPrice.image} variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>{retrievedPrice.meal}</Card.Title>
                      <Card.Text>{retrievedPrice.description}</Card.Text>
                      <Card.Text className='price'>Ksh.{retrievedPrice.price}</Card.Text>
                   <AddToCart/> 
                    </Card.Body>
                  </Card>     
                    </Col>
                </Row>
        
            </div>
               
            </div>
        ))}
    </div>

        </>
    )
   }
   if(selectedCategory!==""&&selectedPrice===""&&buttonClicked===false&&searchedMeal===""){
      return(
        <>
            <div className='d-flex flex-row p-3 m-3'>
        <input type="search" name="searchfood" id="searchfood" placeholder='Search for a specific food' className='p-2 m-2 w-50 form-control' value={searchedMeal} onChange={(e)=>setSearchedMeal(e.target.value)}/>
        <button type="button" className="btn bg-dark text-white rounded-4" onClick={handleClick}>Search</button>   
    </div>
    <div className="d-flex flex-row p-3 m-3">
        <div className="row">
            <div className="col">
                <label htmlFor="prices" className="form-label">
                      Fiter By Price:
                    <select name="prices" id="prices" className="form-select" value={selectedPrice} onChange={handlePriceChange}>
                        <option value="100-200">Ksh 100-Ksh 200</option>
                        <option value="201-300">Ksh 201-Ksh 300</option>
                        <option value="301-400">Ksh 301-Ksh 400</option>
                        <option value="401-500">Ksh 401-500</option>
                        <option value="501-10000">Above Ksh 500+</option>
                    </select>
                  
                </label>
            </div>
            <div className="col">
                <label htmlFor="categories" className="form-label">
                      Filter By Category:
                    <select name="categories" id="categories" className="form-select" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="Swahili Delights">Swahili Delights</option>
                        <option value="Grills and Steaks">Grills and Steaks</option>
                        <option value="Fast Foods">Fast Foods</option>
                        <option value="Drinks and Beverages">Drinks and Beverages</option>
                    </select>
                  
                </label>

            </div>
        </div>
    </div>
    <div>
        {retrievedCategories.map((retrievedCategory,index)=>(
            <div key={index}>
                  <div key={index}>
                <Row className='p-3 m-4'>
                    <Col className="d-flex certainCol mx-auto" md={6}>
                       <Card className="w-100 card-hover">
                    <Card.Img src={retrievedCategory.image} variant='top' className='custom-img'/>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>{retrievedCategory.meal}</Card.Title>
                      <Card.Text>{retrievedCategory.description}</Card.Text>
                      <Card.Text className='price'>Ksh.{retrievedCategory.price}</Card.Text>
                   <AddToCart/> 
                    </Card.Body>
                  </Card>     
                    </Col>
                </Row>
        
            </div>
               
            </div>
        ))}
    </div>

        </>
    )
   }
  return (
    <>
    <div className='d-flex flex-row p-3 m-3'>
        <input type="search" name="searchfood" id="searchfood" placeholder='Search for a specific food' className='p-2 m-2 w-50 form-control' value={searchedMeal} onChange={(e)=>setSearchedMeal(e.target.value)}/>
        <button type="button" className="btn bg-dark text-white rounded-4" onClick={handleClick}>Search</button>   
    </div>
    <div className="d-flex flex-row p-3 m-3">
        <div className="row">
            <div className="col">
                <label htmlFor="prices" className="form-label">
                      Fiter By Price:
                    <select name="prices" id="prices" className="form-select" value={selectedPrice} onChange={handlePriceChange}>
                        <option value="100-200">Ksh 100-Ksh 200</option>
                        <option value="201-300">Ksh 201-Ksh 300</option>
                        <option value="301-400">Ksh 301-Ksh 400</option>
                        <option value="401-500">Ksh 401-500</option>
                        <option value="501-10000">Above Ksh 500+</option>
                    </select>
                  
                </label>
            </div>
            <div className="col">
                <label htmlFor="categories" className="form-label">
                      Filter By Category:
                    <select name="categories" id="categories" className="form-select" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="Swahili Delights">Swahili Delights</option>
                        <option value="Grills and Steaks">Grills and Steaks</option>
                        <option value="Fast Foods">Fast Foods</option>
                        <option value="Drinks and Beverages">Drinks and Beverages</option>
                    </select>
                  
                </label>

            </div>
        </div>
    </div>
    <div className='p-3 m-3 text-white '>
    <SwahiliDelights/>
      <FastFoods/>
      <GrillsSteaks/>
      <DrinksBeverages/>
    </div>
    </>

  )
}
export default SearchBar;
