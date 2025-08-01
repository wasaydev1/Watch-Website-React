import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  let navigate = useNavigate()
  return (
    <section className='flex flex-col md:flex-row justify-between items-center min-h-[100vh] bg-gray-200 pt-[120px] px-4 md:px-20'>
        {/* Text Content Section */}
        <div className='flex flex-col gap-4 w-full md:w-[60%] text-center md:text-left'>
          <h1 className='text-5xl md:text-8xl text-gray-800 font-bold leading-tight md:leading-snug'>
            Select your New <br className="hidden md:block" /> <span>Perfect Style</span>
          </h1>
          <p className='text-lg mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          </p>
          <div className='flex gap-4 mt-4 justify-center md:justify-start'>
            <button 
              className='bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition-colors' 
              onClick={()=>navigate("/shop")}
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className=' md:flex gap-4 overflow-hidden mt-8 md:mt-0'>
          <img 
            className='Sec1-img h-full max-w-full' 
            src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png" 
            alt="...loading" 
          />
        </div>
      </section>
  )
}

export default Hero;  