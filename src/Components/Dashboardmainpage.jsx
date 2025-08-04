import React from 'react'
import { Heart, ShoppingCart } from 'react-feather'

function Dashboardmainpage() {
  return (
    <>
        {/* <!-- Main Content --> */}
                              
                                 
      
                                  {/* <!-- Dashboard Content --> */}
                                  <div className="p-6">
                                      {/* <!-- Dashboard Cards --> */}
                                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                                          <div className="bg-white p-4 rounded-xl shadow">
                                              <p className="text-sm text-gray-500">Sales</p>
                                              <h3 className="text-xl font-bold text-gray-800 mt-1">$12,540</h3>
                                          </div>
                                          <div className="bg-white p-4 rounded-xl shadow">
                                              <p className="text-sm text-gray-500">Orders</p>
                                              <h3 className="text-xl font-bold text-gray-800 mt-1">239</h3>
                                          </div>
                                          <div className="bg-white p-4 rounded-xl shadow">
                                              <p className="text-sm text-gray-500">Customers</p>
                                              <h3 className="text-xl font-bold text-gray-800 mt-1">89</h3>
                                          </div>
                                          <div className="bg-white p-4 rounded-xl shadow">
                                              <p className="text-sm text-gray-500">Pending</p>
                                              <h3 className="text-xl font-bold text-gray-800 mt-1">17</h3>
                                          </div>
                                      </div>
      
                                      {/* <!-- Example Table --> */}
                                      <div className="bg-white p-6 rounded-xl shadow">
                                          <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Orders</h2>
                                          <table className="w-full text-sm text-left text-gray-600">
                                              <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                                                  <tr>
                                                      <th className="px-4 py-3">Order ID</th>
                                                      <th className="px-4 py-3">Customer</th>
                                                      <th className="px-4 py-3">Amount</th>
                                                      <th className="px-4 py-3">Status</th>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  <tr className="border-t">
                                                      <td className="px-4 py-3">#1001</td>
                                                      <td className="px-4 py-3">John Doe</td>
                                                      <td className="px-4 py-3">$99.99</td>
                                                      <td className="px-4 py-3 text-green-600">Completed</td>
                                                  </tr>
                                                  <tr className="border-t">
                                                      <td className="px-4 py-3">#1002</td>
                                                      <td className="px-4 py-3">Jane Smith</td>
                                                      <td className="px-4 py-3">$149.50</td>
                                                      <td className="px-4 py-3 text-yellow-500">Pending</td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </div>
                                  </div>
                              
    </>
  )
}

export default Dashboardmainpage
