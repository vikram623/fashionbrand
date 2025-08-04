import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Swal from 'sweetalert2'

function Wishlisting() {
    let go=useNavigate()
    let [wishproducts, setwishproducts] = useState([])
    useEffect(() => {
        wishitemget()
    }, [])
    let wishitemget = () => {
        axios.get("http://localhost:5000/wishitems").then((res) => {
            if (res.data.status) {
                setwishproducts(res.data.ourwishitem)
            }
        })
    }
    // console.log(wishitemget)



    let addcart=(item)=>{
  axios.post("http://localhost:5000/addcart",{item}).then((res)=>{


      Swal.fire({
                       title: "AddcartSuccess",
                       icon: "success"
                   })
  go("/Addcart")
  }).catch((err)=>{
    console.log(err)
  })
}

// removewishlistitem--------------------------------
let removewishlistitem=(item)=>{
    axios.post("http://localhost:5000/removewishlistitem",item).then((res)=>{
        if(res.data.status){
            Swal.fire({
                  title: "Delete item Success",
                  icon: "success"
                });
    
                window.location.reload()
        }
      }).catch((err)=>{
        console.log(err)
      })
}

    return (
        <>

        <Navbar/>
            <div className="max-w-6xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
                        <thead className="bg-gray-100 text-left text-sm font-medium text-gray-700">
                            <tr>
                                <th className="px-4 py-3">Product</th>
                                <th className="px-4 py-3">Price</th>
                                <th className="px-4 py-3">Action</th>
                                <th className="px-4 py-3 text-center">Remove</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-200">
                            {/* <!-- Row 1 --> */}


                            {
                                wishproducts.map((item) => {
                                    return (
                                        <>
                                            <tr>
                                                <td className="px-4 py-4 flex items-center gap-4">
                                                    <img src={item.productimage} alt="Product" className="w-14 h-14 object-cover rounded" />
                                                    <div>
                                                        <p className="font-semibold">{item.productname}</p>
                                                        <p className="text-gray-500 text-sm">{item.category}</p>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-green-600 font-semibold">₹{item.productprice}</td>
                                                <td className="px-4 py-4 text-green-600 font-semibold">
                                                    <button className="bg-green-700 text-white px-6 py-1 rounded hover:bg-green-600 text-white transition" onClick={()=>addcart(item)}>Add to Cart</button>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                   {/* <button className="text-blue-600 hover:underline text-sm mr-4">View</button> */}
                                                    <button className="text-red-600 hover:underline text-sm" onClick={()=>removewishlistitem(item)}><i class="fa-solid fa-trash"></i></button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }


                            {/* <!-- Add more rows as needed --> */}
                        </tbody>
                    </table>
                </div>
            </div>
   <Footer/>
        </>
    )
}

export default Wishlisting
