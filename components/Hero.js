import React from 'react'
import Image from 'next/image'
import headphone from '../assets/product.png'

const Hero = () => {
  return (
    <div>
        <div className= 'h-[20rem] rounded-[0.6rem] py-4 mx-auto flex relative'>
            <div className='absolute w-[20rem] top-0 right-0'>
                <Image src={headphone} alt="headphone"/>
            </div>
            <div className='bg-neutral-400/50 -my-4 z-10 rounded-[0.6rem] w-full'>
                <div className='flex flex-col justify-end h-full px-4 py-4'>
                    <p className='test-[1rem] font-semibold -mb-1'>Beats Solo</p>
                    <p className='text-[1.8rem] font-bold -mb-1'>Wireless</p>
                    <p className='text-[2.4rem] font-black text-white'>HEADPHONES</p>
                    <div className='p-2 bg-red-400 rounded-[0.5rem] text-white text-center w-[8rem] whitespace-nowrap text-[12px]'>
                        <button>Shop by category</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero