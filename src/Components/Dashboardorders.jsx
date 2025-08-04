import React from 'react'
import Dashboardheader from './Dashboardheader'
import Dashboardsidebar from './Dashboardsidebar'
import { Link } from 'react-router-dom'

function Dashboardorders() {
  return (
    <> <div className="bg-gray-100">

                    <div className="min-h-screen flex">

                        {/* <!-- Sidebar --> */}
                   
                       <Dashboardsidebar/>

                        {/* <!-- Main Content --> */}
                        <main className="flex-1">
                        <Dashboardheader/>

                            {/* <!-- Dashboard Content --> */}
                            
                   <div class="min-h-screen bg-gray-100 p-6">
  {/* <!-- Header --> */}
 <div>
                                    <h2 class="text-2xl font-bold text-gray-800">Orders</h2>
                                    <Link to="/Dashboard" class="font-bold text-gray-800">Dashboard</Link>
                                    <span className='text-gray-600 mx-2'>/</span>
                                    <Link to="/Dashboardproducts" class="text-gray-600">Orders</Link>
                                    </div>

  {/* <!-- Orders Table --> */}
  <div className="bg-white shadow rounded-lg overflow-hidden">
    <table className="w-full text-left table-auto border-collapse">
      <thead className="bg-gray-100 text-gray-700">
        <tr>
          <th className="px-6 py-3 text-sm font-medium">Image</th>
          <th className="px-6 py-3 text-sm font-medium">Order ID</th>
          <th className="px-6 py-3 text-sm font-medium">Customer</th>
          <th className="px-6 py-3 text-sm font-medium">Date</th>
          <th className="px-6 py-3 text-sm font-medium">Status</th>
          <th className="px-6 py-3 text-sm font-medium">Total</th>
          <th className="px-6 py-3 text-sm font-medium text-center">Actions</th>
        </tr>
      </thead>
      <tbody className="text-gray-700 divide-y divide-gray-200">
        {/* <!-- Order Row --> */}
        <tr>
          <td className="px-6 py-4">
            <img src="https://via.placeholder.com/50" alt="Product" className="w-12 h-12 object-cover rounded" />
          </td>
          <td className="px-6 py-4">#1001</td>
          <td className="px-6 py-4">John Doe</td>
          <td className="px-6 py-4">2025-07-15</td>
          <td className="px-6 py-4">
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Pending</span>
          </td>
          <td className="px-6 py-4">$149.99</td>
          <td className="px-6 py-4 text-center">
            <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm mr-2">View</button>
            <button className="text-green-600 hover:text-green-800 font-semibold text-sm mr-2">Edit</button>
            <button className="text-red-600 hover:text-red-800 font-semibold text-sm">Delete</button>
          </td>
        </tr>

        {/* <!-- Another Order --> */}
        <tr>
          <td className="px-6 py-4">
            <img src="https://via.placeholder.com/50" alt="Product" className="w-12 h-12 object-cover rounded" />
          </td>
          <td className="px-6 py-4">#1002</td>
          <td className="px-6 py-4">Jane Smith</td>
          <td className="px-6 py-4">2025-07-14</td>
          <td className="px-6 py-4">
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Delivered</span>
          </td>
          <td className="px-6 py-4">$89.50</td>
          <td className="px-6 py-4 text-center">
            <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm mr-2">View</button>
            <button className="text-green-600 hover:text-green-800 font-semibold text-sm mr-2">Edit</button>
            <button className="text-red-600 hover:text-red-800 font-semibold text-sm">Delete</button>
          </td>
        </tr>

        {/* <!-- More rows --> */}
      </tbody>
    </table>
  </div>
</div>

                            
                        </main>
                    </div>

                </div>
      
    </>
  )
}

export default Dashboardorders
