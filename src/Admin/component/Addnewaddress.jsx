import React, { useState } from "react";
import Navbar from "../../Pages/Home/Navbar";
import Footer from "../../Pages/Home/Footer";
import axios from "axios";
import Swal from "sweetalert2";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Addnewaddress() {
  
  let [addressuser,setaddressuser]=useState({})

    let inputvalue=(e)=>{
      setaddressuser(
        {...addressuser,[e.target.name]:e.target.value}
      )
    }


    // add new address
    let addressstore=()=>{
        axios.post("https://fashionbrandbackend.vercel.app/address",{addressuser}).then((res) => {
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
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
     
      <div
        className="w-full max-w-xl bg-white p-6 rounded-lg shadow-md space-y-4"
      >
      
        <h2 className="text-2xl font-semibold text-center mb-2">Shipping Address</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={inputvalue}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={inputvalue}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={inputvalue}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />

        <textarea
          name="addressLine"
          placeholder="Street Address"
         onChange={inputvalue}
          required
          rows="3"
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={inputvalue}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            onChange={inputvalue}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            onChange={inputvalue}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button
        onClick={addressstore}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Save Address
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
}
