import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const UseProductHooks = () => {

 const [product,setProduct] = useState([])

 const getProductData = ()=>{
   axios.get('https://fakestoreapi.com/products?limit=18') 
   .then((res)=>setProduct(res.data))
   .catch((err)=>console.log(err))
 }

 useEffect(()=>{
    getProductData();
 },[])

  return { product};
}
