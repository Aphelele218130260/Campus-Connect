import axios from "axios";

const ADMINISTRATOR_API_BASE_URL = "http://localhost:8080/administrator";

class AdministratorService {
    // Fetch all administrators
    getAllAdministrators() {
        return axios.get(`${ADMINISTRATOR_API_BASE_URL}/getAll`);
    }
    
    // Fetch a single administrator by ID
    getAdministratorById(administratorID) {
        return axios.get(`${ADMINISTRATOR_API_BASE_URL}/read${administratorID}`);
    }
    
    // Create a new administrator
    createAdministrator(administrator) {
        return axios.post(`${ADMINISTRATOR_API_BASE_URL}/create`, administrator);
    }
    
    // Update an administrator
    updateAdministrator(administrator) {
        return axios.post(`${ADMINISTRATOR_API_BASE_URL}/update`, administrator);
    }
    
    // Delete an administrator
    deleteAdministrator(administratorID) {
        return axios.delete(`${ADMINISTRATOR_API_BASE_URL}/delete${administratorID}`);
    }
}

export default new AdministratorService();