// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useCart } from "../cart/CartContext";
// import { FcLike } from "react-icons/fc";
// import { FaRegHeart } from "react-icons/fa";
// import { WishListContext } from "../wishlist/WishListContext";
// import Filter from "../../filter/Filter";
// import { GoHeart } from "react-icons/go";

// const Plant = () => {
//   const navigate = useNavigate();
//   const [state, setState] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(8);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const { allPlants, addToWishlist, removeFromWishlist, wishlist } = useContext(WishListContext); // Access wishlist context
//   const [data, setData] = useState([])
//   const [sort, setSort] = useState("")
//   const [categories, setCategories] = useState([]) 
//   const [priceRange, setPriceRange] = useState("") 
//   const [filteredData, setFilteredData] = useState([])
  



//    const { cart, dispatch } = useCart();  // Access cart state and dispatch
  
//    const handleCart = (plant) => {
//     dispatch({ type: "ADD_TO_CART", payload: plant });
//   };


  

    


//       useEffect(() => {
//         axios.get("http://localhost:3000/plants").then((resp) => {
//             setData(resp.data || [])
//             setFilteredData(resp.data || [])
//             setLoading(false);
//         }) .catch((error) => {
//                console.error("Error fetching data:", error);
//                setError(true);
//                setLoading(false);
//              });
//     }, [])

//     // Filtering Logic
//     useEffect(() => {
//         let filteredItems = data

//         // 🔎 Filter by name (search input)
//         if (sort) {
//             filteredItems = filteredItems.filter((plant) =>
//                 plant.name?.toLowerCase().includes(sort.toLowerCase())
//             )
//         }

//         // 🔎 Filter by selected categories (checkboxes)
//         if (categories.length > 0) {
//             filteredItems = filteredItems.filter((plant) =>
//                 plant.categories && categories.some(category => plant.categories.includes(category))
//             )
//         }

//         // 🔎 Filter by price range
//         if (priceRange) {
//             filteredItems = filteredItems.filter((plant) => {
//                 const price = parseFloat(plant.price)
//                 switch (priceRange) {
//                     case "low":
//                         return price < 20
//                     case "medium":
//                         return price >= 20 && price <= 50
//                     case "high":
//                         return price > 50
//                     default:
//                         return true
//                 }
//             })
//         }

//         setFilteredData(filteredItems)
//     }, [sort, categories, priceRange, data]) 
  
//   const handleShowMore = () => {
//     if (visibleCount <  filteredData.length) {
//       setVisibleCount((prevCount) => prevCount + 8);
//     }
//   };

//   const handleWishlist = (plant) => {
//     if (wishlist.some((item) => item.id === plant.id)) {
//       removeFromWishlist(plant.id); // Remove from wishlist if already added
//     } else {
//       addToWishlist(plant); // Add to wishlist if not already added
//     }
//   };

//   if (loading) return <div className="text-center mt-6">Loading...</div>;
//   if (error) return <div className="text-center mt-6 text-red-500">Error loading data!</div>;


//   let handleFilter = (e)=>{
//      navigate("/filter")
//   }

//   return (
//     <>
//       <div className="flex flex-col lg:flex-row gap-6 p-6">
//         {/* Filter Section */}
//         <aside className="lg:w-1/4 w-full bg-gray-100 p-4 rounded-md shadow-md overflow-auto">
//           <h2 className="text-xl font-bold mb-4">Filter</h2>
            
//            <form> 
//                     <input 
//                         type="text" 
//                         placeholder="Search by name" 
//                         onChange={(e) => setSort(e.target.value)} 
//                         // onChange={handleSort} 
//                         className="p-2 border rounded"
//                     />
//                     <br /><br />

//                     <p>Filter by Price:</p>
//                     <label>
//                         <input 
//                             type="radio" 
//                             value="low" 
//                             name="price" 
//                             onChange={(e) => setPriceRange(e.target.value)} 
//                             checked={priceRange === "low"} 
//                         />
//                         Below $20
//                     </label>
//                     <br />
//                     <label>
//                         <input 
//                             type="radio" 
//                             value="medium" 
//                             name="price" 
//                             onChange={(e) => setPriceRange(e.target.value)} 
//                             checked={priceRange === "medium"} 
//                         />
//                         $20 - $50
//                     </label>
//                     <br />
//                     <label>
//                         <input 
//                             type="radio" 
//                             value="high" 
//                             name="price" 
//                             onChange={(e) => setPriceRange(e.target.value)} 
//                             checked={priceRange === "high"} 
//                         />
//                         Above $50
//                     </label>
//                     <br />
//                     <button 
//                         type="button" 
//                         className="mt-3 p-1 px-2 bg-red-500 text-white rounded"
//                         onClick={() => setPriceRange("")} // Reset price filter
//                     >
//                         Clear 
//                     </button>
//                 </form>
//         </aside>

