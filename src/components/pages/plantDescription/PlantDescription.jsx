import { useContext, useEffect, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";

import { useLocation, useNavigate } from "react-router-dom";

import { CartContextState, useCart } from "../cart/CartContext";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";

const PlantDescription= () => {
  //Move on top when clicked on product
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let navigate = useNavigate();
  let location = useLocation();
  const { addToCart } = useContext(CartContextState);
  const { allPlants } = location.state;


  const star = [
        { id: 1, rting: "Ratings" },
        { id: 2, rting: "★★★★★ 5.0" },
        { id: 3, rting: "★★★★☆ 4.0 & up" },
        { id: 4, rting: "★★★☆☆ 3.0 & up" },
        { id: 5, rting: "★★☆☆☆ 2.0 & up" },
        { id: 6, rting: "★☆☆☆☆ 1.0 & up" },
    ];
    
    const renderStars = (rating) => {
      const stars = Array.from({ length: 5 }, (_, i) => (i < rating ? '★' : '☆'));
      return stars.join('');
    };
    

  // To add visual effect after adding to cart
  const [added, setAdded] = useState(false);

  const [selectedImage, setSelectedImage] = useState(allPlants.primaryImage);
  const [selectedIndex, setSelectedIndex] = useState(null);

  let handleClick = () => {
    navigate("/home/plants");
  };

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const { cart, dispatch } = useCart();  // Access cart state and dispatch

  const handleCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: allPlants });
  };

  // const handleCart = () => {
  //   addToCart(allPlants);
  //   setAdded(true); // Trigger the effect
  //   setTimeout(() => setAdded(false), 1000); // Reset the effect after 1 second
  // };

  return (
    <div className="flex xs:flex-col md:flex-row">
      {/* Product Section */}
      <main className="max-w-7xl mx-auto p-6">
        <div
          className="flex justify-center items-center mb-5 bg-black w-20 p-2 rounded-xl"
          onClick={handleClick}
        >
          <HiArrowLeft className="inline-block text-white rounded-xl" />
          <button className="text-white">Back</button>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="flex-1">
            {/* Main Image */}
            <div className="w-full xs:h-[350px] md:h-[500px] overflow-hidden rounded-lg shadow-lg ">
              <img
                src={selectedImage}
                alt={allPlants.name}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Secondary Images Section */}
            <div className="mt-4">
              <div className="flex gap-4">
                {/* Show Primary Image alongside Secondary Images */}
                <div
                  onClick={() => handleImageClick(allPlants.primaryImage, null)} // Update to primary image if clicked
                  className={`cursor-pointer ${
                    selectedIndex === null
                      ? "border-4  border-blue-500 rounded-lg"
                      : ""
                  }`}
                >
                  <img
                    src={allPlants.primaryImage}
                    alt="Primary Image"
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                </div>

                {/* Show all secondary images */}
                {allPlants.secondaryImages.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => handleImageClick(image, index)} // Update main image when clicked
                    className={`cursor-pointer ${
                      selectedIndex === index
                        ? "border-4 border-blue-500 rounded-lg"
                        : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Secondary Image ${index + 1}`}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h2 className="text-primary text-3xl font-bold mb-4">
              {allPlants.name}
            </h2>
          

            {/* Size Selection */}
            <div className="my-2">
              <p>Select size: </p>
              <button className="m-5 text-black py-2 px-4 rounded-lg shadow-lg">
                Small
              </button>
              <button className="text-black py-2 px-4 rounded-lg shadow-lg">
                Medium
              </button>
              <button className="m-5 text-black py-2 px-4 rounded-lg shadow-lg">
                Large
              </button>
            </div>

            <h1 className="text-2xl font-semibold text-green-600 mb-4">
              ₹ {allPlants.price}
            </h1>

            <p className="text-lg text-gray-700 mb-4">{allPlants.description}</p>

            {/* Product Attributes */}
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <h1 className="font-bold">Plant Requirements</h1>
              <li>Light: {allPlants.sunlightRequirement}</li>
              <li>Water: {allPlants.moistureRequirement}</li>
              <li>Soil: {allPlants.soilType}</li>
              <li>Season: {allPlants.season}</li>
              <li>Growth Rate: {allPlants.growthRate}</li>
              <li>Pot Size Required: {allPlants.potSizeRequired}</li>
            </ul>

            {/* Seller Info */}
            {/* <div className="my-4">
              <p className="font-semibold">Seller: {plant.sellerName}</p>
              <p>
                {plant.sellerAddress.street}, {plant.sellerAddress.city},{" "}
                {plant.sellerAddress.state} - {plant.sellerAddress.pincode}
              </p>
            </div> */}

            {/* Availability */}
            <div className="my-4">
              <p className="font-semibold">
                Availability: {allPlants.availability}
              </p>
              <p>{allPlants.quantityAvailable} available</p>
            </div>

            {/* Categories */}
            <div className="my-4">
              <p className="font-semibold">Categories:</p>
              <ul className="list-disc list-inside">
                {allPlants.categories.map((category, index) => (
                  <li key={index}>{category}</li>
                ))}
              </ul>
            </div>

            <button
              className={`bg-green-500 hover:bg-green-600 m-5 text-white py-2 px-4 rounded-lg shadow-lg  transition ${
                added ? "animate-button-lift" : ""
              }`}
              onClick={handleCart}
            >
              Add to Cart
            </button>
            <button onClick={()=>{navigate("/home/shipping")}}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg">
              Buy Now
            </button>
          </div>
        </div>

        {/* Care Instructions */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Care Instructions</h3>
          <p className="text-gray-600">{allPlants.description}</p>
        </section>

        {/* Shipping and Policies */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Shipping & Policies</h3>
          <p className="text-gray-600">{allPlants.shoppingPolicy}</p>
          <p className="text-gray-600">{allPlants.refundPolicy}</p>
        </section>

        {/* Reviews */}
         {/* Reviews Section */}

       <h1 className="mt-28 text-3xl font-extrabold underline">Reviews : </h1>
              <div className="w-full flex flex-wrap gap-10 p-3 mt-5 ">
                 {allPlants.reviews.map((r) => {
          // Find the matching star object based on the rating
          const matchedStar = star.find((s) => s.rting === String(r.rating));

          return (
            <div
              key={r.id}
              className="w-[30%] p-4 bg-slate-200 rounded-md text-black shadow-md"
            >
              <h1 className="text-lg font-semibold px-2">
                {r.username || "Anonymous"}
              </h1>
              {/* <p className="ml-2 text-black">
                <strong>Rating</strong>:{" "}
                {matchedStar ? (
                  <span className="text-yellow-500">{matchedStar.stars}</span>
                ) : (
                  "No rating available"
                )}
              </p> */}
                <div className="text-2xl text-yellow-400 ]">{renderStars(r.rating)}</div>
               <div className=" flex gap-14 p-3">
               <p className="flex gap-2"><BiSolidLike/>{r.likes}</p>
               <p className="flex gap-2"><BiSolidDislike/>{r.dislikes}</p>
               </div>
             
              <p className="ml-4 text-black">
                <strong>Comment</strong>: {r.comment || "No comment provided"}
              </p>
            </div>
          );
        })}
      </div>
      </main>
    </div>
  );
};

