import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Inbox from './components/Inbox/Inbox';
import Snippets from './components/Snippets/Snippets';

const AllRoutes = () => {
  return (
    <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/Inbox' element={<Inbox/>} />
        <Route  path='/Snippets' element={<Snippets/>} />
        
    </Routes>
  )
}

export default AllRoutes;