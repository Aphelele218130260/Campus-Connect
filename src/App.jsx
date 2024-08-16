import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import RoomAdministration from './components/RoomAdministration';
// import StudentAdministration from './components/StudentAdministration';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/RoomAdministration" element={<RoomAdministration />} />
                {/* Add more routes as needed */}
                {/* <Route path="/students" element={<StudentAdministration />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