export default PlantDescription ;








// import React, { useState } from "react";
// import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
// import { BsMoisture } from "react-icons/bs";
// import { GiFlowerPot, GiPlantRoots } from "react-icons/gi";
// import { GrGrow } from "react-icons/gr";
// import { TiWeatherPartlySunny } from "react-icons/ti";
// import { useLocation, useNavigate } from "react-router-dom";
// import Cart from "../cart/Cart";
// import PotsAndPlanters from "../navpages/PotsAndPlanters";

// const PlantDescription = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   console.log(location);



  

//   // const star = [
//   //   { rting: "5", stars: "⭐⭐⭐⭐⭐" },
//   //   { rting: "4", stars: "⭐⭐⭐⭐" },
//   //   { rting: "3", stars: "⭐⭐⭐" },
//   //   { rting: "2", stars: "⭐⭐" },
//   //   { rting: "1", stars: "⭐" },
//   // ];

//   const star = [
//     { id: 1, rting: "Ratings" },
//     { id: 2, rting: "★★★★★ 5.0" },
//     { id: 3, rting: "★★★★☆ 4.0 & up" },
//     { id: 4, rting: "★★★☆☆ 3.0 & up" },
//     { id: 5, rting: "★★☆☆☆ 2.0 & up" },
//     { id: 6, rting: "★☆☆☆☆ 1.0 & up" },
// ];

