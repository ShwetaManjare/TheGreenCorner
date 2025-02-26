import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../cart/CartContext";
import { FcLike } from "react-icons/fc";
import { GoHeart } from "react-icons/go";
import { WishListContext } from "../wishlist/WishListContext";
import Marquee from "react-fast-marquee";
import { ShoppingCart } from "lucide-react";

const Plant = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // For search functionality
  const { addToWishlist, removeFromWishlist, wishlist } =
    useContext(WishListContext);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // Filtered plants data
  const [sortOption, setSortOption] = useState(""); // Store the selected sorting option
  const [newArrivals, setNewArrivals] = useState(false); // Show only new arrivals filter
  const [plantType, setPlantType] = useState(""); // Indoor or Outdoor filter
  const { cart, dispatch } = useCart();

  //alert msg of the plant added into the cart
  const handleCart = (plant) => {
    dispatch({ type: "ADD_TO_CART", payload: plant });
    alert(`${plant.name} has been added to your cart!`); // Show an alert message
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/plants")
      .then((resp) => {
        setData(resp.data || []);
        setFilteredData(resp.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  // Handle filtering and sorting
  useEffect(() => {
    let filteredItems = [...data];

    // Search by name (applied first)
    if (searchQuery) {
      filteredItems = filteredItems.filter(
        (plant) =>
          plant.name &&
          plant.name.toLowerCase().includes(searchQuery.toLowerCase()) // Add safety check
      );
    }

    // Filter by New Arrivals (sorting by the `id` field)
    if (newArrivals) {
      filteredItems = filteredItems.sort((a, b) => b.id - a.id); // Higher `id` means newer
    }

    // Filter by plant type (indoor or outdoor)
    if (plantType) {
      filteredItems = filteredItems.filter((plant) => plant.type === plantType);
    }

    // Sort based on selected sort option
    switch (sortOption) {
      case "priceLowToHigh":
        filteredItems.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case "priceHighToLow":
        filteredItems.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case "rating5Stars":
        filteredItems = filteredItems.filter((plant) => plant.rating === 5); // Only include 5-star rated plants
        break;
      default:
        break;
    }

    setFilteredData(filteredItems);
  }, [sortOption, newArrivals, data, searchQuery, plantType]);

  const handleShowMore = () => {
    if (visibleCount < filteredData.length) {
      setVisibleCount((prevCount) => prevCount + 8);
    }
  };

  const handleWishlist = (plant) => {
    if (wishlist.some((item) => item.id === plant.id)) {
      removeFromWishlist(plant.id);
    } else {
      addToWishlist(plant);
    }
  };

  // Clear filters
  const clearFilters = () => {
    setSortOption("");
    setNewArrivals(false);
    setSearchQuery(""); // Reset search query as well
    setPlantType(""); // Reset plant type filter
  };

  if (loading) return <div className="text-center mt-6">Loading...</div>;
  if (error)
    return (
      <div className="text-center mt-6 text-red-500">Error loading data!</div>
    );

  return (
    <div>
      <div className="bg-[#f07427] text-cyan-50">
        <div style={{ width: "100%", overflowX: "auto" }}>
          <Marquee>
            <p style={{ paddingRight: "80px" }}>
              Free shipping on orders above ₹399
            </p>
            <p style={{ paddingRight: "80px" }}>Guaranteed Replacement</p>
            <p style={{ paddingRight: "80px" }}>Cash on Delivery Available</p>
            <p style={{ paddingRight: "80px" }}>
              Free shipping on orders above ₹399
            </p>
            <p style={{ paddingRight: "80px" }}>Guaranteed Replacement</p>
            <p style={{ paddingRight: "80px" }}>Cash on Delivery Available</p>
          </Marquee>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 p-6">
        {/* Filter Section */}
        <aside className="lg:w-[23%] w-full bg-gray-100 p-4 rounded-md shadow-md overflow-auto">
          <h2 className="text-xl font-bold mb-4">Filter</h2>
          <form>
            {/* Search Bar */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2 w-full border rounded-md"
              />
            </div>

            <div>
              {/* Sorting Options */}
              <h3 className="font-semibold">Sort By</h3>
              <div>
                <input
                  type="radio"
                  id="priceLowToHigh"
                  name="sortOption"
                  value="priceLowToHigh"
                  onChange={(e) => setSortOption(e.target.value)}
                  checked={sortOption === "priceLowToHigh"}
                />
                <label htmlFor="priceLowToHigh">Price Low to High</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="priceHighToLow"
                  name="sortOption"
                  value="priceHighToLow"
                  onChange={(e) => setSortOption(e.target.value)}
                  checked={sortOption === "priceHighToLow"}
                />
                <label htmlFor="priceHighToLow">Price High to Low</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="rating5Stars"
                  name="sortOption"
                  value="rating5Stars"
                  onChange={(e) => setSortOption(e.target.value)}
                  checked={sortOption === "rating5Stars"}
                />
                <label htmlFor="rating5Stars">5 Star Rating</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="newArrivals"
                  name="sortOption"
                  value="newArrivals"
                  onChange={(e) => setNewArrivals(!newArrivals)}
                  checked={newArrivals}
                />
                <label htmlFor="newArrivals">New Arrivals</label>
              </div>
              <div>
                {/* Indoor/Outdoor Filter */}
                <h3 className="font-semibold">Plant Type</h3>
                <div>
                  <input
                    type="radio"
                    id="indoor"
                    name="plantType"
                    value="indoor"
                    onChange={(e) => setPlantType(e.target.value)}
                    checked={plantType === "indoor"}
                  />
                  <label htmlFor="indoor">Indoor</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="outdoor"
                    name="plantType"
                    value="outdoor"
                    onChange={(e) => setPlantType(e.target.value)}
                    checked={plantType === "outdoor"}
                  />
                  <label htmlFor="outdoor">Outdoor</label>
                </div>
              </div>
            </div>
          </form>

          {/* Clear Filters Button */}
          <button
            onClick={clearFilters}
            className="mt-4 p-2 w-full bg-green-900 text-white font-semibold rounded-md hover:bg-green-500"
          >
            Clear Filters
          </button>
        </aside>

        {/* Product Section */}

        {/* <section className="flex-1">
          <div className="flex flex-wrap gap-6 h-[100vh] overflow-auto">
            {filteredData.slice(0, visibleCount).map((ele, ind) => (
              <div
                key={ind}
                className="w-[23%] bg-zinc-200 rounded-lg shadow-lg p-5 h[50vh]"
              >
                <img
                  src={ele.primaryImage}
                  onClick={() =>
                    navigate("/plant_desc", { state: { allPlants: ele } })
                  }
                  alt={ele.name}
                  className="rounded-lg shadow-md mb-4 cursor-pointer"
                />
                <h1 className="text-lg font-semibold">{ele.name}</h1>
                <p className="text-green-700 font-bold">Price: ₹{ele.price}</p>
                <div className="flex items-center"> */}
        {/* Render plant rating stars */}
        {/* <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-xl font-semibold transition-all transform ${
                            i < ele.rating
                              ? "text-yellow-400 scale-110 drop-shadow-md"
                              : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-lg font-medium text-gray-700">
                      {ele.rating}/5
                    </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button
                    className="bg-green-900 text-white py-2 px-4 mt-4 rounded-md hover:bg-green-800"
                    onClick={() => handleCart(ele)} // Add plant to the cart and show alert
                  >
                    ADD TO CART
                  </button> */}

        {/* Wishlist Section  */}
        {/* <span
                    className="text-2xl cursor-pointer"
                    onClick={() => handleWishlist(ele)}
                  >
                    {wishlist.some((item) => item.id === ele.id) ? (
                      <FcLike />
                    ) : (
                      <GoHeart />
                    )}
                  </span>
       
                </div>
              </div>
            ))}
          </div> */}

        {/* Show More Button */}
        {/* {visibleCount < filteredData.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleShowMore}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-800 text-white text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                Show More
              </button>
            </div>
          )}
        </section> */}

        <section className="flex-1">
          {/* Plant Grid */}
          <div className="flex flex-wrap gap-6 h-[95vh] overflow-auto">
            {filteredData.slice(0, visibleCount).map((ele, ind) => (
              <div
                key={ind}
                className="w-[23%] bg-slate-50 rounded-lg shadow-lg p-5 relative"
              >
                {/* Plant Image */}
                <img
                  src={ele.primaryImage}
                  onClick={() =>
                    navigate("/plant_desc", { state: { allPlants: ele } })
                  }
                  alt={ele.name}
                  className="rounded-lg shadow-md mb-4 cursor-pointer object-cover w-full h-48 transition-transform duration-300 hover:scale-105 hover:brightness-90"
                />

                {/* Rating Badge */}
                <div className="absolute bottom-2 left-4 bg-white px-2 py-1 rounded-full shadow-md flex items-center">
                  <span className="text-yellow-500 text-sm">★</span>
                  <span className="ml-1 text-sm font-semibold text-gray-700">
                    {ele.rating}
                  </span>
                </div>

                {/* Wishlist Icon */}
                <div className="absolute top-2 right-2 cursor-pointer">
                  <span
                    onClick={() => handleWishlist(ele)}
                    className="text-2xl"
                  >
                    {wishlist.some((item) => item.id === ele.id) ? (
                      <FcLike />
                    ) : (
                      <GoHeart />
                    )}
                  </span>
                </div>

                {/* Plant Details */}
                <h1 className="text-lg font-semibold text-gray-800">
                  {ele.name}
                </h1>
                <p className="text-green-700 font-bold">Price: ₹{ele.price}</p>

                <div className="flex justify-between items-center mt-4">
                  <button
                    className="absolute bottom-3 right-4 bg-green-800 px-2 py-1 rounded-full shadow-md flex items-center transition-transform duration-200 hover:bg-green-600 hover:scale-105"
                    onClick={() => handleCart(ele)}
                  >
                    <ShoppingCart size={20} className="text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {visibleCount < filteredData.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleShowMore}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-800 text-white text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                Show More
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Plant;
