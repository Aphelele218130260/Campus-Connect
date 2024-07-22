import {} from 'react';
import '../css/RoomAdministration.css';

const RoomAdministration = () => {
  return (
    <div className="room-admin-container">
      <header className="header">
        <img src="path_to_your_logo.png" alt="Logo" className="logo" />
        <h1>Room Administration</h1>
      </header>
      <div className="room-admin-content">
        <table className="room-admin-table">
          <thead>
            <tr>
              <th>Room Number</th>
              <th>Room Status</th>
              <th>Number of students in the room</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <select className="location-dropdown">
          <option value="south_point">SOUTH POINT</option>
          {/* Add more options as needed */}
        </select>
        <div className="button-group">
          <button className="btn-clear">CLEAR</button>
          <button className="btn-add">ADD</button>
          <button className="btn-exit">EXIT</button>
        </div>
      </div>
    </div>
  );
};

export default RoomAdministration;
