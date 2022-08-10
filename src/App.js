import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
