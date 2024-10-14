import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleSignInAsStudent = () => {
        navigate('/student'); // Navigate to the StudentAdministration page
    };

    const handleSignInAsAdmin = () => {
        navigate('/RoomAdministration'); // Navigate to the RoomAdministration page
    };

    const handleSignUp = () => {
        navigate('/signup'); // Navigate to the SignUp page
    };

    return (
        <div className="login-page">
            <header className="page-header">
                <Link to="/" className="header-link">
                    <h1>Campus Connect</h1>
                </Link>
            </header>
            <div className="login-container">
                <div>Login</div>
                <input type="text" placeholder="Username" className="input-field" />
                <input type="password" placeholder="Password" className="input-field" />
                <div className="role-buttons">
                    <button className="role-btn student-btn" onClick={handleSignInAsStudent}>
                        Login as Student
                    </button>
                    <button className="role-btn admin-btn" onClick={handleSignInAsAdmin}>
                        Login as Admin
                    </button>
                </div>
                <p className="sign-up-text">
                    Don’t have an Account?{' '}
                    <span onClick={handleSignUp} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                        Sign up
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
