import axios from 'axios';
import React, { useState } from 'react'

function CreateUser() {

    const [email, setEmail] = useState('');
    const [role, setRole] = useState(false);
    // const [admin, setAdmin] = useState(false);
    const [message, setMessage] = useState('');

    const handleCreateUser = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/create-user', { email, admin:{role}  });
            setMessage(response.data.message);
            console.log("Details: ", email, admin);
            console.log("Creating user: ", response.data);
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
                    onChange={e => setRole(e.target.value === "true")}
                >
                    <option value={true}>Admin</option>
                    <option value={false}>Not Admin</option>
                </select>
                <button type="submit">Create User</button>
            </form>
        </div>
        {message && <p>{message}</p>}
        </>
       
    )
}

export default CreateUser