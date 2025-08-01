import React from 'react'
import sec2Image from '../assets/section2images/bgImage'
import MissionVisionSection from './MissionVisionSection'

const About = () => {
    return (
        <>
            <div>
                <div className='w-full h-[60vh] relative flex justify-center items-center'>
                    <img src={sec2Image} alt="" className='h-full w-full' />
                    <p className='ShopProduct absolute text-7xl font-black '>About Us</p>
                </div>
            </div>
            <div>
                <MissionVisionSection />
            </div>
        </>
    )
}

export default About
