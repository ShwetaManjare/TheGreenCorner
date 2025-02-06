// // import axios from 'axios'
// // import React, { createContext, useEffect, useState } from 'react'
// // import AppContext from './AppContext'

// // const AddNewPlantContext = () => {


// //     //   let obj = {
// //     //     "reviews": [
// //     //   {
// //     //     "username": "Aarav",
// //     //     "rating": 5,
// //     //     "comment": "Absolutely love this rose! The vibrant red color brightens up my garden.",
// //     //     "productDelivered": true,
// //     //     "dateTime": "2024-11-20T10:15:00",
// //     //     "likes": 42,
// //     //     "dislikes": 2
// //     //   },
// //     //   {
// //     //     "username": "MahiGreen",
// //     //     "rating": 5,
// //     //     "comment": "Great product. It was well-packaged, and the plant arrived in perfect condition.",
// //     //     "productDelivered": true,
// //     //     "dateTime": "2024-11-19T15:48:00",
// //     //     "likes": 35,
// //     //     "dislikes": 1
// //     //   },
// //     //   {
// //     //     "username": "AdvikaDecor",
// //     //     "rating": 4,
// //     //     "comment": "The plant looks amazing! But I wish the pot was a bit larger for more stability.",
// //     //     "productDelivered": true,
// //     //     "dateTime": "2024-11-18T20:30:00",
// //     //     "likes": 27,
// //     //     "dislikes": 0
// //     //   },
// //     //   {
// //     //     "username": "RudraNature",
// //     //     "rating": 5,
// //     //     "comment": "Very easy to maintain. It's growing beautifully in my garden.",
// //     //     "productDelivered": true,
// //     //     "dateTime": "2024-11-17T14:10:00",
// //     //     "likes": 30,
// //     //     "dislikes": 3
// //     //   },
// //     //   {
// //     //     "username": "KavyaFan",
// //     //     "rating": 5,
// //     //     "comment": "My mom loved this as a gift! She said it's the best addition to her garden.",
// //     //     "productDelivered": true,
// //     //     "dateTime": "2024-11-16T12:45:00",
// //     //     "likes": 40,
// //     //     "dislikes": 1
// //     //   },
// //     //   {
// //     //     "username": "IshaanFoliage",
// //     //     "rating": 4,
// //     //     "comment": "Beautiful rose, but the blooms didn't last as long as I expected. Still, it’s a stunning plant.",
// //     //     "productDelivered": true,
// //     //     "dateTime": "2024-11-15T18:20:00",
// //     //     "likes": 25,
// //     //     "dislikes": 4
// //     //   },
// //     //   {
// //     //     "username": "RiyaGifts",
// //     //     "rating": 5,
// //     //     "comment": "My friend loved this rose! Great gift idea.",
// //     //     "productDelivered": true,
// //     //     "dateTime": "2024-11-14T11:00:00",
// //     //     "likes": 33,
// //     //     "dislikes": 0
// //     //   },
// //     //   {
// //     //     "username": "VedantPot",
// //     //     "rating": 5,
// //     //     "comment": "Perfect size for my small garden. The rose is blooming beautifully.",
// //     //     "productDelivered": true,
// //     //     "dateTime": "2024-11-13T09:30:00",
// //     //     "likes": 20,
// //     //     "dislikes": 2
// //     //   },
// //     //   {
// //     //     "username": "AnayaObsessed",
// //     //     "rating": 5,
// //     //     "comment": "I absolutely adore this rose! It adds so much color to my balcony garden.",
// //     //     "productDelivered": true,
// //     //     "dateTime": "2024-11-12T17:40:00",
// //     //     "likes": 50,
// //     //     "dislikes": 1
// //     //   },
// //     //   {
// //     //     "username": "OmFastDelivery",
// //     //     "rating": 5,
// //     //     "comment": "Great service! The rose was delivered quickly and in perfect condition.",
// //     //     "productDelivered": true,
// //     //     "dateTime": "2024-11-11T13:15:00",
// //     //     "likes": 45,
// //     //     "dislikes": 0
// //     //   }
// //     // ]
// //     //   }

// //     // let obj2 ={
// //     //   "tags": [
// //     //     "Maharashtra",
// //     //     "Goa",
// //     //     "Telanga"
// //     //   ]
      
// //     // }