// const renderStars = (rating) => {
//   const stars = Array.from({ length: 5 }, (_, i) => (i < rating ? '★' : '☆'));
//   return stars.join('');
// };


//   // Retrieve the plant data from the navigation state
//   const { allPlants } = location.state || {};
//   console.log(allPlants?.reviews);
//   // let[addItemToCart , setItemToCart] = useState(allPlants.primaryImage[0])

//   // const [currentImage, setCurrentImage] = useState(allPlants.secondaryImages[0]);

//   const [selectedImage, setSelectedImage] = useState(allPlants.primaryImage);
//   const [selectedIndex, setSelectedIndex] = useState(allPlants.secondaryImages[0]);

//   const secondaryImages = allPlants?.secondaryImages || [];
//   if (!allPlants) {
//     return <div className="text-center mt-6">No plant data available!</div>;
//   }

//  let[cart,setCart]=useState([])

//  const addToCart = (product) => {
//   // Add the selected product to the cart
//   setCart([...cart, product]);
// };
// console.log(allPlants);
// console.log(cart);





//   // let context = useContext(plantContext)
//   //   let[toCart , setToCart] = useState([]) 
//   //   let[isCartTrue,setIsCartTrue]=useState(false);
   
//   //   const addToCart = (prevPlant) => {
//   //     // Add the selected product to the cart
//   //     setCartData([...cartData, product]);
//   //   };
  

  

//   return (
//     <div className="p-6">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 px-4 py-2 bg-gray-400 text-gray-800 rounded-md shadow hover:bg-gray-200"
//       >
//         Back
//       </button>

//       <div className="flex lg:flex-row gap-8">
//         {/* Secondary Images */}
//         {allPlants.secondaryImages && allPlants.secondaryImages.length > 0 && (
//           <div className="flex gap-4 flex-col">
//             {allPlants.secondaryImages.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`Secondary ${index + 1}`}
//                 className="w-28 h-28 rounded-lg shadow-md cursor-pointer"
//                 onClick={() => setSelectedIndex(img)} // Chang the primary image on hover
//                // onMouseOut={() => setCurrentImage(allPlants.primaryImage)}
//               />
//             ))}
//           </div>
//         )}

//         {/* Primary Image */}
//         <div className="lg:w-1/3  w-full ">
//           <img
//             src={allPlants.primaryImage}
//             alt={allPlants.name}
//             className="rounded-lg shadow-md object-contain"
//           />
//         </div>

//         {/* Details Section */}
//         <div className="lg:w-1/2 w-full mx-5">
//           <h1 className="text-3xl  text-green-900 font-bold mb-4 mx-4">{allPlants.name}</h1>
          
//           <p className="mx-4">{allPlants.rating}</p>
//           <p className="text-green-700 text-lg font-bold mb-2 mx-4">
//             Price: ₹{allPlants.price}
//           </p>
//           <p className="text-gray-600 mb-6 mx-4">{allPlants.description}</p>
           
//            <label htmlFor="selectsize" className="text-green-800 text-lg px-36 p-10">Select Size</label>
//           <div className=" flex  justify-center gap-16">
//             <button className="bg-slate-300 px-3 py-2 my-5 rounded-2xl shadow-lg">Small</button>
//             <button className="bg-slate-300 px-3 py-2 my-5  rounded-2xl shadow-lg">Medium</button>
//             <button className="bg-slate-300 px-3 py-2 my-5  rounded-2xl shadow-lg">Large</button>
//           </div>
//           <hr className="border-black border-[1px] w-[60%] mx-32"/>

