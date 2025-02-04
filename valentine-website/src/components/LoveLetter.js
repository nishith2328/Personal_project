import React, { useState, useEffect } from 'react';
import './LoveLetter.css';
import loveSong from '../assets/song.mp3'; // Add your background music file

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const audio = new Audio(loveSong);
      audio.loop = true; // Loop the music
      audio.play();

      return () => {
        audio.pause(); // Stop the music when the component unmounts
      };
    }
  }, [isOpen]);

  const handleOpenLetter = () => {
    setIsOpen(true);
  };

  return (
    <div className={`love-letter-container ${isOpen ? 'open' : ''}`} onClick={handleOpenLetter}>
      {!isOpen ? (
        <div className="envelope">
          <div className="envelope-flap"></div>
          <div className="envelope-body"></div>
          <p className="click-prompt">Click to open the letter</p>
        </div>
      ) : (
        <div className="letter">
          <h2>My Dearest Love,</h2>
          <p>
            From the moment I met you, my life has been filled with joy, laughter, and endless love. You are the most amazing person I have ever known, and every day with you feels like a blessing. I cherish the moments we spend together, whether we're laughing, talking, or simply enjoying each other's presence. You make me a better person, and I am so grateful to have you in my life.
          </p>
          <p>
            I remember the first time we met like it was yesterday. Your smile lit up the room, and I knew right then that you were someone special. As we got to know each other, I realized how kind, caring, and beautiful you are, both inside and out. You have a way of making everyone around you feel loved and appreciated, and I feel so lucky to be the one you chose to share your life with.
          </p>
          <p>
            There are so many things I love about you. I love the way your eyes light up when you're happy, the way you laugh at my silly jokes, and the way you always know how to make me feel better when I'm down. I love how passionate you are about the things you care about, and how you always stand up for what you believe in. You inspire me every day to be a better person, and I am so proud to call you mine.
          </p>
          <p>
            I look forward to all the adventures we will have together in the future. Whether we're traveling the world, building a home, or simply spending a quiet evening together, I know that every moment with you will be special. I promise to always love you, support you, and be there for you, no matter what life throws our way.
          </p>
          <p>
            Thank you for being the most amazing partner, friend, and love of my life. I love you more than words can express, and I can't wait to spend the rest of my life with you.
          </p>
          <p>Forever yours,</p>
          <p> Nishith </p>
        </div>
      )}
    </div>
  );
};

export default LoveLetter;