

// let plant ='https://img.freepik.com/free-photo/asian-gardener-woman-wearing-face-mask-apron-holding-spray-watering-green-houseplant-hand_1150-50179.jpg?t=st=1737132566~exp=1737136166~hmac=51712d90a5abece48d94a7aa49b368e54e6171c0ced726327d982070ed1c92bf&w=996'
// let plant1 ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9voZdcOzoWVwKof9Hw9UeVI_wBjvnCAOZA&s'
// let plant2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQ3QhGRe-l-yt24zmZ60L4UnyOfE-dFLAQUBk9XNxcKBjLGEg0Z2ZzhMxjd4Wo2BeE1A&usqp=CAU'
//  let plant3 ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQryhn41MDbnS_8OZnh_qdWJFjN6M8ae4ILA&s'
// let plant4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpljSPJa6bXZnwyOmXGuSdYmi_MSnmtxDgA&s'
//  let plant5 ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnriPtnAySepgWZqxgSI4llNkIUc0DW5zNA&s'
  





        
// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import { gsap } from "gsap";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";


// import { useNavigate } from 'react-router-dom';
// import NewlyLaunched from "../newlyLuanched/NewlyLaunched";



// const HeroSection = () => {
//   const heroTextRef = useRef(null);
//   const heroButtonRef = useRef(null);
//   const categoryCardsRef = useRef([]);
//   const offerSectionRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Hero Section Animation
//     gsap.fromTo(
//       heroTextRef.current,
//       { y: 80, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1.5,
//         delay: 0.3,
//         ease: "expo.out",
//       }
//     );

//     gsap.fromTo(
//       heroButtonRef.current,
//       { scale: 0.8, opacity: 0 },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 1.2,
//         delay: 0.8,
//         ease: "elastic.out(1, 0.5)",
//       }
//     );

//     // Category Cards Animation
//     gsap.fromTo(
//       categoryCardsRef.current,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.5,
//         stagger: 0.2,
//         delay: 1.5,
//         ease: "power3.out",
//       }
//     );

//     // Offer Section Animation
//     gsap.fromTo(
//       offerSectionRef.current,
//       { opacity: 0, y: 50, scale: 0.9 },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         duration: 1.4,
//         delay: 2,
//         ease: "expo.out",
//       }
//     );
//   }, []);

  

//   return (
//     <div className="bg-[#F5F5F5]">
//       {/* Hero Section */}
//       <section className="relative">
//         <Swiper
//           modules={[Pagination, Navigation, Autoplay]}
//           autoplay={{ delay: 3000 }}
//           pagination={{ clickable: true }}
//           navigation
//           loop
//           className="w-full h-[80vh]"
//         >
//           {[
//             //  "/src/assets/heroimg1.png",
//              "/src/assets/heroimg3.jpg",
//             "https://cdn.pixabay.com/photo/2023/04/30/10/05/philodendron-7960228_1280.jpg",
//             "/src/assets/Heroimg.jpg",
//             "https://ii1.pepperfry.com/assets/w23-natural-plants-banner-buying-guide.jpg",
//           ].map((image, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative w-full h-full">
//                 <img
//                   src={image}
//                   alt={`Hero Slide ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10"
//           ref={heroTextRef}
//         >
//           <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
//             <span className="text-[#e5eae4] drop-shadow-lg">The Green Corner</span>
//           </h1>
//           <p className="mt-4 text-lg md:text-xl font-light">
//             Your one-stop shop for plants, pots, and more!
//           </p>
//           <button
//             ref={heroButtonRef} 
//             onClick={() => navigate('/plants')}
//             className="mt-6 bg-[#030e09] text-white py-4 px-9 rounded-full hover:bg-[#1A4031] transition transform hover:scale-105 shadow-lg"
//           >
//             Explore More
//           </button>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="py-16 bg-white">
//         <h2 className="text-4xl font-bold text-center text-[#21543D] mb-12">
//           Explore Our Collections
//         </h2>
//         <div
//           className="flex flex-wrap justify-between gap-10 mx-auto px-6 max-w-7xl"
//           ref={(el) => {
//             categoryCardsRef.current = [];
//             if (el) {
//               Array.from(el.children).forEach((child) => categoryCardsRef.current.push(child));
//             }
//           }}
//         >
//           {[
//             { img: "src/assets/10inchplant.png", title: "10 Inches Pots" },
//             { img: "src/assets/8inchimage.png", title: "8 Inches Pots" },
//             { img: "src/assets/5inchimage.png", title: "5.5 Inches Pots" },
//             { img: "src/assets/Plantfood.png", title: "Plant Food" },
//             { img: "src/assets/plantcare.png", title: "Plant Care" },
//           ].map((item, index) => (
//             <a
//               href="#"
//               key={index}
//               className="bg-white rounded-lg shadow-md w-48 p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-transform"
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="h-36 w-auto mb-4 object-contain"
//               />
//               <h3 className="text-center text-gray-700 font-semibold text-lg">
//                 {item.title}
//               </h3>
//             </a>
//           ))}
//         </div>
//       </section> 

