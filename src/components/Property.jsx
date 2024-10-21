import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PropertyForm = () => {
  const navigate = useNavigate();
  const [selectedBusinessId, setSelectedBusinessId] = useState('');
  const [propertyID, setPropertyID] = useState('');
  const [propertyOwner, setPropertyOwner] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [maleRoom, setMaleRoom] = useState('');
  const [femaleRoom, setFemaleRoom] = useState('');

  const [businesses, setBusinesses] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState('');
  const [businessID, setBusinessID] = useState('');
  const [businessContact, setBusinessContact] = useState('');

  const [businessName, setBusinessName] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber]=useState('');
  const [addressLine1, setAddress1] =useState('');
  const [addressLine2 ,setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [postalCode , setPostCode]= useState ('');

  const contact ={email,phoneNumber,addressLine1,addressLine2,city,postalCode};
  const business = { businessName, businessID, description, contact };

  const [properties, setProperties] = useState([]);

  useEffect(() => {
   // loadBusinesses();
    //readProperties();
  }, []);

  const loadBusinesses = async () => {
    try {
      const response = await axios.get('http://localhost:8080/CampusConnectDb/businesses');
      setBusinesses(response.data);
    } catch (error) {
      console.error('Error fetching businesses:', error);
    }
  };

  const readProperties = async () => {
    try {
      const response = await axios.get('http://localhost:8080/CampusConnectDb/property/read');
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleBusinessChange = (event) => {
    const selectedId = event.target.value;
    setSelectedBusiness(selectedId);
  
    const selectedBusinessData = businesses.find(
      (business) => business.id.toString() === selectedId
    );
  
    if (selectedBusinessData) {
      setBusinessID(selectedBusinessData.id);
      setBusinessName(selectedBusinessData.name);
      setDescription(selectedBusinessData.description);
      setEmail(selectedBusinessData.contact?.email || '');
      setPhoneNumber(selectedBusinessData.contact?.phoneNumber || '');
      setAddress1(selectedBusinessData.contact?.addressLine1 || '');
      setAddressLine2(selectedBusinessData.contact?.addressLine2 || '');
      setCity(selectedBusinessData.contact?.city || '');
      setPostCode(selectedBusinessData.contact?.postalCode || '');
    } else {
      // Clear fields if no business is selected
      setBusinessID('');
      setBusinessName('');
      setDescription('');
      setEmail('');
      setPhoneNumber('');
      setAddress1('');
      setAddressLine2('');
      setCity('');
      setPostCode('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const property = {
      propertyID,
      propertyOwner,
      propertyName,
      propertyAddress,
      maleRoom,
      femaleRoom,
      business
      
    };

    try {
      const response = await fetch("http://localhost:8080/CampusConnectDb/property/create", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(property),
      });

      if (response.ok) {
        console.log('Property created successfully');
        clearFields();
        readProperties();
      } else {
        console.error('Failed to create property');
      }
    } catch (error) {
      console.error('Error creating property:', error);
    }
  };

  const clearFields = () => {
    setPropertyID('');
    setPropertyOwner('');
    setPropertyName('');
    setPropertyAddress('');
    setMaleRoom('');
    setFemaleRoom('');
    setSelectedBusiness('');
    setBusinessID('');
    setBusinessContact('');
  };

  const exitForm = () => {
    clearFields();
    navigate('/');
  };

  return (
    <div className="form-container flex">
     <form onSubmit={handleSubmit} className="property-form">
      <div>
        <label htmlFor="business-select">Select Business:</label>
        <select id="business-select" value={selectedBusinessId} onChange={handleBusinessChange}>
          <option value="">Select a business</option>
          {businesses.map((business) => (
            <option key={business.id} value={business.id}>
              {business.name}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="businessID">Business Identification Number:</label>
        <input
          type="text"
          id="businessID"
          value={businessID}
          onChange={(e) => setBusinessID(e.target.value)}
          placeholder="Business Identification Number"
        />
      </div>
      <div>
        <label htmlFor="description">Business Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Business Description"
        />
      </div>
      <div>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
        />
      </div>
      <div>
        <label htmlFor="addressLine1">Address Line 1:</label>
        <input
          type="text"
          id="addressLine1"
          value={addressLine1}
          onChange={(e) => setAddress1(e.target.value)}
          placeholder="Address Line 1"
        />
      </div>
      <div>
        <label htmlFor="addressLine2">Address Line 2:</label>
        <input
          type="text"
          id="addressLine2"
          value={addressLine2}
          onChange={(e) => setAddressLine2(e.target.value)}
          placeholder="Address Line 2"
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
        />
      </div>
      <div>
        <label htmlFor="postalCode">Postal Code:</label>
        <input
          type="text"
          id="postalCode"
          value={postalCode}
          onChange={(e) => setPostCode(e.target.value)}
          placeholder="Postal Code"
        />
      </div>
      <div>
        <label htmlFor="propertyID">Property ID:</label>
        <input
          type="text"
          id="propertyID"
          value={propertyID}
          onChange={(e) => setPropertyID(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="propertyOwner">Property Owner:</label>
        <input
          type="text"
          id="propertyOwner"
          value={propertyOwner}
          onChange={(e) => setPropertyOwner(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="propertyName">Property Name:</label>
        <input
          type="text"
          id="propertyName"
          value={propertyName}
          onChange={(e) => setPropertyName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="propertyAddress">Property Address:</label>
        <input
          type="text"
          id="propertyAddress"
          value={propertyAddress}
          onChange={(e) => setPropertyAddress(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="maleRoom">Male Room:</label>
        <input
          type="number"
          id="maleRoom"
          value={maleRoom}
          onChange={(e) => setMaleRoom(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="femaleRoom">Female Room:</label>
        <input
          type="number"
          id="femaleRoom"
          value={femaleRoom}
          onChange={(e) => setFemaleRoom(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={exitForm}>Exit</button>
    </form>
      {/* Table Section */}
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>Property ID</th>
              <th>Property Name</th>
              <th>Property Owner</th>
              <th>Address</th>
              <th>Male Rooms</th>
              <th>Female Rooms</th>
            </tr>
          </thead>
          <tbody>
            {properties.length > 0 ? (
              properties.map((property) => (
                <tr key={property.propertyID}>
                  <td>{property.propertyID}</td>
                  <td>{property.propertyName}</td>
                  <td>{property.propertyOwner}</td>
                  <td>{property.propertyAddress}</td>
                  <td>{property.maleRoom}</td>
                  <td>{property.femaleRoom}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No properties found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertyForm;
