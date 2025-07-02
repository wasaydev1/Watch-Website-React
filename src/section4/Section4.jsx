import React from 'react'
import sec2Image from '../assets/section2images/bgImage'
import ContactForm from './ContactForm'

const Section4 = () => {
    return (
        <>
        <div>
            <div className='w-full h-[60vh] relative flex justify-center items-center'>
                <img src={sec2Image} alt="" className='h-full w-full' />
                <p className='ShopProduct absolute text-7xl font-black '>Contacts</p>
            </div>
        </div>
        <div>
            <ContactForm />
        </div>
        </>
    )
}

export default Section4
