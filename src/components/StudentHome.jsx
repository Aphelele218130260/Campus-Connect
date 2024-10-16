import React, { useEffect, useState } from 'react';
import '../css/StudentHome.css';
import RoomService from '../services/RoomService';
import PropertyService from '../services/PropertyService';
import BusinessService from '../services/BusinessService';

const StudentHome = () => {
  const [rooms, setRooms] = useState([]);
  const [properties, setProperties] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedBusiness, setSelectedBusiness] = useState('');
  const [selectedProperty, setSelectedProperty] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  const [availableRooms, setAvailableRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
    fetchProperties();
    fetchBusinesses();
  }, []);

  useEffect(() => {
    if (selectedProperty) {
      const propertyID = parseInt(selectedProperty);
      const roomsForProperty = rooms.filter(room =>
        room.property?.propertyID === propertyID && !room.occupied
      );
      console.log("Filtered available rooms:", roomsForProperty);
      setAvailableRooms(roomsForProperty);
    } else {
      setAvailableRooms([]);
    }
  }, [selectedProperty, rooms]);

  const fetchRooms = async () => {
    try {
      const response = await RoomService.getAllRooms();
      console.log("Fetched rooms:", response.data);
      setRooms(response.data);
    } catch (error) {
      console.error('There was an error fetching the rooms!', error);
    }
  };

  const fetchProperties = async () => {
    try {
      const response = await PropertyService.getAllProperties();
      console.log("Fetched properties:", response.data);
      setProperties(response.data);
    } catch (error) {
      console.error('There was an error fetching the properties!', error);
    }
  };

  const fetchBusinesses = async () => {
    try {
      const response = await BusinessService.getAllBusinesses();
      console.log("Fetched businesses:", response.data);
      setBusinesses(response.data);
    } catch (error) {
      console.error('There was an error fetching the businesses!', error);
    }
  };

  const getAvailableRoomsCount = (propertyID) => {
    return rooms.filter(room => room.property?.propertyID === propertyID && !room.occupied).length;
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
    console.log("Selected Location:", event.target.value);
  };

  const handleBusinessChange = (event) => {
    setSelectedBusiness(event.target.value);
    console.log("Selected Business ID:", event.target.value);
  };

  const handlePropertyChange = (event) => {
    const propertyId = event.target.value;
    setSelectedProperty(propertyId);
    setSelectedRoom(''); // Reset room selection when property changes
    console.log("Selected Property ID:", propertyId);
  };

  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedProperty && selectedRoom) {
      console.log(`Applying to property: ${selectedProperty}, room: ${selectedRoom}`);
      // Add API call or other logic here to apply for the selected room
      console.log(selectedProperty, selectedRoom);
      const applyForRoom = async () => {
        try {
          const updatedRoom = rooms.find(room => room.roomID === parseInt(selectedRoom));
          if (updatedRoom) {
            updatedRoom.occupied = true;
          }
          const response = await RoomService.updateRoom(updatedRoom);
          console.log('Successfully applied for the room:', response.data);
          alert('Successfully applied for the room!');
          // Refresh the rooms list to reflect the updated room status
          fetchRooms();
        } catch (error) {
          console.error('There was an error applying for the room!', error);
          alert('There was an error applying for the room. Please try again.');
        }
      };

      applyForRoom();
    } else {
      alert('Please select both a property and a room.');
    }
  };

  const filteredProperties = properties.filter(property => {
    const businessID = property.business.businessID;
    return (
      (selectedLocation === '' || property.propertyAddress.includes(selectedLocation)) &&
      (selectedBusiness === '' || property.business.businessID === businessID)
    );
  });

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
            {filteredProperties.map(property => {
              const business = businesses.find(b => b.businessID === property.business.businessID);
              const availableRoomsCount = getAvailableRoomsCount(property.propertyID);
              return (
                <tr key={property.propertyID}>
                  <td>{property.propertyName}</td>
                  <td>{business ? business.businessName : 'N/A'}</td>
                  <td>{property.propertyAddress}</td>
                  <td>{availableRoomsCount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <aside className='tableFilterSection'>
          <h2>Filters</h2>
          <select className="locationDropdown" onChange={handleLocationChange}>
            <option value=''>Location</option>
            {Array.from(new Set(properties.map(property => property.propertyAddress))).map(address => (
              <option key={address} value={address}>
                {address}
              </option>
            ))}
          </select>
          <select className="businessDropdown" onChange={handleBusinessChange}>
            <option value=''>Business</option>
            {businesses.map(business => (
              <option key={business.businessID} value={business.businessID}>
                {business.businessName}
              </option>
            ))}
          </select>
        </aside>
      </div>
      <div className='studentHomeBottomSection'>
        <h2>Apply here:<br /></h2>
        <b>Property</b>
        <select className="propertyDropdown" onChange={handlePropertyChange} value={selectedProperty}>
          <option value=''>Select Property</option>
          {filteredProperties.map(property => (
            <option key={property.propertyID} value={property.propertyID}>
              {property.propertyName}
            </option>
          ))}
        </select>
        <b>Room</b>
        <select className="roomDropdown" onChange={handleRoomChange} value={selectedRoom}>
          <option value=''>Select Room</option>
          {availableRooms.length > 0 ? (
            availableRooms.map(room => (
              <option key={room.roomID} value={room.roomID}>
                Room {room.roomNumber}
              </option>
            ))
          ) : (
            <option value=''>No rooms available</option>
          )}
        </select>
        <button className="btnSubmit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default StudentHome;