//           {/* onClick={()=>{navigate("/home/cart",{state:{allPlants}})}} */}
//           <div className="flex gap-10  justify-center items-center mt-10">
           
//           {/* {allPlants.map((e,i)=>{
//       return(
//         <div key={i}>
         
//          <button  onClick={()=>{
//               // setCartData(ele)
//               // setIsCartTrue(true)
//               addToCart(e);
            
//              }} style={{height:"30px",width:"90px"}}>Add to Cart</button>

//         </div>
//       )
//      })} */}
            
//             <button onClick={()=>{addToCart(allPlants)}} className="bg-green-600 text-white p-3 rounded-lg shadow-md">ADD TO CART</button>
//             <button onClick={()=>{navigate("/home/shipping")}}
//              className="bg-green-600 text-white p-3 rounded-lg shadow-md">Buy-Now</button>
//           </div>

//           <div className="flex flex-col  justify-center mx-28 w-[80%] mt-10">
//             {/* <h1 className="text-xl m-2">Requiremnent</h1>
//              <h1 className=" border-[1px] border-green-700 p-1 rounded-lg m-1 px-5   text-green-900 text-lg ">Moisture : {allPlants.moistureRequirement}</h1><BsMoisture/>
//              <h1 className="border-[1px] border-green-700 p-1 rounded-lg m-1 px-5   text-green-900 text-lg ">Soil-Type : {allPlants.soilType}</h1>
//              <h1 className="border-[1px] border-green-700 p-1 rounded-lg m-1 px-5   text-green-900 text-lg ">Season : {allPlants.season}</h1>
//              <h1 className="border-[1px] border-green-700 p-1 rounded-lg m-1 px-5   text-green-900 text-lg ">Growth-Rate : {allPlants.growthRate}</h1>
//              <h1 className="border-[1px] border-green-700 p-1 rounded-lg m-1 px-5   text-green-900 text-lg ">Pot-Size : {allPlants.potSizeRequired}</h1>
//              <h1 className="border-[1px] border-green-700 p-1 rounded-lg m-1 px-5   text-green-900 text-lg ">Genus : {allPlants.genus}</h1>
//              <h1 className="border-[1px] border-green-700 p-1 rounded-lg m-1 px-5   text-green-900 text-lg ">Local-Name : {allPlants.localName} </h1>
//              <h1 className="border-[1px] border-green-700 p-1 rounded-lg m-1 px-5   text-green-900 text-lg ">Regional-Name : {allPlants.regionalName}</h1>
//              <h1 className="border-[1px] border-green-700 p-1 rounded-lg m-1 px-5   text-green-900 text-lg ">Biological-Name : {allPlants.biologicalName}</h1>
//              <h1 className="border-[1px] border-green-700 p-1 rounded-lg m-1 px-5   text-green-900 text-lg ">Botanical-Name : {allPlants.botanicalName}</h1> */}
         
         
//            <div className=" flex justify-between border-[1px] border-green-700 p-1 rounded-lg m-1 px-5   text-green-900 text-lg ">
//            <p>Moisture : {allPlants.moistureRequirement}</p>
//            <p><BsMoisture/></p>
//            </div>
//            <div className=" flex justify-between border-[1px] border-green-700 p-1 rounded-lg m-1 px-5   text-green-900 text-lg ">
//             <p>Soil-Type : {allPlants.soilType}</p>
//             <p><GiPlantRoots/></p>
//            </div>
//            <div className=" flex justify-between border-[1px] border-green-700 p-1 rounded-lg m-1 px-5   text-green-900 text-lg ">
//            <p>Season : {allPlants.season}</p>
//            <p><TiWeatherPartlySunny/></p>
//            </div>
//            <div className=" flex justify-between border-[1px] border-green-700 p-1 rounded-lg m-1 px-5   text-green-900 text-lg ">
//            <p>Growth-Rate : {allPlants.growthRate}</p>
//            <p><GrGrow/></p>
//            </div>
//            <div className=" flex justify-between border-[1px] border-green-700 p-1 rounded-lg m-1 px-5   text-green-900 text-lg ">
//            <p>Pot-Size : {allPlants.potSizeRequired}</p>
//            <p><GiFlowerPot/></p>
//            </div>
//            <div className=" flex justify-between border-[1px] border-green-700 p-1 rounded-lg m-1 px-5   text-green-900 text-lg ">
//            <p>Genus : {allPlants.genus}</p>
//            <p></p>
//            </div>
//            <div className=" flex justify-between border-[1px] border-green-700 p-1 rounded-lg m-1 px-5   text-green-900 text-lg ">
//            <p>Local-Name : {allPlants.localName}</p>
//            <p></p>
//            </div>
//            <div className=" flex justify-between border-[1px] border-green-700 p-1 rounded-lg m-1 px-5   text-green-900 text-lg ">
//            <p>Regional-Name : {allPlants.regionalName}</p>
//            <p></p>
//            </div>
//            <div className=" flex justify-between border-[1px] border-green-700 p-1 rounded-lg m-1 px-5   text-green-900 text-lg ">
//            <p>Biological-Name : {allPlants.biologicalName}</p>
//            <p></p>
//            </div>
//            <div className=" flex justify-between border-[1px] border-green-700 p-1 rounded-lg m-1 px-5   text-green-900 text-lg ">
//            <p>Botanical-Name : {allPlants.botanicalName}</p>
//            <p></p>
//            </div>

