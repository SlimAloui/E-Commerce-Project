import Image from 'next/image'
import React from 'react'
import shop from '../assets/shop.png'
import { BsSearch } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { SiFirebase } from 'react-icons/si';

const Navbar = () => {
  return (
    <div className=''>
      <div className='flex justify-between whitespace-nowrap 
                      font-bold px-4 py-3 
                      sm:px-6 sm:py-5 xl:max-w-[80vw] mx-auto'>
          {/* Left Side */}
          <div className='flex items-center'>
            <div className='w-10 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 sm:mr-8'>
              <Image src={shop} alt="Shop logo"/>
            </div>

            <ul className='hidden sm:flex sm:space-x-5 text-gray-700 font-semibold'>
                <li className="">Home</li>
                <li className=''>Shop</li>
                <li className='hidden md:block'>About Us</li>
                <li className='hidden md:block'>Blog</li>
                <li className='hidden md:block'>Contact Us</li>
            </ul>
          </div>
          {/* Right Side */}
          <div className='flex items-center space-x-4 sm:space-x-6 md:space-x-8'>
            <button className=' text-[18px]'>Login</button>
            <BsSearch className='hidden sm:block md:text-[25px]'/>
            <FiShoppingCart className=' text-[18px] md:text-[25px]'/>
          </div>
      </div>
    </div>
  )
}

export default Navbar