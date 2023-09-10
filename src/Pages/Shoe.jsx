import React from 'react'
import Layout from '../Components/Layout'
import shoes from '../assets/images/shoes.jpg'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const image = [
  {
    'title': 'Shoe',
    'price': '432.54',
  },
]
const Shoe = () => {
  return (
    <Layout>
      <div className="mt-10">
        {new Array(1).fill().map((item, index) => (
          <div className="" key={index}>
            {new Array(1).fill().map((item, index) => (
              <div className="" key={index}>
                {image.map((item, index) => (
                  <div key={index} className="bg-gray-300 p-3 lg:p-5 flex items-center justify-between m-5">
                    <div className="lg:text-3xl text-1xl">{item.title}</div>
                  </div>
                ))}
                <div className="overflow-x-auto lg:w-[95%] w-[95%] mx-auto scrollsdown mb-15">
                  <div className="flex items-center gap-5 w-fit">
                    {new Array(8).fill().map((item, index) => (
                      <div className="w-[20rem] h-[30rem]" key={index}>
                        <Link to='/product' onClick={() => window.scrollTo(0, 0)}><img src={shoes} alt="" className="w-full h-[24rem] hover:border " /></Link>
                        <div className="text-2xl text-black">$343.00</div>
                        <div className="text-[0.9rem] text-black">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className="text-[#fcb800] flex"> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {new Array(1).fill().map((item, index) => (
              <div className="" key={index}>
                <div className="overflow-x-auto lg:w-[95%] w-[95%] mx-auto scrollsdown mb-15">
                  <div className="flex items-center gap-5 w-fit">
                    {new Array(8).fill().map((item, index) => (
                      <div className="w-[20rem] h-[30rem]" key={index}>
                        <Link to='/product' onClick={() => window.scrollTo(0, 0)}><img src={shoes} alt="" className="w-full h-[24rem] hover:border " /></Link>
                        <div className="text-2xl text-black">$343.00</div>
                        <div className="text-[0.9rem] text-black">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className="text-[#fcb800] flex"> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Shoe
