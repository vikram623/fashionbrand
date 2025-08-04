import React from 'react'
import Navbar from '../Pages/Home/Navbar'
import Footer from '../Pages/Home/Footer'
import Allproducts from '../Pages/Home/Products'
import { useLocation } from 'react-router-dom'

import BlockCardSection from '../Pages/Home/Blocksection'
import ImageSlider from '../Pages/Home/Imageslider'
import FeaturedCategories from '../Pages/Home/Productcategory'
import Products from '../Pages/Home/Products'

function Home() {
  // let loc = useLocation()
  // let username = loc.state
  // console.log(username)
  return (
    <>
      <Navbar />

      <ImageSlider/>
     
     <FeaturedCategories/>
   
      <Products/>
       <BlockCardSection/>
      <Footer />
    </>
  )
}

export default Home
