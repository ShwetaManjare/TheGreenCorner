// import React from "react";
// import { motion } from "framer-motion";

// const PlantCare = () => {


//   return (
//     <div className="font-sans bg-gray-50 text-gray-900">
      

// <motion.section
//       className="relative w-full h-screen flex flex-col justify-center items-center text-white px-8 overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Background Video  */}
//        <video
//         autoPlay
//         loop
//         muted
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src="https://videos.pexels.com/video-files/2909910/2909910-uhd_2732_1440_24fps.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay to darken video for readability */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

//       {/* Hero Content */}
//       <div className="relative text-center z-10">
//         <h2 className="text-5xl font-bold">Plants Made Easy</h2>
//         <p className="text-lg mt-2 max-w-lg">
//           Discover the best plants for your space. Bring greenery into your home with our best sellers.
//         </p>
        
//       </div>
//     </motion.section>

//     {/* Cards Section */}
//     <section className="py-12 px-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[{
//             img: "https://images.pexels.com/photos/4503267/pexels-photo-4503267.jpeg",
//             title: "How To Pot Plants",
//           }, {
//             img :"https://images.pexels.com/photos/7470066/pexels-photo-7470066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//             title: "How Much Sunlight Is Needed",
//           }, {
//             img: "https://images.pexels.com/photos/5438785/pexels-photo-5438785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//             title: "How to take care of Plants",
//           }].map((card, index) => (
//             <motion.div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all" whileHover={{ scale: 1.05 }}>
//               <img src={card.img} alt={card.title} className="rounded-lg w-full h-52 object-cover" />
//               <h3 className="text-xl font-semibold text-green-800 mt-4">{card.title}</h3>
//               <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy.</p>
//               <a href="#" className="text-green-700 font-bold mt-3 inline-block">Continue Reading &raquo;</a>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       <div className="font-sans bg-[#f5f3eb]">
//       {/* Header Section */}
//       <section className="relative w-full h-[300px] bg-cover bg-center flex flex-col justify-center items-center text-white"
//         style={{
//           backgroundImage:
//             "url('https://c0.wallpaperflare.com/preview/652/943/804/close-up-fresh-freshness-garden.jpg')",
//         }}>
//         <h2 className="text-5xl font-bold">Plant Care</h2>
//       </section>

      
//     </div> 

//     <div className="max-w-4xl mx-auto px-6 py-8 bg-white rounded-lg shadow-lg">
//       <h1 className="text-4xl font-semibold text-center text-green-600 mb-6">Plant Care Tips</h1>

//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Light Requirements</h2>
//         <p className="text-gray-700 mb-4">
//           Different plants have different light needs. Ensure your plants get the right light:
//         </p>
//         <ul className="list-disc pl-6 space-y-2 text-gray-700">
//           <li>Low light: Plants like snake plants and pothos thrive in low light.</li>
//           <li>Bright, indirect light: Peace lilies and spider plants prefer this light.</li>
//           <li>Direct sunlight: Cactus and succulents love bright, direct sunlight.</li>
//         </ul>
//       </section>

//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Watering</h2>
//         <p className="text-gray-700 mb-4">
//           Watering is crucial, but overwatering can harm your plants. Here’s how to do it right:
//         </p>
//         <ul className="list-disc pl-6 space-y-2 text-gray-700">
//           <li>Water your plants when the soil feels dry to the touch.</li>
//           <li>Make sure your pot has drainage holes to prevent root rot.</li>
//           <li>Some plants like succulents prefer to dry out completely before watering.</li>
//         </ul>
//       </section>

//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. Humidity</h2>
//         <p className="text-gray-700 mb-4">
//           Many houseplants, such as ferns and tropical plants, love humidity:
//         </p>
//         <ul className="list-disc pl-6 space-y-2 text-gray-700">
//           <li>Increase humidity by misting the leaves or placing a humidifier nearby.</li>
//           <li>Group plants together to create a microenvironment with higher humidity.</li>
//         </ul>
//       </section>

//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Fertilizing</h2>
//         <p className="text-gray-700 mb-4">
//           Plants need nutrients to grow strong and healthy:
//         </p>
//         <ul className="list-disc pl-6 space-y-2 text-gray-700">
//           <li>Fertilize your plants during the growing season (spring and summer).</li>
//           <li>Use a balanced, water-soluble fertilizer for most plants.</li>
//           <li>Be cautious not to over-fertilize, as this can damage the plant.</li>
//         </ul>
//       </section>

//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Repotting</h2>
//         <p className="text-gray-700 mb-4">
//           Repotting is important to give plants room to grow:
//         </p>
//         <ul className="list-disc pl-6 space-y-2 text-gray-700">
//           <li>Repot plants when they outgrow their container or the soil becomes compacted.</li>
//           <li>Choose a pot that's 1-2 inches larger in diameter than the current one.</li>
//         </ul>
//       </section>
//     </div>
//     </div>
//   );
// };

// export default PlantCare;







import React from "react";
import { motion } from "framer-motion";

