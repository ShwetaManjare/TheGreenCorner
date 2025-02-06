 
//  const CartSummary = () => {
//     return (
//       <div className="bg-gray-100 rounded-md p-4 md:sticky top-0  ">
//         <div className="flex border border-blue-600 overflow-hidden rounded-md">
//           <input
//             type="text"
//             placeholder="Promo code"
//             className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
//           />
//           <button
//             type="button"
//             className="flex items-center justify-center font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 px-4 text-sm text-white"
//           >
//             Apply
//           </button>
//         </div>
  
//         <ul className="text-gray-800 mt-8 space-y-4">
//           <li className="flex flex-wrap gap-4 text-base">
//             Discount <span className="ml-auto font-bold">₹0.00</span>
//           </li>
//           <li className="flex flex-wrap gap-4 text-base">
//             Shipping <span className="ml-auto font-bold">₹2.00</span>
//           </li>
//           <li className="flex flex-wrap gap-4 text-base">
//             Tax <span className="ml-auto font-bold">₹4.00</span>
//           </li>
//           <li className="flex flex-wrap gap-4 text-base font-bold">
//             Total <span className="ml-auto">₹52.00</span>
//           </li>
//         </ul>
  
//         <div className="mt-8 space-y-2">
//           <button
//             type="button"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
//           >
//             Checkout
//           </button>
//         </div>
//       </div>
//     );
//   };
  

//   export default CartSummary;



import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CartSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, total } = location.state || { cart: [], total: 0 };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Billing Details</h2>
      
      <div className="bg-white p-4 rounded-md shadow-md">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between py-2">
            <span>{item.name} x {item.quantity}</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 text-lg font-bold">Total Amount: ₹{total.toFixed(2)}</div>

      <button onClick={() => alert("Order Confirmed!")} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md mt-6">
        Confirm Order
      </button>

      <button onClick={() => navigate("/cart")} className="w-full bg-gray-500 text-white py-2 px-4 rounded-md mt-2">
        Back to Cart
      </button>
    </div>
  );
};

export default CartSummary;

