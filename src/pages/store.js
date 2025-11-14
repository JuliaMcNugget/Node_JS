import GitHub from '../components/GitHub';
import SearchBar from '../components/SearchBar';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
function Store() {
  const [productsState, setProductState]=useState([]);
  useEffect(() => {

    fetch('https://fakestoreapi.com/products').then(res=>res.json()).then((productsArray)=>{
      const newProductState = productsArray.map((product)=>{
        return product;
      })
      setProductState(newProductState);
    });
  }, []);
    
  return (
    <div>
      <SearchBar Items = {productsState}/>
      <GitHub/>
      <Link to="/">counters</Link>
    </div>
  );
}

export default Store;