// <section className=' w-full flex justify-center items-center my-40 '>
//    <div className='flex space-x-20'>
//      <div  onClick={()=>{navigate("/filter")}} className='relative h-40 w-40  rounded-full border-black flex justify-center items-center'>
//        {/* Image inside the circle */}
//        <img src={plant1} alt="Icon 1" className="w-full h-full object-cover rounded-full" />
//        {/* Plant Name positioned outside the circle at the bottom */}
//        <p className='absolute bottom-[-24px] text-green-800 '>Indoor Plants</p>
//      </div>
//      <div  onClick={()=>{navigate("/plants")}} className='relative w-40 h-40  rounded-full border-black flex justify-center items-center'>
//        <img src={plant2} alt="Icon 2" className="w-full h-full object-cover rounded-full" />
//        <p className='absolute bottom-[-24px] text-green-800'>8 Inch Pots</p>
//      </div>
//      <div onClick={()=>{navigate("/plants")}} className='relative w-40 h-40 rounded-full border-black flex justify-center items-center'>
//        <img src={plant3} alt="Icon 3" className="w-full h-full object-cover rounded-full" />
//        <p className='absolute bottom-[-24px] text-green-800'>5.5 Inch Pots</p>
//      </div>
//      <div onClick={()=>{navigate("/plants")}} className='relative w-40  h-40  rounded-full border-black flex justify-center items-center'>
//        <img src={plant4} alt="Icon 4" className="w-full h-full object-cover rounded-full" />
//        <p className='absolute bottom-[-24px] text-green-800'>Plant Food</p>
//      </div>
//      <div onClick={()=>{navigate("/plants")}} className='relative w-40 h-40  rounded-full border-black flex justify-center items-center'>
//        <img src={plant5} alt="Icon 5" className="w-full h-full object-cover rounded-full" />
//        <p className='absolute bottom-[-24px] text-green-800'>Plant Care</p>
//      </div>
//    </div>
//  </section>

//       {/* Offer Section */}
//       <section
//         className="w-[90%] mx-auto my-12 py-8 bg-gradient-to-r from-[#A3D9A5] to-[#21543D] rounded-3xl text-center shadow-lg text-white"
//         ref={offerSectionRef}
//       >
//         <h1 className="text-2xl font-semibold">
//           Get <span className="font-bold text-yellow-300">20% Off</span> on orders above ₹3999!
//         </h1>
//         <p className="text-lg mt-2">Hurry! Offer valid till stocks last.</p>
//         <button onClick={()=>{
//            navigate("/plants")
//         }}
//         className="mt-6 bg-white text-[#21543D] py-2 px-6 rounded-full font-medium hover:bg-gray-100 transition shadow-md">
//           Shop Now
          
//         </button>
//       </section>

//       {/* Newly Launched Section */}
//       <NewlyLaunched />

//       {/* Shop By Categories Section */}
//       {/* <ShopByCategories /> */}
//     </div>
//   );
// };

// export default HeroSection;



import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NewlyLaunch from "../newlyLuanched/NewlyLaunched";

// import ShopByCategories from "./ShopByCategories";
import { useNavigate } from 'react-router-dom';



