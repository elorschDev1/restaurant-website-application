import React from 'react';
import SwahiliDelights from './SwahiliDelights';
import FastFoods from './FastFoods';
import GrillsSteaks from './GrillsSteaks';
import DrinksBeverages from './DrinksBeverages';
import SearchBar from './SearchBar.jsx';
const Menu = () => {
  return (
    <div>
      <SearchBar/>
      <SwahiliDelights/>
      <FastFoods/>
      <GrillsSteaks/>
      <DrinksBeverages/>
    </div>
  )
}

export default Menu
