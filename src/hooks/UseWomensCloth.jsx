import axios from "axios";
import { useEffect, useState } from "react"

export const UseWomensCloth = () => {

 const [WomensClothsData,setWomensClothsData] = useState([]);

 const fetchmensClothsData = async()=>{
 await axios.get(`https://fakestoreapi.com/products/category/women's clothing`)
  .then((res)=>setWomensClothsData(res.data))
  .catch((err)=>console.log(err))
 }

 useEffect(()=>{
    fetchmensClothsData()
 },[])

  return  {WomensClothsData};

}