//           </div>
//         </div>
//       </div>

  
//       {/* Reviews Section */}

//       <h1 className="mt-28 text-3xl font-extrabold underline">Reviews : </h1>
//       <div className="w-full flex flex-wrap gap-16 p-3 mt-5 ">
//         {allPlants.reviews.map((r) => {
//           // Find the matching star object based on the rating
//           const matchedStar = star.find((s) => s.rting === String(r.rating));

//           return (
//             <div
//               key={r.id}
//               className="w-[30%] p-4 bg-slate-200 rounded-md text-black shadow-md"
//             >
//               <h1 className="text-lg font-semibold px-2">
//                 {r.username || "Anonymous"}
//               </h1>
//               {/* <p className="ml-2 text-black">
//                 <strong>Rating</strong>:{" "}
//                 {matchedStar ? (
//                   <span className="text-yellow-500">{matchedStar.stars}</span>
//                 ) : (
//                   "No rating available"
//                 )}
//               </p> */}
//                 <div className="text-2xl text-yellow-400 ]">{renderStars(r.rating)}</div>
//                <div className=" flex gap-14 p-3">
//                <p className="flex gap-2"><BiSolidLike/>{r.likes}</p>
//                <p className="flex gap-2"><BiSolidDislike/>{r.dislikes}</p>
//                </div>
             
//               <p className="ml-4 text-black">
//                 <strong>Comment</strong>: {r.comment || "No comment provided"}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default PlantDescription;

























































{/*
  "sunlightRequirement": "Full Sun",
          "moistureRequirement": "Medium",
          "soilType": "Loamy soil",
          "season": "Winter, Spring",
          "growthRate": "Moderate",
          "potSizeRequired": "Medium",
          "genus": "Rosa",
          "localName": "गुलाब (Gulab)",
          "regionalName": "गुलाब (Gulab)",
          "biologicalName": "Rosa spp.",
          "botanicalName": "Rosa hybrida",*/}


// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const PlantDescription = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   console.log(location);

//   let star = [
//     {rting : "5" ,stars : "⭐⭐⭐⭐⭐"},
//     {rting : "4" ,stars : "⭐⭐⭐⭐"},
//     {rting : "3" ,stars : "⭐⭐⭐"},
//     {rting : "2" ,stars : "⭐⭐"},
//     {rting : "1" ,stars : "⭐"}
    
