import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoveLetter from './components/LoveLetter';
import DateInvitation from './components/DateInvitation';
import SurpriseBox from './components/SurpriseBox';
import FloatingHearts from './components/FloatingHearts'; // Import FloatingHearts

function App() {
  return (
    <Router>
      <FloatingHearts /> {/* Add FloatingHearts here */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/love-letter" element={<LoveLetter />} />
        <Route path="/date-invitation" element={<DateInvitation />} />
        <Route path="/surprise" element={<SurpriseBox />} />
      </Routes>
    </Router>
  );
}

export default App;