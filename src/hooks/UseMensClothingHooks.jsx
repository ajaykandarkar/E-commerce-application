import axios from "axios";
import { useEffect, useState } from "react"

export const UseMensClothingHooks = () => {

 const [mensClothsData,setmensClothsData] = useState([]);

 const fetchmensClothsData = async()=>{
 await axios.get(`https://fakestoreapi.com/products/category/men's clothing`)
  .then((res)=>setmensClothsData(res.data))
  .catch((err)=>console.log(err))
 }

 useEffect(()=>{
    fetchmensClothsData()
 },[])

  return  {mensClothsData};

}