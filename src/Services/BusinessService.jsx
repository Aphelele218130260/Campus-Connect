import axios from "axios";

const BUSINESS_API_BASE_URL = "http://localhost:8080/business";

class BusinessService {
    // Fetch all businesses
    getAllBusinesses() {
        return axios.get(`${BUSINESS_API_BASE_URL}/getAll`);
    }
    
    // Fetch a single business by ID
    getBusinessById(businessID) {
        return axios.get(`${BUSINESS_API_BASE_URL}/read${businessID}`);
    }
    
    // Create a new business
    createBusiness(business) {
        return axios.post(`${BUSINESS_API_BASE_URL}/create`, business);
    }
    
    // Update a business
    updateBusiness(business) {
        return axios.post(`${BUSINESS_API_BASE_URL}/update`, business);
    }
    
    // Delete a business
    deleteBusiness(businessID) {
        return axios.delete(`${BUSINESS_API_BASE_URL}/delete${businessID}`);
    }
}

export default new BusinessService();