import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  let navigate = useNavigate()
  return (
    <section className='flex justify-between px-20 items-center min-h-[100vh] bg-gray-200 pt-[120px]'>
        <div className='flex flex-col gap-4 w-[60%]'>
          <h1 className='text-8xl text-gray-800 font-bold leading-30'>
            Select your New <span>Perfect Style</span>
          </h1>
          <p className='text-lg mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          </p>
          <div className='flex gap-4 mt-4'>
            <button className='bg-gray-800 text-white px-6 py-3 rounded' onClick={()=>navigate("/shop")}>Shop Now</button>
          </div>
        </div>
        <div className='flex gap-4 overflow-hidden'>
          <img className='Sec1-img h-full' src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png" alt="...loading" />
        </div>
      </section>
  )
}

export default Hero
