import React, { useState } from 'react'
import Navbar from '../../Pages/Home/Navbar'
import Footer from '../../Pages/Home/Footer'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

function Editproduct() {
    
let loc=useLocation()


    let [edititem, setedititem] = useState(loc.state)

    let inputvalue = (e) => {
        setedititem({
            ...edititem, [e.target.name]: e.target.value
        })
    }

    console.log(edititem)


    let editproduct=()=>{
        axios.post("https://fashionbrandbackend.vercel.app/editprodut",{edititem}).then((res)=>{
            if(res.data.status){
                   Swal.fire({
                        title: "Edit Success",
                        icon: "success"
                      });
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <>
            <Navbar />

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 login-main">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Edit Product
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Product Name
                            </label>
                            <div className="mt-2">
                                <input onChange={inputvalue}
                                    name="productname"
                                    type="text"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    value={edititem.productname}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Product price
                            </label>
                            <div className="mt-2">
                                <input onChange={inputvalue}
                                value={edititem.productprice}
                                    name="productprice"
                                    type="number"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>


                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                regular Product price
                            </label>
                            <div className="mt-2">
                                <input onChange={inputvalue}
                                value={edititem.regularproductprice}
                                    name="regularproductprice"
                                    type="number"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Product Image 1
                                </label>
                            </div>
                            <div className="mt-2">
                                <input onChange={inputvalue}
                                 value={edititem.productimage}
                                    name="productimage"
                                    type="text"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>


                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Product Image 2
                                </label>
                            </div>
                            <div className="mt-2">
                                <input onChange={inputvalue}
                                value={edititem.productimage2}
                                    name="productimage2"
                                    type="text"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Product Image 3
                                </label>
                            </div>
                            <div className="mt-2">
                                <input onChange={inputvalue}
                                value={edititem.productimage3}
                                    name="productimage3"
                                    type="text"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>


                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Product Des
                                </label>
                            </div>
                            <div className="mt-2">
                                <input onChange={inputvalue}
                                value={edititem.productdes}
                                    name="productdes"
                                    type="text"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>



                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Product Category
                                </label>
                            </div>
                            <div>
                                <select onChange={inputvalue} name='category' required value={edititem.category}>
                                    <option>Select Product Category</option>
                                    <option value={"WomanCloth"}>Woman Cloth</option>
                                    <option value={"FashionAccessories"}>Fashion Accessories</option>
                                    <option value={"ManAccessories"}>Man Accessories</option>
                                    <option value={"RubbermadeToys"}>Rubber made Toys</option>
                                </select>
                            </div>
                        </div>


                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Product Quantity
                                </label>
                            </div>
                            <div className="mt-2">
                                <input onChange={inputvalue}
                                value={edititem.productquatity}
                                    name="productquatity"
                                    type="number"
                                    required
                                    autoComplete="1"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={editproduct}
                            >
                                Edit Product
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Editproduct
