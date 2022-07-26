import Aos from 'aos';
import React, { useEffect } from 'react'
import About from './componets/About ';
import Card from "./componets/Card";
import Contact from './componets/Contact';
import Footer from './componets/Footer';
import Skill from './componets/Skill';
import 'aos/dist/aos.css';

 


function App() {
  {
    useEffect( () => {
      Aos.init({
        once:true,
      })
    })
  }
  return (
    <div className=" min-h-screen py-10 px-3 sm:py-3 bg-gray-200 ">
      <div data-aos='fade-down' data-aos-duration='800' >
      <Card/>
      </div>
      <div data-aos='fade-up' data-aos-duration='800 ' data-aos-delay='400'>
      <About/>
      </div>
      <Skill/>
      <Contact/>
      <Footer/>
      
     
    </div>
  );
}

export default App;
