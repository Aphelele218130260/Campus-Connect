import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/RoomAdministration.css';

const RoomAdministration = () => {
  const [rooms, setRooms] = useState([
    { roomNumber: '101', roomStatus: 'Occupied', studentsCount: 3 },
    { roomNumber: '102', roomStatus: 'Available', studentsCount: 0 },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editRoom, setEditRoom] = useState({ roomNumber: '', roomStatus: '', studentsCount: '' });

  // Handle edit button click
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditRoom(rooms[index]);
  };

  // Handle save button click after editing
  const handleSave = () => {
    const updatedRooms = [...rooms];
    updatedRooms[editIndex] = editRoom;
    setRooms(updatedRooms);
    setEditIndex(null); // Close the edit mode
  };

  // Handle form changes for the edit fields
  const handleChange = (e) => {
    setEditRoom({ ...editRoom, [e.target.name]: e.target.value });
  };

  return (
    <div className="room-admin-page">
      <header className="page-header">
        <Link to="/" className="header-link">
          <h1>Campus Connect</h1>
        </Link>
      </header>

      <div className="room-admin-container">
        <h2>Room Administration</h2>
        <div className="room-admin-content">
          <table className="room-admin-table">
            <thead>
              <tr>
                <th>Room Number</th>
                <th>Room Status</th>
                <th>Number of Students</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room, index) => (
                <tr key={index}>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        name="roomNumber"
                        value={editRoom.roomNumber}
                        onChange={handleChange}
                      />
                    ) : (
                      room.roomNumber
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        name="roomStatus"
                        value={editRoom.roomStatus}
                        onChange={handleChange}
                      />
                    ) : (
                      room.roomStatus
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="number"
                        name="studentsCount"
                        value={editRoom.studentsCount}
                        onChange={handleChange}
                      />
                    ) : (
                      room.studentsCount
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <button className="btn-save" onClick={handleSave}>Save</button>
                    ) : (
                      <button className="btn-edit" onClick={() => handleEdit(index)}>Edit</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="admin-tools">
            <select className="location-dropdown">
              <option value="south_point">SOUTH POINT</option>
              <option value="north_side">NORTH SIDE</option>
              <option value="east_wing">EAST WING</option>
              <option value="west_tower">WEST TOWER</option>
            </select>
            <div className="button-group">
              <button className="btn-clear">CLEAR</button>
              <button className="btn-add">ADD ROOM</button>
              <button className="btn-exit">EXIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomAdministration;
