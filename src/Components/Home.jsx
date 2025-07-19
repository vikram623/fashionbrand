import React from 'react'
import Navbar from '../Pages/Home/Navbar'
import Slider from '../Pages/Home/Slider'
import Footer from '../Pages/Home/Footer'
import Category from '../Pages/Home/Category'
import Allproducts from '../Pages/Home/Allproducts'

function Home() {
  return (
    <>
      <Navbar />
      <Slider/>


      <Category />
      <Allproducts/>
      <Footer />
    </>
  )
}

export default Home