//   ]
  
//   // Retrieve the plant data from the navigation state
//   const { allPlants } = location.state || {};
//   console.log(allPlants.reviews);
  

//   if (!allPlants) {
//     return <div className="text-center mt-6">No plant data available!</div>;
//   }

//   return (
//     <div>
//     <div className="p-6">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 px-4 py-2 bg-gray-100 text-gray-800 rounded-md shadow hover:bg-gray-200"
//       >
//         Back
//       </button>

//       <div className="flex lg:flex-row gap-8">
//       {/* Secondary Images */}
//       {allPlants.secondaryImages && allPlants.secondaryImages.length > 0 && (
//             <>
//               {/* <h2 className="text-xl font-bold mb-4">Additional Images</h2> */}
//               <div className="flex gap-4 flex-col">
//                 {allPlants.secondaryImages.map((img, index) => (
//                   <img
//                     key={index}
//                     src={img}
//                     onClick={()=>{
                       
//                     }}
//                     alt={`Secondary ${index + 1}`}
//                     className="w-32 h-32 rounded-lg shadow-md"
//                   />
//                 ))}
//               </div>
//             </>
//           )}
//           </div>
//         {/* Primary Image */}
//         <div className="lg:w-1/2 w-full">
//           <img
//             src={allPlants.primaryImage }
//             // src={image}
//             alt={allPlants.name}
//             className="rounded-lg shadow-md"
//           />
//         </div>

//         {/* Details Section */}
//         <div className="lg:w-1/2 w-full">
//           <h1 className="text-2xl font-bold mb-4">{allPlants.name}</h1>
//           <p className="text-green-700 text-lg font-bold mb-2">
//             Price: ₹{allPlants.price}
//           </p>
//           <p className="text-gray-600 mb-6">{allPlants.description}</p>
//          </div>

//          <div className="w-full flex flex-wrap gap-16 p-3 mt-5">
//        {allPlants.reviews.map((r) => {
//     // Find the matching star object based on the rating
//     const matchedStar = star.find((s) => s.rting === String(r.rating));

    
//       <div key={r.id} className="w-[30%] p-4 bg-slate-200 rounded-md text-black shadow-md">
//         <h1 className="text-lg font-semibold px-2">{r.username || "Anonymous"}</h1>
//         <p className="ml-2 text-black">
//           <strong>Rating</strong> :{" "}
//           {matchedStar ? (
//             <span className="text-yellow-500">{matchedStar.stars}</span>
//           ) : (
//             "No rating available"
//           )}
//         </p>
//         <p className="ml-4 text-black">
//           <strong>Comment</strong> : {r.comment || "No comment provided"}
//         </p>
//       </div>
  
 
//   }
//   </div>
//   )}

// export default PlantDescription;


{/* //</div> */}

{/* 

  );
}; */}





// {/*const Ratings = ({ rating }) => {
//   const totalStars = 5;
//   const fullStars = Math.floor(rating); // Number of fully filled stars
//   const fractionalStar = rating % 1; // Fractional part (e.g., 0.7)
//   const emptyStars = totalStars - Math.ceil(rating); // Remaining empty stars

//   return (
//     <div className="flex items-center">
//       // {/* Fully Filled Stars */}
//       {[...Array(fullStars)].map((_, index) => (
//         <MdStar key={index} className="text-yellow-600 text-lg" />
//       ))}

//       // {/* Fractional Star */}
//       {fractionalStar > 0 && (
//         <FractionalStar fillPercentage={fractionalStar * 100} />
//       )}

//       // {/* Empty Stars */}
//       {[...Array(emptyStars)].map((_, index) => (
//         <MdStarBorder key={index} className="text-gray-400 text-lg" />
//       ))}

//       // {/* Numerical Rating */}
//       <span className="ml-2 text-gray-600 text-sm">
//         {rating.toFixed(1)} / 5.0
//       </span>
//     </div>
//   );
// };*/}






























