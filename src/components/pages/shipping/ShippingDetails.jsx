   
import React from "react";
import { FaApplePay, FaGoogle, FaGooglePay } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdPayment } from "react-icons/md";
import { SiPaytm } from "react-icons/si";
import Footer from "../../utils/navbar/footer/Footer";
import Navbar from "../../utils/navbar/Navbar";

let ShippingDetails = ()=> {
  return (
    
    
    <div className="flex flex-row  w-[100vw] mt-10">
      {/* Left Section: Shipping Address */}
      <div className="  bg-white p-8 rounded-2xl shadow-lg md:mr-6 w-[60%]  mb-20  ">
        <div className="mb-4 text-sm text-gray-500">
          <span className="">Plants</span> / <span className="">Flowers</span> / Cart / Shipping
        </div>
        <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
        <form className="space-y-4">
          <div className="">
            <input
              type="text"
              placeholder="Country / Region"
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            
          </div>

           <div className=" flex gap-10">
           <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
           </div>
          <input
            type="text"
            placeholder="Company"
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Address"
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Apartment, suite, etc"
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Phone"
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="button"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
          >
            Save Address
          </button>
        </form>

      </div>

      
        {/* Right Section: Order Summary */}
        <div className=" bg-white p-6 rounded-2xl shadow-lg mt-10 md:mt-0 w-[30%] mb-20  ">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-4 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span></span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>₹ </span>
          </div>
          <div className="mt-4">
            <label htmlFor="promo" className="block text-gray-500 mb-2">
              Have a Promo Code?
            </label>
            <input
              id="promo"
              type="text"
              placeholder="Enter promo code"
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="button"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 mt-4"
          >
            Payment
          </button>
          <div className="mt-4 text-sm text-gray-500 ">Pay via:</div>
          <div className="flex space-x-4 mt-2">
            {/* <img src="/gpay-icon.png" alt="GPay" className="w-8 h-8" />
            <img src="/apple-pay-icon.png" alt="Apple Pay" className="w-8 h-8" />
            <img src="/paytm-icon.png" alt="Paytm" className="w-8 h-8" />
            <img src="/card-icon.png" alt="Card" className="w-8 h-8" /> */}
           <div className="flex px-3 border-[1px] p-1 py-3 rounded-md">
           <p className="text-xl p-0"> <FcGoogle/></p>
           <p>Pay</p>
           </div>
           <div className="px-3 border-[1px] p-1 rounded-md"> 
           <p className="text-4xl"><FaApplePay/></p>
           </div>
           <div className="px-3 border-[1px] text-4xl p-1 rounded-md">
            <SiPaytm/>
           </div>
           <div className="px-3 border-[1px] text-3xl p-1 rounded-md">
            <MdPayment/>
           </div>
          </div>
        </div>
      </div>

      
    </div>
   
    
  );
}

export default ShippingDetails
