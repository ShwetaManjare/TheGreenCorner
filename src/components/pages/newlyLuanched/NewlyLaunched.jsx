// import React, { useContext, useEffect, useState } from 'react'
// import { plantContext } from '../../context/AppContext'
// import axios from 'axios'


// const NewlyLaunched = () => {
// return (
//   <div className="bg-[#F5F5F5] rounded-lg w-[90%] mx-auto my-8 p-6 shadow-lg">
//     <h1 className="text-3xl font-bold text-center text-[#21543D] mb-6">
//       Newly Launched Products
//     </h1>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {[
//         { img: "https://nurserylive.com/cdn/shop/products/nurserylive-g-snake-plant-sansevieria-trifasciata-sansevieria-zeylanica-plant_600x600.jpg?v=1635748577", title: "Product 1" },
//         { img: "https://nurserylive.com/cdn/shop/products/nurserylive-g-plants-money-plant-golden-scindapsus-golden-plant-998668_600x600.jpg?v=1684934974", title: "Product 2" },
//         { img: "https://nurserylive.com/cdn/shop/products/nurserylive-g-plants-rubber-tree-rubber-plant-ficus-elastica-plant_600x600.jpg?v=1680766173", title: "Product 3" },
//         { img: "https://nurserylive.com/cdn/shop/products/nurserylive-g-chlorophytum-spider-plant-plant_6c3477e8-39ca-4d4b-b51a-1f9fb435ac17_600x600.jpg?v=1634216138", title: "Product 4" },
//       ].map((product, index) => (
//         <div
//           key={index}
//           className= " bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
//         >
        
//          <img
//             src={product.img}
//             alt={product.title}
//             className=" w-full h-42 object-contain rounded-lg shadow-sm p-8"
//           />
//           {/* <div className=' relative top-2 w-10  h-10 rounded-2xl border-[2px] border-black'></div> */}
         
//           <div className="p-5 m-3">
//             <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
//             <p className="text-sm text-gray-600 mt-2">
//               A short description of the product.
//             </p>
//             <button className="mt-4 w-full bg-[#21543D] text-white py-2 px-4 rounded-lg hover:bg-[#1A4031] transition">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );


// }

// export default NewlyLaunched







/*
     let { allPlants } = useContext(context);
  console.log(allPlants);
  const displayedPlants = Array.isArray(allPlants)
    ? allPlants.slice(6, 10)
    : [];
  console.log(displayedPlants);

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Heading 
      <h2 className=" text-green-800 text-2xl sm:text-3xl font-bold  mb-8">
        Newly Launched
      </h2>

      {/* Grid for displaying plants 
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {displayedPlants.map((plant) => (
          <Card key={plant.id} plant={plant} />
        ))}
      </div>

      {/* See All Products link 
      <div className="mt-8 text-center">
        <Link
          to="/plants"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 text-base sm:text-lg lg:text-xl"
        >
          See All Products
        </Link>
      </div>
    </div>

*/









import React from "react";

const NewlyLaunched = () => {
  return (
    <div className="bg-[#F5F5F5] rounded-lg w-[90%] mx-auto my-8 p-6 shadow-lg">
      <h1 className="text-3xl font-bold text-center text-[#21543D] mb-6">
        Newly Launched Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          { img: "https://images.pexels.com/photos/3110998/pexels-photo-3110998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Swiss Cheese Plant", info:"Improve air quality"},
          { img: "https://cdn.prod.website-files.com/5e04f30e0b1ac58935eb5972/629b690ed174c62e88982197_istockphoto-1268045137-612x612.jpg", title: "Dracaena Trifasciata", info:"Removes toxins & pollutants from air" },
          { img: "https://img.crocdn.co.uk/images/affiliates/image-archive/merch/articles/flowerhouse/article_flowerhouse_header_640x530_v1.jpg", title: "Anthurium" , info:"Reducing indoor air pollution"},
          { img: "https://paradisescapes.com/wp-content/uploads/2024/02/Peacock-Plant-Indoor-Low-Light-Plants.png", title: "Peacock Plant" , info:"Air-Purifying Benifits" },
        ].map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-[60%] object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
              {/* <p className="text-sm text-gray-600 mt-2">
                A short description of the product.
              </p> */}
              <h3 className="text-gray-700">{product.info}</h3>
              <button className="mt-4 w-full bg-[#21543D] text-white py-2 px-4 rounded-lg hover:bg-[#1A4031] transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewlyLaunched;
    