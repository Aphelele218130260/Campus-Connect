import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/SignupPage.css';

const SignUpPage = () => {
    const navigate = useNavigate();

    const handleSignUp = () => {
        // Handle sign-up logic here
    };

    const handleSignIn = () => {
        navigate('/login'); // Navigate to the Login page
    };

    return (
        <div className="signup-page">
            <header className="page-header">
                <Link to="/" className="header-link">
                    <h1>Campus Connect</h1>
                </Link>
            </header>
            <div className="signup-container">
                <div>Sign Up</div>
                <input type="text" placeholder="Username" className="input-field" />
                <input type="password" placeholder="Password" className="input-field" />
                <input type="password" placeholder="Confirm Password" className="input-field" />
                <button className="sign-up-btn" onClick={handleSignUp}>
                    Sign Up
                </button>
                <p className="sign-in-text">
                    Already have an Account?{' '}
                    <span onClick={handleSignIn} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                        Sign in
                    </span>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;
