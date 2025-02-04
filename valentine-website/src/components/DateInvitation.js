import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DateInvitation.css';

const DateInvitation = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: email,
        subject: 'Valentine’s Date Invitation 💌',
        text: 'Hey love, I can’t wait to see you on our special date! Be ready and I will pick you up for our date ! 💖',
      }),
    });

    const result = await response.text();
    setMessage(result);

    if (response.ok) {
      alert('Invitation sent successfully! Check your email.');
      navigate('/'); // Go back to the landing page
    }
  };

  return (
    <div className="date-invitation-container">
      <h2>There is a date waiting for you  💑</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Get Details ;) </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DateInvitation;