import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RoomAdministration from "./components/RoomAdministration";
import LoginPage from "./components/LoginPage.jsx";
import HomePage from "./components/HomePage.jsx";
import SignUpPage from "./components/SignupPage.jsx";
import StudentAdministration from "./components/StudentAdministration.jsx";
import Dashboard from "./components/Dashboard.jsx";
//import StudentAdministration from './components/StudentAdministration';

function App() {
  return (
      <Router>
        <div className="CampusConnect">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/room" element={<RoomAdministration />} />
            <Route path="/student" element={<StudentAdministration />} />
            <Route path="/signup" element={<SignUpPage />} />
              <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
        </div>
      </Router>

      //<HomePage />
      //<LoginPage />
      //<RoomAdministration />
      //<StudentAdministration />
  );
}

export default App;
