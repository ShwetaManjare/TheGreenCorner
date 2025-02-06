// src/context/WishlistContext.js

import React, { createContext, useContext, useEffect, useState } from "react";

// Create a new context for the wishlist
export const WishListContext = createContext();

// Wishlist provider component to manage the wishlist state
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist)); // Parse and set the saved wishlist
    }
  }, []);


  // Add a plant to the wishlist
  const addToWishlist = (plant) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.find((item) => item.id === plant.id)) {
        return prevWishlist;
      }
      const updatedWishlist = [...prevWishlist, plant];
      // Save updated wishlist to localStorage
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  // Remove a plant from the wishlist
  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((item) => item.id !== id);
      // Save updated wishlist to localStorage
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  return (
    <WishListContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishListContext.Provider>
  );
};
