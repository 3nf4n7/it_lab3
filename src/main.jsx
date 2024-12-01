import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './components/Introduction'
import Navigation from './components/Navigation';
import Economy from './pages/Economy';
import Industry from './pages/Industry';
import Web3 from './pages/Web3';
import Intro from './pages/Intro';
import Secur from './pages/Secur';
import Ending from './pages/Ending';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Introduction />} />
                <Route path="/intro" element={<Intro />} />
                <Route path="/economy" element={<Economy />} />
                <Route path="/industry" element={<Industry />} />
                <Route path="/web3" element={<Web3 />} />
                <Route path="/secur" element={<Secur />} />
                <Route path="/ending" element={<Ending />} />
            </Routes>
        </Router>
  </StrictMode>,
)