// //     let obj = 
// //       {
// //         "name": "Aglaonema Pink Beauty Plant",
// //         "id": "2",
// //         "description": "Aglaonema Pink Beauty is the plant for you. Also called the Chinese Evergreen, it will stay happy and beautiful in low indirect light with little water. Its bright pink leaves add the right amount of jazz and colour to any space and décor. A stunner with its pretty pink foliage both alone and in plant clusters.",
// //         "price": 11,
// //         "rating": 4.1,
// //         "reviews": [
// //           {
// //             "username": "ShivendraPatil",
// //             "rating": 5,
// //             "comment": "Absolutely love this plant! The leaves are vibrant, and it has significantly brightened up my living space.",
// //             "productDelivered": true,
// //             "dateTime": "2024-11-20T10:15:00",
// //             "likes": 42,
// //             "dislikes": 2
// //           },
// //           {
// //             "username": "AnayaShinde",
// //             "rating": 5,
// //             "comment": "It was packaged well and arrived healthy. Definitely a reliable seller.",
// //             "productDelivered": true,
// //             "dateTime": "2024-11-19T15:48:00",
// //             "likes": 35,
// //             "dislikes": 1
// //           },
// //           {
// //             "username": "RaviDeshmukh",
// //             "rating": 4,
// //             "comment": "Adds so much life to my living room. Would’ve preferred a slightly larger pot for stability.",
// //             "productDelivered": true,
// //             "dateTime": "2024-11-18T20:30:00",
// //             "likes": 27,
// //             "dislikes": 0
// //           },
// //           {
// //             "username": "NehaKulkarni",
// //             "rating": 5,
// //             "comment": "Low maintenance and perfect for beginners. Thriving wonderfully with minimal effort.",
// //             "productDelivered": true,
// //             "dateTime": "2024-11-17T14:10:00",
// //             "likes": 30,
// //             "dislikes": 3
// //           },
// //           {
// //             "username": "VijayJadhav",
// //             "rating": 5,
// //             "comment": "Thriving beautifully in my garden! The perfect addition for any nature lover.",
// //             "productDelivered": true,
// //             "dateTime": "2024-11-16T12:45:00",
// //             "likes": 40,
// //             "dislikes": 1
// //           },
// //           {
// //             "username": "AartiPatil",
// //             "rating": 4,
// //             "comment": "The leaves are so vibrant and fresh. Slightly smaller than expected but still gorgeous.",
// //             "productDelivered": true,
// //             "dateTime": "2024-11-15T18:20:00",
// //             "likes": 25,
// //             "dislikes": 4
// //           },
// //           {
// //             "username": "PriyaRane",
// //             "rating": 5,
// //             "comment": "Received it as a gift, totally worth it. My friend absolutely loved it!",
// //             "productDelivered": true,
// //             "dateTime": "2024-11-14T11:00:00",
// //             "likes": 33,
// //             "dislikes": 0
// //           },
// //           {
// //             "username": "RaviSawant",
// //             "rating": 5,
// //             "comment": "The pot size recommended was just right. A lovely addition to my plant collection.",
// //             "productDelivered": true,
// //             "dateTime": "2024-11-13T09:30:00",
// //             "likes": 20,
// //             "dislikes": 2
// //           },
// //           {
// //             "username": "MeeraDeshmukh",
// //             "rating": 5,
// //             "comment": "This is my new favorite plant! It fits perfectly in my home aesthetic.",
// //             "productDelivered": true,
// //             "dateTime": "2024-11-12T17:40:00",
// //             "likes": 50,
// //             "dislikes": 1
// //           },
// //           {
// //             "username": "SunilPatil",
// //             "rating": 5,
// //             "comment": "Fast shipping and great customer service! Will definitely buy more.",
// //             "productDelivered": true,
// //             "dateTime": "2024-11-11T13:15:00",
// //             "likes": 45,
// //             "dislikes": 0
// //           }
// //         ],
// //         "totalSalesLastMonth": 26,
// //         "sellerName": "Maharashtra Green Nursery",
// //         "availability": "In Stock",
// //         "quantityAvailable": 50,
// //         "categories": [
// //           "Outdoor Plants",
// //           "Indoor Plants",
// //           "Low Maintenance"
// //         ],
// //         "sunlightRequirement": "Full Sun",
// //         "moistureRequirement": "Low",
// //         "soilType": "Well-drained loamy soil",
// //         "season": "Summer",
// //         "growthRate": "Fast",
// //         "potSizeRequired": "Medium",
// //         "genus": "Aloe",
// //         "localName": "Ghritkumari",
// //         "regionalName": "Kanchora",
// //         "biologicalName": "Aloe barbadensis miller",
// //         "botanicalName": "Aloe vera",
// //         "tags": [
// //           "House Warming",
// //           "Gift Ideas",
// //           "Low Maintenance"
// //         ],
// //         "shippingStates": [
// //           "Maharashtra (India)",
// //           "Goa (India)",
// //           "Karnataka (India)"
// //         ],
// //         "primaryImage": "https://www.ugaoo.com/cdn/shop/products/GroPot_86c3ca27-89d2-4c0d-9e08-2f50add72276.jpg?v=1694434958&width=750",
// //         "secondaryImages": [
// //           "https://www.ugaoo.com/cdn/shop/products/AgalonemaPinkBeauty_Ivory_45.jpg?v=1694434958&width=750",
// //           "https://www.ugaoo.com/cdn/shop/products/AgalonemaPinkBeauty_detail.jpg?v=1707716696&width=750",
// //           "https://www.ugaoo.com/cdn/shop/products/AgalonemaPinkBeauty_humantoiuch.jpg?v=1707716696&width=750",
// //           "https://www.ugaoo.com/cdn/shop/products/AgalonemaPinkBeauty_topangle.jpg?v=1707716696&width=750"
// //         ],
// //         "shoppingPolicy": "Ships within 5-7 business days.",
// //         "refundPolicy": "30-day refund policy with original receipt."
// //       }
    
      
// //       // let obj2 = {
// //       //   "name": "",
// //       //   "id": "",
// //       //   "description": "",
// //       //   "price": "",
// //       //   "rating": "",
// //       //   "totalSalesLastMonth": "",
// //       //   "sellerName": ".",
// //       //   "sunlightRequirement": "",
// //       //   "moistureRequirement": "",
// //       //   "soilType": "",
// //       //   "season": "",
// //       //   "localName": "",
// //       //   "regionalName": "",
// //       //   "biologicalName": ".",
// //       //   "botanicalName": "",
       
