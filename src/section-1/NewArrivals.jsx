import React from 'react'

const NewArrivals = () => {
  return (
    <section className='bg-white min-h-[140vh] px-20 flex flex-col justify-center pb-20'>
        <h1 className='text-5xl font-semibold md:text-center pt-10'>New Arrivals</h1>
        <div className='section2Image flex justify-center flex-wrap gap-8 items-center min-h-120 mt-20'>
          <div className='flex flex-col gap-4 justify-center items-center'>
            <div className="h-120 w-100 overflow-hidden bg-gray-200 flex justify-center items-center">
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" className='h-full w-full object-cover' alt="" />
            </div>
            <div className='flex flex-col gap-2 justify-center items-center'>
              <h2 className='ThermoBall text-2xl font-bold'>Thermo Ball Etip Gloves</h2>
              <p className='descSec2'>$ 45,743</p>
            </div>
          </div>
          <div className='flex flex-col gap-4 justify-center items-center'>
            <div className="h-120 w-100 overflow-hidden bg-gray-200 flex justify-center items-center">
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png" className='h-full w-full object-cover' alt="" />
            </div>
            <div className='flex flex-col gap-2 justify-center items-center'>
              <h2 className='ThermoBall text-2xl font-bold'>Thermo Ball Etip Gloves</h2>
              <p className='descSec2'>$ 45,743</p>
            </div>
          </div>
          <div className='flex flex-col gap-4 justify-center items-center'>
            <div className="h-120 w-100 overflow-hidden bg-gray-200 flex justify-center items-center">
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png" className='h-full w-full object-cover' alt="" />
            </div>
            <div className='flex flex-col gap-2 justify-center items-center'>
              <h2 className='ThermoBall text-2xl font-bold'>Thermo Ball Etip Gloves</h2>
              <p className='descSec2'>$ 45,743</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default NewArrivals
