import React from 'react'
import { Link } from 'react-router-dom'
import logos from '../assets/images/joe.svg'
import { FaBars } from 'react-icons/fa'

const Navbar = ({closeView}) => {
    return (
        <div className='bg-black fixed z-50 w-[100%] overflow-y-hidden h-[100%]'>
            <div className="bg-gray-200 py-2 px-6">
                <div className="flex items-center justify-between">
                    <Link to='/' className=""> <img src={logos} alt="" className="w-28 lg:w-60" /> </Link>
                    <div className=" ">
                        <div className=" mr-7 text-3xl lg:hidden font-light"> <FaBars className=' cursor-pointer' onClick={closeView} /> </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 py-6 mt-10 mb-10 px-10">
                <Link to='/' className="mr-4 text-white hover:text-[#9f1772] mb-4 font-semibold text-xl">HOME</Link>
                <Link to='/accessories' className="mr-4 mb-4 text-white hover:text-[#9f1772] font-semibold  text-xl">WRISTWATCH</Link>
                <Link to='/native' className="mr-4 mb-4 text-white hover:text-[#9f1772] font-semibold text-xl">NATIVES</Link>
                <Link to='/shoe' className="mr-4 mb-4 text-white hover:text-[#9f1772] font-semibold text-xl">SHOES</Link>
                <Link to='/blog' className="text-white hover:text-[#9f1772] mb-4 font-semibold text-xl">BLOG</Link>
            </div>
            <div className="flex items-center text-black gap-3 justify-center w-full mx-auto">
                <Link to='/login' onClick={() => scrollTo(0, 0)} className='bg-white hover:text-[#9f1772] text-xl font-semibold rounded-full py-2 px-10'>LOGIN</Link>
                <Link to='/signup' onClick={() => scrollTo(0, 0)} className='bg-white hover:text-[#9f1772] text-xl font-semibold rounded-full py-2 px-10'>SIGN UP</Link>
            </div>
            <br />
        </div>
    )
}

export default Navbar
