import React from 'react';
import  { useEffect } from 'react';
import "../styles/work.scss";
import Sample1 from "../assets/sample/s1.jpg"; // Import the local image
import Sample2 from "../assets/sample/s2.jpg"; // Import the local image
import Sample3 from "../assets/sample/s3.jpg"; // Import the local image
import Sample4 from "../assets/sample/s4.jpg"; // Import the local image
import Sample5 from "../assets/sample/s5.jpg"; // Import the local image
import Sample6 from "../assets/sample/s6.jpg"; // Import the local image
import Sample7 from "../assets/sample/s7.jpg"; // Import the local image
import Sample8 from "../assets/sample/s8.jpg"; // Import the local image




const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);


  const samplePhotos = [
    Sample1,Sample2,Sample3,Sample4,Sample5,Sample6,Sample7,Sample8,
  ];

  return (
    <div className="gallery-container">
      <h1>Work Samples</h1>
      <div className="gallery-grid">
        {samplePhotos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <img src={photo} alt={`Sample ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