// //             // let  addReviewsfunc =(obj)=>{
// //     // axios.post("http://localhost:4000/plants",mainState).then(()=>{
// //     //     axios.get("http://localhost:4000/plants").then((resp)=>{
// //     //       setData(resp.data)
// //     //       setMainState({
// //     //         "name": "",
// //     //         "id": String(Date.now()),
// //     //         "description": "",
// //     //         "price": "",
// //     //         "rating": "",
// //     //         "totalSalesLastMonth": "",
// //     //         "sellerName": ".",
// //     //         "sunlightRequirement": "",
// //     //         "moistureRequirement": "",
// //     //         "soilType": "",
// //     //         "season": "",
// //     //         "localName": "",
// //     //         "regionalName": "",
// //     //         "biologicalName": ".",
// //     //         "botanicalName": "",
// //     //       })
// //     //     })
// //     // })
// //     // }
        
// //       // }

// //        {/*
// //         {
// //             "name": mainState.name,
// //             "id": mainState.name,
// //             "description": mainState.description,
// //             "price": mainState.price,
// //             "rating": mainState.rating,
// //             "totalSalesLastMonth": mainState.totalSalesLastMonth,
// //             "sellerName": mainState.sellerName,
// //             "sunlightRequirement": mainState.sunlightRequirement,
// //             "moistureRequirement": mainState.moistureRequirement,
// //             "soilType": mainState.soilType,
// //             "season": mainState.season,
// //             "localName": mainState.localName,
// //             "regionalName": mainState.regionalName,
// //             "biologicalName": mainState.biologicalName,
// //             "botanicalName": mainState.botanicalName,
// //            }*/}

// //     let[data,setData]=useState([])
// //     let[mainState,setMainState]=useState({
// //       "name": "",
// //       "id": String(Date.now()),
// //       "description": "",
// //       "price": "",
// //       "rating": "",
// //       "totalSalesLastMonth": "",
// //       "sellerName": ".",
// //       "sunlightRequirement": "",
// //       "moistureRequirement": "",
// //       "soilType": "",
// //       "season": "",
// //       "localName": "",
// //       "regionalName": "",
// //       "biologicalName": ".",
// //       "botanicalName": "",
// //     })

// //     Date.now()
// //     useEffect(() => {
// //       axios.get('http://localhost:4000/plants').then((res) => {
// //         setData(res.data)
// //       })
// //     }, [])

