import React, { useEffect, useState } from "react";
import Dashboardsidebar from "./Dashboardsidebar";
import Dashboardheader from "./Dashboardheader";
import axios from "axios";



export default function CustomerList() {


//   get allusers

let[customer,setcustomer]=useState()
useEffect(()=>{
    allcustomer()
},[])

let allcustomer=()=>{
    axios.get("https://fashionbrandbackend-b71e.vercel.app/allusers").then((res)=>{
        if(res.data.status){
            setcustomer(res.data.ouruser)
        }
    }).catch((err)=>{
        console.log(err)
    })
}

console.log(customer)
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



{/* customer listing start */}

    {/* <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow rounded-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Customer List</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="p-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                  />
                </th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Mobile</th>
              </tr>
            </thead>

            <tbody>
              {customer.map((item) => (
                <tr
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                    />
                  </td>
                  <td className="p-3 font-medium">{item.name}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.mobile}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div> */}

    




{/* customer listing end */}

         </main>
                </div>

            </div>
    </>
  );
}
