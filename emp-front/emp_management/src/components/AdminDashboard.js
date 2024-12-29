import React, { useState } from "react";
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [employeeData, setEmployeeData] = useState({});
  const [empNumber, setEmpNumber] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    if (!empNumber.trim()) {
      setErrors({ empNumber: "Employee number is required." });
      return;
    }

    setErrors({});
    setLoading(true);
    setSuccessMessage(""); // Reset success message on new search
    setErrorMessage("");   // Reset error message on new search

    try {
      const response = await fetch(`http://localhost:8080/api/employees/${empNumber}`);
      if (response.ok) {
        const data = await response.json();
        if (data) {
          setEmployeeData(data);
        } else {
          setEmployeeData(null);
          setErrorMessage("No employee found with the given number.");
        }
      } else {
        setEmployeeData(null);
        setErrorMessage("Error fetching employee data.");
      }
    } catch (error) {
      console.error("Error fetching employee data:", error);
      setErrorMessage("An error occurred while fetching employee data.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setEmpNumber(e.target.value);
  };

  const handleUpdate = async () => {
    if (!empNumber.trim()) {
      setErrors({ empNumber: "Employee number is required." });
      return;
    }

    setErrors({});
    setLoading(true);
    setSuccessMessage(""); // Reset success message
    setErrorMessage("");   // Reset error message

    try {
      // Prepare the data to be updated, including empty fields
      const updatedEmployee = {
        firstName: employeeData.firstName || "",  // If empty, send an empty string
        lastName: employeeData.lastName || "",    // If empty, send an empty string
        phoneNumber: employeeData.phoneNumber || "", // If empty, send an empty string
        address: employeeData.address || "",      // If empty, send an empty string
        age: employeeData.age || "",              // If empty, send an empty string
        email: employeeData.email || "",          // If empty, send an empty string
        salary: employeeData.salary || "",        // If empty, send an empty string
        position: employeeData.position || "",    // If empty, send an empty string
        startDate: employeeData.startDate || "",  // If empty, send an empty string
        department: employeeData.department || "" // If empty, send an empty string
      };

      // Send the updated data to the backend
      const response = await fetch(`http://localhost:8080/api/employees/${empNumber}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEmployee),
      });

      if (response.ok) {
        setSuccessMessage("Employee data updated successfully.");
        const updatedData = await response.json();
        setEmployeeData(updatedData);  // Update state with the latest employee data
      } else {
        setErrorMessage("Failed to update employee data.");
      }
    } catch (error) {
      console.error("Error updating employee data:", error);
      setErrorMessage("An error occurred while updating employee data.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!empNumber.trim()) {
      setErrors({ empNumber: "Employee number is required." });
      return;
    }

    setErrors({});
    setLoading(true);
    setSuccessMessage(""); // Reset success message
    setErrorMessage("");   // Reset error message

    try {
      const response = await fetch(`http://localhost:8080/api/employees/${empNumber}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setSuccessMessage("Employee data deleted successfully.");
        setEmployeeData({});
        setEmpNumber("");
      } else {
        setErrorMessage("Failed to delete employee data.");
      }
    } catch (error) {
      console.error("Error deleting employee data:", error);
      setErrorMessage("An error occurred while deleting employee data.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <div className="admin-description">
        <p>
          <strong>Important:</strong> Only an admin can view or manage employee details.
        </p>
      </div>
      <h2>Employee Management</h2>
      <div className="form-group">
        <label htmlFor="empNumber">Enter Employee Number:</label>
        <input
          type="text"
          id="empNumber"
          value={empNumber}
          onChange={handleInputChange}
          required
        />
        {errors.empNumber && <p className="error">{errors.empNumber}</p>}
      </div>
      <div className="button-container">
        <button className="search" type="button" onClick={handleSearch}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}

      {employeeData && Object.keys(employeeData).length > 0 ? (
        <div className="employee-table">
          <h2>Employee Details</h2>
          <table>
            <tbody>
              <tr>
                <th>First Name</th>
                <td>
                  <input
                    type="text"
                    name="firstName"
                    value={employeeData.firstName || ''}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>Last Name</th>
                <td>
                  <input
                    type="text"
                    name="lastName"
                    value={employeeData.lastName || ''}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={employeeData.phoneNumber || ''}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>Address</th>
                <td>
                  <input
                    type="text"
                    name="address"
                    value={employeeData.address || ''}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>Age</th>
                <td>
                  <input
                    type="text"
                    name="age"
                    value={employeeData.age || ''}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>Email</th>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={employeeData.email || ''}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>Salary</th>
                <td>
                  <input
                    type="number"
                    name="salary"
                    value={employeeData.salary || ''}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>Position</th>
                <td>
                  <input
                    type="text"
                    name="position"
                    value={employeeData.position || ''}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>Start Date</th>
                <td>
                  <input
                    type="date"
                    name="startDate"
                    value={employeeData.startDate || ''}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
  <th>Department</th>
  <td>
    <select
      name="department"
      value={employeeData.department || ""}
      onChange={handleChange}
    >
      <option value="">Select Department</option>
      <option value="HR">HR</option>
      <option value="Finance">Finance</option>
      <option value="IT">IT</option>
      <option value="Sales">Sales</option>
      <option value="Marketing">Marketing</option>
      {/* Add more options as needed */}
    </select>
  </td>
</tr>
            </tbody>
          </table>

          <div className="button-container">
            <button className="update" onClick={handleUpdate}>
              {loading ? "Updating..." : "Update"}
            </button>
            <button className="delete" onClick={handleDelete}>
              {loading ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AdminDashboard;
