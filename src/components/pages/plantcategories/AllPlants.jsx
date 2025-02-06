
import React, { useContext, useState } from 'react';
import { plantContext } from '../Context/AppContext';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

let plantCategories = [
    { id: 1, category: 'All Categories' },
    { id: 2, category: 'Indoor Plants' },
    { id: 3, category: 'Outdoor Plants' },
    { id: 4, category: 'Flowering Plants' },
    { id: 5, category: 'Low Maintenance' },
    { id: 6, category: 'Air Purifying' },
];

const ratingList = [
    { id: 1, rating: "Ratings" },
    { id: 2, rating: "★★★★★ 5.0" },
    { id: 3, rating: "★★★★☆ 4.0 & up" },
    { id: 4, rating: "★★★☆☆ 3.0 & up" },
    { id: 5, rating: "★★☆☆☆ 2.0 & up" },
    { id: 6, rating: "★☆☆☆☆ 1.0 & up" },
];

const AllPlants = () => {
    const { allPlant } = useContext(plantContext);
    const [visibleCount, setVisibleCount] = useState(8);
    // const [wishlist, setWishlist] = useState(() => {
    //     const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    //     return storedWishlist.map(item => item.id);
    // });
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const navigate = useNavigate();

    const handleAddToCart = (plant) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const isAlreadyInCart = cart.find((item) => item.id === plant.id);

        if (!isAlreadyInCart) {
            cart.push(plant);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${plant.title} added to cart!`);
        } else {
            alert(`${plant.title} is already in the cart.`);
        }
    };

    const toggleWishlist = (plant) => {
        let updatedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const isWishlisted = wishlist.includes(plant.id);

        if (isWishlisted) {
            updatedWishlist = updatedWishlist.filter((item) => item.id !== plant.id);
        } else {
            updatedWishlist.push(plant);
        }

        setWishlist(updatedWishlist.map(item => item.id));
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };

    const renderStars = (rating) => {
        const stars = Array.from({ length: 5 }, (_, i) => (i < rating ? '★' : '☆'));
        return stars.join('');
    };

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 8);
    };

    if (!Array.isArray(allPlant)) {
        return <p>Error: Plant data is unavailable or not an array.</p>;
    }

    const categoryCounts = plantCategories.reduce((counts, category) => {
        if (category.category === 'All Categories') {
            counts[category.category] = allPlant.length;
        } else {
            counts[category.category] = allPlant.filter(
                (plant) => plant.category === category.category
            ).length;
        }
        return counts;
    }, {});

    const filteredPlants = selectedCategory === 'All Categories'
        ? allPlant
        : allPlant.filter((plant) => plant.category === selectedCategory);

    return (
        <div className="">
            <div className="flex">
                {/* Sidebar for Categories and Filters */}
                <div className="w-1/4 h-auto p-4 bg-slate-50">
                    {/* Sidebar content remains unchanged */}
                </div>

                {/* Main Content */}
                <div className="w-3/4 p-4">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <label htmlFor="">Sort by: </label>
                            <select name="" id="">
                                <option value="">Latest</option>
                                <option value="">Price: Low to High</option>
                                <option value="">Price: High to Low</option>
                            </select>
                        </div>
                        <p>{filteredPlants.length} Results Found</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3  justify-items-center">
                        {filteredPlants.slice(0, visibleCount).map((plant, index) => (
                            <div
                                key={index}
                                className="relative  p-2 w-[100%] h-[70vh] max-w-sm border flex flex-col items-start rounded-lg shadow-lg bg-white"
                            >
                                {/* Sale Badge */}
                                <div className="absolute top-5 left-3 bg-yellow-300 text-black text-xs font-semibold px-2 py-1 rounded">
                                    Sale!
                                </div>

                                {/* Wishlist Icon */}
                                <div
                                    onClick={() => toggleWishlist(plant)}
                                    className="absolute top-5 right-5 cursor-pointer"
                                >
                                    <FaHeart
                                        size={20}
                                        className={`${wishlist.includes(plant.id) ? "text-red-500" : "text-gray-400"
                                            } transition-colors duration-200`}
                                    />
                                </div>

                                <img
                                    onClick={() => navigate('/plant-desc', { state: { plant : plant } })}
                                    src={plant.primaryImage}
                                    alt={plant.name}
                                    className="w-[100%] h-[70%] rounded-lg shadow-lg object-contain cursor-pointer"
                                />
                                <h2 onClick={() => navigate('/plant-desc', { state: { plant } })} className="text-lg font-semibold mt-4 cursor-pointer">{plant.name}</h2>
                                <div className="flex items-center gap-2 mt-2">
                                    <p className="text-gray-500 line-through">₹{plant.price}</p>
                                    <p className="text-green-600 font-bold">
                                        ₹{plant.price}
                                    </p>
                                </div>
                                <div className="flex gap-3 items-center justify-between mt-1 w-full">
                                    <button
                                        onClick={() => handleAddToCart(plant)}
                                        className="px-2 py-1 bg-[#163020] text-white text-sm font-semibold rounded-md">
                                        Add To Cart
                                    </button>
                                    <div className="text-2xl">{renderStars(plant.rating)}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Show More Button */}
                    {visibleCount < filteredPlants.length && (
                        <div className="flex justify-center mt-5">
                            <button
                                onClick={handleShowMore}
                                className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-md"
                            >
                                Show More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllPlants;