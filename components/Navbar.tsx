import React from 'react'
import Image from 'next/image'
import logo from "@/assets/logo.svg"

const Navbar = () => {
  return (
    <nav className='text-center'>
      <div className='flex py-8 items-center justify-center'>
        <Image className='border-solid border-white' src={logo} alt='logo'></Image>
      </div>
    </nav>
  )
}

export default Navbar