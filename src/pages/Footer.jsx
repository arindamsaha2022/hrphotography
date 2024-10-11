import React from 'react'
import { FaInstagram,FaFacebookSquare,FaYoutube,FaPhone,} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const Footer = () => {
  return (
    <footer className='w-full  bg-black text-white'>
    <p className='col-span-3 text-center p-4 text-2xl font-bold'>Contact Us</p>
  
  <div className="flex flex-wrap justify-center ">
    {/* <!-- Contact Information --> */}
    <div className=" p-4 text-xl flex flex-col gap-2 sm:px-8 sm:text-lg md:px-4">
      <p className='flex gap-2 justify-start items-center'><IoIosMail />   
        <a href="mailto:hrcreation9641@gmail.com" className='hover:underline'>hrcreation9641@gmail.com</a>
      </p>
      <p className='flex gap-2 justify-start items-center'><FaPhone />  
        <a href="tel:8167014165" className='hover:underline'>8167014165</a>
      </p>
    </div>
  
    {/* <!-- Social Media Icons --> */}
    <div className='flex flex-wrap justify-center items-center gap-4 sm:col-span-3 col-start-3 py-2'>
      <a href="https://www.instagram.com/itz_rupam_s_?igsh=c3plOHV1OGhta2di"><FaInstagram className='insta handle text-3xl' /></a>
      <a href="https://www.facebook.com/share/aJoxBf6rYpzE3EEi/?mibextid=qi2Omg"><FaFacebookSquare className='facebook handle text-3xl' /></a>
      <a href=""><FaYoutube className='youtube handle text-3xl' /></a>
    </div>
    </div>
    {/* <!-- Footer Note --> */}
    <p className=' text-center mt-4 text-sm sm:text-xs'>
      Made by Arindam Saha. Phone: <a href="tel:9775169334" className='hover:underline'>9775169334</a>
    </p>
  </footer>
  
  )
}

export default Footer