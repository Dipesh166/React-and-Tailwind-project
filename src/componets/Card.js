import React from 'react'
import profile from '../images/ko.jpg'
import {FaGithub, FaInstagram,FaEnvelope, FaTwitter} from 'react-icons/fa';

function Card (){
    return (
        <div className='w-full'>
            <div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5'>
                <div className=''>
                    <img className='w-32 mx-auto rounded-full shadow-xl drop-shadow-sm' src={profile} alt= ''></img>
                </div>
                <div className='text-center mt-5 '>
                <p className='text-xl font-bold text-gray-900 sm:text-2xl'>
                        Rupesh Mandal

                    </p>
                    <p className='text-xs text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2 sm:text-base '>
                      Game Developer 

                    </p>

                    <div className='flex  justify-center items-center mt-4'>

                    
                    <a className='text-xl m-1 p-1 sm:p-2 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full '>
                        <FaGithub/>
                        <span className='sr-only'>Github</span>

                    </a>

                    <a className='text-xl m-1 p-1 sm:p-2 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full '>
                        <FaInstagram/>
                        <span className='sr-only'>Instagram</span>

                    </a>

                    <a className='text-xl m-1 p-1 sm:p-2 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full '>
                        <FaTwitter/>
                        <span className='sr-only'>Twitter</span>

                    </a>

                    <a className='text-xl m-1 p-1 sm:p-2 text-teal-800 hover:bg-teal-800 hover:text-white rounded-full '>
                        <FaEnvelope/>
                        <span className='sr-only'>Gmail</span>

                    </a>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Card;