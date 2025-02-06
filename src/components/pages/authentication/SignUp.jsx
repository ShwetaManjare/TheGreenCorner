// import axios from 'axios';
// import React, { useReducer, useState } from 'react';
// import Navbar from '../../utils/navbar/Navbar';
// import Footer from '../../utils/navbar/footer/Footer';
// import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
// import { MdAlternateEmail } from 'react-icons/md';
// import { TiContacts } from 'react-icons/ti';
// import { AiOutlineUser } from 'react-icons/ai';
// import { FcGoogle } from 'react-icons/fc';

// const SignUp = () => {
//   const [show, setShow] = useState(false);

//   const initialState = {
//     username: '',
//     password: '',
//     email: '',
//     contact: '',
//     userId: Date.now(),
//   };

//     let[isValidatePassword ,setValidatePassword] = useState({
//      uppercase : false ,
//       lowercase : false,
//       digit : false ,
//       splCharacter : false ,
//       minLength : false

//     })

//     let[isTyping , setIsTyping]=useState(false)

//   // Reducer function to handle state updates
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case 'addUser':
//         return {
//           ...state,
//           [action.name]: action.value, // Set field value dynamically
//         };
//         case 'isAdmin':
//           return{
//             ...state,
//             isAdmin:action.value, //Directly update isAdmin
//           }
//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);
//   const handleChange = (e) => {

//     dispatch({ type: 'addUser', name: e.target.name, value: e.target.value });

//     const value = e.target.value;
//   }
//   // Handle changes in input fields
//   const handleChange1 = (e) => {

//     dispatch({ type: 'addUser', name: e.target.name, value: e.target.value });

//     const value = e.target.value;

//     // Initialize a new validation object
//     let newValidation = {
//       uppercase: false,
//       lowercase: false,
//       splCharacter: false,
//       digit: false,
//       minLength: false
//     };

//     // Check if password contains at least one uppercase letter
//     if (/[A-Z]/.test(value)) {
//       newValidation.uppercase = true;
//     }

//     // Check if password contains at least one lowercase letter
//     if (/[a-z]/.test(value)) {
//       newValidation.lowercase = true;
//     }

//     // Check if password contains at least one special character
//     if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
//       newValidation.splCharacter = true;
//     }

//     // Check if password contains at least one digit
//     if (/\d/.test(value)) {
//       newValidation.digit = true;
//     }

//     // Check if password length is at least 8 characters
//     if (value.length >= 8 && value.length <=16) {
//       newValidation.minLength = true;
//     }

//     // Update the validation state
//     setValidatePassword(newValidation);

//   };
//   const allValid = Object.values(isValidatePassword).every(Boolean);

//   if(name=="password"){
//     setIsTyping(value.length > 0 )
//   }

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Prepare data to send to the server
//     const objToPost = {
//       username: state.username,
//       password: state.password,
//       email: state.email,
//       contact: state.contact,
//       userId: state.userId,
//     };

//     // Send POST request
//     axios
//       .post('http://116.75.62.44:8000/addUser', objToPost)
//       .then((response) => {
//         console.log('User added successfully', response);
//         // Handle success here (e.g., show success message or redirect)
//       })
//       .catch((error) => {
//         console.error('Error adding user:', error);
//         // Handle error here (e.g., show error message)
//       });
//   };

//   return (
//     <>

//         {/* <div className="flex flex-col">
//         <Navbar /> */}

//         <div>
//          <div className=' w-[40%] rounded-xl  mx-36  '>
//          <img
//             className="   bg-cover  rounded-lg"
//             // src='https://img.freepik.com/premium-photo/tree-leaves-pot-plain-color-background_1010720-22143.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_incoming'
//             src="https://cdn.pixabay.com/photo/2017/08/23/11/59/chickasha-pong-2672717_640.jpg"
//           ></img>
//          </div>
//        <div className="absolute  md:top-28 md:right-30 sm:top-10 sm:right-10 md:min-h-[50%] md:min-w-[50%] flex items-center justify-center ">
//             <div className="bg-white  rounded-lg shadow-xl w-full max-w-md py-4">
//             <h2 className="text-2xl font-bold text-center text-gray-800 ">
//                 Sign Up
//               </h2>
//             <form className='p-2'
//           onSubmit={handleSubmit}

//         >
//           {/* Username Input */}
//          <div className="mb-4">
//          <label
//                   htmlFor="username"
//                   className="block text-gray-700 font-semibold mb-2 px-2"
//                 >
//                 Username

//          </label>
//          <div className='flex '>
//          <input
//             required
//             type="text"
//             name="username"
//             value={state.username} // Use `state.username` here
//             placeholder="Enter Your Username"
//             className="w-full px-4 py-2  border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             onChange={handleChange}
//           />
//           <AiOutlineUser className='-ml-10 my-3'/>
//          </div>
//          </div>

//           {/* Password Input */}
//           <div className="mb-4">
//           <label
//                   htmlFor="password"
//                   className="block text-gray-700 font-semibold mb-2 px-2"
//                 >
//                 Password
//                 </label>
//                 <div className='flex ' >
//           <input
//             required
//             type={show ? "text" : "password"}
//             name="password"
//             value={state.password}
//             placeholder="Enter Your Password"
//            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             onChange={handleChange1}
//           />
//           <div
//                   onClick={() => setShow(!show)}
//                    className='-ml-10 my-3  cursor-pointer'
//                 >
//                   {show ? (
//                     <IoEyeOutline  />
//                   ) : (
//                     <IoEyeOffOutline  />
//                   )}
//                 </div>

