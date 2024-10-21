// src/Services/AdministratorService.js
import axios from "axios";

const API_URL = "http://localhost:8080/administrator";  // Ensure your backend is running on this URL and port

// Create a new administrator
const createAdministrator = async (administrator) => {
    try {
        const response = await axios.post(`${API_URL}/create`, administrator);
        return response.data;
    } catch (error) {
        console.error("There was an error creating the administrator!", error);
        throw error;
    }
};

// Get all administrators
const getAllAdministrators = async () => {
    try {
        const response = await axios.get(`${API_URL}/getAll`);
        return response.data;
    } catch (error) {
        console.error("There was an error fetching all administrators!", error);
        throw error;
    }
};

// Read an administrator by ID
const getAdministratorById = async (administratorID) => {
    try {
        const response = await axios.get(`${API_URL}/read/${administratorID}`);
        return response.data;
    } catch (error) {
        console.error("There was an error reading the administrator!", error);
        throw error;
    }
};

// Update an administrator
const updateAdministrator = async (administrator) => {
    try {
        const response = await axios.put(`${API_URL}/update`, administrator);
        return response.data;
    } catch (error) {
        console.error("There was an error updating the administrator!", error);
        throw error;
    }
};

// Delete an administrator
const deleteAdministrator = async (administratorID) => {
    try {
        await axios.delete(`${API_URL}/delete/${administratorID}`);
    } catch (error) {
        console.error("There was an error deleting the administrator!", error);
        throw error;
    }
};

export default {
    createAdministrator,
    getAllAdministrators,
    getAdministratorById,
    updateAdministrator,
    deleteAdministrator,
};
