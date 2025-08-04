import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";



const AllProducts = () => {

    let go=useNavigate()

    let productdetailpage=(info)=>{
        go("/Productdetails",{state:info})
    }

    let loc=useLocation()
    let ourallitem=loc.state

   let categoryname=ourallitem.slice(0,1)
//    console.log(categoryname)


  return (
    <>
    <Navbar/>
    <section className="min-h-screen py-10 bg-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
        {
            categoryname.map((item)=>{
                return(
                    <>
                        {item.category}
                    </>
                )
            })
        }
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ourallitem.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition"
              onClick={()=>productdetailpage(product)}
            >
              <img
                src={product.productimage}
                alt={product.productname}
                // className="w-full h-48 object-cover rounded-t-lg"
                className="w-full h-auto object-contain"
              />
              <div className="p-4">
                <h2 className="text-lg font-medium text-gray-700">
                  {product.productname}
                </h2>
                <p className="text-green-600 font-bold">₹{product.productprice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer/>
    </>
  );
};

export default AllProducts;
