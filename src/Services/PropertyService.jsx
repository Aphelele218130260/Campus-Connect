import axios from "axios";

const PROPERTY_API_BASE_URL = "http://localhost:8080/property";

class PropertyService {
    // Fetch all properties
    getAllProperties() {
        return axios.get(`${PROPERTY_API_BASE_URL}/getAll`);
    }
    
    // Fetch a single property by ID
    getPropertyById(propertyID) {
        return axios.get(`${PROPERTY_API_BASE_URL}/read${propertyID}`);
    }
    
    // Create a new property
    createProperty(property) {
        return axios.post(`${PROPERTY_API_BASE_URL}/create`, property);
    }
    
    // Update a property
    updateProperty(property) {
        return axios.post(`${PROPERTY_API_BASE_URL}/update`, property);
    }
    
    // Delete a property
    deleteProperty(propertyID) {
        return axios.delete(`${PROPERTY_API_BASE_URL}/delete${propertyID}`);
    }
}

export default new PropertyService();