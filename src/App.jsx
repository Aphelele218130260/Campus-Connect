import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RoomAdministration from "./components/RoomAdministration";
import LoginPage from "./components/LoginPage.jsx";
import HomePage from "./components/HomePage.jsx";
import SignUpPage from "./components/SignupPage.jsx";
//import StudentAdministration from "./components/StudentAdministration.jsx";
import Dashboard from "./components/Dashboard.jsx";
import StudentHome from "./components/StudentHome.jsx";
//import RoomComponent from "./components/tmp/RoomComponent.jsx"
//import StudentAdministration from './components/StudentAdministration';
import Business from './components/Business';
import Property from './components/Property'
 
function App() {
  return (
      <Router>
        <div className="CampusConnect">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/RoomAdministration" element={<RoomAdministration />} />
<<<<<<< HEAD
            <Route path="/student" element={<StudentAdministration />} />
=======
            <Route path="/student" element={<StudentHome />} />
>>>>>>> 61fead86e9b0d173bcf505bb8baf38feb9fdc757
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/business" element= {<Business/>}/>
            <Route path="/property" element={<Property/>}/>
                
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
