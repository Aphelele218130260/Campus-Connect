import React, { useState } from 'react';
import '../css/property.css';

const Property = () => {

  const [propertyID, setPropertyID]=useState('');
    const [propertyOwner, setPropertyOwner] =useState('');
    const [propertyName ,setPropertyName] = useState('');
    const [PropertyAddress, setPropertyAddress] = useState('');
    const [maleRoom , setMaleRoom]= useState ('');
    const [femaleRoom, setFemaleRoom]= useState('');
    
    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
        const property = { propertyID, propertyOwner,propertyName,
          PropertyAddress,maleRoom,femaleRoom}
  
        const response = await fetch("http://localhost:8080/CampusConnectDb/property/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(property),
        });
        if (response.ok) {
          // Handle successful response
          console.log('Property created successfully');
      } else {
          // Handle error response
          console.error('Failed to create property');
      }
  };
  const updateProperty = async () => {
    const userData = { propertyName, propertyOwner };
    try {
        const response = await axios.put(`http://localhost:8080/CampusConnectDb/business/update/${id}`, userData);
        console.log('Property updated successfully:', response.data);
    } catch (error) {
        console.error('Error updating property:', error);
    }
};
const clearFields = async () => {
  setPropertyID('');
  setPropertyOwner('');
  setPropertyName('');
  setPropertyAddress('');
  setMaleRoom('');
  setFemaleRoom('');
  };

const readProperty = async() =>{
  const [properties, setProperties] = useState([]);
  useEffect(() => {
      const readProperty = async () => {
          try {
              const response = await axios.get('http://localhost:8080/CampusConnectDb/property/read');
              setProperties(response.data);
          } catch (error) {
              console.error('Error fetching properties:', error);
          }
      };

      readBusinesses();
  }, []);
};

const exitForm = () => {
  navigate('/'); 
  
};

  return (
    <div className="container">
      <header>
        <img src="Logo.jpeg" alt="Logo" className="logo" />
        <h1>Property</h1>

      </header>
      <input type="text" className="search-bar" placeholder="Search" />

      <div className="form-container">
        <div className="form-section">
          <label>Property Identification Number</label>
          <input type="text" />

          <label>Property Name</label>
          <input type="text" />

          <label>Owner of the property</label>
          <input type="text" />

          <label>Address</label>
          <textarea rows="4"></textarea>

          <label>Number of rooms for males</label>
          <input type="text" />

          <label>Number of rooms for males</label>
          <input type="text" />
        
        </div>

        <div className="table-section">
          <table>
            <thead>
              <tr>
                <th>property_ID</th>
                <th>property_Name</th>
                <th>Property_Owner</th>
                <th>Address</th>
                <th>Male_Rooms</th>
                <th>Female_Rooms</th>
              </tr>
            </thead>
            <tbody>
            { /* {properties.length > 0 ? (
                        properties.map((property) => (
                            <tr key={property.propertyID}>
                                <td>{property.propertyName}</td>
                                <td>{property.propertyOwner}</td>
                                <td>{property.PropertyAddress}</td>
                                <td>{property.maleRoom}</td>
                                <td>{property.femaleRooms}</td>

                            </tr>
                            ))
                          ) : (
                              <tr>
                                  <td colSpan="6">No businesses found</td>
                              </tr>
                          )}*/}
            </tbody>
          </table>
        </div>
      </div>

      <div className="button-group">
        <button onClick={clearFields}>Clear</button>
        <button onClick={updateProperty}>Update</button>
        <button onClick={handleSubmit}>ADD</button>
        <button onClick={exitForm}>Exit</button>
      </div>
    </div>
  );
};

export default Property;
