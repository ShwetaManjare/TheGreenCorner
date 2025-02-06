

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Gift = () => {

  const navigate = useNavigate();
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <motion.section
        className="relative w-full h-[500px] bg-cover bg-center flex flex-col justify-center items-start px-8 text-white"
        style={{
          backgroundImage: "url('https://c0.wallpaperflare.com/preview/652/943/804/close-up-fresh-freshness-garden.jpg')"
        }}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h2 className="text-5xl font-bold">Plants made easy</h2>
        <p className="text-lg mt-2 max-w-lg">
          We helps you discover the best plants for your space. Start with our best sellers and bring greenery into your home.
        </p>
        <div className="mt-4 space-x-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"  onClick={() => navigate('/plants')}>Shop Indoor Plants</button>
          <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-green-600 transition"  onClick={() => navigate('/plants')}>Shop Outdoor Plants</button>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section className="py-16 text-center bg-gray-100" initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <h3 className="text-3xl font-bold">Why Coose Us?</h3>
        <div className="flex justify-center space-x-16 mt-6 ">
          {[
            { img: "https://www.ugaoo.com/cdn/shop/files/Artboard_1_e72640e5-b604-48a4-b78f-1dd452d539b6_medium.png?v=1682515172", text: "We are dedicated to quality" },
            { img: "https://www.ugaoo.com/cdn/shop/files/Artboard_5_medium.png?v=1682515214", text: "We help in choosing the best" },
            { img: "https://www.ugaoo.com/cdn/shop/files/Artboard_4_medium.png?v=1682515195", text: "Quality service and delivery" }
          ].map((feature, index) => (
            <motion.div key={index} className="text-center " whileHover={{ scale: 1.1 }}>
              <img src={feature.img} alt="Feature Icon" className="mx-auto w-16 " />
              <p className="mt-2 text-lg">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Outdoor Plants Section */}
      <motion.section className="py-16 bg-gray-100 flex items-center justify-center space-x-8 px-8" initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <img src="https://www.ugaoo.com/cdn/shop/files/Aimage_3.jpg?v=1682523121&width=750" alt="Outdoor Plants" className="w-[45%] rounded-lg shadow-lg" />
        <div>
          <h3 className="text-3xl font-bold">Outdoor Plants</h3>
          <p className="text-lg mt-4">Choose from our new outdoor collection and add freshness to your home and garden. Our carefully curated plants are ideal for all seasons and will thrive in your outdoor space. Perfect for those who want greenery without too much care.  Choose plants suited to your climate.
  Water in the morning or evening to prevent evaporation.
  Use nutrient-rich soil and compost for better growth.
  Prune regularly to encourage healthy development.
  Protect from pests using organic solutions like neem oil. Snake Plant Thrives in all conditions, even with neglect. Aloe Vera Medicinal benefits and minimal watering needed. Money Plant (Pothos) Hardy, grows well in various conditions.Cactus & Succulents deal for dry regions, require little water.</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded mt-4 hover:bg-green-700 transition">Shop Outdoor</button>
        </div>
      </motion.section>

      {/* Image Gallery */}
      <motion.section className="py-8 text-center" initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <h3 className="text-3xl font-bold mb-6">Our Collection</h3>
        <div className="grid grid-cols-4 gap-4 px-8">
          {[
            "https://www.ugaoo.com/cdn/shop/files/2_023e1ca6-bedd-44f5-b015-2658c59800d3.jpg?v=1684817740&width=750",
            "https://www.ugaoo.com/cdn/shop/files/PlantWithCard1.jpg?v=1694525405&width=750",
            "https://www.ugaoo.com/cdn/shop/files/3_effc314e-398e-4b7a-a7f7-8d43233e0d04.jpg?v=1684817377&width=750",
            "https://www.ugaoo.com/cdn/shop/files/1_d1d557e2-aa0c-4c34-996a-f5b4a59187bd.jpg?v=1682784417&width=750"
          ].map((image, index) => (
            <motion.img key={index} src={image} alt={`Gallery ${index + 1}`} className="w-full h-50 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" whileHover={{ scale: 1.1 }} />
          ))}
        </div>
      </motion.section>

      {/* Business Section */}
      <motion.section className="py-16 flex items-center justify-center space-x-8 px-8" initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <div>
          <h3 className="text-3xl font-bold">Plants for your Business</h3>
          <p className="text-lg mt-4">
            Create stunning green spaces in high-traffic areas with our premium quality plants. Whether it's an office, hotel, or restaurant, we have the perfect plants to match your business needs.Anthurium Red or the Flamingo plant is a low-maintenance plant with heart-shaped red waxy blooms that last up to eight weeks. They bloom profusely for more than 250 days a year with bright indirect light and without any special attention and are the perfect size for any indoor area with their bright and shiny presence.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded mt-4 hover:bg-green-700 transition">Get in Touch</button>
        </div>
        <img src="https://www.ugaoo.com/cdn/shop/files/1_33b8bfaa-0a57-4586-bcc6-df156a6c694e.jpg?v=1709700211&width=750" alt="Business Plants" className="w-1/2 rounded-lg shadow-lg" />
      </motion.section>
    </div>
  );
};

export default Gift;
