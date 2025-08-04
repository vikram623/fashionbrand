import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Password from './Pages/Password/Password'
import Navbar from './Pages/Home/Navbar'
import Addproducts from './Admin/component/Addproducts'
import Productdetails from './Pages/Home/Productdetails'
import Addcart from './Pages/Home/Addcart'
import Wishlisting from './Pages/Home/Wishlisting'
import Editproduct from './Admin/component/Editproduct'
import Dashboard from './Components/Dashboard'
import Dashboardproducts from './Components/Dashboardproducts'
import Dashboardheader from './Components/Dashboardheader'
import Dashboardsidebar from './Components/Dashboardsidebar'
import Dashboardmainpage from './Components/Dashboardmainpage'
import Dashboardorders from './Components/Dashboardorders'
import CheckoutPage from './Admin/component/Checoutpage'
import Addnewaddress from './Admin/component/Addnewaddress'
import CustomerList from './Components/Dashboardcustomerlist'
import Dashboardreview from './Components/Dashboardreview'
import AllProducts from './Pages/Home/Allproducts'
import Products from './Pages/Home/Products'


function App() {

  return (
    <>


    
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/CustomerList' element={<CustomerList/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Password' element={<Password/>}></Route>
        <Route path='/addproducts' element={<Addproducts/>}></Route>
        <Route path='/Productdetails' element={<Productdetails/>}></Route>
        <Route path='/Navbar' element={<Navbar/>}></Route>
        <Route path='/Addcart' element={<Addcart/>}></Route>
        <Route path='/Wishlisting' element={<Wishlisting/>}></Route>
        <Route path='/Editproduct' element={<Editproduct/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/Dashboardproducts' element={<Dashboardproducts/>}></Route>
        <Route path='/Dashboardheader' element={<Dashboardheader/>}></Route>
        <Route path='/Dashboardsidebar' element={<Dashboardsidebar/>}></Route>
        <Route path='/Dashboardmainpage' element={<Dashboardmainpage/>}></Route>
        <Route path='/Dashboardorders' element={<Dashboardorders/>}></Route>
        <Route path='/CheckoutPage' element={<CheckoutPage/>}></Route>
        <Route path='/Addnewaddress' element={<Addnewaddress/>}></Route>
        <Route path='/Dashboardreview' element={<Dashboardreview/>}></Route>
        <Route path='/AllProducts' element={<AllProducts/>}></Route>
        {/* <Route path='/Products' element={<Products/>}></Route> */}
        

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
