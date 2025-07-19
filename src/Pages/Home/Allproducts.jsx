import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Allproducts() {

  let go = useNavigate()

  let productdetail = (info) => {
    go("/Productdetails",
      { state: info }
    )
  }




  let [productdata, setproductdata] = useState([])
  // get all data
  useEffect(() => {
    apidata()
  }, [])

  let apidata = () => {
    axios.get("http://localhost:5000/apiproduct").then((res) => {
      if (res.data.status) {
        setproductdata(res.data.ourproduct)
      }
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <>
      {/* <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productdata.map((product) => (
            <div onClick={()=>productdetail(product)} key={product.id} className="group relative">
              <img
                // alt={product.imageAlt}
                src={product.productimage}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.productname}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.productprice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> */}




      <div class="max-w-7xl mx-auto p-6">
        <h1 class="text-3xl font-bold mb-6">All Products</h1>

        {/* <!-- Product Grid --> */}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* <!-- Product Card --> */}


          {
            productdata.map((item) => {
              return (
                <>
                  <div class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition" onClick={()=>productdetail(item)}>
                    <div class="w-full">
                      <img
                        src={item.productimage}
                        alt="iPhone"
                        class="w-full h-auto object-contain"
                      />
                    </div>
                    <div class="p-4">
                      <h2 class="text-lg font-semibold">{item.productname}</h2>
                      <p class="text-gray-500 text-sm">{item.category}</p>
                      <div class="flex justify-between items-center mt-3">
                        <span class="text-green-600 font-bold">₹{item.productprice}</span>
                        {/* <button class="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
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

export default Allproducts
