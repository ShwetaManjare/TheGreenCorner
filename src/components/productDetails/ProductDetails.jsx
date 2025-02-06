import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Reviews from "./Reviews";
import Ratings from "./Rating";

const ProductDetails = () => {
  // Plant data array
  const plants = [
    {
      name: "Rose",
      id: 1,
      description:
        "Roses are beautiful flowering plants belonging to the Rosaceae family. Popular in gardens, they are loved for their vibrant colors and aromatic fragrance. Maharashtra, particularly Pune, has ideal conditions for growing roses due to its moderate climate.",
      price: 12,
      rating: 4.5,
      totalSalesLastMonth: 50,
      sellerName: "Pune Plant Co.",
      sellerAddress: {
        street: "Bhosale Nagar",
        city: "Pune",
        state: "Maharashtra",
        country: "India",
        pincode: "411007",
      },
      reviews: [
        {
          username: "AaravGardener",
          rating: 5,
          comment:
            "Absolutely love this rose! The vibrant red color brightens up my garden.",
          productDelivered: true,
          dateTime: "2024-11-20T10:15:00",
          likes: 42,
          dislikes: 2,
        },
        {
          username: "MahiGreen",
          rating: 5,
          comment:
            "Great product. It was well-packaged, and the plant arrived in perfect condition.",
          productDelivered: true,
          dateTime: "2024-11-19T15:48:00",
          likes: 35,
          dislikes: 1,
        },
      ],
      availability: "In Stock",
      quantityAvailable: 100,
      primaryImage:
        "https://nurserylive.com/cdn/shop/products/nurserylive-miniature-rose-button-rose-yellow-plant_600x600.jpg?v=1634224134",
      secondaryImages: [
        "https://nurserylive.com/cdn/shop/products/nurserylive-g-rose-orange-plant_600x600.jpg?v=1634227422",
        "https://nurserylive.com/cdn/shop/products/nurserylive-rose-orange-plant-1_540x720.jpg?v=1634227420",
      ],
    },
  ];

  // For now, we assume there's only one plant and select the first plant
  const plant = plants[0];

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/plants");
  };

  return (
    <div className="flex xs:flex-col md:flex-row">
      {/* Product Section */}
      <main className="max-w-7xl mx-auto p-6">
        <div
          className="flex justify-center items-center mb-5 bg-black w-20 p-2 rounded-xl cursor-pointer"
          onClick={handleClick}
        >
          <HiArrowLeft className="inline-block text-white rounded-xl" />
          <button className="text-white"   onClick={() => navigate("/plants")}  >Back</button>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Product Image */}
          <div className="flex-1">
            <img
              src={plant.primaryImage}
              alt={plant.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Product Details */}
          <div className="flex-1">
            <h2 className="text-primary text-3xl font-bold mb-4">{plant.name}</h2>
            <Ratings rating={plant.rating} />
            {/* Size */}
            <div className="my-2">
              <p>Select size: </p>
              <button className="m-5 text-black py-2 px-4 rounded-lg shadow-lg">
                Small
              </button>
              <button className="text-black py-2 px-4 rounded-lg shadow-lg">
                Medium
              </button>
              <button className="m-5 text-black py-2 px-4 rounded-lg shadow-lg">
                Large
              </button>
            </div>
            <h1 className="text-2xl font-semibold text-green-600 mb-4">
              ${plant.price}
            </h1>
            <p className="text-lg text-gray-700 mb-4">{plant.description}</p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Light: Bright, indirect sunlight</li>
              <li>Water: Weekly, allow soil to dry between watering</li>
              <li>Size: 10-12 inches tall</li>
            </ul>
            <button className="bg-green-500 hover:bg-green-600 m-5 text-white py-2 px-4 rounded-lg shadow-lg">
              Add to Cart
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg">
              Buy Now
            </button>
          </div>
        </div>
        {/* Care Instructions */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Care Instructions</h3>
          <p className="text-gray-600">
            Roses thrive in bright, indirect sunlight. Water weekly, ensuring the
            topsoil is dry before watering again.
          </p>
        </section>
        {/* Reviews */}
        <h1 className="mt-8 text-2xl font-bold">Reviews</h1>
        <Reviews review={plant.reviews} />
      </main>
    </div>
  );
};

export default ProductDetails;
