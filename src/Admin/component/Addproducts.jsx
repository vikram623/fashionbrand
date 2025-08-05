import React, { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import axios from 'axios'
import Swal from 'sweetalert2'
// import "../.component/.Admin/CSS/addproducts.css"
function Addproducts() {

    let [productdata, setproductdata] = useState([])

    let inputvalue = (e) => {
        setproductdata({
            ...productdata, [e.target.name]: e.target.value
        })
    }


    console.log(productdata)
    // add product api
    let addproduct = () => {
        axios.post("https://fashionbrandbackend-pg8r.vercel.app/addproduct", { productdata }).then((res) => {
            if (res.data.status) {
                Swal.fire({
                    title: res.data.msg,
                    icon: "success"
                });
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: res.data.msg,
                });
            }
        }).catch((err) => {
            console.log(err)
        })
    }


    


    // console.log(productdata)
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 login-main">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Add Product
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
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Product price
                            </label>
                            <div className="mt-2">
                                <input onChange={inputvalue}
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
                                <select onChange={inputvalue} name='category' required>
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
                                    name="productquatity"
                                    type="number"
                                    required
                                    autoComplete="1"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>


                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Product status
                                </label>
                            </div>
                            <div className="mt-2">
                                <input onChange={inputvalue}
                                    name="productstatus"
                                    type="text"
                                    required
                                    autoComplete="1"
                                    value="In Stock"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={addproduct}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Add Product
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Addproducts
