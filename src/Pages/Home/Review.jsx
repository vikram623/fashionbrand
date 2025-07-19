import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'

function Review() {

    let [reviewdata, setreviewdata] = useState([])

    let inputvalue = (e) => {
        setreviewdata({
            ...reviewdata, [e.target.name]: e.target.value
        })
    }
    let loc = useLocation()
    let product_id = loc.state._id


    let addreview = () => {
        axios.post("http://localhost:5000/apireview", { reviewdata, product_id }).then((res) => {
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

useEffect(()=>{
    allreviews()
},[])

let [userreview,setuserreview]=useState([])
// console.log(userreview)
    let allreviews=()=>{
        axios.get("http://localhost:5000/allreviews").then((res)=>{
             console.log(res)
            // if(res.data.status){
     
            // }
        })
    }

// console.log(userreview)
    return (
        <div>
            <div>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 login-main">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                            Write a review
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="space-y-6">

                            <div>
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                    User name
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={inputvalue}
                                        id="username"
                                        name="username"
                                        type="text"
                                        required
                                        autoComplete="username"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm/6 font-medium text-gray-900">
                                    Full name
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={inputvalue}
                                        id="fullname"
                                        name="fullname"
                                        type="text"
                                        required
                                        autoComplete="username"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>


                            <div>
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={inputvalue}
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                        Write a Review
                                    </label>
                                </div>
                                <div className="mt-2">

                                    {/* <textarea placeholder='write a review' className='text-red-900'></textarea> */}
                                    <input
                                        onChange={inputvalue}
                                        placeholder='Write a review'
                                        id="comment"
                                        name="comment"
                                        type="text"
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    onClick={addreview}
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Add Review
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review
