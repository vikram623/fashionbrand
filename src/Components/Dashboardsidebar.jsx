import { StarIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { Link } from 'react-router-dom'

function Dashboardsidebar() {
  return (
    <>
                             {/* <!-- Sidebar --> */}
                        <aside className=" w-72 bg-white border-r shadow-md hidden md:flex flex-col justify-between">
                            <div>
                                <div className="p-6 flex items-center justify-between">
                                    <Link to="/home"><h1 className="text-2xl font-bold text-blue-600">ElectroHut</h1></Link>
                                </div>

                                {/* <!-- Search (optional) --> */}
                                <div className="px-6 mb-4">
                                    <input type="text" placeholder="Search..." className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring focus:ring-blue-500" />
                                </div>

                                {/* <!-- Navigation --> */}
                                <nav className="px-4 space-y-1 text-sm">
                                    <Link to='/Dashboard' className="flex items-center gap-3 px-4 py-2 text-blue-600 bg-blue-50 rounded-lg font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 4v6H7v-6H5v-4h2V9a4 4 0 014-4h4" />
                                        </svg>
                                        Dashboard
                                    </Link>
                                    
                                   
                                    <Link to="/Dashboardproducts" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                        </svg>
                                        Products
                                    </Link>

                                     <Link to="/Dashboardorders" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V5a2 2 0 00-2-2H6a2 2 0 00-2 2v8M4 17h16M4 21h16" />
                                        </svg>
                                        Orders
                                    </Link>
                                    <Link to="/CustomerList"  className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m3 4v-4a4 4 0 014-4h2a4 4 0 014 4v4" />
                                        </svg>
                                        Customers
                                    </Link>
                      
                       <Link to="/Dashboardreview"  className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                                        <StarIcon className="h-5 w-5 text-gray-500" />

                                        Reviews
                                    </Link>
                                </nav>
                            </div>
                        </aside>
    </>
  )
}

export default Dashboardsidebar