{/* // import React from 'react'
// import { useLocation } from 'react-router-dom'
// import ProductDetails from '../../productDetails/ProductDetails'

// const PlantDescription = () => { */}

{/* //  let location = useLocation([])
// // // //  console.log(location);
// // // //  let {allPlants} = location.state ;
// // // // console.log(allPlants);


// const image = location.state; // Access the state data passed via Link
// console.log(image);


//   if (!image) { */}
{/* 
/     return <p>No image data available! Please navigate from the Image List page.</p>;
//   }


 
 
//  return (
//    <div>
// <h1>Image Detail</h1>
// <h3>Description:</h3>


// <h3>Primary Image:</h3>
// <img
//   src={image.primaryImage}
//   alt="Primary"
//   style={{ width: "300px", display: "block", marginBottom: "20px" }}
// />

// <h3>Secondary Images:</h3>
// <div style={{ display: "flex", gap: "10px" }}>
//   {image.secondaryImages.map((secImg, index) => (
//     <img
//       key={index}
//       src={secImg}
//       alt={`Secondary ${index + 1}`}
//       style={{ width: "150px" }}
//     />
//   ))}
// </div>
// </div>
//  )

// return(
//   <ProductDetails/>
// )
// }


// export default PlantDescription



// import React from "react";
// import { useLocation } from "react-router-dom";

// const ImageDetail = () => {
//   const location = useLocation(); // Retrieve the location object
//   const image = location.state; // Access the state data passed via Link

//   if (!image) {
//     return <p>No image data available! Please navigate from the Image List page.</p>;
//   }

//   return (
//     <div>
//       <h1>Image Detail</h1>
//       <h3>Description:</h3>
//       <p>{image.description}</p>

//       <h3>Primary Image:</h3>
//       <img
//         src={image.primaryImage}
//         alt="Primary"
//         style={{ width: "300px", display: "block", marginBottom: "20px" }}
//       />

//       <h3>Secondary Images:</h3>
//       <div style={{ display: "flex", gap: "10px" }}>
//         {image.secondaryImages.map((secImg, index) => (
//           <img
//             key={index}
//             src={secImg}
//             alt={`Secondary ${index + 1}`}
//             style={{ width: "150px" }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };


{/* <div className="w-full flex flex-wrap gap-16 p-3  mt-5">
  {allPlants.reviews.map((r) => (
    <div key={r.id} className=" w-[30%] h-30   p-4 bg-slate-200 rounded-md  text-black">
      <h1 className="text-lg font-semibold text-black px-2">{r.username || "Anonymous"}</h1>
      {/* <p className="ml-2 text-black"><strong>Rating</strong>  : {r.rating ? ` ${r.rating}` : "No rating"}</p> 
      <p className="ml-2 text-black"><strong>Rating</strong>  :{Array.isArray(star) && star.map(({rting,stars},index)=>{
           return(
              <p key={index}>
                {stars}
              </p>
           )
      })}</p>
      <p className="ml-4 text-black"><strong>Comment</strong> : {r.comment || "No comment provided"}</p>
    </div>
  ))}
</div> */}

 {/* Secondary Images
          {allPlants.secondaryImages && allPlants.secondaryImages.length > 0 && (
            <>
              <h2 className="text-xl font-bold mb-4">Additional Images</h2>
              <div className="flex gap-4 flex-wrap">
                {allPlants.secondaryImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Secondary ${index + 1}`}
                    className="w-32 h-32 rounded-lg shadow-md"
                  />
                ))}
              </div>
            </>
          )} */}
      
      // </div>
          {/* </div>
           <div className="w-full  bg-green-500">
               {allPlants.reviews.map((r,i)=>{
                 return(
                   <div key={i} className="  h-10 flex  flex-wrap my-4 bg-slate-600">
                      <h1>{r.username}</h1>
                      <p>{r.rating}</p>
                      <p>{r.comment}</p>
                   </div>
                 )
               })}
             </div> */}

// export default ImageDetail;




 