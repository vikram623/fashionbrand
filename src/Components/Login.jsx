// import React, { useEffect, useState } from 'react'
// import "../CSS/Login.css"
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import Swal from 'sweetalert2'
// function Login() {
//   let [login, setlogin] = useState([])
//   let go=useNavigate()
//   let inputvalue = (e) => {
//     setlogin({
//       ...login, [e.target.name]: e.target.value
//     })
//   }

//   // allusers
//   let [already, setalready] = useState()

//   useEffect(() => {
//     alluser()
//   }, [])

//   let alluser = () => {
//     axios.get("https://fashionbrandbackend.vercel.app/allusers").then((res) => {
//       if (res.data.status) {
//         setalready(res.data.ouruser)
//       }
//     }).catch((err) => {
//       console.log(err)
//     })
//   }

//   let loginbtn = () => {
//     let existuser = already.filter(data => data.email == login.email)
//     let ouruser = existuser[0]
//     if(!ouruser){
//       Swal.fire({
//                       icon: "error",
//                       title: "Not a user",
//                   });

//     }
//     else if (ouruser.email == login.email && ouruser.password == login.password) {
//       Swal.fire({
//         title: "Login Success",
//         icon: "success"
//       });
//       const username=(ouruser.name)

//       go("/Home",{state:username})
//     }
//     else{
//        Swal.fire({
//                       icon: "error",
//                       title: "Invalid",
//                   });
//     }
//   }
//   return (
//     <>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 login-main">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           {/* <img
//             alt="Your Company"
//             src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
//             className="mx-auto h-10 w-auto"
//           /> */}
//           <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
//             Login to your account
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <div className="space-y-6">
//             <div>
//               <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input onChange={inputvalue}
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   autoComplete="email"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
//                   Password
//                 </label>
// <div className="text-sm">
//   <Link to={"/Password"} className="font-semibold text-indigo-600 hover:text-indigo-500">
//     Forgot password?
//   </Link>
// </div>
//               </div>
//               <div className="mt-2">
//                 <input onChange={inputvalue}
//                   id="password"
//                   name="password"
//                   type="password"
//                   required
//                   autoComplete="current-password"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 onClick={loginbtn}
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Login
//               </button>
//             </div>
//           </div>

//           <p className="mt-10 text-center text-sm/6 text-gray-500">
//             <Link to={"/Signup"} className="font-semibold text-indigo-600 hover:text-indigo-500">
//               Sign up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Login



import React, { useEffect, useState } from 'react'
import "../CSS/Login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
function Login() {
  let [login, setlogin] = useState([])
  let go = useNavigate()
  let inputvalue = (e) => {
    setlogin({
      ...login, [e.target.name]: e.target.value
    })
  }

  // allusers
  let [already, setalready] = useState([])

  useEffect(() => {
    alluser()
  }, [])

  let alluser = () => {
    axios.get("https://fashionbrandbackend.vercel.app/allusers").then((res) => {
      if (res.data.status) {
        setalready(res.data.ouruser)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  let loginbtn = () => {
    let existuser = already.filter(data => data.email == login.email) ||[]
    let ouruser = existuser[0]
    if (!ouruser) {
      Swal.fire({
        icon: "error",
        title: "Not a user",
      });

    }
    else if (ouruser.email == login.email && ouruser.password == login.password) {
      Swal.fire({
        title: "Login Success",
        icon: "success"
      });
      const username = (ouruser.name)

      go("/Home", { state: username })
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Invalid",
      });
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <div>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
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

          {/* Password Field */}
          <div className="mb-6">
           
             
          
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password  <Link  to={"/Password"} className="ml-20 font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </Link>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              onChange={inputvalue}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={loginbtn}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
          >
            Login
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?
          <Link to={"/Signup"} className="text-blue-500 hover:underline ml-1">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
