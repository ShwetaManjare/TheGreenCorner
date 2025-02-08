// import React from "react";

// const NewlyLaunched = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-[#F5F5F5] rounded-lg w-[90%] mx-auto my-8 p-6 shadow-lg">
//       <h1 className="text-3xl font-bold text-center text-[#21543D] mb-6">
//         Newly Launched Products
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {[
//           { img: "https://images.pexels.com/photos/3110998/pexels-photo-3110998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Swiss Cheese Plant", info:"Improve air quality"},
//           { img: "https://cdn.prod.website-files.com/5e04f30e0b1ac58935eb5972/629b690ed174c62e88982197_istockphoto-1268045137-612x612.jpg", title: "Dracaena Trifasciata", info:"Removes toxins & pollutants from air" },
//           { img: "https://img.crocdn.co.uk/images/affiliates/image-archive/merch/articles/flowerhouse/article_flowerhouse_header_640x530_v1.jpg", title: "Anthurium" , info:"Reducing indoor air pollution"},
//           { img: "https://paradisescapes.com/wp-content/uploads/2024/02/Peacock-Plant-Indoor-Low-Light-Plants.png", title: "Peacock Plant" , info:"Air-Purifying Benifits" },
//         ].map((product, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
//           >
//             <img
//               src={product.img}
//               alt={product.title}
//               className="w-full h-[60%] object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
//               {/* <p className="text-sm text-gray-600 mt-2">
//                 A short description of the product.
//               </p> */}
//               <h3 className="text-gray-700">{product.info}</h3>
//               <button className="mt-4 w-full bg-[#21543D] text-white py-2 px-4 rounded-lg hover:bg-[#1A4031] transition"
//               onClick={() => navigate("/plants")}>
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewlyLaunched;
    


import React from "react";
import { useNavigate } from "react-router-dom";

const NewlyLaunched = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-[#F5F5F5] to-[#E0F7FA] rounded-lg w-[90%] mx-auto my-8 p-6 shadow-xl">
      <h1 className="text-3xl font-bold text-center text-[#21543D] mb-6 font-poppins">
        Newly Launched Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          { img: "https://images.pexels.com/photos/3110998/pexels-photo-3110998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Swiss Cheese Plant", info:"Improve air quality"},
          { img: "https://cdn.prod.website-files.com/5e04f30e0b1ac58935eb5972/629b690ed174c62e88982197_istockphoto-1268045137-612x612.jpg", title: "Dracaena Trifasciata", info:"Removes toxins & pollutants from air" },
          { img: "https://img.crocdn.co.uk/images/affiliates/image-archive/merch/articles/flowerhouse/article_flowerhouse_header_640x530_v1.jpg", title: "Anthurium" , info:"Reducing indoor air pollution"},
          { img: "https://paradisescapes.com/wp-content/uploads/2024/02/Peacock-Plant-Indoor-Low-Light-Plants.png", title: "Peacock Plant" , info:"Air-Purifying Benefits" },
        ].map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-[60%] object-cover transition-all duration-300 ease-in-out transform hover:scale-110"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
              <h3 className="text-gray-700 mt-2">{product.info}</h3>
              <button
                className="mt-4 w-full bg-[#21543D] text-white py-2 px-4 rounded-lg hover:bg-[#1A4031] transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => navigate("/plants")}
              >
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
