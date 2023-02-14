import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/header'

const Admin = () => {
  return (
    <div className='rows'>
      <Header />
      <div className='col-10 d-flex justify-content-between w-100'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default Admin