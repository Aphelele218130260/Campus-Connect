import React, { useState } from 'react'; // Import useState for state management
import { useNavigate, Link } from 'react-router-dom';
import '../css/LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState(''); // State for username
    const [password, setPassword] = useState(''); // State for password
    const [error, setError] = useState(''); // State for error messages

    const handleLogin = async (role) => {
        // Simulate a request to your server's login API
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, role }), // Pass role (student/admin)
            });

            const data = await response.json();

            if (data.success) {
                // Navigate based on the role
                if (role === 'student') {
                    navigate('/student'); // Navigate to Student Dashboard
                } else {
                    navigate('/RoomAdministration'); // Navigate to Admin Dashboard
                }
            } else {
                setError(data.message); // Display error message from server
            }
        } catch (err) {
            setError('Login failed. Please try again.');
        }
    };

    const handleSignUp = () => {
        navigate('/register'); // Navigate to the SignUp page
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
                <input
                    type="text"
                    placeholder="Username"
                    className="input-field"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Update username state
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state
                />
                {error && <div className="error-message">{error}</div>} {/* Display error message */}
                <div className="role-buttons">
                    <button className="role-btn student-btn" onClick={() => handleLogin('student')}>
                        Login as Student
                    </button>
                    <button className="role-btn admin-btn" onClick={() => handleLogin('admin')}>
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
