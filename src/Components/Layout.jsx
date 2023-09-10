import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <ToastContainer />
      <Footer />
    </div>
  )
}

export default Layout