//         {/* Product Section */}
//         <section className="flex-1">
          

//           {/* Plant Cards */}
//         <div className="flex flex-wrap gap-6  ">
//            { filteredData.slice(0, visibleCount).map((ele, ind) => (
//               <div
//                 key={ind}
//                 className="w-[23%] bg-zinc-200 rounded-lg shadow-lg p-5 "
//               >
//                 <img
//                   src={ele.primaryImage}
//                   onClick={() =>
//                     navigate("/plant_desc", { state: { allPlants: ele } })
//                   }
//                   alt={ele.name}
//                   className="rounded-lg shadow-md mb-4 cursor-pointer"
//                 />
//                  <h1 className="text-lg font-semibold">{ele.name}</h1>
//                  <p className="text-green-700 font-bold">Price: ₹{ele.price}</p>
//                 <div className="flex justify-between">
//   <button
//                   className="bg-green-900 text-white py-2 px-4 mt-4 rounded-md hover:bg-green-800"
//                   onClick={()=>{handleCart(ele)}}
//                 >
//                   ADD TO CART
//                 </button>
//                 {/* <span className=" py-5 text-2xl"><FaRegHeart  />
//                </span> */}
//                <span
//                   className="text-2xl cursor-pointer"
//                   onClick={() => handleWishlist(ele)}
//                 >
//                 <p className="mt-6">  {wishlist.some((item) => item.id === ele.id) ? <FcLike /> : <GoHeart />}</p>
//                 </span>
//                 </div>

//               </div>
//             ))}
//           </div>

//           {/* Show More Button */}
//           {visibleCount <  filteredData.length && (
//             <div className="flex justify-center mt-5 p-5 ">
//               <button
//                 onClick={handleShowMore}
//                 className="p-4 px-5 py-3 bg-green-700 text-white text-md font-semibold rounded-md hover:bg-green-800"
//               >
//                 Show More
//               </button>
//             </div>
//           )}
//         </section>
//       </div>

      
//      </>
//    );
//  };

// export default Plant; 









