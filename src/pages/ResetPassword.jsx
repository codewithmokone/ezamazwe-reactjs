import axios from 'axios';
import React, { useState } from 'react'

function ResetPassword() {

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
          <p>Please enter email: </p>
          <form onSubmit={handleResetPassword}>
            <label>Email:</label>
            <input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button type='submit'>Reset password</button>
            {message && <p>{message}</p>}
          </form>
        </div>
      )
}

export default ResetPassword