import React, { useEffect, useState } from "react";
import './EmployeeDashboard.css';

const EmployeeDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  // Fetch employee data from backend
  useEffect(() => {
    fetch("http://localhost:8080/api/employees")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to fetch employee data.");
      })
      .then((data) => {
        console.log(data);  // Log the response to verify empNumber field
        setEmployees(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Employee Dashboard</h2>
      {error && <p className="error">{error}</p>}
      <table className="employee-table">
        <thead>
          <tr>
            <th>Emp Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Age</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Position</th>
            <th>Start Date</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id ?? 'N/A'}</td>  {/* Fallback to 'N/A' */}
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.phoneNumber}</td>
                <td>{employee.address}</td>
                <td>{employee.age}</td>
                <td>{employee.email}</td>
                <td>{employee.salary}</td>
                <td>{employee.position}</td>
                <td>{employee.startDate}</td>
                <td>{employee.department}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11">No employees found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDashboard;
