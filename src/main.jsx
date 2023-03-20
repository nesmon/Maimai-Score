import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Route/Index/Index';
import Score from './Route/Score/Score';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Routing = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/score/:chartId" element={<Score />} />
      </Routes>
    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

