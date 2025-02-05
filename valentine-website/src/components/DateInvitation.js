import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DateInvitation.css';

const DateInvitation = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Dynamically determine API URL based on environment
  const API_URL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/send-email'
    : '/send-email'; // This will work on Vercel

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: email,
          subject: 'Valentine’s Date Invitation 💌',
          text: 'Hey love, I can’t wait to see you on our special date! Be ready and I will pick you up for our date! 💖',
        }),
      });

      const result = await response.text();
      setMessage(result);

      if (response.ok) {
        alert('Invitation sent successfully! Check your email.');
        navigate('/'); // Redirect to the landing page
      } else {
        alert('Failed to send the invitation. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Something went wrong! Please try again later.');
    }
  };

  return (
    <div className="date-invitation-container">
      <h2>There is a date waiting for you 💑</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Get Details 😉</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DateInvitation;