// //     let handleChange = (e)=>{
// //       let{name,value}=e.target 
// //       setMainState({...mainState,[name]:value})

// //     }

// //     let handleMainState = (e)=>{
// //       e.preventDefault() 
// //        axios.post("http://localhost:4000/plants",mainState).then((resp)=>{
// //         axios.get("http://localhost:4000/plants").then((resp)=>{
// //           setData(resp.data)
// //           setMainState({
// //                   "name": "",
// //                   "id": String(Date.now()),
// //                   "description": "",
// //                   "price": "",
// //                   "rating": "",
// //                   "totalSalesLastMonth": "",
// //                   "sellerName": ".",
// //                   "sunlightRequirement": "",
// //                   "moistureRequirement": "",
// //                   "soilType": "",
// //                   "season": "",
// //                   "localName": "",
// //                   "regionalName": "",
// //                   "biologicalName": ".",
// //                   "botanicalName": "",
// //                 })
            
// //         })
// //        })
     
     
// //    }
// //     console.log(mainState);
    


// //     let[reviews,setReviews]=useState([])
// //     let[sellerAddress,setSellerAddress]=useState({})
// //     let[categories,setCategories]=useState([])
// //     let[tags,setTags]=useState([])
// //     let[secondaryImages,setSecondaryImages]=useState([])
// //     let[shipping,setShipping]=useState([])


// //     console.log(mainState);
    


   

// //     console.log(mainState);
    
  
// //     let newPlantContext = createContext()
// //   return (
   
// //         // <newPlantContext.Provider value={{reviews,setReviews}} >{children}</newPlantContext.Provider>
   
// //         <div>

// //             <div>
// //               <form action="" className='w-[60%] ml-52 p-5 h-[600px] border-[2px] border-black flex flex-col gap-8 mt-10'>
// //                 <input onChange={handleChange} type="text" name="name" value={mainState.name} className='border-[1px] border-black w-full p-2 m-2' placeholder='plantname'/>
// //                 <input onChange={handleChange} type="text" name='description' value={mainState.description} className='border-[1px] border-black w-full p-2 m-2' placeholder="plant-description"/>
// //                 <div className='flex justify-between w-full p-2 m-2'>
// //                 <input onChange={handleChange} type="text" name='price' value={mainState.price} className='border-[1px] border-black p-2'placeholder='price'/>
// //                 <input onChange={handleChange} type="text" name='rating' value={mainState.rating}className='border-[1px] border-black p-2' placeholder="rating"/>
// //                 <input onChange={handleChange} type="text" name='totalSalesLastMonth' value={mainState.totalSalesLastMonth} className='border-[1px] border-black p-2' placeholder="totalSalesLastMonth"/>
// //                 </div>
// //                 <div className='flex justify-between w-full p-2 m-2'>
// //                 <input onChange={handleChange}  type="text" name='sunlightRequirement' value={mainState.sunlightRequirement} className='border-[1px] border-black p-2 ' placeholder='sunLightRequirement'/>
// //                 <input onChange={handleChange}  type="text" name='moistureRequirement' value={mainState.moistureRequirement} className='border-[1px] border-black p-2 '  placeholder='moistureRequirement'/>
// //                 <input onChange={handleChange}  type="text" name='soilType' value={mainState.soilType} className='border-[1px] border-black p-2' placeholder="soilType"/>
// //                 <input onChange={handleChange}  type="text" name='season'value={mainState.season} className='border-[1px] border-black p-2' placeholder="season"/>
// //                 </div>
// //                 <div className='w-full p-2 flex flex-row justify-between' >
// //                 <input onChange={handleChange} type="text" name='localName' value={mainState.localName} className='border-[1px] border-black p-2' placeholder="localName"/>
// //                 <input onChange={handleChange} type="text" name='regionalName' value={mainState.regionalName} className='border-[1px] border-black p-2' placeholder="regionalName"/>
// //                 <input onChange={handleChange} type="text" name='biologicalName' value={mainState.biologicalName} className='border-[1px] border-black p-2' placeholder='biologicalName'/>
// //                 <input onChange={handleChange} type="text" name='botanicalName' value={mainState.botanicalName} className='border-[1px] border-black p-2' placeholder="botanicalName"/>
// //                  </div>
// //                 <div className=' flex justify-center'>
// //                 <button  className=" bg-green-700 text-white p-2 px-4 rounded-lg " onClick={handleMainState}>Submit</button>
// //                 </div>
// //               </form>
// //             </div>
// //            {/* <button onClick={()=>{addReviewsfunc(obj)}}>click</button> */}
         
