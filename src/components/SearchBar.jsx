import React from 'react'

const SearchBar = () => {
  return (
    <>
    <div className='d-flex flex-row p-3 m-3'>
        <input type="search" name="searchfood" id="searchfood" placeholder='Search for a specific food' className='p-2 m-2 w-50 form-control'/>
        <button type="button" className="btn bg-dark text-white rounded-4">Search</button>   
    </div>
    <div className="d-flex flex-row p-3 m-3">
        <div className="row">
            <div className="col">
                <label htmlFor="prices" className="form-label">
                      Fiter By Price:
                    <select name="prices" id="prices" className="form-select">
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
                    <select name="categories" id="categories" className="form-select">
                        <option value="Swahili Delights">Swahili Delights</option>
                        <option value="Grills and Steaks">Grills and Steaks</option>
                        <option value="Fast Foods">Fast Foods</option>
                        <option value="Drinks and Beverages">Drinks and Beverages</option>
                    </select>
                  
                </label>

            </div>
        </div>
    </div>
    </>

  )
}

export default SearchBar
