import React from 'react';
import Headers from './Heade/Headers';
import Navbar from './Navbar/Navb';
import Banner from './Sections/Banner';
import Adenoidectomy from './Sections/Adenoidectomy';
import Causes from './Sections/Causes';
import Symptoms from './Sections/Symptoms';
import Treatment from './Sections/Treatment';
import Numbers from './Sections/Numbers';
import Questions from './Sections/Questions';
import Footer from './Sections/Footer';
import "./home.css"

function Home() {
  return (
    <div  className='main'>
    <Headers />
    <Navbar />
    <Banner />
    <Adenoidectomy />
    <Causes />
    <Symptoms />
    <Treatment />
    <Numbers />
    <Questions />
    <Footer />
    </div>
  )
}

export default Home