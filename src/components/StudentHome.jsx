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
        const roomsForProperty = rooms.filter(room => 
            room.property.propertyID === selectedProperty && !room.occupied
        );
        console.log("Filtered available rooms:", roomsForProperty); // Log available rooms
        setAvailableRooms(roomsForProperty);
    } else {
        setAvailableRooms([]);
    }
}, [selectedProperty, rooms]);

  const fetchRooms = () => {
    RoomService.getAllRooms()
      .then((response) => {
        console.log("Fetched rooms:", response.data);
        setRooms(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the rooms!', error);
      });
  };

  const fetchProperties = () => {
    PropertyService.getAllProperties()
      .then((response) => {
        console.log("Fetched properties:", response.data);
        setProperties(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the properties!', error);
      });
  };

  const fetchBusinesses = () => {
    BusinessService.getAllBusinesses()
      .then((response) => {
        console.log("Fetched businesses:", response.data);
        setBusinesses(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the businesses!', error);
      });
  };

  const getAvailableRoomsCount = (propertyID) => {
    return rooms.filter(room => room.propertyID === propertyID && !room.occupied).length;
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleBusinessChange = (event) => {
    setSelectedBusiness(event.target.value);
  };

  const handlePropertyChange = (event) => {
    const propertyId = event.target.value;
    setSelectedProperty(propertyId);
    setSelectedRoom(''); // Reset room selection when property changes

    console.log("Selected Property ID:", propertyId); // Log selected property
  };


  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedProperty && selectedRoom) {
      // Handle the application submission logic here
      console.log(`Applying to property: ${selectedProperty}, room: ${selectedRoom}`);
      // You can add your API call or other logic here
    } else {
      alert('Please select both a property and a room.');
    }
  };

  const filteredProperties = properties.filter(property => {
    return (
      (selectedLocation === '' || property.propertyAddress.includes(selectedLocation)) &&
      (selectedBusiness === '' || property.businessID === selectedBusiness)
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
            {filteredProperties.map((property) => {
              const business = businesses.find(b => b.businessID === property.businessID);
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
            {properties.map(property => (
              <option key={property.propertyID} value={property.propertyAddress}>
                {property.propertyAddress}
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
          {availableRooms.map(room => (
            <option key={room.roomID} value={room.roomID}>
              Room {room.roomNumber}
            </option>
          ))}
        </select>
        <button className="btnSubmit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default StudentHome;
