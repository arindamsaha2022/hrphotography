import React from 'react';
import '../styles/cards.scss';

const Cards = () => {
  return (
    <main className='cards-container'>
      <div className='card card1'>
        <h1>Marriage Photography</h1>
        <p>Capturing Your Forever in Every Frame.</p>
      </div>
      <div className='card card2'>
        <h1>Event Planning Photography</h1>
        <p>Preserving the Magic of Every Moment</p>
      </div>
      <div className='card card3'>
        <h1>Newborn Photography</h1>
        <p>Tiny Miracles, Timeless Memories.</p>
      </div>
      <div className='card card4'>
        <h1>Family Portraits</h1>
        <p>Freezing Family Moments to Cherish for Generations.</p>
      </div>
      <div className='card card5'>
        <h1>Personal Photoshoots</h1>
        <p>Your Story, Perfectly Posed.</p>
      </div>
      <div className='card card6'>
        <h1>Corporate Photography</h1>
        <p>Professional Moments, Captured with Precision.</p>
      </div>
      <div className='card card7'>
        <h1>Birthday and Special Events</h1>
        <p>Turning Every Milestone into Memories.</p>
      </div>
    </main>
  );
}

export default Cards;
