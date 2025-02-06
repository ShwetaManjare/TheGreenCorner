import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Login from './components/pages/authentication/Login.jsx'
import SignUp from './components/pages/authentication/SignUp.jsx'
import NewlyLaunched from './components/pages/newlyLuanched/NewlyLaunched.jsx'
import ShippingDetails from './components/pages/shipping/ShippingDetails.jsx'
import Cart from './components/pages/cart/Cart.jsx'
import AddNewPlantContext from './components/context/AddNewPlantContext.jsx'





createRoot(document.getElementById('root')).render(
 
 
  <div>
    {/* <Cart/> */}
    {/* <ShippingDetails/> */}
    {/* <AddNewPlantContext/> */}
    <App/>

   </div>

)
