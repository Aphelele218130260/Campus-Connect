import React, { useState } from 'react';
import '../css/business.css'; 

function Business() {
  
  const [businessName, setBusinessName] = useState('');
  const [businessID, setBusinessID] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber]=useState('');
  const [addressLine1, setAddress1] =useState('');
  const [addressLine2 ,setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [postalCode , setPostCode]= useState ('');
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

      const business = { businessName, businessID,description,
        email,phoneNumber,addressLine1,addressLine2,city,postalCode}

      const response = await fetch("http://localhost:8080/CampusConnectDb/business/create", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(business),
      });

      if (response.ok) {
          // Handle successful response
          console.log('Business created successfully');
      } else {
          // Handle error response
          console.error('Failed to create business');
      }
  };

  const updateBusiness = async () => {
    const userData = { businessName, email };
    try {
        const response = await axios.put(`http://localhost:8080/CampusConnectDb/business/update/${id}`, userData);
        console.log('Business updated successfully:', response.data);
    } catch (error) {
        console.error('Error updating business:', error);
    }
};
const clearFields = async () => {
  setBusinessName('');
  setBusinessID('');
  setDescription('');
  setEmail('');
  setPhoneNumber('');
  setAddress1('');
  setAddressLine2 ('');
  setCity('');
  setPostCode('');

};
const readBusinesses = async() =>{
  const [businesses, setBusinesses] = useState([]);
  useEffect(() => {
      const readBusinesses = async () => {
          try {
              const response = await axios.get('http://localhost:8080/CampusConnectDb/business/read');
              setBusinesses(response.data);
          } catch (error) {
              console.error('Error fetching businesses:', error);
          }
      };

      readBusinesses();
  }, []);
};


const exitForm = () => {
  navigate('/home'); 
};



  return (
    <div className="container">
      <header className="header">
        <img src="Logo.jpeg" alt="Logo" className="logo" />
        <h1>Business information</h1>
      </header>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="form-and-table">
        <div className="form-container">
          <input type="text" placeholder="Business Name" />
          <input type="text" placeholder="Business Identification Number" />
          <input type="text" placeholder="Business contact number" />
          <textarea placeholder="Business Description"></textarea>
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Address Line 1" />
          <input type="text" placeholder="Address Line 2" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Postal Code" />
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>BusinessName</th>
                <th>BusinessID</th>
                <th>BusinessNO</th>
                <th>BusinessDescrip</th>
              </tr>
            </thead>
            <tbody>
            {/*{businesses.length > 0 ? (
                        businesses.map((business) => (
                            <tr key={business.businessName}>
                                <td>{business.businessID}</td>
                                <td>{business.phoneNumber}</td>
                                <td>{business.description}</td>
                            </tr>
                            ))
                          ) : (
                              <tr>
                                  <td colSpan="4">No businesses found</td>
                              </tr>
                          )}*/}
            </tbody>
          </table>
        </div>
      </div>
      <div className="buttons">
        <button onClick={clearFields}>Clear</button>
        <button onClick= {updateBusiness}>Update</button>
        <button onClick={handleSubmit}>Add</button>
        <button onClick={exitForm}>Exit</button>
      </div>
    </div>
  );
}

export default Business;