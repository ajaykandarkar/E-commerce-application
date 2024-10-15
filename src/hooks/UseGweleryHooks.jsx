import axios from "axios";
import { useEffect, useState } from "react"

export const UseGweleryHooks = () => {

 const [gweleryData,setgweleryData] = useState([]);

 const fetchGweleryData = async()=>{
 await axios.get('https://fakestoreapi.com/products/category/jewelery')
  .then((res)=>setgweleryData(res.data))
  .catch((err)=>console.log(err))
 }

 useEffect(()=>{
   fetchGweleryData()
 },[])

  return  {gweleryData};

}