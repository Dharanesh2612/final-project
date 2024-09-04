import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInPage.css'; // Ensure you have this CSS file or modify the import accordingly

const SignInPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginType, setLoginType] = useState('student'); // Default value
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Login Type:', loginType);
    };

    const handleNewUser = () => {
        // Navigate to the new user registration page
        navigate('/StudentNewUser');
    };

    return (
        <div className="container">
            <div className="form-wrapper">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username or Email:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label htmlFor="loginType">Login As:</label>
                    <select
                        id="loginType"
                        value={loginType}
                        onChange={(e) => setLoginType(e.target.value)}
                    >
                        <option value="student">Student Login</option>
                        <option value="trainee">Trainee Login</option>
                        <option value="admin">Admin Login</option>
                    </select>

                    <button type="submit">Submit</button>
                </form>
                <button id="newUser" onClick={handleNewUser}>New User</button>
            </div>
        </div>
    );
};

export default SignInPage;
