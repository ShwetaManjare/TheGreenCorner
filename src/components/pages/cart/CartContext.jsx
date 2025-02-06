

import { createContext, useContext, useReducer, useEffect } from "react";

// Initial cart state
const initialState = {
  cart: [],
};

// Reducer function to manage cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };

    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

    case "CLEAR_CART":
      return { ...state, cart: [] };

    default:
      return state;
  }
};

// Create context
export const CartContextState = createContext();

// Context provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

 

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      dispatch({ type: "SET_CART", payload: JSON.parse(savedCart) });
    }
  }, []);

  // Save cart to localStorage whenever the cart changes
  useEffect(() => {
    if (state.cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  }, [state.cart]);

  return (
    <CartContextState.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContextState.Provider>
  );
};

// Custom hook for using the cart context
export const useCart = () => useContext(CartContextState);
