import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'


export  let plantContext = createContext() ;
const AppContext = ({children}) => {

    
    let[allPlants,setAllPlants]=useState([])

   //json-server --watch plants.json --port 4000
    
    
     
  
     
     console.log(children);
     
    useEffect(()=>{

        axios.get("http://localhost:3000/plants").then((resp)=>{setAllPlants(resp.data)
        }).catch((error)=>{
          console.log("Error fetching plants : ",error);
          
        })
    },[])
  
    console.log(allPlants);
  
    
  return (
   
    <plantContext.Provider value={{allPlants}}>{children}</plantContext.Provider>
    
  )
}

export default AppContext