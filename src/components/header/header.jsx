import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='d-flex justify-content-between align-items-center py-3 px-2 text-white bg-warning mb-3'>
        <Link className='text-decoration-none text-white fs-3' to='/admin'>O'quv markazi</Link>
    </div>
  )
}

export default Header