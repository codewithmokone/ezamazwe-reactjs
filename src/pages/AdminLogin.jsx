import axios from 'axios'
import React, { useState } from 'react'

function AdminLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handlesAdminLogin = async () => {
        try {
            const response = await axios.post('http://localhost:4000/admin-login', { email, password });
            setMessage(response.data.message);
        } catch (error) {
            console.log("Unable to login: ", error);
            setMessage(error)
        }
    }

    return (
        <>
            <div>
                <p>Admin Login</p>
                <form onSubmit={handlesAdminLogin}>
                    <label>Email:</label>
                    <input
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label>Password:</label>
                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
            {message && <p>{message}</p>}
        </>

    )
}

export default AdminLogin