// //         </div>

// //   )
// // }

// // export default AddNewPlantContext



// /*
  
//   //   let handleMainState =()=>{
//   //     setMAinState({
//   //       "name": "",
//   //     "id": "",
//   //     "description": "",
//   //     "price": "",
//   //     "rating": "",
//   //     "reviews": reviews,
//   //     "totalSalesLastMonth": "",
//   //     "sellerName": ".",
//   //     "sellerAddress": sellerAddress,
//   //     "availability": "",
//   //     "quantityAvailable": "",
//   //     "categories": categories,
//   //     "sunlightRequirement": "",
//   //     "moistureRequirement": "",
//   //     "soilType": "",
//   //     "season": "",
//   //     "growthRate": "",
//   //     "potSizeRequired": "",
//   //     "genus": "",
//   //     "localName": "",
//   //     "regionalName": "",
//   //     "biologicalName": ".",
//   //     "botanicalName": "",
//   //     "tags": tags ,
//   //     "shippingStates": shipping ,
    
//   //     "primaryImage": "https://www.ugaoo.com/cdn/shop/products/GroPot_86c3ca27-89d2-4c0d-9e08-2f50add72276.jpg?v=1694434958&width=750",
//   //     "secondaryImages": secondaryImages ,
//   //     "shoppingPolicy": "",
//   //     "refundPolicy": ""
//   //   },
//   // )
//   //   }
//   */

//   import { useState, useEffect } from "react";
// import axios from "axios";

// const AddNewPlantContext = () => {
//   let [data, setData] = useState([]);
//   let [mainState, setMainState] = useState({
//     name: "",
//     id: String(Date.now()),
//     description: "",
//     price: "",
//     rating: "",
//     totalSalesLastMonth: "",
//     sellerName: "",
//     sunlightRequirement: "",
//     moistureRequirement: "",
//     soilType: "",
//     season: "",
//     localName: "",
//     regionalName: "",
//     biologicalName: "",
//     botanicalName: "",
//     primaryImage:"https://img.freepik.com/free-photo/close-up-delicate-rose_23-2151903687.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid"
//   });

//   useEffect(() => {
//     axios.get("http://localhost:4000/plants").then((res) => {
//       setData(res.data);
//     });
//   }, []);

//   const handleChange = (e) => {
//     let { name, value } = e.target;
//     setMainState({ ...mainState, [name]: value });
//   };

//   const handleMainState = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:4000/plants", mainState).then(() => {
//       axios.get("http://localhost:4000/plants").then((resp) => {
//         setData(resp.data);
//         setMainState({
//           name: "",
//           id: String(Date.now()),
//           description: "",
//           price: "",
//           rating: "",
//           totalSalesLastMonth: "",
//           sellerName: "",
//           sunlightRequirement: "",
//           moistureRequirement: "",
//           soilType: "",
//           season: "",
//           localName: "",
//           regionalName: "",
//           biologicalName: "",
//           botanicalName: "",
//           primaryImage:"https://img.freepik.com/free-photo/close-up-delicate-rose_23-2151903687.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid"
//         });
//       });
//     });
//   };


//   // let handleDelete = (mainState)=>{
//   //   axios.delete(`http://localhost:4000/plants ${mainState.id}`).then(()=>{
//   //     console.log(`${mainState.name} is deleted`);
      
//   //   })
//   //   axios.get("http://localhost:4000/plants ").then((resp)=>{
//   //     setData(resp.data)
//   //   })
//   // }

//   console.log(mainState);

//   return (
//     <div>
//       <div>
//         <form className="w-[60%] ml-52 p-5 h-[600px] border-[2px] border-black flex flex-col gap-8 mt-10">
//           <input onChange={handleChange} type="text" name="name" value={mainState.name} className="border-[1px] border-black w-full p-2 m-2" placeholder="Plant Name"/>
//           <input onChange={handleChange} type="text" name="description" value={mainState.description} className="border-[1px] border-black w-full p-2 m-2" placeholder="Plant Description"/>

