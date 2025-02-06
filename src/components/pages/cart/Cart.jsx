


import { useCart } from "../cart/CartContext";  // Import useCart
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";


const Cart = () => {

  
  const { cart, dispatch } = useCart();

  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  // const handleClearCart = () => {
  //   dispatch({ type: "CLEAR_CART" });
  // };

  return (
   

     <div>
      <h2 className="text-3xl font-bold m-10 text-green-700">Shopping Cart</h2>
      <div className=" flex flex-wrap gap-8  m-5">
        {cart.length ===0? (<p>Your cart is empty</p>):(
          cart.map((item)=>{
            return(
              <div key={item.id} className="w-[18%] bg-zinc-200 rounded-lg shadow-lg p-5 overflow-auto flex flex-col justify-center items-center">
              <img src={item.primaryImage} alt="" className="rounded-lg shadow-md mb-4 cursor-pointer" />
            <h1 className="text-lg font-semibold">{item.name}</h1>
            <p className="text-green-700 font-bold">Price : ₹ {item.price}</p>
            
            <button
              className="bg-red-600 text-white p-1 px-2 my-2 rounded-lg "
              // onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </button>
            {/* <button onClick={handleClearCart}>Clear Cart</button> */}
          </div>
              
            )
          })
        )}
      </div>
 <CartItems></CartItems>
 <CartSummary></CartSummary>
     </div>
  );
};

export default Cart;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Navigate to billing page
// import { CartContextState, useCart } from "../cart/CartContext";
// const Cart = () => {
//   const navigate = useNavigate();

//   // const [cart, setCart] =useCart()
//   const { cart, dispatch } = useCart();
//   const [coupon, setCoupon] = useState("");
//   const [discount, setDiscount] = useState(0);
//   const shippingCharge = 50;
//   const taxRate = 0.05;
//   const [total, setTotal] = useState(0);

//   // Function to remove an item from the cart
//   const removeItem = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   // Function to update quantity
//   const updateQuantity = (id, newQuantity) => {
//     setCart(
//       cart.map((item) =>
//         item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
//       )
//     );
//   };

//   // Apply Coupon
//   const applyCoupon = () => {
//     if (coupon === "PLANT10") {
//       setDiscount(10);
//     } else if (coupon === "PLANT20") {
//       setDiscount(20);
//     } else {
//       setDiscount(0);
//       alert("Invalid Coupon Code");
//     }
//   };

//   // Calculate totals
//   useEffect(() => {
//     const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     const discountAmount = (subtotal * discount) / 100;
//     const taxAmount = (subtotal - discountAmount) * taxRate;
//     const grandTotal = subtotal - discountAmount + taxAmount + shippingCharge;
//     setTotal(grandTotal);
//   }, [cart, discount]);

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-md shadow-md">
//       <h2 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h2>

//       {cart.length === 0 ? (
//         <p className="text-center text-gray-600">Your cart is empty.</p>
//       ) : (
//         <>
//           {/* Cart Items */}
//           <div className="bg-white p-4 rounded-md shadow-md">
//             {cart.map((item) => (
//               <div key={item.id} className="flex justify-between items-center border-b py-3">
//                 <span className="text-lg font-medium">{item.name}</span>
//                 <div className="flex items-center space-x-3">
//                   <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
//                   <span className="font-medium">{item.quantity}</span>
//                   <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
//                 </div>
//                 <span className="font-medium">₹{item.price * item.quantity}</span>
//                 <button className="text-red-500 hover:text-red-700" onClick={() => removeItem(item.id)}>Remove</button>
//               </div>
//             ))}
//           </div>

//           {/* Coupon Section */}
//           <div className="mt-4 flex border border-blue-600 overflow-hidden rounded-md">
//             <input type="text" placeholder="Enter Coupon Code" className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
//               value={coupon} onChange={(e) => setCoupon(e.target.value)} />
//             <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 text-sm" onClick={applyCoupon}>Apply</button>
//           </div>

//           {/* Bill Summary */}
//           <div className="bg-white p-4 mt-6 rounded-md shadow-md">
//             <h3 className="text-xl font-bold mb-4">Bill Summary</h3>
//             <ul className="text-gray-800 space-y-2">
//               <li className="flex justify-between"><span>Subtotal</span> <span>₹{cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span></li>
//               <li className="flex justify-between"><span>Discount ({discount}%)</span> <span>-₹{(cart.reduce((acc, item) => acc + item.price * item.quantity, 0) * discount / 100).toFixed(2)}</span></li>
//               <li className="flex justify-between"><span>Tax (5%)</span> <span>₹{((cart.reduce((acc, item) => acc + item.price * item.quantity, 0) - ((cart.reduce((acc, item) => acc + item.price * item.quantity, 0) * discount) / 100)) * taxRate).toFixed(2)}</span></li>
//               <li className="flex justify-between"><span>Shipping</span> <span>₹{shippingCharge}</span></li>
//               <li className="flex justify-between font-bold text-lg"><span>Total</span> <span>₹{total.toFixed(2)}</span></li>
//             </ul>
//           </div>

//           {/* Checkout Button */}
//           <button onClick={() => navigate("/billing", { state: { cart, total } })} className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md mt-6">
//             Proceed to Billing
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;

