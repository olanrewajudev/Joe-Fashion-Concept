import React from 'react'
import Layout from '../Components/Layout'

import { Link } from "react-router-dom"
import tailor1 from '../assets/images/tailor2.jpg'
import suit from '../assets/images/tails.jpg'
import shoes from '../assets/images/shoes.jpg'
import wristwatch from '../assets/images/agoo.jpg'
import youruba from '../assets/images/youruba.jpg'
import casuals from '../assets/images/lounge.jpg'
import product from '../assets/images/product1.jpg'
import men from '../assets/images/menfashion.jpg'



import blog1 from '../assets/images/blog1.jpg'
import blog2 from '../assets/images/blog2.jpg'
import blog3 from '../assets/images/blog3.jpg'
import blog4 from '../assets/images/blog4.jpg'

import Carousel from 'react-multi-carousel';

import { BsAirplaneEnginesFill, BsHeadset, BsGift, BsWalletFill } from 'react-icons/bs'

import { FaStar } from "react-icons/fa"

const images = [
  {
    'title': 'suit',
    'price': '432.54',
  },
]
const image = [
  {
    'title': 'Shoe',
    'price': '432.54',
  },
]
const imags = [
  {
    'title': 'Wrist Watch',
    'price': '432.54',
  },
]
const mags = [
  {
    'title': 'Native Wears',
    'price': '482.54',
  },
]
const casual = [
  {
    'title': 'Native Wears',
    'price': '482.54',
    'content': 'Mordern casual wears of the late 20th century',
  },
]

