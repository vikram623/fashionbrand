// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import Swal from 'sweetalert2'

// function Signup() {
//     let go = useNavigate()


//     // allusers
//     let [already, setalready] = useState()

//     useEffect(() => {
//         alluser()
//     }, [])
//     let alluser = () => {
//         axios.get("https://fashionbrandbackend-pg8r.vercel.app/allusers").then((res) => {
//             if (res.data.status) {
//                 setalready(res.data.ouruser)
//             }
//         }).catch((err) => {
//             console.log(err)
//         })
//     }

//     let [signupdata, setsignupdata] = useState([])
//     let inputvalue = (e) => {
//         setsignupdata({
//             ...signupdata, [e.target.name]: e.target.value
//         })
//     }


//     let signupbtn = () => {
//         let filterdata = already.filter(item => item.email == signupdata.email)
//         let exituser = filterdata[0]
//         // console.log(exituser.email)
//         if (!signupdata.name && !signupdata.email && !signupdata.password &&!signupdata.number) {
//             Swal.fire({
//                 icon: "error",
//                 title: "All field are required",
//             });
//         }

//         else if (exituser) {

//             Swal.fire({
//                 icon: "error",
//                 title: "Already Signup",
//             });

//         }
//         else {
//             axios.post("https://fashionbrandbackend-pg8r.vercel.app/signup", { signupdata }).then((res) => {

//                 Swal.fire({
//                     title: "Signup Success",
//                     icon: "success"
//                 });
//                 // alert(res.data.msg)
//                 go("/")
//             }).catch((err) => {
//                 console.log(err)
//             })
//         }





//     }
//     // console.log(signup)
//     return (
//         <div>
//             <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 login-main">
//                 <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//                     {/* <img
//                         alt="Your Company"
//                         src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
//                         className="mx-auto h-10 w-auto"
//                     /> */}
//                     <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
//                         Sign up your account
//                     </h2>
//                 </div>

//                 <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//                     <div className="space-y-6">
//                         <div>
//                             <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
//                                 User name:
//                             </label>
//                             <div className="mt-2">
//                                 <input onChange={inputvalue}
//                                     id="name"
//                                     name="name"
//                                     type="text"
//                                     required
//                                     autoComplete="username"
//                                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
//                                 Email address:
//                             </label>
//                             <div className="mt-2">
//                                 <input onChange={inputvalue}
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     required
//                                     autoComplete="email"
//                                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
//                                Mobile No:
//                             </label>
//                             <div className="mt-2">
//                                 <input onChange={inputvalue}
//                                     id="email"
//                                     name="number"
//                                     type="number"
//                                     required
//                                     autoComplete="number"
//                                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <div className="flex items-center justify-between">
//                                 <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
//                                     Password:
//                                 </label>
//                             </div>
//                             <div className="mt-2">
//                                 <input onChange={inputvalue}
//                                     id="password"
//                                     name="password"
//                                     type="password"
//                                     required
//                                     autoComplete="current-password"
//                                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <button
//                                 onClick={signupbtn}
//                                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                             >
//                                 Sign up
//                             </button>
//                         </div>
//                     </div>

//                     <p className="mt-10 text-center text-sm/6 text-gray-500">
//                         <Link to={"/"} className="font-semibold text-indigo-600 hover:text-indigo-500">
//                             Login
//                         </Link>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Signup




import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Signup() {
    let go = useNavigate()


    // allusers
    let [already, setalready] = useState()

    useEffect(() => {
        alluser()
    }, [])
    let alluser = () => {
        axios.get("https://fashionbrandbackend-pg8r.vercel.app/allusers").then((res) => {
            if (res.data.status) {
                setalready(res.data.ouruser)
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    let [signupdata, setsignupdata] = useState([])
    let inputvalue = (e) => {
        setsignupdata({
            ...signupdata, [e.target.name]: e.target.value
        })
    }


    let signupbtn = () => {
        let filterdata = already.filter(item => item.email == signupdata.email)
        let exituser = filterdata[0]
        // console.log(exituser.email)
        if (!signupdata.name && !signupdata.email && !signupdata.password && !signupdata.number) {
            Swal.fire({
                icon: "error",
                title: "All field are required",
            });
        }

        else if (exituser) {

            Swal.fire({
                icon: "error",
                title: "Already Signup",
            });

        }
        else {
            axios.post("https://fashionbrandbackend-pg8r.vercel.app/signup", { signupdata }).then((res) => {

                Swal.fire({
                    title: "Signup Success",
                    icon: "success"
                });
                // alert(res.data.msg)
                go("/")
            }).catch((err) => {
                console.log(err)
            })
        }





    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

                <div>


                    {/* Username */}
                    <div className="mb-4">
                        <label htmlFor="username" className="block font-medium text-gray-700 mb-2">
                            Username
                        </label>
                        <input onChange={inputvalue}
                            id="name"
                            name="name"
                            type="text"
                            required
                            autoComplete="username"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input onChange={inputvalue}
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Mobile */}
                    <div className="mb-4">
                        <label htmlFor="mobile" className="block font-medium text-gray-700 mb-2">
                            Mobile Number
                        </label>
                        <input
                            onChange={inputvalue}
                            id="email"
                            name="number"
                            type="number"
                            required
                            autoComplete="number"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>



                    {/* Password */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            onChange={inputvalue}
                            id="password"
                            name="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        onClick={signupbtn}
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-700 transition duration-200"
                    >
                        Sign Up
                    </button>
                </div>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account?
                    <Link to={"/"} className="text-blue-500 hover:underline ml-1">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;

