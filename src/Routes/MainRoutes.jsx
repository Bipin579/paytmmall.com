
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
          </Routes>
    </div>
  )
}

export default MainRoutes