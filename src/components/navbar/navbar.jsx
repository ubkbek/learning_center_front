import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='col-2'>
        <ul className='list-unstyled fs-4 text-decoration-none'>
          <li className='mb-1'>
            <NavLink
                className={({ isActive }) => (isActive ? 'btn btn-warning text-white text-decoration-none w-100 rounded-1 px-4 py-2' : 'text-dark btn btn-outline-warning text-decoration-none w-100 rounded-1 px-4 py-2')}
                to='teachers'>
                  Teachers
            </NavLink>
          </li>
          <li className='mb-1'>
            <NavLink
                className={({ isActive }) => (isActive ? 'btn btn-warning text-white text-decoration-none w-100 rounded-1 px-4 py-2' : 'text-dark btn btn-outline-warning text-decoration-none w-100 rounded-1 px-4 py-2')} to='students'>Students</NavLink>
          </li>
          <li className='mb-1'>
            <NavLink
                className={({ isActive }) => (isActive ? 'btn btn-warning text-white text-decoration-none w-100 rounded-1 px-4 py-2' : 'text-dark btn btn-outline-warning text-decoration-none w-100 rounded-1 px-4 py-2')} to='groups'>Groups</NavLink>
          </li>
          <li className='mb-1'>
            <NavLink
                className={({ isActive }) => (isActive ? 'btn btn-warning text-white text-decoration-none w-100 rounded-1 px-4 py-2' : 'text-dark btn btn-outline-warning text-decoration-none w-100 rounded-1 px-4 py-2')} to='courses'>Courses</NavLink>
          </li>
        </ul>

      </nav>
  )
}

export default Navbar