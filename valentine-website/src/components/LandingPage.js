import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import heartIcon from '../assets/heart.jpg'; // Red heart image
import image1 from '../assets/us.jpeg'; // Replace with your images
import image2 from '../assets/us2.jpeg';
import image3 from '../assets/us3.jpeg';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoveLetterClick = () => {
    navigate('/love-letter');
  };

  const handleDateInvitationClick = () => {
    navigate('/date-invitation'); // Navigate to DateInvitation
  };

  const handleSurpriseClick = () => {
    navigate('/surprise'); // Navigate to SurpriseBox component
  };

  return (
    <div className="landing-page">
      {/* Header Section */}
      <div className="header">
        <h1>Happy Valentine's Day, My Love! 💖</h1>
        <p>You are the most special person in my life and this is just a small gesture for you .</p>
      </div>

      {/* Photo Gallery Section */}
      <div className="photo-gallery">
        <h2>Our Memories</h2>
        <div className="gallery">
          <img src={image1} alt="Memory 1" className="gallery-image" />
          <img src={image2} alt="Memory 2" className="gallery-image" />
          <img src={image3} alt="Memory 3" className="gallery-image" />
        </div>
      </div>

      {/* Quotes Section */}
      <div className="quotes">
        <h2>What You Mean to Me</h2>
        <div className="quote">
          <p>"You are my sunshine, my only sunshine. You make me happy when skies are gray."</p>
        </div>
        <div className="quote">
          <p>"I love you not only for what you are but for what I am when I am with you."</p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="timeline">
        <h2>Let me do some Tareef of you which my BABY always likes :3</h2>
        <div className="timeline-item">
          <h3>Kurta Meets</h3>
          <p>Every fucking time when you wear kurta , you just take my breath away.</p>
        </div>
        <div className="timeline-item">
          <h3>When you understand me !</h3>
          <p> I mean wtf kyaa cheej h bhai , how do you understand me every time and it makes me fall in love with you instantly.</p>
        </div>
        <div className="timeline-item">
          <h3>SMILE :)</h3>
          <p> How dumb i'll be to forget that flawless smile which you hold , make me wanna kiss u so bad.</p>
        </div>
      </div>

      {/* Interactive Sections */}
      <div className="content">
        <div className="section love-letter" onClick={handleLoveLetterClick}>
          <img src={heartIcon} alt="Heart" className="heart-icon" />
          <h2> Some more about you</h2>
          <p>Click here to read how tf you are on my mind 24/7.</p>
        </div>

        <div className="section date-invitation" onClick={handleDateInvitationClick}>
          <img src={heartIcon} alt="Heart" className="heart-icon" />
          <h2> Nishith's Plan for you</h2>
          <p> Do you believe in love at first sight, or should I take you out for this Valentine?.</p>
        </div>

        <div className="section surprise" onClick={handleSurpriseClick}>
          <img src={heartIcon} alt="Heart" className="heart-icon" />
          <h2>Surprise</h2>
          <p>I have something special for you!</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;