import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate('/login');
    };

    return (
        <div className="homepage">
            <div className="logo-container">
                <img src="Home Page.png" alt="Campus Connect Logo" className="logo"/>
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
