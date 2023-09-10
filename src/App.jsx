import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import PageLoad from './Components/PageLoad'
import Shoe from './Pages/Shoe';
import Native from './Pages/Native'
import Wristwatch from './Pages/Wristwatch';
import Blog from './Pages/Blog';
import Signp from './Pages/Forms/Signp';
import Login from './Pages/Forms/Login';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PageLoad> <Home /> </PageLoad>} />
      <Route path='/blog' element={<PageLoad> <Blog /> </PageLoad>} />
      <Route path='/shoe' element={<PageLoad> <Shoe /> </PageLoad>} />
      <Route path='/native' element={<PageLoad> <Native /> </PageLoad>} />
      <Route path='/accessories' element={<PageLoad> <Wristwatch /> </PageLoad>} />
      <Route path='/login' element={<PageLoad> <Login /> </PageLoad>} />
      <Route path='/signup' element={<PageLoad> <Signp /> </PageLoad>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
