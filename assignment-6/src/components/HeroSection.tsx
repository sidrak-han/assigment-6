import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='h-[800px] flex items-center justify-between'>
        <div className='w-1/2 ml-12'>
            <h1 className='h-[134px] w-[500px] font-bold text-[56px]'>Learn new skills online with ease</h1>
            <p className='w-[500px] h-[54px] mt-12'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
                <button className='text-white border border-black py-2 px-4 bg-black mr-6 mt-16'>Start Learning Now</button>
                <button className='border border-black py-2 px-4'>Explore Courses</button>
        </div>
        <div className='w-1/2 mt-40'>
        <Image
        src={"/hero.jpeg"}
        alt='hero-img'
        width={640}
        height={900}
        />

        </div>
    
      
    </div>
  )
}

export default HeroSection
