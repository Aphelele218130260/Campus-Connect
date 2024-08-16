import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Campus Connect</h1>
            </header>
            <div className="dashboard-content">
                <h2>Welcome to the Administrator Dashboard</h2>
                <p>Select one of the services below</p>
                <div className="services">

                    <div className="service" onClick={() => navigate('/RoomAdministration')}>
                        ROOMS
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;