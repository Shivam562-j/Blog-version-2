import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div
      className='w-full border shadow-md py-4 fixed top-0 bg-white'
    >
      <header
        className='text-center'
      >

        <h1
          className='text-3xl font-bold uppercase'
        >
          <Link to="/">
            Our Blogs
          </Link>
        </h1>
      </header>
    </div>
  )
}

export default Header