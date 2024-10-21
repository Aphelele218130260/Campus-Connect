import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/LoginPage.css';
import StudentService from '../Services/StudentService';  // Import your StudentService
import AdministratorService from '../Services/AdministratorService'; // Import AdministratorService

const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState(''); // State for username
    const [password, setPassword] = useState(''); // State for password
    const [error, setError] = useState(''); // State for error messages

    const handleLogin = async (role) => {
        if (role === 'student') {
            // If the user selects student role
            try {
                const students = await StudentService.getAllStudents();  // Fetch all students
                const student = students.find((s) => s.username === username && s.studentPassword === password);  // Check if the username and password match

                if (student) {
                    navigate('/student');  // Navigate to Student Dashboard if student is found
                } else {
                    setError('Invalid student credentials.');
                }
            } catch (err) {
                setError('Error during login. Please try again.');
            }
        } else if (role === 'admin') {
            // Admin login logic
            try {
                const admins = await AdministratorService.getAllAdministrators(); // Fetch all administrators
                const admin = admins.find((a) => a.adminUsername === username && a.adminPassword === password); // Check if the username and password match

                if (admin) {
                    navigate('/RoomAdministration'); // Navigate to Admin Dashboard if admin is found
                } else {
                    setError('Invalid admin credentials.');
                }
            } catch (err) {
                setError('Error during admin login. Please try again.');
            }
        }
    };

    const handleSignUp = () => {
        navigate('/register');  // Navigate to the SignUp page
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
