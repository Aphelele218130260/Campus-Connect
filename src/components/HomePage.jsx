import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/HomePage.css';
import logo from '../assets/Icon2.png'; // Ensure correct path to the logo

const HomePage = () => {
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate('/login');
    };

    return (
        <div className="homepage">
            <div className="logo-container">
                <img src={logo} alt="Campus Connect Logo" className="logo"/>
            </div>
            <h1>Campus Connect</h1>
            <p>Discover the ultimate student living experience at Campus Connect!</p>
            <button className="get-started-btn" onClick={handleGetStartedClick}>
                Get Started
            </button>
        </div>
    );
};

export default HomePage;