//                  </div>

//           </div>

//           {/* Email Input */}
//          <div className="mb-4">
//          <label
//                   htmlFor="email"
//                   className="block text-gray-700 font-semibold mb-2 px-2"
//                 >
//                   Email Address
//                 </label>
//                 <div className='flex '>
//          <input
//             required
//             type="email"
//             name="email"
//             value={state.email} // Use `state.email` here
//             placeholder="Enter Your Email"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             onChange={handleChange}
//           />
//                <MdAlternateEmail className='-ml-10 my-3'/>
//           </div>
//          </div>

//           {/* Contact Input */}
//           <div className="mb-4">
//           <label
//                   htmlFor="contact"
//                   className="block text-gray-700 font-semibold mb-2 px-2"
//                 >
//                  Contact
//                 </label>
//                 <div className='flex'>
//           <input
//             required
//             type="text"
//             name="contact"
//             value={state.contact} // Use `state.contact` here
//             placeholder="Enter Your Contact Number"
//           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             onChange={handleChange}
//           />
//              <TiContacts className='-ml-10 my-3'/>
//             </div>
//             {/* Admin */}

//             <div className='mt-1 mx-6'>
//               <input
//               type='checkbox' 
//               id='admin'
//               checked={state.isAdmin}
//               onChange={(e)=> dispatch({type:"isAdmin", value:e.target.checked})}></input>
//               <label htmlFor="admin">Are you Admin </label>

//             </div>
//           </div>
//          <div className="mb-4">
//          <button
//             type="submit"
//             className=" bg-blue-500 text-white font-semibold w-[80%] p-2 mx-10  rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Sign Up
//           </button>
//          </div>
//         </form>
//         <div className="flex items-center justify-between ">
//                 <hr className="w-1/3 border-gray-300" />
//                 <span className="text-gray-500 text-sm">or</span>
//                 <hr className="w-1/3 border-gray-300" />
//               </div>
//               <button
//                 type="button"
//                 className=" m-2 bg-gray-100 py-2 px-32 gap-3  text-gray-800 font-semibold rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex justify-center  "
//               >
//               <FcGoogle className="text-xl my-1" />
//                 Sign In with Google
//               </button>
//               <div className='mt-1'>
//               <p className="text-center text-gray-600 text-sm">
//                 Already have an account?{" "}
//                 <a
//                   href="/home/login"
//                   className="text-blue-500 hover:underline font-medium  "
//                 >
//                   SignIn
//                 </a>
//               </p>
//               </div>
//             </div>
//             {state.password.length > 0 && !allValid &&

//                <div className='mx-3 p-2 border-[1px] border-black rounded-lg'>
//              <ul >
//                <li className={isValidatePassword.uppercase ? "text-green-600":"text-red-600"}>at least one uppercase letter</li>
//                <li className={isValidatePassword.lowercase ? "text-green-600":"text-red-600"}>at least one lowercase letter</li>
//                <li className={isValidatePassword.splCharacter ? "text-green-600":"text-red-600"}>at least one specialCharacter letter</li>
//                <li className={isValidatePassword.digit ? "text-green-600":"text-red-600"}>at least one digit letter</li>
//                <li className={isValidatePassword.minLength ? "text-green-600":"text-red-600"}>at least 8 letters</li>
//              </ul>
//             </div>

//            }
//           </div>
//         </div>

//       {/* </div>

//       <Footer /> */}
//     </>
//   );
// };

// export default SignUp;









import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import leafImg from "../../../assets/leaf.jpg";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    contact: "",
    password: "",
    showPassword: false,
    isAdmin: false
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, contact, password, isAdmin } = formData;

    if (!username || !email || !contact || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await axios.post("http://116.75.62.44:8000/adduser", {
        username,
        email,
        contact,
        password,
        isAdmin
      });

      if (response.data.success) {
        alert("Signup successful!");``
        navigate("/");
      } else {
        setError(response.data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Signup Successful");
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 px-4">
      <div className="flex flex-row bg-white rounded-3xl shadow-2xl w-full max-w-4xl h-[85vh] overflow-hidden">

        {/* Left Section: Form */}
        <div className="w-1/2 flex flex-col justify-center px-8">
          <h1 className="text-3xl font-semibold text-gray-900">Create an account</h1>
          <p className="text-gray-600 mt-2">Enter your details to create your account</p>

          <form onSubmit={handleSubmit} className="w-full mt-4 space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                Contact
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your contact number"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={formData.showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute right-3 top-3 text-gray-500"
                >
                  {formData.showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>} 
            <label htmlFor="admin">Are you admin</label> &nbsp;
            <input type="checkbox" id="admin" name="isAdmin" onChange={(e)=>{
              setFormData({ ...formData, isAdmin : e.target.checked });
            }} />

            <button
              type="submit"
              className="w-full bg-[#182a0b] text-white py-3 rounded-lg hover:bg-[#457622] transition duration-200"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-600 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
            >
              Login
            </a>
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="w-1/2 flex justify-center items-center overflow-hidden">
          <img
            src="https://kyari.co/cdn/shop/files/1_f83af7ea-60fe-4e49-9e54-e9901ded31ab.jpg?crop=center&height=1008&v=1736768892&width=840"
            alt="Leaf"
            className="w-full h-full object-cover rounded-tl-2xl rounded-bl-2xl"
          />
        </div>

      </div>
    </div>
  );
};

export default SignUp;
