import React, { useContext, useEffect, useState } from 'react'
import { plantContext } from '../../context/AppContext'
import axios from 'axios'

const ReviewPage = () => {

    let myContext = useContext(plantContext)
  let[state,setState]=useState([])

  useEffect(()=>{
    axios.get("http://116.75.62.44:8000/plants").then((resp)=>{
      setState(resp.data)
       
    }).catch((error)=>{
      console.log("Error Fetching data",error);
      
    })
  },[])

console.log(state);

let{reviews} =state
console.log(reviews);


  return (
    <div>
          <main className=' flex flex-wrap '>
           <div className='rounded-lg shadow-lg flex flex-wrap text-center gap-5 m-6'>
           {reviews.map((e,i)=>{
           return(
            <div key={i} className=' w-[20%] bg-zinc-200 rounded-lg shadow-lg p-4 m-6'>
            <h1>username : <strong>{e.username}</strong></h1>
            <h1>rating : <strong>{e.rating}</strong></h1>
            <p>comment : <strong>{e.comment}</strong></p>
           
             </div>
           
           )
          })}
          
          </div>
        </main>
    </div>
  )
}

export default ReviewPage