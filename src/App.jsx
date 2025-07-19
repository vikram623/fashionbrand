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
import Review from './Pages/Home/Review'
import Addcart from './Pages/Home/Addcart'
import Wishlisting from './Pages/Home/Wishlisting'
import Editproduct from './Admin/component/Editproduct'

function App() {

  return (
    <>


    
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Password' element={<Password/>}></Route>
        <Route path='/addproducts' element={<Addproducts/>}></Route>
        <Route path='/Productdetails' element={<Productdetails/>}></Route>
        <Route path='/Review' element={<Review/>}></Route>
        <Route path='/Navbar' element={<Navbar/>}></Route>
        <Route path='/Addcart' element={<Addcart/>}></Route>
        <Route path='/Wishlisting' element={<Wishlisting/>}></Route>
        <Route path='/Editproduct' element={<Editproduct/>}></Route>

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
