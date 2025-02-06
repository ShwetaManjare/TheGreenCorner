import React from "react";

const About = () => {
  return (
    <div className="relative w-full h-screen bg-black text-white flex items-center justify-center" style={{ fontFamily: '"Playfair Display", serif' }}>
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp12482965.jpg')", opacity: 0.3 }}></div>
      <div className="text-center max-w-7xl z-10">
        <h1 className="text-6xl font-semibold leading-tight">Freshen the air in your house</h1>
        <p className="mt-4 text-gray-300 text-xl">
Welcome to The Green Corner, your go-to destination for lush greenery and vibrant plant life! We are passionate about bringing nature closer to you, offering a wide variety of indoor and outdoor plants, gardening essentials, and expert tips to help you cultivate a thriving green space.  
At The Green Corner, we believe plants are more than just decor—they purify the air, boost well-being, and add a touch of tranquility to any space. Whether you’re a seasoned gardener or just starting your plant journey, our carefully curated selection caters to all levels of plant enthusiasts.  Join us in embracing the beauty of nature, one plant at a time! 🌿✨  

        </p>

    
        

        {/* <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-full flex items-center space-x-2 shadow-lg transition-transform transform hover:scale-105 hover:bg-green-700 border border-green-500">
          <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">&rarr;</span>
        <span className="ml-2 text-lg font-medium">Get Started</span>
        </button> */}
      </div>
    </div>
    
  );
};

export default About;
