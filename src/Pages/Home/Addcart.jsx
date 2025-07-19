import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Addcart() {
  let [cartitem, setcartitem] = useState([])

  let productquantity = cartitem.productquatity
  // console.log(productquantity)
  let [qunatityitem, setqunatityitem] = useState(productquantity)

  let increagequantity = () => {
    setqunatityitem(++qunatityitem)
  }
  let decreagequantity = () => {
    setqunatityitem(--qunatityitem)
  }

  // console.log(qunatityitem)

  useEffect(() => {
    allcartproduct()
  }, [])

  let allcartproduct = () => {
    axios.get("http://localhost:5000/allcart").then((res) => {
      if (res.data.status) {
        setcartitem(res.data.ourcart)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  // console.log(cartitem)
  let removeFromCart = (id) => {
    axios.delete("http://localhost:5000//cart/:id").then(() => {
      setCartItems((prev) => prev.filter((item) => item._id !== id));
    }).catch((err) => console.error(err));
  };



  return (
    <>
      <Navbar />


      <div className="my-20 max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>



        {/* <!-- Cart Items --> */}
        <div className="space-y-6">


          {
            cartitem.map((item) => {
              return (
                <>
                  {/* <!-- Single Cart Item --> */}
                  <div className="bg-white shadow rounded-lg p-4 flex flex-col md:flex-row items-center justify-between">
                    {/* <!-- Product Info --> */}
                    <div className="flex items-center gap-4">
                      <img src={item.productimage} alt="Product" className="w-24 h-24 object-cover rounded" />
                      <div>
                        <h2 className="text-lg font-semibold">{item.productname}</h2>
                        <p className="text-gray-600 text-sm">{item.category}</p>
                        <p className="text-green-600 font-bold mt-2">₹{item.productprice}</p>
                      </div>
                    </div>

                    {/* <!-- Quantity & Remove --> */}
                    <div className="mt-4 md:mt-0 flex items-center gap-4">
                      <input
                        name="quantityproduct"
                        type="number"
                        min="1"
                        value={item.productquatity}
                        className="w-16 border border-gray-300 rounded px-2 py-1 text-center"
                      />

                      <button className="text-red-600 hover:underline"
                        onClick={() => {
                          removeFromCart(item._id);
                          window.location.reload();
                        }}
                      ><i className="fa-solid fa-trash"></i></button>
                    </div>
                  </div>
                </>
              )
            })
          }






        </div>

        {/* <!-- Cart Summary --> */}
        <div className="mt-10 bg-white shadow rounded-lg p-6 md:flex items-center justify-between">
          <div className="text-lg">
            <p className="font-medium">Total Items: <span className="font-bold">{cartitem.length}</span></p>
            <p className="font-medium mt-2">Total <span claPrice:ssName="text-green-600 font-bold">₹1,32,597</span></p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Proceed to Checkout</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Addcart
