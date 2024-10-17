// src/Services/StudentService.js
import axios from "axios";

const API_URL = "http://localhost:8080/students";  // Ensure your backend is running on this URL and port

// Create a new student
const createStudent = async (student) => {
    try {
        const response = await axios.post(`${API_URL}/create`, student);
        return response.data;
    } catch (error) {
        console.error("There was an error creating the student!", error);
        throw error;
    }
};

// Get all students
const getAllStudents = async () => {
    try {
        const response = await axios.get(`${API_URL}/getAll`);
        return response.data;
    } catch (error) {
        console.error("There was an error fetching all students!", error);
        throw error;
    }
};

// Read a student by ID
const getStudentById = async (studentID) => {
    try {
        const response = await axios.get(`${API_URL}/read/${studentID}`);
        return response.data;
    } catch (error) {
        console.error("There was an error reading the student!", error);
        throw error;
    }
};

// Update a student
const updateStudent = async (student) => {
    try {
        const response = await axios.put(`${API_URL}/update`, student);
        return response.data;
    } catch (error) {
        console.error("There was an error updating the student!", error);
        throw error;
    }
};

// Delete a student
const deleteStudent = async (studentID) => {
    try {
        await axios.delete(`${API_URL}/delete/${studentID}`);
    } catch (error) {
        console.error("There was an error deleting the student!", error);
        throw error;
    }
};

export default {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
};
