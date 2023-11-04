import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Home from './pages/Home/Home';
// import About from './pages/About';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Routes>
          <Route path="/" exact element= {<Home/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;