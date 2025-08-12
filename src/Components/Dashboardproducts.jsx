import React, { useEffect, useState } from 'react'
import Dashboardsidebar from './Dashboardsidebar'
import Dashboardheader from './Dashboardheader'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

function Dashboardproducts() {
    let go=useNavigate()
    let [products, setproducts] = useState([])
    useEffect(() => {
        allproducts()
    }, [])

    let allproducts = () => {
        axios.get("http://localhost:5000/apiproduct").then((res) => {
            if (res.data.status) {
                setproducts(res.data.ourproduct)
            }
        })
    }
    // console.log(products)

    // delete product
    let deleteproduct = (data) => {
        axios.post("http://localhost:5000/removeproduct", data).then((res) => {
            if (res.data.status) {

                Swal.fire({
                    title: "Delete Product Success",
                    icon: "success"
                });
                window.location.reload()

            }
        }).catch((err) => {
            console.log(err)
        })
    }

    let productdetail = (info) => {
        go("/Productdetails",
            { state: info }
        )
    }

     let Editproduct = (data) => {
        go("/Editproduct",
            { state: data }
        )
    }
    return (
        <>


            <div className="bg-gray-100">

                <div className="min-h-screen flex">

                    {/* <!-- Sidebar --> */}

                    <Dashboardsidebar />

                    {/* <!-- Main Content --> */}
                    <main className="flex-1">
                        <Dashboardheader />

                        {/* <!-- Dashboard Content --> */}


                        <section className="p-6 bg-gray-100 min-h-screen">
                            <div className="max-w-7xl mx-auto">

                                {/* <!-- Header Row --> */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800">Products</h2>
                                        <Link to="/Dashboard" className="font-bold text-gray-800">Dashboard</Link>
                                        <span className='text-gray-600 mx-2'>/</span>
                                        <Link to="/Dashboardproducts" className="text-gray-600">Products</Link>
                                    </div>
                                    <Link to="/addproducts">
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition duration-300">
                                            + Add Product
                                        </button>
                                    </Link>
                                </div>

                                {/* <!-- Products Table --> */}
                                <div className="bg-white rounded-xl shadow overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Image</th>
                                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
                                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Stock</th>
                                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 text-sm text-gray-600">
                                            {products.map((item) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td className="px-6 py-4" onClick={() => productdetail(item)} >
                                                                <img src={item.productimage} alt="Product" className="w-12 h-12 rounded object-cover" />
                                                            </td>
                                                            <td className="px-6 py-4 font-medium text-gray-800">{item.productname}</td>
                                                            <td className="px-6 py-4">{item.category}</td>
                                                            <td className="px-6 py-4">₹{item.productprice}</td>
                                                            <td className="px-6 py-4 text-green-600">In Stock</td>
                                                            <td className="px-6 py-4 space-x-2">
                                                                <button className="text-blue-600 hover:underline" onClick={()=>Editproduct(item)}>Edit</button>
                                                                <button className="text-red-600 hover:underline" onClick={() => deleteproduct(item)}>Delete</button>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </section>

                    </main>
                </div>

            </div>

        </>
    )
}

export default Dashboardproducts
