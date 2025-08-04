import axios from "axios";
import React, { useEffect, useState } from "react";

const categories = [
  {
    name: "Mobiles",
    image: "https://source.unsplash.com/300x200/?mobile,phone",
  },
  {
    name: "Smart Watches",
    image: "https://source.unsplash.com/300x200/?smartwatch,watch",
  },
  {
    name: "Air Coolers",
    image: "https://source.unsplash.com/300x200/?aircooler,cooler",
  },
  {
    name: "Laptops",
    image: "https://source.unsplash.com/300x200/?laptop,computer",
  },
];



const FeaturedCategories = () => {
     let [productdata, setproductdata] = useState([])
  // get all data
  useEffect(() => {
    apidata()
  }, [])

  let apidata = () => {
    axios.get("http://localhost:5000/apiproduct").then((res) => {
      if (res.data.status) {
        setproductdata(res.data.ourproduct)
      }
    }).catch((err) => {
      console.log(err)
    })
  }
// ManAccessories
  let manproducts=productdata.filter(data=>data.category=="ManAccessories")
  let manAccessories=manproducts.slice(0,1)
  let manAccessories1=manAccessories[0]


//   Woman Cloth
 let womanproducts=productdata.filter(data=>data.category=="WomanCloth")
let womanAccessories=womanproducts.slice(0,1)
let womanAccessories1=womanproducts[0]


//   Fashion Accessories
 let fashionproducts=productdata.filter(data=>data.category=="FashionAccessories")
let fashionAccessories=fashionproducts.slice(0,1)
let fashionAccessories1=fashionproducts[0]

// //   Rubber made Toys
 let ruberproducts=productdata.filter(data=>data.category=="RubbermadeToys")
let rubberAccessories=ruberproducts.slice(0,1)
let rubberAccessories1=ruberproducts[0]


  

let allcategoryitem=[manAccessories1,womanAccessories1,fashionAccessories1,rubberAccessories1]

  console.log(allcategoryitem)
  return (


    <>
    {/* <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Featured Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {allcategoryitem.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={category.productimage}
                alt={category.productname}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  {category.productname}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> */}

    </>
  );
};

export default FeaturedCategories;
