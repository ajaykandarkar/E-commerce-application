import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const UseCatogery = () => {
const[categorie,setCategorie] = useState([])
useEffect(()=>{
    fetchCatogeryData()
},[])

const fetchCatogeryData = ()=>{
  axios
  .get("https://fakestoreapi.com/products/categories")
  .then((res) => {
    setCategorie(res.data);
    console.log("Fetched categories:", res.data); 
  })
  .catch((err) => console.log("Error fetching data", err));
}

  return {categorie};
  
}
