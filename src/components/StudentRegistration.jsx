import React, { useState } from "react";
import StudentService from "../Services/StudentService";
import '../css/StudentRegistration.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Icon2.png';

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
                <img src={logo} alt="Campus Connect Logo" className="logo"/>
                <h1>Student Registration</h1>
            </header>

            {/* Main Content Section */}
            <div className="main-content">
                <div className="registration-container">
                    <form onSubmit={handleSubmit} className="registration-form">
                        {/* First Name */}
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
                        {/* Middle Name */}
                        <div className="input-group">
                            <label>Middle Name:</label>
                            <input
                                type="text"
                                name="middleName"
                                value={student.middleName}
                                onChange={handleChange}
                            />
                        </div>
                        {/* Last Name */}
                        <div className="input-group">
                            <label>Last Name:</label>
                            <input
                                type="text"
                                name="lastName"
                                value={student.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Email */}
                        <div className="input-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={student.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Username */}
                        <div className="input-group">
                            <label>Username:</label>
                            <input
                                type="text"
                                name="username"
                                value={student.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Password */}
                        <div className="input-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={student.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Academic Institution */}
                        <div className="input-group">
                            <label>Academic Institution:</label>
                            <input
                                type="text"
                                name="academicInstitution"
                                value={student.academicInstitution}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Academic Year */}
                        <div className="input-group">
                            <label>Academic Year:</label>
                            <input
                                type="text"
                                name="academicYear"
                                value={student.academicYear}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Student Number */}
                        <div className="input-group">
                            <label>Student Number:</label>
                            <input
                                type="text"
                                name="studentNumber"
                                value={student.studentNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Address Line 1 */}
                        <div className="input-group">
                            <label>Address Line 1:</label>
                            <input
                                type="text"
                                name="addressLine1"
                                value={student.addressLine1}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Address Line 2 */}
                        <div className="input-group">
                            <label>Address Line 2:</label>
                            <input
                                type="text"
                                name="addressLine2"
                                value={student.addressLine2}
                                onChange={handleChange}
                            />
                        </div>
                        {/* City */}
                        <div className="input-group">
                            <label>City:</label>
                            <input
                                type="text"
                                name="city"
                                value={student.city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Postal Code */}
                        <div className="input-group">
                            <label>Postal Code:</label>
                            <input
                                type="text"
                                name="postalCode"
                                value={student.postalCode}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Nationality */}
                        <div className="input-group">
                            <label>Nationality:</label>
                            <input
                                type="text"
                                name="nationality"
                                value={student.nationality}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Race */}
                        <div className="input-group">
                            <label>Race:</label>
                            <input
                                type="text"
                                name="race"
                                value={student.race}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Gender Section as a Combobox */}
                        <div className="input-group">
                            <label>Gender:</label>
                            <select
                                name="gender"
                                value={student.gender}
                                onChange={handleChange}
                                required
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

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
//