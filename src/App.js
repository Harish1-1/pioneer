
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import PopulationGraph from './components/PopulationGraph';
import CryptoCard from './components/CryptoCard';
import MetaMaskIntegration from './components/MetaMaskIntegration';
import HomePage from './components/HomePage'


function App() {
  return (
    <Router>
      <div className="app">
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route path="/population-graph" element={<PopulationGraph />} />
            <Route path="/crypto-prices" element={<CryptoCard />} />
            <Route path="/metamask-wallet" element={<MetaMaskIntegration />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;