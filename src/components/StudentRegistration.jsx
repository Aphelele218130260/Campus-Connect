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
        phoneNumber: "",
        dateOfBirth: "",
        username: "",
        password: "",
        academicInstitution: "",
        academicCourse: "",
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
    const [error, setError] = useState("");
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

        // Gender validation
        if (student.gender === "") {
            setError("Please select a gender.");
            return;  // Prevent form submission
        } else {
            setError("");  // Clear error if gender is valid
        }

        const studentToSubmit = {
            name: {
                firstName: student.firstName,
                middleName: student.middleName,
                lastName: student.lastName
            },
            demographic: {
                nationality: student.nationality,
                race: student.race,
                gender: student.gender,
                dateOfBirth: student.dateOfBirth
            },
            contact: {
                phoneNumber: student.phoneNumber,
                email: student.email,
                addressLine1: student.addressLine1,
                addressLine2: student.addressLine2,
                city: student.city,
                postalCode: student.postalCode
            },
            academicInfo: {
                academicInstitution: student.academicInstitution,
                academicYear: student.academicYear,
                studentNumber: student.studentNumber,
                academicCourse: student.academicCourse
            },
            username: student.username,
            studentPassword: student.password
        };

        try {
            const response = await StudentService.createStudent(studentToSubmit);
            setMessage("Student registered successfully!");
            console.log(response.data);

            // Redirect to /login page after successful registration
            navigate("/login");

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
                        {/* Phone Number */}
                        <div className="input-group">
                            <label>Phone Number:</label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={student.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Date of Birth */}
                        <div className="input-group">
                            <label>Date of Birth:</label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={student.dateOfBirth}
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
                        {/* Academic Course */}
                        <div className="input-group">
                            <label>Academic Course:</label>
                            <input
                                type="text"
                                name="academicCourse"
                                value={student.academicCourse}
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
                                value={student.gender || ""}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select gender</option> {/* Placeholder option */}
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        {/* Buttons */}
                        <div className="buttons">
                            <button type="button" onClick={handleBack} className="back-button">Back</button>
                            <button type="submit" disabled={student.gender === ""}>Register</button>
                        </div>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default StudentRegistration;
