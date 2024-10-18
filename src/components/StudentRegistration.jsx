import React, { useState } from "react";
import StudentService from "../Services/StudentService";
import '../css/StudentRegistration.css';
import { useNavigate } from 'react-router-dom';

const StudentRegistration = () => {
    const [student, setStudent] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        academicInstitution: "",
        academicYear: "",
        studentNumber: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        postalCode: "",
        nationality: "",
        race: "",
        gender: ""
    });

    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await StudentService.createStudent(student);
            setMessage("Student registered successfully!");
            console.log(response.data);
        } catch (error) {
            setMessage("Error registering student.");
            console.error(error);
        }
    };

    return (
        <div className="student-registration">
            {/* Header Section */}
            <header className="header">
                <img src="path-to-your-logo.png" alt="Logo" className="logo" />
                <h1>Student Registration</h1>
            </header>

            {/* Main Content Section */}
            <div className="main-content">
                <div className="registration-container">
                    <form onSubmit={handleSubmit} className="registration-form">
                        {/* Form Fields */}
                        <div className="input-group">
                            <label>First Name:</label>
                            <input
                                type="text"
                                name="firstName"
                                value={student.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* More input fields go here... */}

                        {/* Buttons */}
                        <div className="buttons">
                            <button type="button" onClick={handleBack} className="back-button">Back</button>
                            <button type="submit">Register</button>
                        </div>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default StudentRegistration;
