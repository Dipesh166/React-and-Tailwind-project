import React from 'react'

import { FaGithub, FaInstagram, FaEnvelope, FaTwitter } from 'react-icons/fa';


function Footer() {
    return (
        <div className='pt-5 pb-5 border-t-3/2'>
            <div className='flex justify-center  mt-4'>


                <a className='text-xl m-1 p-1 sm:p-2 text-gray-800 hover:bg-gray-800 transition-colors hover:text-white rounded-full '>
                    <FaGithub />
                    <span className='sr-only'>Github</span>

                </a>

                <a className='text-xl m-1 p-1 sm:p-2 text-orange-600 hover:bg-orange-600 transition-colors  hover:text-white rounded-full '>
                    <FaInstagram />
                    <span className='sr-only'>Instagram</span>

                </a>

                <a className='text-xl m-1 p-1 sm:p-2 text-blue-500 hover:bg-blue-500 transition-colors hover:text-white rounded-full '>
                    <FaTwitter />
                    <span className='sr-only'>Twitter</span>

                </a>

                <a className='text-xl m-1 p-1 sm:p-2 text-teal-800 hover:bg-teal-800 transition-colors hover:text-white rounded-full '>
                    <FaEnvelope />
                    <span className='sr-only'>Gmail</span>

                </a>
            </div>
            <div className='flex justify-center mt-4 '>
                <p className='text-black mb-4 '>
                    Made With <span className=' mr-2' role="link" aria-label ='heart' >💙</span> by <a className='text-blue-500 hover:underline 
                    href="https://dipeshmandal@gmail.com'> Rupesh</a>
                </p>

            </div>
        </div>

    )
}

export default Footer;