import axios from 'axios';
import React, { useState } from 'react'

function CreateUser() {

    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [message, setMessage] = useState('');

    const handleCreateUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/create-user', { email, role });
            setMessage(response.data.message);
            console.log(email, role)
            console.log("Creating user: ", response.data.message)
        } catch (error) {
            console.log("Unable to create user: ", error);
            setMessage('Unable to create user. Please try again later.');
        }
    }

    return (
        <>
         <div>
            <p>Create new user:</p>
            <form onSubmit={handleCreateUser}>
                <label>Email address:</label>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type='email'
                />
                <label>Select role:</label>
                <select
                    value={role}
                    onChange={e => setRole(e.target.value)}
                >
                    <option value="someOption">Admin</option>
                    <option value="otherOption">No Admin</option>
                </select>
                <button type="submit">Create User</button>
            </form>
        </div>
        {message && <p>{message}</p>}
        </>
       
    )
}

export default CreateUser