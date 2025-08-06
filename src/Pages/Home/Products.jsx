import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Products() {

  let go = useNavigate()

  let productdetail = (info) => {
    go("/Productdetails",
      { state: info }
    )
  }


  let sellallproduct=(item)=>{
    go("/AllProducts",{state:item})
  }



  let [productdata, setproductdata] = useState([])
  // get all data
  useEffect(() => {
    apidata()
  }, [])

  let apidata = () => {
    axios.get("https://fashionbrandbackend.vercel.app/apiproduct").then((res) => {
      if (res.data.status) {
        setproductdata(res.data.ourproduct)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  // ManAccessories

  let filterman=productdata.filter(data=>data.category=="ManAccessories")
  let manAccessoriesitem=filterman.slice(0,4)

  // WomanCloth
  let filterwoman=productdata.filter(data=>data.category=="WomanCloth")
  let womanAccessoriesitem=filterwoman.slice(0,4)


  // RubbermadeToys
  let filterrubber=productdata.filter(data=>data.category=="RubbermadeToys")
  let rubberAccessoriesitem=filterrubber.slice(0,4)


  // FashionAccessories
  let filterfashion=productdata.filter(data=>data.category=="FashionAccessories")
  let fashionAccessoriesitem=filterfashion.slice(0,4)

  // console.log(productdata)
  return (
    <>

{/* ManAccessories */}

      <div className="max-w-7xl mx-auto p-6">
      <div className='flex justify-between items-center  py-4'>
        <h1 className="text-3xl font-bold">Men accesserios</h1>
        <p className='text-blue-500' onClick={()=>sellallproduct(filterman)}>See all</p>
        </div>
        {/* <!-- Product Grid --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* <!-- Product Card --> */}


          {
            manAccessoriesitem.map((item) => {
              return (
                <>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition" onClick={()=>productdetail(item)}>
                    <div className="w-full">
                      <img
                        src={item.productimage}
                        alt="iPhone"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold">{item.productname}</h2>
                      <p className="text-gray-500 text-sm">{item.category}</p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-green-600 font-bold">₹{item.productprice}</span>
                        {/* <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                          Add to Cart
                        </button> */}
                      </div>
                    </div>
                  </div>
                </>
              )
            })

          }


          {/* <!-- Add more product cards below --> */}

        </div>
      </div>

{/* WomanCloth */}
  <div className="max-w-7xl mx-auto p-6">
      <div className='flex justify-between items-center  py-4'>
        <h1 className="text-3xl font-bold">Woman Accessories</h1>
        <p className='text-blue-500' onClick={()=>sellallproduct(filterwoman)}>See all</p>
        </div>
        {/* <!-- Product Grid --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* <!-- Product Card --> */}


          {
            womanAccessoriesitem.map((item) => {
              return (
                <>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition" onClick={()=>productdetail(item)}>
                    <div className="w-full">
                      <img
                        src={item.productimage}
                        alt="iPhone"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold">{item.productname}</h2>
                      <p className="text-gray-500 text-sm">{item.category}</p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-green-600 font-bold">₹{item.productprice}</span>
                        {/* <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                          Add to Cart
                        </button> */}
                      </div>
                    </div>
                  </div>
                </>
              )
            })

          }


          {/* <!-- Add more product cards below --> */}

        </div>
      </div>

      {/* RubbermadeToys */}
  <div className="max-w-7xl mx-auto p-6">
      <div className='flex justify-between items-center  py-4'>
        <h1 className="text-3xl font-bold">Rubber made Toys</h1>
        <p className='text-blue-500' onClick={()=>sellallproduct(filterrubber)}>See all</p>
        </div>
        {/* <!-- Product Grid --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* <!-- Product Card --> */}


          {
            rubberAccessoriesitem.map((item) => {
              return (
                <>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition" onClick={()=>productdetail(item)}>
                    <div className="w-full">
                      <img
                        src={item.productimage}
                        alt="iPhone"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold">{item.productname}</h2>
                      <p className="text-gray-500 text-sm">{item.category}</p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-green-600 font-bold">₹{item.productprice}</span>
                        {/* <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                          Add to Cart
                        </button> */}
                      </div>
                    </div>
                  </div>
                </>
              )
            })

          }


          {/* <!-- Add more product cards below --> */}

        </div>
      </div>



{/* fashionAccessoriesitem */}
  <div className="max-w-7xl mx-auto p-6">
      <div className='flex justify-between items-center  py-4'>
        <h1 className="text-3xl font-bold">Fashion Accessories</h1>
        <p className='text-blue-500'onClick={()=>sellallproduct(filterfashion)}>See all</p>
        </div>
        {/* <!-- Product Grid --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* <!-- Product Card --> */}


          {
            fashionAccessoriesitem.map((item) => {
              return (
                <>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition" onClick={()=>productdetail(item)}>
                    <div className="w-full">
                      <img
                        src={item.productimage}
                        alt="iPhone"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold">{item.productname}</h2>
                      <p className="text-gray-500 text-sm">{item.category}</p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-green-600 font-bold">₹{item.productprice}</span>
                        {/* <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                          Add to Cart
                        </button> */}
                      </div>
                    </div>
                  </div>
                </>
              )
            })

          }


          {/* <!-- Add more product cards below --> */}

        </div>
      </div>

    </>
  )
}

export default Products
