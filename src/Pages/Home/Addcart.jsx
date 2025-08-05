import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


function Addcart() {
  let [cartitem, setcartitem] = useState([])

  let go = useNavigate()
 
   let productdetail = (info) => {
     go("/Productdetails",
       { state: info }
     )
   }

  useEffect(() => {
    allcartproduct()
  }, [])

  let allcartproduct = () => {
    axios.get("https://fashionbrandbackend-pg8r.vercel.app/allcart").then((res) => {
      if (res.data.status) {
        setcartitem(res.data.ourcart)
      }
    }).catch((err) => {
      console.log(err)
    })
  }


  // checkout the product
    let checkoutitem = (info) => {
     go("/CheckoutPage",
       { state: info }
     )
   }


  let Cartitems = ({data}) => {
  // console.log(data)
  

    let [qunatityitem, setqunatityitem] = useState(data.productquatity)

    let increagequantity = () => {
      setqunatityitem(++qunatityitem)
      axios.post("https://fashionbrandbackend-pg8r.vercel.app/cartquantity",{qunatityitem,data})
    }
    let decreagequantity = () => {
      if(qunatityitem>1){
        setqunatityitem(--qunatityitem)     
      }
      axios.post("https://fashionbrandbackend-pg8r.vercel.app/cartquantity",{qunatityitem,data})
    }

    // removercartitem-----------------------------
    let removercartitem = (item) => {
      axios.post("https://fashionbrandbackend-pg8r.vercel.app/removecartitem", item).then((res) => {
        if (res.data.status) {
          Swal.fire({
            title: "Delete item Success",
            icon: "success"
          });

          window.location.reload()
        }
      }).catch((err) => {
        console.log(err)
      })
    }


  


    // calculate total amount
    return (
      <>
       {/* <!-- Single Cart Item --> */}
        <div className="bg-white shadow rounded-lg p-4 flex flex-col md:flex-row items-center justify-between">
          {/* <!-- Product Info --> */}
          <div className="flex items-center gap-4">
            <img src={data.productimage} onClick={()=>productdetail(data)} alt="Product" className="w-24 h-24 object-cover rounded" />
            <div>
              <h2 className="text-lg font-semibold">{data.productname}</h2>
              <p className="text-gray-600 text-sm">{data.category}</p>
              <p className="text-green-600 font-bold mt-2">₹{data.productprice*qunatityitem}</p>
            </div>
          </div>

          {/* <!-- Quantity & Remove --> */}
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <div className="w-20 border border-gray-300 rounded px-2 py-1 text-center">
              <button className='text-xl' onClick={decreagequantity}>-</button>
              <span className="px-2">{qunatityitem}</span>
              <button className="text-xl" onClick={increagequantity}>+</button>
            </div>

            <button className="text-red-600 hover:underline" onClick={() => removercartitem(data)}><i className="fa-solid fa-trash"></i></button>
          </div>
        </div>
      </>
    )
  }


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
                  <Cartitems data={item} />
                </>
              )
            })
          }






        </div>

        {/* <!-- Cart Summary --> */}
        <div className="mt-10 bg-white shadow rounded-lg p-6 md:flex items-center justify-between">
          <div className="text-lg">
            <p className="font-medium">Total Items: <span className="font-bold">{cartitem.length}</span></p>
            <p className="font-medium mt-2">Total <span className="text-green-600 font-bold">₹1,32,597</span></p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition" onClick={()=>checkoutitem(cartitem)}>Proceed to Checkout</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Addcart
