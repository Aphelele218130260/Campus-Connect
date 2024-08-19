import React from "react";
import "../css/StudentRegistration.css"; // Assuming you want to keep the styles separated

function StudentRegistration() {
    return (
        <>
            <div className="header">
                <img src="logo.png" alt="Logo" className="logo" />
                <h1>Student Registration</h1>
            </div>
            <div className="main-content">
                <div className="registration-container">
                    <form className="registration-form">
                        <div className="input-group">
                            <input type="text" placeholder="Enter First Name" required />
                            <input type="text" placeholder="Enter Surname" required />
                        </div>
                        <div className="input-group">
                            <input type="email" placeholder="Enter Email" required />
                            <input type="text" placeholder="Enter Contact Number" required />
                        </div>
                        <input type="password" placeholder="Enter Password" required />
                        <div className="input-group">
                            <div className="gender">
                                <label>Select Gender</label>
                                <div>
                                    <input type="radio" id="male" name="gender" value="male" />
                                    <label htmlFor="male">Male</label>
                                    <input type="radio" id="female" name="gender" value="female" />
                                    <label htmlFor="female">Female</label>
                                </div>
                            </div>
                            <div className="dob">
                                <label>Date of Birth</label>
                                <div className="dob-inputs">
                                    <select>
                                        <option value="">DD</option>
                                        {/* Options for days */}
                                    </select>
                                    <select>
                                        <option value="">MM</option>
                                        {/* Options for months */}
                                    </select>
                                    <select>
                                        <option value="">YYYY</option>
                                        {/* Options for years */}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="buttons">
                            <button type="button">Back</button>
                            <button type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default StudentRegistration;