import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../cart/CartContext";
import { FcLike } from "react-icons/fc";
import { GoHeart } from "react-icons/go";
import { WishListContext } from "../wishlist/WishListContext";
import Marquee from "react-fast-marquee";
const Plant = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // For search functionality
  const { addToWishlist, removeFromWishlist, wishlist } = useContext(WishListContext);
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
    axios.get("http://localhost:3000/plants").then((resp) => {
      setData(resp.data || []);
      setFilteredData(resp.data || []);
      setLoading(false);
    }).catch((error) => {
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
      filteredItems = filteredItems.filter((plant) =>
        plant.name && plant.name.toLowerCase().includes(searchQuery.toLowerCase()) // Add safety check
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
  if (error) return <div className="text-center mt-6 text-red-500">Error loading data!</div>;

  return (
    <>
    <div className="bg-[#f07427] text-cyan-50">
      <div style={{ width: "100%", overflowX: "auto" }}>
      <Marquee>
  <p style={{ paddingRight: "80px" }}>Free shipping on orders above ₹399</p>
  <p style={{ paddingRight: "80px" }}>Guaranteed Replacement</p>
  <p style={{ paddingRight: "80px" }}>Cash on Delivery Available</p>
  <p style={{ paddingRight: "80px" }}>Free shipping on orders above ₹399</p>
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
        <section className="flex-1">
          <div className="flex flex-wrap gap-6">
            {filteredData.slice(0, visibleCount).map((ele, ind) => (
              <div key={ind} className="w-[23%] bg-zinc-200 rounded-lg shadow-lg p-5">
                <img
                  src={ele.primaryImage}
                  onClick={() => navigate("/plant_desc", { state: { allPlants: ele } })}
                  alt={ele.name}
                  className="rounded-lg shadow-md mb-4 cursor-pointer"
                />
                <h1 className="text-lg font-semibold">{ele.name}</h1>
                <p className="text-green-700 font-bold">Price: ₹{ele.price}</p>
                <div className="flex items-center">
                  {/* Render plant rating stars */}
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < ele.rating ? "text-yellow-500" : "text-gray-300"}>★</span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between">
                  <button
                    className="bg-green-900 text-white py-2 px-4 mt-4 rounded-md hover:bg-green-800"
                    onClick={() => handleCart(ele)} // Add plant to the cart and show alert
                  >
                    ADD TO CART
                  </button>
                  <span
                    className="text-2xl cursor-pointer"
                    onClick={() => handleWishlist(ele)}
                  >
                    {wishlist.some((item) => item.id === ele.id) ? <FcLike /> : <GoHeart />}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {visibleCount < filteredData.length && (
            <div className="flex justify-center mt-5 p-5">
              <button
                onClick={handleShowMore}
                className="p-4 px-5 py-3 bg-green-700 text-white text-md font-semibold rounded-md hover:bg-green-800"
              >
                Show More
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Plant;








// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useCart } from "../cart/CartContext";
// import { FcLike } from "react-icons/fc";
// import { GoHeart } from "react-icons/go";
// import { WishListContext } from "../wishlist/WishListContext";
// import Marquee from "react-fast-marquee";

// const Plant = () => {
//   const navigate = useNavigate();
//   const [visibleCount, setVisibleCount] = useState(8);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const { addToWishlist, removeFromWishlist, wishlist } = useContext(WishListContext);
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [sortOption, setSortOption] = useState("");
//   const [newArrivals, setNewArrivals] = useState(false);
//   const [plantType, setPlantType] = useState("");
//   const { cart, dispatch } = useCart();

//   const handleCart = (plant) => {
//     dispatch({ type: "ADD_TO_CART", payload: plant });
//     alert(`${plant.name} has been added to your cart!`);
//   };

//   useEffect(() => {
//     axios.get("http://localhost:3000/plants").then((resp) => {
//       setData(resp.data || []);
//       setFilteredData(resp.data || []);
//       setLoading(false);
//     }).catch((error) => {
//       console.error("Error fetching data:", error);
//       setError(true);
//       setLoading(false);
//     });
//   }, []);

//   useEffect(() => {
//     let filteredItems = [...data];

//     if (searchQuery) {
//       filteredItems = filteredItems.filter((plant) =>
//         plant.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (newArrivals) {
//       filteredItems = filteredItems.sort((a, b) => b.id - a.id);
//     }

//     if (plantType) {
//       filteredItems = filteredItems.filter((plant) => plant.type === plantType);
//     }

//     switch (sortOption) {
//       case "priceLowToHigh":
//         filteredItems.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//         break;
//       case "priceHighToLow":
//         filteredItems.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
//         break;
//       case "rating5Stars":
//         filteredItems = filteredItems.filter((plant) => plant.rating === 5);
//         break;
//       default:
//         break;
//     }

//     setFilteredData(filteredItems);
//   }, [sortOption, newArrivals, data, searchQuery, plantType]);

//   const handleShowMore = () => {
//     if (visibleCount < filteredData.length) {
//       setVisibleCount((prevCount) => prevCount + 8);
//     }
//   };

//   const handleWishlist = (plant) => {
//     if (wishlist.some((item) => item.id === plant.id)) {
//       removeFromWishlist(plant.id);
//     } else {
//       addToWishlist(plant);
//     }
//   };

//   const clearFilters = () => {
//     setSortOption("");
//     setNewArrivals("");
//     setSearchQuery("");
//     setPlantType("");
//   };

//   if (loading) return <div className="text-center mt-6">Loading...</div>;
//   if (error) return <div className="text-center mt-6 text-red-500">Error loading data!</div>;

//   return (
//     <>
//       {/* Marquee Section */}
//       <div className="bg-[#f07427] text-cyan-50">
//         <div style={{ width: "100%", overflowX: "auto" }}>
//           <Marquee>
//             <p style={{ paddingRight: "80px" }}>Free shipping on orders above ₹399</p>
//             <p style={{ paddingRight: "80px" }}>Guaranteed Replacement</p>
//             <p style={{ paddingRight: "80px" }}>Cash on Delivery Available</p>
//             <p style={{ paddingRight: "80px" }}>Free shipping on orders above ₹399</p>
//             <p style={{ paddingRight: "80px" }}>Guaranteed Replacement</p>
//             <p style={{ paddingRight: "80px" }}>Cash on Delivery Available</p>
//           </Marquee>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row gap-6 p-6">
//         {/* Filter Section */}
//         <aside className="lg:w-[23%] w-full bg-gray-100 p-6 rounded-md shadow-md">
//           <h2 className="text-xl font-bold mb-4">Filters</h2>
//           <form>
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Search by name..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="p-3 w-full border rounded-md"
//               />
//             </div>

//             <h3 className="font-semibold text-lg">Sort By</h3>
//             <div className="space-y-2">
//               <div>
//                 <input
//                   type="radio"
//                   id="priceLowToHigh"
//                   name="sortOption"
//                   value="priceLowToHigh"
//                   onChange={(e) => setSortOption(e.target.value)}
//                   checked={sortOption === "priceLowToHigh"}
//                   className="mr-2"
//                 />
//                 <label htmlFor="priceLowToHigh">Price Low to High</label>
//               </div>
//               <div>
//                 <input
//                   type="radio"
//                   id="priceHighToLow"
//                   name="sortOption"
//                   value="priceHighToLow"
//                   onChange={(e) => setSortOption(e.target.value)}
//                   checked={sortOption === "priceHighToLow"}
//                   className="mr-2"
//                 />
//                 <label htmlFor="priceHighToLow">Price High to Low</label>
//               </div>
//               <div>
//                 <input
//                   type="radio"
//                   id="rating5Stars"
//                   name="sortOption"
//                   value="rating5Stars"
//                   onChange={(e) => setSortOption(e.target.value)}
//                   checked={sortOption === "rating5Stars"}
//                   className="mr-2"
//                 />
//                 <label htmlFor="rating5Stars">5 Star Rating</label>
//               </div>
//               <div>
//                 <input
//                   type="radio"
//                   id="newArrivals"
//                   name="sortOption"
//                   value="newArrivals"
//                   onChange={() => setNewArrivals(!newArrivals)}
//                   checked={newArrivals}
//                   className="mr-2"
//                 />
//                 <label htmlFor="newArrivals">New Arrivals</label>
//               </div>
//             </div>

//             <h3 className="font-semibold text-lg mt-4">Plant Type</h3>
//             <div className="space-y-2">
//               <div>
//                 <input
//                   type="radio"
//                   id="indoor"
//                   name="plantType"
//                   value="indoor"
//                   onChange={(e) => setPlantType(e.target.value)}
//                   checked={plantType === "indoor"}
//                   className="mr-2"
//                 />
//                 <label htmlFor="indoor">Indoor</label>
//               </div>
//               <div>
//                 <input
//                   type="radio"
//                   id="outdoor"
//                   name="plantType"
//                   value="outdoor"
//                   onChange={(e) => setPlantType(e.target.value)}
//                   checked={plantType === "outdoor"}
//                   className="mr-2"
//                 />
//                 <label htmlFor="outdoor">Outdoor</label>
//               </div>
//             </div>

//             <button
//               onClick={clearFilters}
//               className="mt-6 p-3 w-full bg-red-700 text-white font-semibold rounded-md hover:bg-red-500"
//             >
//               Clear Filters
//             </button>
//           </form>
//         </aside>

//         {/* Product Section */}
//         <section className="flex-1">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredData.slice(0, visibleCount).map((ele) => (
//               <div key={ele.id} className="bg-white rounded-lg shadow-lg p-5">
//                 <img
//                   src={ele.primaryImage}
//                   onClick={() => navigate("/plant_desc", { state: { allPlants: ele } })}
//                   alt={ele.name}
//                   className="rounded-lg shadow-md mb-4 cursor-pointer"
//                 />
//                 <h1 className="text-lg font-semibold">{ele.name}</h1>
//                 <p className="text-green-700 font-bold">₹{ele.price}</p>
//                 <div className="flex items-center mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i} className={i < ele.rating ? "text-yellow-500" : "text-gray-300"}>★</span>
//                   ))}
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <button
//                     className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-600"
//                     onClick={() => handleCart(ele)}
//                   >
//                     Add to Cart
//                   </button>
//                   <span
//                     className="text-2xl cursor-pointer"
//                     onClick={() => handleWishlist(ele)}
//                   >
//                     {wishlist.some((item) => item.id === ele.id) ? <FcLike /> : <GoHeart />}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Show More Button */}
//           {visibleCount < filteredData.length && (
//             <div className="flex justify-center mt-6">
//               <button
//                 onClick={handleShowMore}
//                 className="bg-green-900 text-white text-lg font-semibold py-2 px-6 rounded-md hover:bg-green-600"
//               >
//                 Show More
//               </button>
//             </div>
//           )}
//         </section>
//       </div>
//     </>
//   );
// };

// export default Plant;
