import React, { useContext, useState } from 'react'
import { plantContext } from '../../context/AppContext'

const PotsAndPlanters = () => {

  let context = useContext(plantContext)

  let[cart,setCart]=useState([])
  console.log(context);

  let{allPlants} = context
  console.log(allPlants);
  
  
  const addToCart = (product) => {
    // Add the selected product to the cart
    setCart([...cart, product]);
  };
  
  
  
  return (
    <div>
     {allPlants.map((e,i)=>{
      return(
        <div key={i}>
         
         <button  onClick={()=>{
              // setCartData(ele)
              // setIsCartTrue(true)
              addToCart(e);
            
             }} style={{height:"30px",width:"90px"}}>Add to Cart</button>

        </div>
      )
     })}
    </div>
  )
}

export default PotsAndPlanters