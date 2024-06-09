import React from 'react'
import asset1 from "../assets/asset1.webp"
import nav_logo from "../assets/nav_logo.png"

const Navbar = () => {
  return (
    <>
    <div className='flex items-center cursor-pointer justify-evenly vsm:static sm:sticky'>
      <nav className={`p-2 flex items-center justify-around flex-wrap vsm:flex-col-reverse 
      md:flex md:flex-nowrap md:flex-row md:gap-6
      lg:flex lg:flex-wrap lg:gap-10
      xl:gap-10
      xs:flex-col-reverse`}>
        <img src={nav_logo} alt="" className='h-24 mix-blend-screen '/>    
        <ul className=' flex items-center gap-12 text-xl'>
          <li className=' hover:text-orange-700'><a href="#" className=' font-extrabold'>Home</a></li>
          <li className=' hover:text-orange-700'><a href="#" className=' font-extrabold'>About</a></li>
          <li className=' hover:text-orange-700'><a href="#" className=' font-extrabold'>Pricing</a></li>
          <li className=' hover:text-orange-700'><a href="#" className=' font-extrabold'>Feature</a></li>
        </ul>
      </nav>
      <button className=' w-44 rounded-md cursor-pointer'>Download</button>
    </div>
    </>
  )
}

export default Navbar