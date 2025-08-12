import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import Dashboardheader from "./Dashboardheader";
import Dashboardsidebar from "./Dashboardsidebar";
import axios from "axios";



// Main component
const Dashboardreview = () => {

    let [customerreview, setcustomerreview] = useState([])

    useEffect(() => {
        allreviews()
    }, [])
    let allreviews = () => {
        axios.get("http://localhost:5000/allreview").then((res) => {
            if (res.data.status) {
                setcustomerreview(res.data.ourreview)
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    console.log(customerreview)
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

                        {/* review section start */}
                        <div className="p-6 bg-gray-100 min-h-screen">
                            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow">
                                <h2 className="text-xl font-semibold p-4 border-b">All Reviews</h2>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full table-auto text-sm">
                                        <thead className="bg-gray-100 text-left">
                                            <tr>
                                                <th className="p-3">Product Name</th>
                                                <th className="p-3">Name</th>
                                                <th className="p-3">Review</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {customerreview.map((item) => (
                                                <tr
                                                   
                                                    className="border-t hover:bg-gray-50 transition-all"
                                                >
                                                    <td className="p-3 font-medium">{item.productname}</td>
                                                    <td className="p-3 font-medium">{item.name}</td>
                                                    <td className="p-3">{item.review}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* review section end */}

                    </main>
                </div>

            </div>
        </>
    );
};

export default Dashboardreview;
