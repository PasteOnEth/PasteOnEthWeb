import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" exact element= {<Home/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
  );
}

export default App;