//           <div className="flex justify-between w-full p-2 m-2">
//             <input onChange={handleChange} type="text" name="price" value={mainState.price} className="border-[1px] border-black p-2" placeholder="Price"/>
//             <input onChange={handleChange} type="text" name="rating" value={mainState.rating} className="border-[1px] border-black p-2" placeholder="Rating"/>
//             <input onChange={handleChange} type="text" name="totalSalesLastMonth" value={mainState.totalSalesLastMonth} className="border-[1px] border-black p-2" placeholder="Total Sales Last Month"/>
//           </div>

//           <div className="flex justify-between w-full p-2 m-2">
//             <input onChange={handleChange} type="text" name="sunlightRequirement" value={mainState.sunlightRequirement} className="border-[1px] border-black p-2" placeholder="Sunlight Requirement"/>
//             <input onChange={handleChange} type="text" name="moistureRequirement" value={mainState.moistureRequirement} className="border-[1px] border-black p-2" placeholder="Moisture Requirement"/>
//             <input onChange={handleChange} type="text" name="soilType" value={mainState.soilType} className="border-[1px] border-black p-2" placeholder="Soil Type"/>
//             <input onChange={handleChange} type="text" name="season" value={mainState.season} className="border-[1px] border-black p-2" placeholder="Season"/>
//           </div>

//           <div className="w-full p-2 flex flex-row justify-between">
//             <input onChange={handleChange} type="text" name="localName" value={mainState.localName} className="border-[1px] border-black p-2" placeholder="Local Name"/>
//             <input onChange={handleChange} type="text" name="regionalName" value={mainState.regionalName} className="border-[1px] border-black p-2" placeholder="Regional Name"/>
//             <input onChange={handleChange} type="text" name="biologicalName" value={mainState.biologicalName} className="border-[1px] border-black p-2" placeholder="Biological Name"/>
//             <input onChange={handleChange} type="text" name="botanicalName" value={mainState.botanicalName} className="border-[1px] border-black p-2" placeholder="Botanical Name"/>
//           </div>

//           <div className="flex justify-center">
//             <button className="bg-green-700 text-white p-2 px-4 rounded-lg" onClick={handleMainState}>
//               Submit
//             </button>
//             {/* <button className="bg-red-700 text-white p-2 px-4 rounded-lg" onClick={()=>{handleDelete(mainState)}}>Delete</button> */}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddNewPlantContext;










import axios from "axios";
import React, { useEffect, useState } from "react";

const AddNewPlantContext = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newPlant, setNewPlant] = useState({
    name: "",
    description: "",
    price: "",
    rating: 4.5,
    categories: [],
    primaryImage: "",
  });

  useEffect(() => {
    // Fetch existing plants
    axios.get("http://localhost:3000/plants").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlant({ ...newPlant, [name]: value });
  };

  const handleAddNewPlant = () => {
    setIsLoading(true);
    axios
      .post("http://localhost:3000/plants", newPlant)
      .then(() => {
        axios.get("http://localhost:3000/plants").then((res) => {
          setData(res.data);
          setIsLoading(false);
          setError(null); // Clear any previous errors
        });
      })
      .catch((err) => {
        setError("An error occurred while adding the plant.");
        setIsLoading(false);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Add New Plant</h1>

      {/* Form for Adding New Plant */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Plant Name</label>
        <input
          type="text"
          name="name"
          value={newPlant.name}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          placeholder="Enter plant name"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={newPlant.description}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          placeholder="Enter plant description"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          name="price"
          value={newPlant.price}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          placeholder="Enter plant price"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="text"
          name="primaryImage"
          value={newPlant.primaryImage}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          placeholder="Enter image URL"
        />

        {/* Add Plant Button */}
        <button
          onClick={handleAddNewPlant}
          className="w-full sm:w-auto bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded-md mb-4 mx-auto block transition-all"
        >
          {isLoading ? "Adding..." : "Add New Plant"}
        </button>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>

      {/* Plant List Display */}
      <div className="space-y-3">
        {data.map((plant) => (
          <div
            key={plant.id}
            className="p-4 border border-gray-300 rounded-lg shadow-sm"
          >
            <h2 className="text-xl font-semibold">{plant.name}</h2>
            <p>{plant.description}</p>
            <p className="text-sm text-gray-500">Price: ₹{plant.price}</p>
            <p className="text-sm text-gray-500">Rating: {plant.rating}</p>
            <img
              src={plant.primaryImage}
              alt={plant.name}
              className="w-40  h-auto mt-2 rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddNewPlantContext;









