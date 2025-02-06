import axios from 'axios';
import React, { useState } from 'react'

import Navbar from '../../utils/navbar/Navbar';
import Footer from '../../utils/navbar/footer/Footer';
import { useNavigate } from 'react-router-dom';
import { MdAlternateEmail } from 'react-icons/md';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

   let plant1 = 'https://www.ugaoo.com/cdn/shop/files/DSC_3273.jpg?v=1695228127&width=750'
   

   let[show,setShow]=useState(false)

    let navigate = useNavigate()
  
   let[formData,setFormData]=useState({
     email :'',
     password :''
   })


   let handleChange = (e)=>{
    
     setFormData({...formData,[e.target.name]:e.target.value
     })
     console.log(formData)
    }
  

     let handleClick = (e)=>{ 
        e.preventDefault()

      axios.get("http://116.75.62.44:8000/auth").then((resp)=>{
        console.log(resp);
        const exists = resp.data.some((user)=>{return user.email == formData.email && user.password == formData.password}
      )

      if(exists){
        navigate("/home");
        alert("Login successfull")
       }else{
        alert("Invalid credentials")
       }
   }).catch((error)=>{
    console.log("Error Fetching data : ",error);
    
   })

  
  }

    
return(
  <>
  {/* <div className="flex flex-col ">
        <Navbar /> */}
       
        <div >
          <div className='w-[40%]  mx-32 rounded-lg  '>
          <img
            className="    object-cover" 
            // src='https://img.freepik.com/free-photo/view-green-palm-tree-species-with-beautiful-foliage_23-2151486605.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_incoming'
             src='https://www.ugaoo.com/cdn/shop/files/DSC_3273.jpg?v=1695228127&width=750'
          ></img>
          </div>
       <div className="absolute  md:top-40 md:right-30 sm:top-10 sm:right-10 md:min-h-[50vh] md:min-w-[50vw] flex items-center justify-center  ">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Sign In
              </h2>
              <form  >
                {/* Email Input */}
                <div className="mb-4 ">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email Address
                  </label>
                 <div className='flex '>
                 <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    
                  />
                  <MdAlternateEmail className='-ml-10 my-3'/>
                 </div>
                </div>
                {/* Password Input */}
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Password
                  </label>
                 <div className='flex '>
                 <input
                    type={show ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                
                  <div 
                        onClick={() => setShow(!show)} 
                         className='-ml-10 my-3  cursor-pointer'
                      >
                        {show ? (
                          <IoEyeOutline  />
                        ) : (
                          <IoEyeOffOutline  />
                        )}
                      </div>
                  
                 
                 </div>
                
                </div>
                {/* Submit Button */}
                <div className="mb-4">
                  <button
                    type="submit"
                    onClick={handleClick}
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                   Login
                  </button>
                </div>
                {/* Divider */}
                <div className="flex items-center justify-between my-4">
                  <hr className="w-1/4 border-gray-300" />
                  <span className="text-gray-500 text-sm">or</span>
                  <hr className="w-1/4 border-gray-300" />
                </div>
                {/* Social Sign-In */}
                <div className="text-center">
               
                 
                    <button
        type="button"
        className="flex items-center justify-center w-full bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
      >
        {/* Google Icon */}
        <FcGoogle className="mr-3 text-xl" />
        Sign In with Google
      </button>
                </div>
              </form>
              {/* Bottom Link */}
              <p className="text-center text-gray-600 mt-4 text-sm">
                Don’t have an account?{" "}
                <a
                  href="/home/signup"
                  className="text-blue-500 hover:underline font-medium"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      {/* </div>
    
    <Footer/>
   */}
</>
 )

  }
 export default Login