const blog = [
  {
    'blog': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis fugit id, quisquam nisi magni, laudantium reiciendis autem saepe iste ipsa eaque optio animi, recusandae sed culpa illo velit itaque? Debitis......',

    'blog2': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis fugit id, quisquam nisi magni, laudantium reiciendis autem saepe iste ipsa eaque optio animi, recusandae sed culpa illo velit itaque? Debitis......',

    'blog3': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis fugit id, quisquam nisi magni, laudantium reiciendis autem saepe iste ipsa eaque optio animi, recusandae sed culpa illo velit itaque? Debitis......',

    'blog4': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis fugit id, quisquam nisi magni, laudantium reiciendis autem saepe iste ipsa eaque optio animi, recusandae sed culpa illo velit itaque? Debitis......'
  }
]
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1
  }
};
const Home = () => {
  return (
    <Layout>
      <div className="mb-12">
        <div className=""> <img src={tailor1} alt="" className="w-full h-[18rem] lg:h-[30rem] object-fill" /> </div>
      </div>

      <div className="lg:flex md:grid grid-cols-2 md:gap-10 items-center mb-16 justify-between px-16">
        <div className="text-center mb-3">
          <Link to='' className="flex mb-5 items-center text-[#9f1772] text-5xl justify-center"> <BsAirplaneEnginesFill /> </Link>
          <div className="text-[0.9rem] hover:text-[#9f1772] font-200">FREE SHIPPING WORLDWIDE</div>
          <div className="text font-light hover:text-[#9f1772]">On order over $150 - 7 days a week</div>
        </div>
        <div className="text-center mb-3">
          <Link to='' className="flex mb-5 items-center text-[#9f1772] text-5xl justify-center"> <BsWalletFill /> </Link>
          <div className="text-[0.9rem] hover:text-[#9f1772] font-200">CASH ON DELIVERY</div>
          <div className="text font-light hover:text-[#9f1772]">100% money back guraantee</div>
        </div>
        <div className="text-center mb-3">
          <Link to='' className="flex mb-5 items-center text-[#9f1772] text-5xl justify-center"> <BsGift /> </Link>
          <div className="text-[0.9rem] hover:text-[#9f1772] font-200">FREE SHIPPING WORLDWIDE</div>
          <div className="text font-light hover:text-[#9f1772]">Offer special bonuses with gift</div>
        </div>
        <div className="text-center mb-3">
          <Link to='' className="flex mb-5 items-center text-[#9f1772] text-5xl justify-center"> <BsHeadset /> </Link>
          <div className="text-[0.9rem] hover:text-[#9f1772] font-200">FREE SHIPPING WORLDWIDE</div>
          <div className="text font-light hover:text-[#9f1772]">Call us 24/7 at 815- 706- 1427</div>
        </div>
      </div>

      <div className="lg:flex grid md:grid-cols-3 px-16 mb-10 gap-7 items-center justify-between">
        <div className="mb-5 border p-5 lg:text-center">
          <img src={suit} alt="" className="lg:w-[23.5rem] lg:h-[18.5rem]" />
          <div className="lg:text-center mb-5 text-[1.3rem] font-medium">Suits</div>
          <Link to='' className="text-center bg-[#9f1772] hover:bg-gray-300 hover:text-black text-white py-3 px-3">Buy Now</Link>
        </div>
        <div className="mb-5 border p-5 lg:text-center">
          <img src={shoes} alt="" className="lg:w-[23.5rem] lg:h-[18.5rem]" />
          <div className="lg:text-center mb-5 text-[1.3rem] font-medium">Shoes</div>
          <Link to='' className="text-center bg-[#9f1772] hover:bg-gray-300 hover:text-black text-white py-3 px-3">Buy Now</Link>
        </div>
        <div className="mb-5 border p-5 lg:text-center">
          <img src={wristwatch} alt="" className="lg:w-[23.5rem] lg:h-[18.5rem]" />
          <div className="lg:text-center text-[1.3rem] mb-5 font-medium">Wrist Watch</div>
          <Link to='' className="text-center bg-[#9f1772] hover:bg-gray-300 hover:text-black text-white py-3 px-3">Buy Now</Link>
        </div>
      </div><br />

      <div className="text-center text-3xl lg:text-4xl mb-12">TRENDING PRODUCTS</div>
      <div className="overflow-x-auto lg:w-[90%] w-[80%] mx-auto scrollsdown mb-15">
        <div className="flex items-center gap-5 w-fit">
          {new Array(8).fill().map((item, index) => (
            <div className="w-[17rem] h-[27rem]" key={index}>
              <Link to='/' onClick={() => window.scrollTo(0, 0)}><img src={product} alt="" className="w-full h-[21rem] hover:border " /></Link>
              <div className="text-[0.9rem] text-center text-black">Cotton Stripped Blazer.</div>
              <div className="text-2xl text-center text-black">$32.60</div>
            </div>
          ))}
        </div>
      </div>
      <br /><br />

      <div className=""> <img src={men} alt="" className="w-[95%] scale-5 rounded-lg h-[15rem] mx-auto" /> </div><br />
      <div className="">
        {new Array(1).fill().map((item, index) => (
          <div className="" key={index}>
            {new Array(1).fill().map((item, index) => (
              <div className="" key={index}>
                {images.map((item, index) => (
                  <div key={index} className="bg-gray-300 p-3 lg:p-5 flex items-center justify-between m-5">
                    <div className="lg:text-3xl text-1xl">{item.title}</div>
                    <Link to='/' className="hover:text-[#fcb800] text-[0.9rem] lg:hidden pr-3">Lore ipsum</Link>
                  </div>
                ))}
                <div className="overflow-x-auto lg:w-[95%] w-[95%] mx-auto scrollsdown mb-15">
                  <div className="flex items-center gap-5 w-fit">
                    {new Array(8).fill().map((item, index) => (
                      <div className="w-[20rem] h-[30rem]" key={index}>
                        <Link to='/product' onClick={() => window.scrollTo(0, 0)}><img src={suit} alt="" className="w-full h-[24rem] hover:border " /></Link>
                        <div className="text-2xl text-black">$2,234.00</div>
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
                {image.map((item, index) => (
                  <div key={index} className="bg-gray-300 p-3 lg:p-5 flex items-center justify-between m-5">
                    <div className="lg:text-3xl text-1xl">{item.title}</div>
                    <Link to='/' className="hover:text-[#fcb800] text-[0.9rem] lg:hidden pr-3">Lore ipsum</Link>
                  </div>
                ))}

                <div className="overflow-x-auto lg:w-[95%] w-[95%] mx-auto scrollsdown mb-15">
                  <div className="flex items-center gap-5 w-fit">
                    {new Array(8).fill().map((item, index) => (
                      <div className="w-[20rem] h-[30rem]" key={index}>
                        <Link to='/product' onClick={() => window.scrollTo(0, 0)}><img src={shoes} alt="" className="w-full h-[24rem] hover:border " /></Link>
                        <div className="text-2xl text-black">$124.00</div>
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
                {imags.map((item, index) => (
                  <div key={index} className="bg-gray-300 p-3 lg:p-5 flex items-center justify-between m-5">
                    <div className="lg:text-3xl text-1xl">{item.title}</div>
                    <Link to='/' className="hover:text-[#fcb800] text-[0.9rem] lg:hidden pr-3">Lore ipsum</Link>
                  </div>
                ))}
                <div className="overflow-x-auto lg:w-[95%] w-[95%] mx-auto scrollsdown mb-15">
                  <div className="flex items-center gap-5 w-fit">
                    {new Array(8).fill().map((item, index) => (
                      <div className="w-[20rem] h-[30rem]" key={index}>
                        <Link to='/product' onClick={() => window.scrollTo(0, 0)}><img src={wristwatch} alt="" className="w-full h-[24rem] hover:border " /></Link>
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
                {mags.map((item, index) => (
                  <div key={index} className="bg-gray-300 p-3 lg:p-5 flex items-center justify-between m-5">
                    <div className="lg:text-3xl text-1xl">{item.title}</div>
                    <Link to='/' className="hover:text-[#fcb800] text-[0.9rem] lg:hidden pr-3">Lore ipsum</Link>
                  </div>
                ))}
                <div className="overflow-x-auto lg:w-[95%] w-[95%] mx-auto scrollsdown mb-15">
                  <div className="flex items-center gap-5 w-fit">
                    {new Array(8).fill().map((item, index) => (
                      <div className="w-[20rem] h-[30rem]" key={index}>
                        <Link to='/product' onClick={() => window.scrollTo(0, 0)}><img src={youruba} alt="" className="w-full h-[24rem] hover:border " /></Link>
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
                {casual.map((item, index) => (
                  <div key={index} className="bg-gray-300 p-3 lg:p-5 flex items-center justify-between m-5">
                    <div className="lg:text-3xl text-1xl">{item.title}</div>
                    <Link to='/' className="hover:text-[#fcb800] text-[0.9rem] lg:hidden pr-3"></Link>
                  </div>
                ))}
                <div className="overflow-x-auto lg:w-[95%] w-[95%] mx-auto scrollsdown mb-15">
                  <div className="flex items-center gap-5 w-fit">
                    {new Array(8).fill().map((item, index) => (
                      <div className="w-[20rem] h-[30rem]" key={index}>
                        <Link to='/product' onClick={() => window.scrollTo(0, 0)}><img src={casuals} alt="" className="w-full h-[24rem] hover:border " /></Link>
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

      <div className="">
        <div className=" mt-10 mb-5">
          <div className="text-center text-5xl underline font-semibold">OUR BLOGS</div>
        </div>
        {new Array(1).fill().map((item, index) => (
          <div key={index} className="m-2"><br />

            <Carousel responsive={responsive}>
              <div>
                {blog.map((item, index) => (
                  <div key={index} className="p-1">
                    <img src={blog1} className="lg:w-[25rem]" alt="" />
                    <div className="border-4 lg:w-[25rem] px-5 py-3 border-gray-200">
                      <Link to='' className="text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur.</Link>
                      <p className="text-xl leading-8"> {item.blog} </p>
                      <div className=" mt-10 mb-10"> <Link to='' className="text-2xl hover:text-[#9f1772]  hover:border-b-[#9f1772] border-b-4">Read More</Link> </div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {blog.map((item, index) => (
                  <div key={index} className="p-1">
                    <img src={blog2} className="lg:w-[25rem]" alt="" />
                    <div className="border-4 lg:w-[25rem] px-5 py-3 border-gray-200">
                      <Link to='' className="text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur.</Link>
                      <p className="text-xl leading-8"> {item.blog2} </p>
                      <div className=" mt-10 mb-10"> <Link to='' className="text-2xl hover:text-[#9f1772]  hover:border-b-[#9f1772] border-b-4">Read More</Link> </div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {blog.map((item, index) => (
                  <div key={index} className="p-1">
                    <img src={blog3} className="lg:w-[25rem]" alt="" />
                    <div className="border-4 lg:w-[25rem] px-5 py-3 border-gray-200">
                      <Link to='' className="text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur.</Link>
                      <p className="text-xl leading-8"> {item.blog3} </p>
                      <div className=" mt-10 mb-10"> <Link to='' className="text-2xl hover:text-[#9f1772]  hover:border-b-[#9f1772] border-b-4">Read More</Link> </div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {blog.map((item, index) => (
                  <div key={index} className="p-1">
                    <img src={blog4} className="lg:w-[25rem]" alt="" />
                    <div className="border-4 lg:w-[25rem] px-5 py-3 border-gray-200">
                      <Link to='' className="text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur.</Link>
                      <p className="text-xl leading-8"> {item.blog4} </p>
                      <div className=" mt-10 mb-10"> <Link to='' className="text-2xl hover:text-[#9f1772]  hover:border-b-[#9f1772] border-b-4">Read More</Link> </div>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel>;
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Home
