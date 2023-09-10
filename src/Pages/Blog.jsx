import React from 'react'
import Layout from '../Components/Layout'
import { Link } from "react-router-dom"
import jacket from '../assets/images/blog1.jpg'
import suit from '../assets/images/blog2.jpg'
import shoes from '../assets/images/blog3.jpg'
import wristwatch from '../assets/images/blog4.jpg'

import Carousel from 'react-multi-carousel';

const Blog = () => {
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
      breakpoint: { max: 2000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
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

  return (
    <Layout>
      <div className="m-2">
        <div className=" mt-10 mb-5">
          <div className="text-center text-5xl underline font-semibold">OUR BLOGS</div>
        </div>
        <div className=" items-center justify-center">
          {new Array(2).fill().map((item, index) => (
            <div key={index} className="- "><br />
              <Carousel responsive={responsive}>
                <div>
                  {blog.map((item, index) => (
                    <div key={index} className="m-1">
                      <img src={suit} className="w-[24rem]" alt="" />
                      <div className="px-5 w-[24rem]">
                        <Link to='' className="text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur.</Link>
                        <p className="text-xl leading-8"> {item.blog2} </p>
                        <div className=" mt-10 mb-10"> <Link to='' className="text-2xl hover:text-[#9f1772]  hover:border-b-[#9f1772] border-b-4">Read More</Link> </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  {blog.map((item, index) => (
                    <div key={index} className="m-1">
                      <img src={shoes} className="w-[24rem]" alt="" />
                      <div className="px-5 w-[24rem]">
                        <Link to='' className="text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur.</Link>
                        <p className="text-xl leading-8"> {item.blog3} </p>
                        <div className=" mt-10 mb-10"> <Link to='' className="text-2xl hover:text-[#9f1772]  hover:border-b-[#9f1772] border-b-4">Read More</Link> </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  {blog.map((item, index) => (
                    <div key={index} className="m-1">
                      <img src={wristwatch} className="w-[24rem]" alt="" />
                      <div className="px-5 w-[24rem]">
                        <Link to='' className="text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur.</Link>
                        <p className="text-xl leading-8"> {item.blog4} </p>
                        <div className=" mt-10 mb-10"> <Link to='' className="text-2xl hover:text-[#9f1772]  hover:border-b-[#9f1772] border-b-4">Read More</Link> </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  {blog.map((item, index) => (
                    <div key={index} className="m-1">
                      <img src={jacket} className="w-[24rem]" alt="" />
                      <div className="px-5 w-[24rem]">
                        <Link to='' className="text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur.</Link>
                        <p className="text-xl leading-8"> {item.blog4} </p>
                        <div className=" mt-10 mb-10"> <Link to='' className="text-2xl hover:text-[#9f1772]  hover:border-b-[#9f1772] border-b-4">Read More</Link> </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Carousel>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
