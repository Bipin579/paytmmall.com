import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Admin from '../Pages/Admin'

const AdminRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/admin" element={<Admin/>} />
        </Routes>
    </div>
  )
}

export default AdminRoutes