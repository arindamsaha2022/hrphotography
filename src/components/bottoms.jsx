import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/bottom.scss";
import { IoIosMail } from "react-icons/io";
import { FaInstagram,FaFacebookSquare,FaYoutube,FaPhone,} from "react-icons/fa";

// Import local images
import RupamImage from "../assets/rupam.jpg"; 
import RitamImage from "../assets/ritam.jpg"; 
import SonaImage from "../assets/sona.jpg"; 
import Model from "../assets/modle.png"; 
import Model2 from "../assets/modle2.png"; 

//smple image
import S1 from "../assets/sample/s1.jpg"; 
import S2 from "../assets/sample/s2.jpg"; 
import S3 from "../assets/sample/s3.jpg"; 

//components
import Cards from './Cards';
// import Video from './video';

const Bottoms = () => {
  const people = [
    {
      name: "Rupam Paul",
      description: "Cinematography/Videography",
      img: RupamImage, // Use the imported image
      ig: "https://www.instagram.com/rupam_photography_youtuber?igsh=cnJodmlkYm1yaWEz"
    },
    {
      name: "Ritam Paul",
      description: " photography",
      img: RitamImage,
      ig: "https://www.instagram.com/tdritam001?igsh=MTBvaW9vcDA3eXVkaA=="
    },
    {
      name: "Sonaton Paul",
      description: " traditional videography",
      img: SonaImage,
      ig: "https://www.instagram.com/sonaton_01?igsh=ZGl5bHRiczBxaXBx"
    },
  ];

  return (
    <div>
        <div className='copy'>
          <div>
          <h1>Best Photography in Malda</h1>
          <p>Looking for the best photographer in Malda? At HRphotography, we specialize in capturing life’s most important moments with creativity and precision. From weddings and events to personal and family portraits, our experienced team ensures that each shot reflects the beauty, emotion, and uniqueness of your special day. With a passion for storytelling through photography, we’re dedicated to delivering high-quality images that you’ll cherish forever. Trust us to be the best photography service in Malda for all your special occasions.</p>
          </div>
         <img src={Model} className='mdl' alt="m"/>
        </div>

        <div className='copy'>
          <div>
          <h1>Videography Services</h1>
          <p>At HRphotography, we offer professional videography services that bring your most cherished moments to life. Based in Malda, our skilled videographers specialize in capturing the essence of your events, whether it’s a wedding, corporate function, family gathering, or personal milestone. With a focus on storytelling, we ensure that every emotion, movement, and detail is beautifully preserved in high-quality video.

          From cinematic wedding films to dynamic event coverage, we tailor our approach to suit your vision, creating videos that you’ll want to relive time and time again. Trust HRphotography to turn your moments into lasting memories with our expert videography services.</p>
          </div>
         <img src={Model2} className='cam' alt="mq"/>
        </div>
        <Cards/>
        <div className='sample'>
          <h1>Our Work</h1>
          <div className='img'>
          <img src={S1} className='sampleImage' alt="sample"/>
          <img src={S2} className='sampleImage' alt="sample"/>
          <img src={S3} className='sampleImage' alt="sample"/>
          </div>
          <Link to="/work"><button class="button-34" role="button">More Sample → </button></Link>
          
         
        {/* <Video/> */}
        </div>

        <div className='members'>
        <h1>Team Members:</h1>
      <div className="cards-containers">
        
        {people.map((person, index) => (
          <div key={index} className="cards">
            <img src={person.img} alt={person.name} />
            <div className="card-content">
              <h2>{person.name}</h2>
              <p>{person.description}</p>
              <a href={person.ig} target="_blank" rel="noopener noreferrer">
                <button className="arrow-button">
                  <FaInstagram className='fa' />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      </div>
      <div className='socialMedia'>
        <h1>Our socialMedia handles</h1>
        <div>
        <a href="https://www.instagram.com/itz_rupam_s_?igsh=c3plOHV1OGhta2di"><FaInstagram className='insta  handle' /></a>
        <a href="https://www.facebook.com/share/aJoxBf6rYpzE3EEi/?mibextid=qi2Omg"><FaFacebookSquare className='facebook handle' /></a>
        <a href=""><FaYoutube className='youtube handle'  /></a>
        </div>
       
        <h3>Mali:   <a href="mailto:hrcreation9641@gmail.com">hrcreation9641@gmail.com<IoIosMail  /></a></h3>
        <h3>Phone:  <a href="tel:8167014165">8167014165<FaPhone/></a></h3>
      </div>
 
    </div>
  );
};

export default Bottoms;
