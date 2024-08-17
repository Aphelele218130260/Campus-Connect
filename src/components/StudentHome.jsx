import React from 'react';
import '../css/StudentHome.css';

const StudentHome = () => {
  return (
    <div className='studentHomeDiv'>
      <header className='studentHomeHeader'>
        <img src="path_to_your_logo.png" alt="Logo" className="logo" />
        <h1>Campus Connect</h1>
        <button className="btnLogout">Logout</button>
      </header>
      <div className='studentHomeTopSection'>
        <table className='studentRoomsTable'>
          <thead>
            <tr>
              <th>Property</th>
              <th>Business</th>
              <th>Location</th>
              <th>Room Availability</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <aside className='tableFilterSection'>
          <h2>Filters</h2>
          <select className="locationDropdown">
            <option>Location</option>
          </select>
          <select className="businessDropdown">
            <option>Business</option>
          </select>
        </aside>
      </div>
      <div className='studentHomeBottomSection'>
        <h2>Apply here:<br /></h2>
        <b>Propety</b>
        <select className="propertyDropdown">
          <option>Property</option>
        </select>
        <b>Room</b>
        <select className="roomDropdown">
          <option>Room</option>
        </select>
        <button className="btnSubmit">Submit</button>
      </div>
    </div>
  );
};

export default StudentHome;