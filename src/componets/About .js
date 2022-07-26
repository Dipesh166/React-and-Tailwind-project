import React from 'react'
import ScrollIntoView from 'react-scroll-into-view';
import {FaChevronDown} from 'react-icons/fa'


 function About(){

    return (
        <div className='max-w-12xl  mt-20 w-auto '>
            <p className='text-2xl text-black md:text-4xl md:text-center font-bold text-center'>
                Hey 👋
            </p>
            <p className='text-base text-gray-600 sm:text-xl md:text-xl mx-14 text-center mt-4 leading-relaxed  '>
                 I'm A Passoniate Game Developer. I am familiar with UNITY & UNREAL Game Engine. I had made lot of
                  Incrediable Games of Differnt Gneres. I used Ai in Games for optimization i Used C/C++ & C sharp.
            </p>



            <ScrollIntoView selector='#tech'>
                <div className='max-auto p-20'>
                    <FaChevronDown className='animate-bounce mx-auto text-3xl text-blue-500'/>

                </div>
            
        </ScrollIntoView>






        </div>

        






    )

 }

 export default About;
