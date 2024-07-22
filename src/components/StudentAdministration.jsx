import {} from 'react';
import '../css/StudentAdministration.css';

const StudentAdministration = () => {
  return (
    <div className="student-admin-container">
      <header className="header">
        <img src="../assets/logo.png" alt="Logo" className="logo" />
        <h1>Student Administration</h1>
      </header>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="student-admin-content">
        <table className="student-admin-table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Student Surname</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="button-group">
          <button className="btn-delete">DELETE</button>
          <button className="btn-update">UPDATE</button>
          <button className="btn-exit">EXIT</button>
        </div>
      </div>
    </div>
  );
};

export default StudentAdministration;
