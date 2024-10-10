import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LoginPage.css';

const LoginPage = () => {
    const [role, setRole] = useState('student'); // Default role is set to 'student'
    const navigate = useNavigate();

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleSignIn = () => {
        if (role === 'admin') {
            navigate('/dashboard'); // Navigate to the RoomAdministration page (or any admin-specific page)
        } else if (role === 'student') {
            navigate('/student'); // Navigate to the StudentAdministration page
        }
    };

    const handleSignUp = () => {
        navigate('/signup'); // Navigate to the SignUp page
    };

    const handleExit = () => {
        window.close(); // Close the current window/tab
    };

    return (
        <div className="login-page">
            <div className="header">
                <img src="Login Page.png" alt="Campus Connect Logo" className="logo" />
                <h1>User Login</h1>
                <button className="exit-btn" onClick={handleExit}>Exit</button>
            </div>
            <div className="login-container">
                <input type="text" placeholder="Username" className="input-field" />
                <input type="password" placeholder="Password" className="input-field" />
                <div className="role-selection">
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="admin"
                            checked={role === 'admin'}
                            onChange={handleRoleChange}
                        /> Admin
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="student"
                            checked={role === 'student'}
                            onChange={handleRoleChange}
                        /> Student
                    </label>
                </div>
                <button className="sign-in-btn" onClick={handleSignIn}>Sign in</button>
                <p className="sign-up-text">
                    Don’t have an Account? <span onClick={handleSignUp} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Sign up</span>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
