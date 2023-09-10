import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <div className="bg-gray-300 w-full h-full">
        <div className="flex-cols lg:flex items- justify-between pt-20 pb-1 mx-auto  ml-[2rem] mr-[2rem]">
          <div className=" pb-10">
            <div className="text-black text-[1.5rem] font-semibold">CONTACT INFO</div>
            <div className="text-black mb-2 lg:text-[1rem]">ADDRESS: Olajide Shopping Complex, <br /> Opposite Model College, Ajah, Lagos, Nigeria.</div>
            <div className="text-black mb-2 lg:text-[1rem]">PHONE: 0815 706 1427</div>
            <div className="text-black mb-2 lg:text-[1rem]">EMAIL: atolagbejoseph98@gmail.com</div>
          </div>
          <div className="text-black pb-10">
            <div className="text-black text-[1.5rem] font-semibold">MY ACCOUNT</div>
            <Link className="text-black mb-2 lg:text-[1rem]">Personal Info</Link> <br />
            <Link className="text-black mb-2 lg:text-[1rem]">Orders</Link> <br />
            <Link className="text-black mb-2 lg:text-[1rem]">Addresses</Link> <br />
          </div>
          <div className="">
            <div className="flex justify-center items-center">
              <Link className=' bg-black lg:text-2xl text-white p-[1rem] rounded-full'> <FaFacebookF /> </Link>
              <Link className=' bg-black lg:text-2xl text-white p-[1rem] ml-4 rounded-full'> <FaTwitter /> </Link>
              <Link className=' bg-black lg:text-2xl text-white p-[1rem] ml-4 rounded-full'> <FaPinterestP /> </Link>
              <Link className=' bg-black lg:text-2xl text-white p-[1rem] ml-4 rounded-full'> <FaInstagram /> </Link>
            </div>
            <div className=" text-black flex items-center justify-center pt-6">
              <Link className='font-semibold lg:text-[1rem]'>contact@atolagbejoseph98@gmail.com</Link>
            </div>
          </div>
        </div>
        <div className=" pb-10 text-black text-center">Copyright © Olanrewaju</div>
      </div>
    </div>
  )
}

export default Footer
