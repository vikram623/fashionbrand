import React from 'react'
import { Heart, ShoppingCart } from 'react-feather'
import { Link } from 'react-router-dom'

function Dashboardheader() {
  return (
    <>
        <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
                                      <h1 className="text-2xl font-semibold text-gray-700">Dashboard</h1>
                                      <div className="flex items-center gap-6">
                                          <input type="text" placeholder="Search..." className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-blue-500" />
                                          {/* <!-- Heart Icon --> */}
                                          <button className="relative">
                                             
                                              <a href="/Wishlisting" className="relative">
                                                         <Heart className="w-5 h-5 text-gray-700 hover:text-red-500" />
                                                         <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">2</span>
                                                       </a>
                                             
                                          </button>
      
                                          {/* <!-- Cart Icon --> */}
                                          <button className="relative">
                                            <Link to="/Addcart" className="relative">
                                                  <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-red-600" />
                                                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1.5">3</span>
                                              </Link>
                                              
                                          </button>
      
                                          {/* <!-- Profile --> */}
      
                                          <img src="https://i.pravatar.cc/40" className="w-9 h-9 rounded-full border" alt="Profile" />
                                      </div>
                                  </header>
    </>
  )
}

export default Dashboardheader
