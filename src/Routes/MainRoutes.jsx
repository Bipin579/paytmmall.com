
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from "../Pages/HomePage";
import BeautyHealth from "../Pages/BeautyHealth";
import Entertainment from "../Pages/Entertainment";
import Fashion from "../Pages/Fashion";
import FurnitureElectronics from '../Pages/FurnitureElectronics';
import Grocery from '../Pages/Grocery';
import Jwellery from '../Pages/Jwellery';
import TravelHolidays from '../Pages/TravelHolidays';
import NotFound from '../Pages/NotFound';
import Login from '../Pages/Login';
import Cart from '../Pages/Cart';
import Orders from '../Pages/Orders';
import SingleProductPage from '../Pages/SingleProductPage';
import Admin from '../Pages/Admin';
import Signup from '../Pages/Signup';
import PrivateRoute from './PrivateRoute';
import Checkout from '../Pages/Checkout';
import Payment from '../Pages/Payment';

const MainRoutes = () => {
  return (
      <div>   
          <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/beauty&health' element={<BeautyHealth/>} />
              <Route path='/entertainment' element={<Entertainment/>} />
              <Route path='/fashion' element={<Fashion/>} />
              <Route path='/furniture&electronics' element={<FurnitureElectronics/>} />
              <Route path='/grocery' element={<Grocery/>} />
              <Route path='/jwellery' element={<Jwellery/>} />
              <Route path='/travel&holidays' element={<TravelHolidays/>} />
              <Route path='*' element={<NotFound/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>} />
              <Route path='/orders' element={<PrivateRoute><Orders/></PrivateRoute>} />
              <Route path='/product/:id' element={<PrivateRoute><SingleProductPage/></PrivateRoute>} />
              <Route path='/admin' element={<Admin/>} />
              <Route path='/signup' element={<Signup/>} />
              <Route path='/checkout' element={<Checkout/>} />
              <Route path='/payment' element={<Payment/>} />
          </Routes>
    </div>
  )
}

export default MainRoutes