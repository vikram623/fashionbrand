import React from 'react'
import { Heart, ShoppingCart } from 'react-feather'
import Dashboardsidebar from './Dashboardsidebar'
import Dashboardheader from './Dashboardheader'
import Dashboardmainpage from './Dashboardmainpage'

function Dashboard() {
    return (
        <>
            {/* <!DOCTYPE html> */}
            <div className=" bg-gray-100">
                <button
                    className="text-2xl text-gray-800 lg:hidden"
                    // onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    ☰
                </button>
                <div className="min-h-screen flex">

                    {/* <!-- Sidebar --> */}

                    <Dashboardsidebar />

                    {/* <!-- Main Content --> */}
                    <main className="flex-1">
                        <Dashboardheader />

                        {/* <!-- Dashboard Content --> */}


                        <Dashboardmainpage />
                    </main>
                </div>

            </div>


        </>
    )
}

export default Dashboard
