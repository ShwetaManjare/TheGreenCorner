import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NewlyLaunch from "../newlyLuanched/NewlyLaunched";
import { FaSeedling, FaHome, FaTint, FaLeaf } from "react-icons/fa";
// import ShopByCategories from "./ShopByCategories";
import { useNavigate } from "react-router-dom";
import indoorplant from "../../../assets/Indoorplant.jpg"

const HeroSection = () => {
  const heroTextRef = useRef(null);
  const heroButtonRef = useRef(null);
  //const categoryCardsRef = useRef([]);
  const offerSectionRef = useRef(null);
  const navigate = useNavigate();
  const categoryCardsRef = React.useRef([]);

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
      icon: (
        <FaSeedling className="text-green-500 text-5xl group-hover:text-green-700 group-hover:scale-110 transition duration-300" />
      ),
      title: "Self Watering Planters",
      description: "Designed for ease and elegance.",
    },
    {
      icon: (
        <FaHome className="text-blue-500 text-5xl group-hover:text-blue-700 group-hover:scale-110 transition duration-300" />
      ),
      title: "Aesthetic Designs",
      description: "Stylish planters to match modern interiors.",
    },
    {
      icon: (
        <FaTint className="text-indigo-500 text-5xl group-hover:text-indigo-700 group-hover:scale-110 transition duration-300" />
      ),
      title: "Innovative Plant Care",
      description: "Let your customers know about local pickup.",
    },
    {
      icon: (
        <FaLeaf className="text-green-700 text-5xl group-hover:text-green-900 group-hover:scale-110 transition duration-300" />
      ),
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
            <span className="text-[#e5eae4] drop-shadow-lg">
              The Green Corner
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light">
            Your one-stop shop for plants, pots, and more!
          </p>
          <button
            ref={heroButtonRef}
            onClick={() => navigate("/plants")}
            className="mt-6 bg-[#030e09] text-white py-4 px-9 rounded-full hover:bg-[#1A4031] transition transform hover:scale-105 shadow-lg"
          >
            Explore More
          </button>
        </div>
      </section>

      {/* Categories Section */}
      {/* Explore Collections Section */}
      <section className="py-3 bg-white">
        <h2 className="text-4xl font-bold text-center text-[#21543D] mb-10 font-poppins">
          Explore Our Collections
        </h2>
        <div
          className="flex flex-wrap justify-between gap-10 mx-auto px-2 max-w-7xl"
          ref={(el) => {
            categoryCardsRef.current = [];
            if (el) {
              Array.from(el.children).forEach((child) =>
                categoryCardsRef.current.push(child)
              );
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
              className="bg-white rounded-lg shadow-md w-50 p-4 flex flex-col items-center hover:shadow-xl hover:scale-105 hover:rotate-2 transition-all duration-300 ease-in-out transform"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-76 w-76 mb-3 object-contain transition-all duration-300 ease-in-out transform hover:scale-110"
              />
              <h3 className="text-center text-gray-700 font-semibold text-lg font-poppins transition-all duration-300">
                {item.title}
              </h3>
            </a>
          ))}
        </div>
      </section>

      {/* Offer Section */}
      <section
        className="w-[90%] mx-auto my-12 py-8 bg-gradient-to-r from-[#38607e] to-[#21543D] rounded-3xl text-center shadow-xl text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:translate-y-2"
        ref={offerSectionRef}
      >
        <h1 className="text-3xl md:text-4xl font-semibold font-poppins">
          Get <span className="font-bold text-yellow-300">20% Off</span> on
          orders above ₹3999!
        </h1>
        <p className="text-lg mt-2 opacity-80">
          Hurry! Offer valid till stocks last.
        </p>
        <button
          className="mt-6 bg-white text-[#123525] py-3 px-8 rounded-full font-medium hover:bg-orange-400 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-110 hover:translate-x-3 ease-in-out"
          onClick={() => navigate("/plants")}
        >
          Shop Now
        </button>
      </section>

      {/* Why Choose Us? */}
      <section className="py-12 bg-green-300">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
          <p className="text-gray-600 mt-2">
            Explore our innovative and stylish planters.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-700">
                  {feature.title}
                </h3>
                <p className="text-gray-500 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newly Launched Section */}
      <NewlyLaunch />

      {/* Shop By Categories Section */}
      {/* <ShopByCategories /> */}

      {/* <img src="	https://kyari.co/cdn/shop/files/Greenery.gif?v=1731772719" className="mx-auto">
      </img>
       */}

      <div className="flex items-center justify-center bg-green-50 p-10">
        {/* Circular Logo with Text */}
        <img
          src="https://kyari.co/cdn/shop/files/Greenery.gif?v=1731772719" // Replace with the actual plant image URL
          alt="Plant"
          className="h-44 w-44"
        />

        {/* Text Section */}
        <div>
          <h1 className="text-l font-semibold text-gray-800">
            At <span className="text-green-500">The Green Corner</span>, we're
            on a mission to make greenery{" "}
            <span className="text-green-500">accessible</span> and{" "}
            <span className="text-green-500">stylish </span>.
          </h1>
          <p className=" text-gray-800 font-semibold text-l">
            Discover our story and explore how we're transforming spaces with
            nature.
          </p>
          <p className=" text-gray-800 font-semibold text-l">
            Experience the magic of growing plants.
          </p>
          <p className=" text-gray-800 font-semibold text-l">
            Each plant you buy is packed and shipped with care, from our 25-acre
            farm to your doorstep.we are here to help you for 24 hours
          </p>
        </div>
      </div>

      
        {/* festive section? */}
        <div className="min-h-screen  flex items-center justify-center space-x-6"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/thumbnails/022/399/950/original/green-watercolor-background-with-leaves-animation-for-wedding-invitation-free-video.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative", // To allow positioning of the overlay
        }}>
  {/* First Box */}
  <div
    className="p-8 rounded-lg shadow-md w-[50%] max-w-2xl h-[60vh] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative", // To allow positioning of the overlay
    }}
  >
    {/* Overlay for better text visibility */}
    <div className="absolute inset-0  opacity-50 rounded-lg"></div>

    {/* Content */}
    <div className="relative z-20 text-left text-black  ">
      <h2 className="text-4xl font-bold mb-4">Succulent Festical</h2>
      <p className="text-2xl mb-6 text-left">
        <h2>Succulents,Succulents,Everywhere!</h2>
        <h2>Big Sale !!</h2>
        <h2>Everything At 30% Off </h2>
      </p>
      
      <button className="bg-black text-white px-8 py-3 rounded-full text-xl hover:bg-gray-800 transition duration-300 transform hover:scale-105">
        Shop Now
      </button>
    </div>
  </div>

  {/* Second Box */}
  <div
    className="p-8 rounded-lg shadow-md w-[50%] max-w-2xl h-[60vh] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/2133951/pexels-photo-2133951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative", // To allow positioning of the overlay
    }}
  >
    {/* Overlay for better text visibility */}
    <div className="absolute inset-0 opacity-50 rounded-lg"></div>

    {/* Content */}
    <div className="relative z-10 text-left text-black">
      <h2 className="text-4xl font-bold mb-4">Flowering Cactus</h2>
      <p className="text-2xl mb-6 text-left">
        <h2>Get Upto 25% off on Selected</h2>
        <h2>Flowering Cactuses</h2>
      </p>
      <button className="bg-black text-white px-8 py-3 rounded-full text-xl hover:bg-gray-800 transition duration-300 transform hover:scale-105">
        Shop Now
      </button>
    </div>
  </div>
</div>

<div style={{indoorplant}}>
  <img ></img>
</div>

      </div>

      
    
  );
};

export default HeroSection;