const HeroSection = () => {


  const heroTextRef = useRef(null);
  const heroButtonRef = useRef(null);
  const categoryCardsRef = useRef([]);
  const offerSectionRef = useRef(null);
  const navigate = useNavigate();

  const paragraphStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#333", // Dark text color
    textAlign: "center", // Align text to both sides
    padding: "20px",
    backgroundColor: "#f9f9f9", // Light background for better readability
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for styling
  };

  const features = [
    {
      icon: "🌱", // Replace this with your actual icon
      title: "Self Watering Planters",
      description: "Designed for ease and elegance.",
    },
    {
      icon: "🏡", // Replace this with your actual icon
      title: "Aesthetic Designs",
      description: "Stylish planters to match modern interiors.",
    },
    {
      icon: "💧", // Replace this with your actual icon
      title: "Innovative Plant Care",
      description: "Let your customers know about local pickup.",
    },
    {
      icon: "🌿", // Replace this with your actual icon
      title: "Healthy Plants",
      description: "Handpicked and nurtured for 3 months.",
    },
  ];


  useEffect(() => {
    // Hero Section Animation
    gsap.fromTo(
      heroTextRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.3,
        ease: "expo.out",
      }
    );

    gsap.fromTo(
      heroButtonRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        delay: 0.8,
        ease: "elastic.out(1, 0.5)",
      }
    );

    // Category Cards Animation
    gsap.fromTo(
      categoryCardsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.2,
        delay: 1.5,
        ease: "power3.out",
      }
    );

    // Offer Section Animation
    gsap.fromTo(
      offerSectionRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.4,
        delay: 2,
        ease: "expo.out",
      }
    );
  }, []);

  return (
    <div>
   
      {/* Hero Section */}
      <section className="relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="w-full h-[80vh]"
        >
          {[
            "https://cdn.pixabay.com/photo/2023/04/30/10/05/philodendron-7960228_1280.jpg",
            // "https://cdn.pixabay.com/photo/2023/06/22/17/05/flowers-8081925_1280.jpg",
            "https://plus.unsplash.com/premium_photo-1678988087059-7497ce4b0110?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "/src/assets/Heroimg.jpg",
            // "https://cdn.pixabay.com/photo/2012/09/08/21/51/flower-56414_1280.jpg",
            "https://plus.unsplash.com/premium_photo-1679765933646-80796b81c20d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            
          ].map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={image}
                  alt={`Hero Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10"
          ref={heroTextRef}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
            <span className="text-[#e5eae4] drop-shadow-lg">The Green Corner</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light">
            Your one-stop shop for plants, pots, and more!
          </p>
          <button
            ref={heroButtonRef} 
            onClick={() => navigate('/plants')}
            className="mt-6 bg-[#030e09] text-white py-4 px-9 rounded-full hover:bg-[#1A4031] transition transform hover:scale-105 shadow-lg"
          >
            Explore More
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-3 bg-white">
        <h2 className="text-4xl font-bold text-center text-[#21543D] mb-10">
          Explore Our Collections
        </h2>
        <div
          className="flex flex-wrap justify-between gap-10 mx-auto px-2 max-w-7xl"
          ref={(el) => {
            categoryCardsRef.current = [];
            if (el) {
              Array.from(el.children).forEach((child) => categoryCardsRef.current.push(child));
            }
          }}
        >
          {[
            { img: "src/assets/10inchplant.png", title: "10 Inches Pots" },
            { img: "src/assets/8inchimage.png", title: "8 Inches Pots" },
            { img: "src/assets/5inchimage.png", title: "5.5 Inches Pots" },
            { img: "src/assets/Plantfood.png", title: "Plant Food" },
            { img: "src/assets/plantcare.png", title: "Plant Care" },
          ].map((item, index) => (
            <a
              href="#"
              key={index}
              className="bg-white rounded-lg shadow-md w-50 p-2 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-transform"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-76 w-76 mb-3 object-contain"
              />
              <h3 className="text-center text-gray-700 font-semibold text-lg">
                {item.title}
              </h3>
            </a>
          ))}
        </div>
      </section>

      {/* Offer Section */}
      <section
        className="w-[90%] mx-auto my-12 py-8 bg-gradient-to-r from-[#38607e] to-[#21543D] rounded-3xl text-center shadow-lg text-white"
        ref={offerSectionRef}
      >
        <h1 className="text-2xl font-semibold">
          Get <span className="font-bold text-yellow-300">20% Off</span> on orders above ₹3999!
        </h1>
        <p className="text-lg mt-2">Hurry! Offer valid till stocks last.</p>
        <button className="mt-6 bg-white text-[#123525] py-2 px-6 rounded-full font-medium hover:bg-orange-400 transition shadow-md"   onClick={() => navigate('/plants')} >
          Shop Now
        </button>
      </section>

      {/* Why Choose Us? */}
      <div className="bg-gray-50 py-10">
      <h2 className="text-4xl font-semibold text-center text-green-800 mb-6">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-2xl shadow-lg text-center"
          >
            <div className="text-4xl text-green-700 mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold text-green-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>

      {/* Newly Launched Section */}
      <NewlyLaunch />

      {/* Shop By Categories Section */}
      {/* <ShopByCategories /> */}

      {/* <img src="	https://kyari.co/cdn/shop/files/Greenery.gif?v=1731772719" className="mx-auto">
      </img>
       */}


<div className="flex items-center justify-center bg-white p-10">
        {/* Circular Logo with Text */}
          <img
            src="https://kyari.co/cdn/shop/files/Greenery.gif?v=1731772719" // Replace with the actual plant image URL
            alt="Plant"
            className="h-44 w-44"
          />
        

        {/* Text Section */}
        <div>
          <h1 className="text-l font-semibold text-gray-800">
            At <span className="text-green-500">The Green Corner</span>, we're on a mission
            to make greenery <span className="text-green-500">accessible</span>{" "}
            and <span className="text-green-500">stylish </span>.
          </h1>
          <p className=" text-gray-800 font-semibold text-l">
            Discover our story and explore how we're transforming spaces with
            nature.
          </p>
          <p className=" text-gray-800 font-semibold text-l">
          Experience the magic of growing plants.
          </p>
          <p className=" text-gray-800 font-semibold text-l">
          
          Each plant you buy is packed and shipped with care, from our 25-acre farm to your doorstep.we are here to help you for 24 hours
          </p>

        </div>
       
    </div>
        
       

        </div>
    
  );
};

export default HeroSection;
