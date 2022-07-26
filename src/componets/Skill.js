import React from 'react'
import {FaUnity} from 'react-icons/fa'
import {SiUnrealengine,SiAdobephotoshop} from 'react-icons/si'
import {GiMayanPyramid} from 'react-icons/gi'



function Skill (){
    return (
        <div className='max-w-auto mx-auto justify-cenetr py-12' id='tech'>
            <p className='text-2xl sm:text-4xl text-center text-black pt-4 font-bold '>
                Tech I use 

            </p>
            <div className='flex flex-wrap justify-center pt-2'>
                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl rounded-xl sm:w-52'>
                    < FaUnity color="black" className='mx-auto text-4xl '/>
                    <p className='mt-6 text-xl font-semibold text-center  sm:text-2xl'>Unity</p>
                 </div>

                 <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl rounded-xl sm:w-52'>
                    < SiAdobephotoshop color="purple" className='mx-auto text-4xl '/>
                    <p className='mt-6 text-xl font-semibold text-center  sm:text-2xl'>Photoshop</p>
                 </div>


                 <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl rounded-xl sm:w-52'>
                    < GiMayanPyramid color="red" className='mx-auto text-4xl '/>
                    <p className='mt-6 text-xl font-semibold text-center  sm:text-2xl'>Maya</p>
                 </div>

                 <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl rounded-xl sm:w-52'>
                    < SiUnrealengine color="black" className='mx-auto text-4xl '/>
                    <p className='mt-6 text-xl font-semibold text-center  sm:text-2xl'>Un Real</p>
                 </div>



            </div>

        </div>

    )
}

export default Skill;