const PlantCare = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">

      {/* Hero Section with Background Video */}
      <motion.section
        className="relative w-full h-screen flex flex-col justify-center items-center text-white px-8 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/2909910/2909910-uhd_2732_1440_24fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative text-center z-10">
          <h2 className="text-5xl font-bold leading-tight">Plants Made Easy</h2>
          <p className="text-lg mt-4 max-w-lg mx-auto">
            Discover the best plants for your space. Bring greenery into your home with our best sellers.
          </p>
        </div>
      </motion.section>

      {/* Cards Section */}
      <section className="py-12 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
            img: "https://images.pexels.com/photos/4503267/pexels-photo-4503267.jpeg",
            title: "How To Pot Plants",
          }, {
            img :"https://images.pexels.com/photos/7470066/pexels-photo-7470066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "How Much Sunlight Is Needed",
          }, {
            img: "https://images.pexels.com/photos/5438785/pexels-photo-5438785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "How to Take Care of Plants",
          }].map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={card.img}
                alt={card.title}
                className="rounded-lg w-full h-52 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-green-800">{card.title}</h3>
              <p className="text-gray-600 mt-2">
                Learn the essential steps to help you grow and care for your plants.
              </p>
              <a href="#" className="text-green-600 font-bold mt-4 inline-block hover:text-green-800 transition-colors duration-200">
                Continue Reading &raquo;
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Plant Care Header Section */}
      <div className="bg-cover bg-center relative h-[300px] text-white flex flex-col justify-center items-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/192136/pexels-photo-192136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}>
        <h2 className="text-4xl font-bold">Plant Care</h2>
      </div>

      {/* Plant Care Tips Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 bg-white rounded-lg shadow-lg mb-12">
        <h1 className="text-4xl font-semibold text-center text-green-600 mb-6">Plant Care Tips</h1>

        {/* Light Requirements Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Light Requirements</h2>
          <p className="text-gray-700 mb-4">
            Light is vital for plants. Understanding the type of light your plant needs will ensure healthy growth and vitality.You spend time and energy to ensure optimum sun rays and water to grow beautiful plants at home. However, these plants could be affected when you are on vacation.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Low light: Plants like snake plants and pothos thrive in low light.</li>
            <li>Bright, indirect light: Peace lilies and spider plants prefer this light.</li>
            <li>Direct sunlight: Cactus and succulents love bright, direct sunlight.</li>
          </ul>
        </section>

        {/* Watering Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Watering</h2>
          <p className="text-gray-700 mb-4">
            Proper watering is essential for plant health. Avoid overwatering, which can lead to root rot.Direct and prolonged sunlight can dry up water faster. Remember to water your plants and keep them in shady areas before leaving for vacation. All indoor and outdoor potted plants should get enough water.

Generally, plants with enough water sustain a week. However, it differs from plant to plant. You can also consider the material of pots for longer water retention.

For example, Plastic or glazed ceramic pots keep soil moisture longer than terracotta pots. Consider material while buying pots for plants.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Water your plants when the soil feels dry to the touch.</li>
            <li>Make sure your pot has drainage holes to prevent root rot.</li>
            <li>Some plants like succulents prefer to dry out completely before watering.</li>
          </ul>
        </section>

        {/* Humidity Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. Humidity</h2>
          <p className="text-gray-700 mb-4">
            Many houseplants, especially tropical ones, thrive in humid environments.A humidifier is a relatively inexpensive way to increase humidity levels for your plants.
            You can turn it on and off to maintain the ideal humidity level for your plants.To take care of plant humidity, you can use a humidifier, mist your plants, or place them in a terrarium.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Increase humidity by misting the leaves or placing a humidifier nearby.</li>
            <li>Group plants together to create a microenvironment with higher humidity.</li>
          </ul>
        </section>

        {/* Fertilizing Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Fertilizing</h2>
          <p className="text-gray-700 mb-4">
            Regular fertilizing ensures that your plants have the nutrients they need to thrive.Pick a fertilizer that has the nutrients your plants need. You can use an all-purpose fertilizer or one that's specifically made for your plant type.Follow the package directions for how often to fertilize your plants. You can fertilize your plants every 4–5 week.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Fertilize your plants during the growing season (spring and summer).</li>
            <li>Use a balanced, water-soluble fertilizer for most plants.</li>
            <li>Be cautious not to over-fertilize, as this can damage the plant.</li>
          </ul>
        </section>

        {/* Repotting Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Repotting</h2>
          <p className="text-gray-700 mb-4">
            Repotting your plants helps ensure they have enough space to grow. It’s also a great way to refresh the soil.After repotting a plant, the key is to provide a period of gentle care by placing it in a shaded area, avoiding excessive watering for a week or so, and monitoring for signs of stress while the roots adjust to the new pot and soil; gradually introduce it back to its usual light conditions once it appears stable. 
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Repot plants when they outgrow their container or the soil becomes compacted.</li>
            <li>Choose a pot that's 1-2 inches larger in diameter than the current one.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PlantCare;
