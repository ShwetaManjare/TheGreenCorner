import React, { useContext } from 'react'
import Login from './components/pages/authentication/Login'
import SignUp from './components/pages/authentication/SignUp'
import Home from './components/pages/home/Home'
import AppContext from './components/context/AppContext'
import { RouterProvider } from 'react-router-dom'
import { AppRoutes } from './components/routes/AppRoutes'
import { CartContextState, CartProvider } from './components/pages/cart/CartContext'
import { WishlistProvider } from './components/pages/wishlist/WishListContext'






const App = () => {

 

  return (
    <div>
      {/* <SignUp></SignUp> */}
      {/* <Login></Login> */}
     
     
    {/* <AppContext>
      <RouterProvider router={AppRoutes}>
         </RouterProvider>
    </AppContext> */}

{/* <CartProvider> 
      <AppContext>
        <RouterProvider router={AppRoutes} />
      </AppContext>
    </CartProvider> */}

<WishlistProvider>  
      <CartProvider>      
        <AppContext>      
          <RouterProvider router={AppRoutes} />  
        </AppContext>
      </CartProvider>
    </WishlistProvider>
    </div>
  )
}

export default App 