import React, { useContext } from 'react'
import Navbar from '../../utils/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../utils/navbar/footer/Footer'
import { plantContext } from '../../context/AppContext'

const Home = () => {

  let context =useContext(plantContext)
  console.log(context);
  
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    

    </div>
  )
}

export default Home

