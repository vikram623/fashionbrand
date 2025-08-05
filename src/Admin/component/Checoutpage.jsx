import React, { useEffect, useState } from "react";
import Navbar from "../../Pages/Home/Navbar";
import Footer from "../../Pages/Home/Footer";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

export default function CheckoutPage() {




  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  let loc = useLocation()
  // console.log(loc.state)

  const finalproduct = loc.state
  const [address, setAddress] = useState({
    fullName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });



  const totalPrice = finalproduct.reduce(
    (acc, item) => acc + item.productprice * item.productquatity,
    0
  );

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    console.log("Order Placed with Address:", address);
    alert("Order placed successfully!");
  };


  // address get-----------------------
  let [cutomeraddress, setcutomeraddress] = useState([])
  useEffect(() => {
    addressuser()
  }, [])
  let addressuser = () => {
    axios.get("https://fashionbrandbackend-pg8r.vercel.app/addressget").then((res) => {
      if (res.data.status) {
        setcutomeraddress(res.data.ouraddress)
      }
    }).catch((err)=>{
      console.log(err)
    })
  }
  console.log(cutomeraddress)



// razorpay

const handleSubmit = (e) => {
    e.preventDefault();
    var options = {
      key: "rzp_test_zLBz5tT46J6rSB",
      key_secret: "P4JAUwn4VdE6xDLJ6p2Zy8RQ",
      amount: parseInt(totalPrice) * 100,
      currency: "INR",
      name: "FreshCart",
      description: "for testing purpose",
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        console.log("paymant id", paymentId, shipping_address);
      },
      theme: {
        color: "#0aad0a",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };




  return (

    <>

      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6 mt-20">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Shipping Address Form */}
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Shipping Address</h2>
              <Link to="/Addnewaddress"> <button
                type="button"
                className="text-sm bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
              >
                + Add New Address
              </button></Link>
            </div>


            {/* address start */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-2">Choose Shipping Address</h2>

              {cutomeraddress.map((item) => (


              
               
                <div
                  className={`border p-4 rounded-md cursor-pointer ${selectedId === address.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-300"
                    }`}
                >
                {/* <p><input type="radio"/></p> */}
                  <p className="font-semibold">{item.fullName}</p>
                  <p>{address.addressLine}</p>
                  <p>
                    {item.city}, {item.state} - {item.pincode}
                  </p>
                  <p>Phone: {item.phone}</p>
                  <p>Email: {item.email}</p>
                </div>
              ))}
            </div>
    <button onClick={handleSubmit}
            className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-medium shadow"
          >
            Place Order
          </button>
            {/* address end */}
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-xl shadow h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="divide-y divide-gray-200">
              {finalproduct.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between py-2 text-gray-800"
                >
                  <span>
                    {item.productname} <br />
                    {item.productquatity}x₹{item.productprice}
                  </span>
                  <span>₹{item.productprice * item.productquatity}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>Grand Total:</span>
              <span>₹{totalPrice}</span>
            </div>
           
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
