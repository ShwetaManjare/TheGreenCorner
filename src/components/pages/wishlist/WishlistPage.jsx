// import React, { useContext } from "react";

// import { FaTrashAlt } from "react-icons/fa";
// import { WishListContext } from "./WishListContext";

// const WishlistPage = () => {
//   const { wishlist, removeFromWishlist } = useContext(WishListContext);  // Access wishlist context

 
//   return (
  

//     <div>
//       <h2 className="text-3xl font-bold m-10 text-green-700">Shopping Cart</h2>
//       <div className=" flex flex-wrap gap-8  m-5">
//         {wishlist.length ===0? (<p>Your wishlist is empty</p>):(
//           wishlist.map((item)=>{
//             return(
//               <div key={item.id} className="w-[18%] bg-zinc-200 rounded-lg shadow-lg p-5 overflow-auto flex flex-col justify-center items-center">
//               <img src={item.primaryImage} alt="" className="rounded-lg shadow-md mb-4 cursor-pointer" />
//             <h1 className="text-lg font-semibold">{item.name}</h1>
//             <p className="text-green-700 font-bold">Price : ₹ {item.price}</p>
            
//             <button
//             onClick={() => removeFromWishlist(item.id)}
//             className="bg-red-500 text-white py-2 px-2 mt-4 rounded-md hover:bg-red-600">
//             <span className="flex gap-2">
//                 <p className="py-1"> <FaTrashAlt/></p>
//                 <p> Remove from Wishlist</p>
//             </span>
//           </button>
//           </div>
              
//             )
//           })
//         )}
//       </div>
//      </div>
//   );
// };

// export default WishlistPage;











import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { WishListContext } from "./WishListContext";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useContext(WishListContext);  // Access wishlist context

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">Shopping Cart</h2>
      <div className="flex flex-wrap gap-8 justify-center px-5">
        {wishlist.length === 0 ? (
          <p className="text-lg font-semibold text-gray-600">Your wishlist is empty</p>
        ) : (
          wishlist.map((item) => {
            return (
              <div
                key={item.id}
                className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%] bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out p-5 flex flex-col justify-center items-center"
              >
                <img
                  src={item.primaryImage}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer transition-transform duration-300 transform hover:scale-105"
                />
                <h1 className="text-lg font-semibold text-center text-gray-800 mb-2">{item.name}</h1>
                <p className="text-green-700 font-bold mb-4">Price: ₹ {item.price}</p>

                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="bg-red-500 text-white py-3 px-5 rounded-lg hover:bg-red-600 focus:outline-none transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
                >
                  <FaTrashAlt className="text-lg" />
                  <span className="text-md">Remove from Wishlist</span>
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
