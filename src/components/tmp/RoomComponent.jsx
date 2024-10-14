import React, { useEffect, useState } from 'react';
import RoomService from '../../Services/RoomService';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = () => {
    RoomService.getAllRooms()
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the rooms!', error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">Room List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Room ID</th>
            <th>Property</th>
            <th>Room Number</th>
            <th>Occupied</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.roomID}>
              <td>{room.roomID}</td>
              <td>{room.property.propertyName}</td>
              <td>{room.roomNumber}</td>
              <td>{room.occupied ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomList;
