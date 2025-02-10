import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './DateInvitation.css'


const DateInvitation = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    const templateParams = {
      to_email: email,
      message: 'Hey love, I can’t wait to see you on our special date! Be ready for surprises! 💖',
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);
      setMessage('Invitation sent successfully! Check your email.');
      setEmail('');
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('Failed to send invitation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="date-invitation-container">
      <h2>Invite Me on a Date 💑</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Invitation'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DateInvitation;
