import axios from "axios";
import { useEffect, useState } from "react"

export const UseElectronicHooks = () => {

 const [electronicData,setElectronicData] = useState([]);

 const fetchElectronicData = async()=>{
 await axios.get('https://fakestoreapi.com/products/category/electronics')
  .then((res)=>setElectronicData(res.data))
  .catch((err)=>console.log(err))
 }

 useEffect(()=>{
    fetchElectronicData()
 },[])

  return  {electronicData};

}
