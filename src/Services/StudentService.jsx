import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/student";

class StudentService {
    // Fetch all students
    getAllStudents() {
        return axios.get(`${STUDENT_API_BASE_URL}/getAll`);
    }
    
    // Fetch a single student by ID
    getStudentById(studentID) {
        return axios.get(`${STUDENT_API_BASE_URL}/read${studentID}`);
    }
    
    // Create a new student
    createStudent(student) {
        return axios.post(`${STUDENT_API_BASE_URL}/create`, student);
    }
    
    // Update a student
    updateStudent(student) {
        return axios.post(`${STUDENT_API_BASE_URL}/update`, student);
    }
    
    // Delete a student
    deleteStudent(studentID) {
        return axios.delete(`${STUDENT_API_BASE_URL}/delete${studentID}`);
    }
}

export default new StudentService();