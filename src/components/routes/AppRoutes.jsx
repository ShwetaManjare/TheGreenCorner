import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/Home'
import HeroSection from '../pages/home/HeroSection'
import SignUp from '../pages/authentication/SignUp'

import Offer from '../pages/navpages/Offer'
import Plant from '../pages/navpages/Plant'
import PlantCare from '../pages/navpages/PlantCare'
import Login from '../pages/authentication/Login'
import PageNotFound from '../pages/pageNotFound/PageNotFound'
import PlantDescription from '../pages/plantDescription/PlantDescription'
import Cart from '../pages/cart/Cart'
import ShippingDetails from '../pages/shipping/ShippingDetails'
import PotsAndPlanters from '../pages/navpages/PotsAndPlanters'
import CartItems from '../pages/cart/CartItems'
import AddNewPlantContext from '../context/AddNewPlantContext'
import WishlistPage from '../pages/wishlist/WishlistPage'
import About from '../pages/navpages/About'
import Filter from '../filter/Filter'
import Gift from '../pages/Gift/Gift'
import SeeAllUsers from '../Admin/SeeAllUsers'






export let AppRoutes = createBrowserRouter([
    {
        path :'/',
        element :<Home/>,
        children :[
            {
               path :"/",
               element:<HeroSection/>
            },
            {
                path : '/home',
                element : <HeroSection/>
            },{
                path :'/plants',
                element :<Plant/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/gift",
                element:<Gift/>
            },
            // {
            //     path :'/plant_desc',
            //     element :<PlantDescription/>
            // },
            {
                path :'/plant_desc',
                element :<PlantDescription/>
            },
            {
                path:'/signup',
                element:<SignUp/>
            },
            
            {
                path:"/plantcare",
                element:<PlantCare/>
            },
            {
              path:"/login",
              element:<Login/>
            },
            
             {
                path:"/cart",
                element:<Cart/>
             },
             {
                path:"/wishlist",
                element:<WishlistPage/>
             },
            {
                path:"/shipping",
                element:< ShippingDetails/>
            },
          
        ]
       
    },
    {
        path:"/pots",
        element:<PotsAndPlanters/>
    },
    {
        path:"/add",
        element : <AddNewPlantContext/>
    },
    {
        path:"/filter",
        element : <Filter/>
    },
    {
        path :"*",
        element:<PageNotFound/>
    },
    {
        path :"alluser",
        element:<SeeAllUsers/>
    },
    
])











