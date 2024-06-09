import React from 'react'
import nav_logo from '../assets/nav_logo.png'
import { CiMail } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <>
    <div className=' flex flex-row flex-wrap justify-evenly text-black mt-40'>
        <div className=' flex flex-col gap-3'>

            <img src={nav_logo} className='w-32' />
            <span className=' flex items-center justify-center'><CiMail className=' text-orange-600'/>helpuifry@gmail.com</span>
            <span className=' flex items-center justify-center'><MdLocalPhone className=' text-orange-600'/>+123456374899</span>

        </div>

        <div className=' flex flex-col gap-3'>
            <span className=' text-3xl'>Links</span>
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Booking</a>
            <a href="#">Blog</a>


        </div>

        <div className=' flex flex-col gap-3'>
            <span className=' text-3xl'>Legal</span>
            <a href="#">Terms Of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>


        </div>

        <div className=' flex flex-col gap-3'>
            <span className=' text-3xl'>Product</span>
            <a href="#">Take Tour</a>
            <a href="#">Live Chat</a>
            <a href="#">Reviews</a>

        </div>

        <div className=' flex flex-col gap-3'>
            <span className=' text-3xl'>Newsletter</span>
            <a href="#">Stay Up to Date</a>

            <div>
                <input className='bg-white border border-slate-700 p-4' type="text" placeholder='Your Email' />
                <button className=' text-white w-40 rounded-md p-4'>Subscribe</button>
            </div>

        </div>
    </div>
    </>
  )
}

export default Footer