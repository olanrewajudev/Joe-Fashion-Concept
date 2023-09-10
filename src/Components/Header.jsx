import React from 'react'
import logo from '../assets/images/joe.svg'
import { LiaSearchSolid } from 'react-icons/lia'
import { FaBars } from 'react-icons/fa'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from '../Components/Navbar'

const Header = () => {

  const [scroll, setScroll] = useState(false)
  const [view, setView] = useState(false)
  window.onscroll = function () {
    siteScoll()
  }

  function siteScoll() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  const handleView = () => {
    setView(!view)
  }

  return (
    <div>
      <div>
        {view && <Navbar closeView={() => setView(!view)} />}
        <div className={`fixed w-full z-50 ${scroll ? 'bg-whit py-' : 'py-'}`}>
          <div className="bg-gray-300 py-2 px-5 lg:px-16">
            <div className="flex items-center justify-between">
              <Link to='/' className=""> <img src={logo} alt="" className="w-24 lg:w-44" /> </Link>
              <div className="lg:flex hidden">
                <Link to='/' className=" mr-4 text-[1.3rem] hover:text-[#9f1772] font-semibold">HOME</Link>
                <Link to='/accessories' className=" mr-4 text-[1.3rem] hover:text-[#9f1772] font-semibold">WRISTWATCH</Link>
                <Link to='/native' className=" mr-4 text-[1.3rem] hover:text-[#9f1772] font-semibold">NATIVES</Link>
                <Link to='/shoe' className=" mr-4 text-[1.3rem] hover:text-[#9f1772] font-semibold">SHOES</Link>
                <Link to='/blog' className="text-[1.3rem] hover:text-[#9f1772] font-semibold">BLOG</Link>
              </div>
              <div className="flex items-center justify-between">
                <Link to='' className=" mr-7 lg:text-2xl hover:text-[#9f1772] font-light"> <LiaSearchSolid /> </Link>
                <Link to='/signup' onClick={() => scrollTo(0, 0)} className=" mr-7 hover:text-[#9f1772] lg:text-2xl font-light"> <AiOutlineUser /> </Link>
                <Link to='/' className=" lg:text-2xl hover:text-[#9f1772] font-light"> <AiOutlineShoppingCart /> </Link>
                <div className=" ml-7 lg:text-2xl lg:hidden font-light"> <FaBars className="cursor-pointer" onClick={() => handleView(!view)} /> </div>
              </div>

            </div>
          </div>
          <div className="bg-[#9f1772] py-2.5 px-5 lg:px-16 text-white">
            <div className="flex items-center justify-between">
              <div className="lg:text-[1.1rem] text-[0.9rem]">Call Us: +234 815 706 1427</div>
              <div className="flex  items-center justify-between">
                <Link to='/login' className="lg:border-r text-[0.9rem] border-gray-500 pr-4 lg:text-[1.1rem] mr-2">Wishlist(0)</Link>
                <Link to='' className="border-r lg:flex hidden border-gray-500 pr-4 text-[1.1rem] mr-2">English</Link>
                <Link to='' className="text-[1.2rem] lg:flex hidden ">USD</Link>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br />
      </div>
      
    </div>
  )
}

export default Header
