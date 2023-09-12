import React, { useEffect, useState } from 'react'
import {Routes,Route} from "react-router-dom"
import Shome from './Shome'
import Login from '../loginandsignup/Login'
import SignupCard from '../loginandsignup/userSignup'
import Cartpage from './Cartpage'
import { Payment } from './Payment'
import LadiesPage from './LadiesPage'
import MensPage from './MensPage'
import FootwearPage from './FootwearPage'
import Industrialpage from './Industrialpage'
import Home from '../Kaushik/Home'
import PrivateRoute from './PrivateRoute'
import ProductDetails from './ProductDetails'
import Laptop from '../Kaushik/Laptop'
import Details from '../Kaushik/Details'
import AddProduct from './Addproduct'
import Admin from '../component/akhilesh/Admin/Admin'
import AdminLogin from '../component/akhilesh/Admin/AdminLogin'
import ContactPage from '../component/akhilesh/Help/Contact'
import ControlAdmin from '../component/akhilesh/Admin/ControlAdmin'

import HomeDecorpage from './HomeDecorpage'
import Mobilepage from './Mobilepage'
import Lightpage from './Lightpage'
import Beautypage from './Beautypage'
import Medicinepage from './Medicinepage'
import OrderPage from './Orderpage'
import Service from '../component/Services/Service'
import CompanyPage from '../component/Services/CompanyPage'


 
const AllRoute = () => {

  // const [admin,setAdmin]=useState("");

  // useEffect(()=>{
  //   setAdmin(localStorage.getItem('Admin'));
  //   console.log("111111111",admin)
  // },[])
  






  return (
    <>
  <Routes>
  
  <Route path="/" element={<Home/>}/>

  <Route path="/signup" element={<SignupCard/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/help" element={<ContactPage/>}/>
  <Route path="/admin/panel" element={<ControlAdmin/>}/>
  <Route path="/admin/login" element={<AdminLogin/>}/>
  <Route path="/admin" element={<Admin/>}/>
  <Route path="/addproduct" element={<AddProduct/>}/>
  <Route path="/shopping" element={<PrivateRoute><Shome/></PrivateRoute>}/>
  <Route path="/shopping/:id" element={<ProductDetails/>}/>
  <Route path="/cart" element={<PrivateRoute><Cartpage/></PrivateRoute>}/>
  <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>}/>
  <Route path="/ladies" element={<LadiesPage/>}/>
  <Route path="/orderpage" element={<OrderPage/>}/>

  <Route path="/medicines" element={<Medicinepage/>}/>
  <Route path="/mobileaccessories" element={<Mobilepage/>}/>
  <Route path="/homedecor" element={<HomeDecorpage/>}/>
  <Route path="/light" element={<Lightpage/>}/>
  <Route path="/beautyproduct" element={<Beautypage/>}/>
  <Route path="/mens" element={<MensPage/>}/>
  <Route path="/footwear" element={<FootwearPage/>}/>
  <Route path="/industrial" element={<Industrialpage/>}/>
  <Route path="/laptop" element={<Laptop/>}/>
  <Route path="/service" element={<Service/>}/>
  <Route path="/laptop/:_id" element={<Details/>}/>
  <Route path="/company/:companyId" element={<CompanyPage/>}/>

  
 
  </Routes>
    </>
  )
}

export default AllRoute