import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';
import './App.css';
import AllRoutes from './AllRoutes';

const App = () => {
  return (
    <div>
      <Router>
    <MenuBar/>
    <AllRoutes />
    </Router>
    </div>
  )
}

export default App;