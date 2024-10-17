import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';


const Dashboard = () => {
    const navigate = useNavigate();

    return (
        //comment
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Campus Connect</h1>

            </header>
            <div className="dashboard-content">
                <h2>Welcome to the Administrator Dashboard</h2>
                <p>Select one of the services below</p>
                <div className="services">
                    <div className="service room-service" onClick={() => navigate('/room')}>
                        <a href="#!" className="service-link">ROOMS</a>
                    </div>
                    <div className="service business-service" onClick={() => navigate('/business')}>
                        <a href="#!" className="service-link">BUSINESS</a>
                    </div>
                    <div className="service property-service" onClick={() => navigate('/property')}>
                        <a href="#!" className="service-link">PROPERTY</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
