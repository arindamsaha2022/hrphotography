import React from 'react'
import "../styles/Home.scss"
import Bottoms from '../components/bottoms';
const Home = () => {
  return (
    <div>
        <main className='home'>
      <div className="content">
        <h1>HR PHOTOGRAPHY </h1>
        <p>Malda’s Best Photography, Capturing Life’s Most Beautiful Moments One Perfect Shot at a Time </p>
       
      <a href="tel:8167014165"><button class="button-34" role="button">Call us</button></a>
      </div>
      
    </main>

    <Bottoms/>
    </div>
  

  );
}

export default Home;