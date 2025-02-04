import React, { useState } from 'react';
import './SurpriseBox.css';

const SurpriseBox = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const handlePullBow = () => {
    setIsBoxOpen(true);
  };

  return (
    <div className="surprise-box-container">
      <div className={`box ${isBoxOpen ? 'open' : ''}`}>
        <div className="bow" onClick={handlePullBow}>
          <div className="bow-left"></div>
          <div className="bow-right"></div>
          <div className="bow-center"></div>
        </div>
        <div className="box-lid"></div>
        <div className="box-body">
          {isBoxOpen && (
            <div className="surprise-message">
              <p>Surprises aren’t meant to be disclosed like this! 😉</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurpriseBox;