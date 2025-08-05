// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Swal from 'sweetalert2'

// function Password() {
//   let go=useNavigate()

//   let [inpassword, setpassword] = useState([])
//   let inputvalue = (e) => {
//     setpassword({
//       ...inpassword, [e.target.name]: e.target.value
//     })
//   }

//   // 

//   // allusers

//   let [already, setalready] = useState([])
//   useEffect(() => {
//     alluser()
//   }, [])

//   // console.log(already)

//   let alluser = () => {
//     axios.get("https://fashionbrandbackend-pg8r.vercel.app/allusers").then((res) => {
//       setalready(res.data.ouruser)
//     }).catch((err) => {
//       console.log(err)
//     })
//   }

//   let forgotbtn = () => {
//     let filterdata = already.filter(data => data.email == inpassword.email)
//     let currentuser = filterdata[0]

//     if ((!currentuser)) {
//      Swal.fire({
//             icon: "error",
//             title:  "Not a user",
//           });
//     }


//     else if (inpassword.password !== inpassword.conformpassword) {
//        Swal.fire({
//             icon: "error",
//             title: "Password not matched",
//           });
//     }
//     else {
//       axios.post("https://fashionbrandbackend-pg8r.vercel.app/forgetpassword", { currentuser, inpassword }).then((res) => {
//         if (res.data.status) {

//         Swal.fire({
//             title: res.data.msg,
//             icon: "success"
//           });

//           go("/")
//         }
//         else {
//           Swal.fire({
//             icon: "error",
//             title:  res.data.msg,
//           });
//         }
//       }).catch((err) => {
//         console.log(err)
//       })
//     }

//   }
//   return (
//     <div>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 login-main">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           {/* <img
//             alt="Your Company"
//             src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
//             className="mx-auto h-10 w-auto"
//           /> */}
//           <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
//             Forgot Your Password
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <div className="space-y-6">
//             <div>
//               <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   onChange={inputvalue}
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
//                   New Password
//                 </label>
//               </div>
//               <div className="mt-2">
//                 <input
//                   onChange={inputvalue}
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
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
//                   Conform Password
//                 </label>
//               </div>
//               <div className="mt-2">
//                 <input
//                   onChange={inputvalue}
//                   id="newpassword"
//                   name="conformpassword"
//                   type="password"
//                   required
//                   autoComplete="current-password"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 onClick={forgotbtn}
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Forgot Password
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Password





import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Password() {
  let go=useNavigate()

  let [inpassword, setpassword] = useState([])
  let inputvalue = (e) => {
    setpassword({
      ...inpassword, [e.target.name]: e.target.value
    })
  }

  // 

  // allusers

  let [already, setalready] = useState([])
  useEffect(() => {
    alluser()
  }, [])

  // console.log(already)

  let alluser = () => {
    axios.get("https://fashionbrandbackend-pg8r.vercel.app/allusers").then((res) => {
      setalready(res.data.ouruser)
    }).catch((err) => {
      console.log(err)
    })
  }

  let forgotbtn = () => {
    let filterdata = already.filter(data => data.email == inpassword.email)
    let currentuser = filterdata[0]

    if ((!currentuser)) {
     Swal.fire({
            icon: "error",
            title:  "Not a user",
          });
    }


    else if (inpassword.password !== inpassword.conformpassword) {
       Swal.fire({
            icon: "error",
            title: "Password not matched",
          });
    }
    else {
      axios.post("https://fashionbrandbackend-pg8r.vercel.app/forgetpassword", { currentuser, inpassword }).then((res) => {
        if (res.data.status) {

        Swal.fire({
            title: res.data.msg,
            icon: "success"
          });

          go("/")
        }
        else {
          Swal.fire({
            icon: "error",
            title:  res.data.msg,
          });
        }
      }).catch((err) => {
        console.log(err)
      })
    }

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>

        <div>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
               onChange={inputvalue}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* New Password */}
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-gray-700 font-medium mb-2">
              New Password
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

          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <input
              onChange={inputvalue}
                  id="newpassword"
                  name="conformpassword"
                  type="password"
                  required
                  autoComplete="current-password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Error Message */}
          {/* {error && <p className="text-red-500 text-sm mb-4">{error}</p>} */}

          {/* Submit Button */}
          <button
           onClick={forgotbtn}
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-700 transition duration-200"
          >
            Reset Password
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          Remembered your password?
          <Link to={"/"} className="text-blue-500 hover:underline ml-1">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Password;

