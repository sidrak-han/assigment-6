import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
    <header className='h-[54px] bg-[#F7F7F7] flex items-center justify-between border-b border-black'>
        <div className='flex items-center justify-start gap-6'>
        <span>Phone Number: 956742455678</span>
        <span>Email:info@ddsgnr.com</span>
        </div>
        <Image
        src={"/sl.svg"}
        alt='social images'
        width={124}
        height={24}
        />

    </header>
    <nav className='h-[72px] bg-[#f7F7F7] mt-6 flex items-center justify-between list-none'>
        <Image
        src={"/logo.svg"}
        alt='logo'
        width={130.6}
        height={41}
        />

        <li>Home</li>
        <li>Couses</li>
        <li>Services</li>
        <li>Achievement</li>
        <li>About Us</li>
        <li>Testimonial</li>
        <button className='border border-black p-4 rounded'>Login</button>
        <button className='bg-black text-white p-4 rounded'>Sign Up</button>

    </nav>
      
    </>
  )
}

export default Navbar
