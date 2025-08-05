// 'use client'
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import Navbar from './Navbar'
import Footer from './Footer'



export default function Productdetails() {

  let go = useNavigate()
  let reviewbtn = () => {
    go("/Review", { state: loc.state })
  }
  let loc = useLocation()
  const productintem = loc.state
  let product_id = productintem._id
  let productname=productintem.productname
  console.log(productintem.productname)


  let [imgcng, setimgcng] = useState(loc.state.productimage)

  let changeimage = (imgpath) => {
    setimgcng(imgpath)
  }

  let addcart = (item) => {
    axios.post("https://fashionbrandbackend-pg8r.vercel.app/addcart", { item }).then((res) => {


      Swal.fire({
        title: "AddcartSuccess",
        icon: "success"
      });
      go("/Addcart")
    }).catch((err) => {
      console.log(err)
    })
  }


  let wishlistproduct = (itemwish) => {
    axios.post("https://fashionbrandbackend-pg8r.vercel.app/wishlist", { itemwish }).then((res) => {

      Swal.fire({
        title: "Wishlist Successfully",
        icon: "success"
      });
      go("/Wishlisting")
    }).catch((err) => {
      console.log(err)
    })
  }

  let [review, setreview] = useState([])

  let inputvalue = (e) => {
    setreview({
      ...review, [e.target.name]: e.target.value
    })
  }

  // console.log(review)

  let addreview = () => {
    axios.post("https://fashionbrandbackend-pg8r.vercel.app/productreview", { review, product_id,productname }).then((res) => {
      if (res.data.status) {
        Swal.fire({
          title: "Review Submit",
          icon: "success"
        });

        setTimeout(() => {
          window.location.reload()
        }, 2000);
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  // get review api

  let [allreviews, setallreviews] = useState([])
  useEffect(() => {
    reviewapidata()
  }, [])

  let reviewapidata = () => {
    axios.get("https://fashionbrandbackend-pg8r.vercel.app/allreview").then((res) => {
      if (res.data.status) {
        setallreviews(res.data.ourreview)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  // console.log(allreviews)


  let filterreviews = allreviews.filter(data => data.productid == product_id)
  // console.log(filterdata)



  // get all product
  let [productdata, setproductdata] = useState([])
  useEffect(() => {
    relatedproducts()
  }, [])
  let relatedproducts = () => {
    axios.get("https://fashionbrandbackend-pg8r.vercel.app/apiproduct").then((res) => {
      if (res.data.status) {
        setproductdata(res.data.ourproduct)
      }
    }).catch((err) => {
      console.log(err)
    })
  }
  // console.log(productintem.category)


  let filteritems=productdata.filter(data=>data.category==productintem.category && data._id!=product_id)||[]
  let relateditems=filteritems.slice(0,4)
  // console.log(relateditems)


  let productdetail = (info) => {
    go("/Productdetails",
      { state: info }
    )
    setTimeout(() => {
      window.location.reload()
    }, 1000);
  }

  return (

    <>
      <Navbar />

      <div className="my-20 w-3/4  mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-md rounded-lg">

        {/* <!-- Left Section: Images --> */}
        <div>
          {/* <!-- Main Image --> */}
          <div className="mb-4 ">
            <img
              src={imgcng}
              alt="Main Product"
              className="rounded-lg  w-full h- object-cover shadow"
            />
          </div>

          {/* <!-- Thumbnail Images --> */}
          <div className="grid grid-cols-3 gap-4">
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <img
                src={loc.state.productimage}
                onClick={() => changeimage(loc.state.productimage)}
                alt="Thumbnail 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <img
                src={loc.state.productimage2}
                onClick={() => changeimage(loc.state.productimage2)}
                alt="Thumbnail 2"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <img
                src={loc.state.productimage3}
                onClick={() => changeimage(loc.state.productimage3)}
                alt="Thumbnail 3"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* <!-- Right Section: Product Info --> */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{loc.state.productname}</h1>
            <p className="text-gray-600 mb-3">{loc.state.category}</p>
            <p className="text-2xl font-bold text-green-600 mb-4">₹{loc.state.productprice}</p>
            <p className="text-2xl font-bold text-red-600 mb-4"><del>₹{loc.state.regularproductprice}</del></p>

            <p className="text-gray-700 mb-6">
              {loc.state.productdes}
            </p>

          </div>

          {/* <!-- Action Buttons --> */}
          <div className="flex gap-4 mt-4 flex-wrap">
            <Link to="/home"><button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Buy Now</button></Link>
            <button className="bg-green-700 text-white px-6 py-1 rounded hover:bg-green-600 text-white transition" onClick={() => addcart(productintem)}>Add to Cart</button>
            <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition" onClick={() => wishlistproduct(productintem)}><i className="fa-regular fa-heart"></i></button>
          </div>
        </div>

      </div>



      {/* Review section */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* <!-- Left: Reviews List --> */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Customer Reviews</h2>


            {filterreviews.map((item) => {
              return (
                <>
                  <div className="space-y-6">
                    {/* <!-- Review Card 1 --> */}
                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition duration-300">
                      <div className="flex items-center mb-4">
                        {/* <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-12 h-12 rounded-full mr-4" /> */}
                        <div className='w-12 h-12 rounded-full bg-green-700 text-align-center mr-4'>{item.name[0]}</div>
                        <div>
                          <p className="text-lg font-semibold text-gray-800 capitalize">{item.name}</p>
                          <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                        </div>
                      </div>
                      <p className="text-gray-600">{item.review}</p>
                    </div>

                  </div>
                </>
              )
            })}

          </div>

          {/* <!-- Right: Review Form --> */}
          <div className="bg-white p-6 rounded-xl shadow-md h-fit">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Write a Review</h3>

            {/* <!-- Star Rating --> */}
            <div className="flex items-center mb-4 space-x-1 text-yellow-400 text-2xl onchage:text-yellow">
              <label className="cursor-pointer">
                <input type="radio" name="rating" className="hidden " value="1" onChange={inputvalue} />★
              </label>
              <label className="cursor-pointer">
                <input type="radio" name="rating" className="hidden" value="2" onChange={inputvalue} />★
              </label>
              <label className="cursor-pointer">
                <input type="radio" name="rating" className="hidden" value="3" onChange={inputvalue} />★
              </label>
              <label className="cursor-pointer">
                <input type="radio" name="rating" className="hidden" value="4" onChange={inputvalue} />★
              </label>
              <label className="cursor-pointer">
                <input type="radio" name="rating" className="hidden" value="5" onChange={inputvalue} />★
              </label>
            </div>

            {/* <!-- Name --> */}
            <input
              onChange={inputvalue}
              name='fullname'
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* <!-- Review Text --> */}
            <textarea
              onChange={inputvalue}
              name='review'
              placeholder="Write your review here..."
              rows="5"
              className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            {/* <!-- Submit Button --> */}
            <button
              onClick={addreview}

              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-300"
            >
              Submit Review
            </button>
          </div>
        </div>
      </section>



      {/* Related product section */}

      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">

          {/* <!-- Section Title --> */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Related Items</h2>

          {/* <!-- Products Grid --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            {/* <!-- Product Card --> */}


            {relateditems.map((related) => {
              return (
                <>
                  <div className="bg-gray-50 border rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300" onClick={()=>productdetail(related)}>
                  <div className='w-full'>
                    <img src={related.productimage} alt="Product 1" className="w-full h-auto object-contain" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800"> {related.productname}</h3>
                      <p className="text-green-600 font-bold mt-2">₹{related.productprice}</p>
                    </div>
                  </div>
                </>
              )
            })}






          </div>
        </div>
      </section>




      <Footer />

    </>
  )
}
