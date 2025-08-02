
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [internData, setInternData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/intern')
      .then(response => setInternData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>Intern Dashboard</h1>
      <p><strong>Name:</strong> {internData.name}</p>
      <p><strong>Referral Code:</strong> {internData.referralCode}</p>
      <p><strong>Total Donations Raised:</strong> ₹{internData.donations}</p>

      <h2>Rewards/Unlockables</h2>
      <ul>
        <li>🎁 Free Workshop Access</li>
        <li>📜 Certificate of Excellence</li>
        <li>🎉 Social Media Shoutout</li>
      </ul>

      <h2>Leaderboard</h2>
      <ol>
        <li>Riya Patel - ₹5000</li>
        <li>Arjun Mehta - ₹3500</li>
        <li>{internData.name || 'You'} - ₹{internData.donations || '0'}</li>
      </ol>
    </div>
  );
}

export default App;
