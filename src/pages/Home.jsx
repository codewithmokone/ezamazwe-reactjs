import axios from 'axios';
import React, { useState } from 'react'

function Home() {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    try{
      const response = await axios.post('http://localhost:4000/reset-password', { email });
      setMessage(response.data.message);
    }catch(error){
      console.error('Error resetting password:', error);
      setMessage('Unabvle to reset password. Please try again later.');
    }
  }

  return (
    <div>
      <p>Admin Dashboard</p>
    </div>
  )
}

export default Home