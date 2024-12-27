import React, { useState } from "react";
import './EmployeeRegistration.css';


const EmployeeRegistration = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    empNumber: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    age: "",
    email: "",
    salary: "",
    position: "",
    startDate: "",
    department: "",
  });

  // State for error messages
  const [errors, setErrors] = useState({
    age: "",
    phoneNumber: "",
    email: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation function
  const validate = () => {
    const newErrors = {};

    // Age validation: Must be 18 or more
    if (formData.age < 18 || formData.age === "") {
      newErrors.age = "Age must be at least 18.";
    }

    // Phone validation: Should be a 10-digit number and start with 0
    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits and start with 0.";
    }

    // Email validation: Check for valid email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      // Send data to backend
      fetch("http://localhost:8080/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Failed to save employee data.");
        })
        .then((data) => {
          console.log("Employee saved successfully:", data);
          alert("Employee registered successfully!");
          handleCancel(); // Reset the form
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error saving employee data.");
        });
    } else {
      console.log("Form contains errors.");
    }
  };

  // Handle cancel action
  const handleCancel = () => {
    setFormData({
      empNumber: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      age: "",
      email: "",
      salary: "",
      position: "",
      startDate: "",
      department: "",
    });
    setErrors({});
  };

  return (
    <div className="form-container">
      <h2>Employee Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="empNumber">Employee Number:</label>
          <input
            type="text"
            id="empNumber"
            name="empNumber"
            value={formData.empNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary:</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <select
          name="department"
          value={FormData.department}
          onChange={handleChange}
        >
          <option value="">Select Department</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Admin">Admin</option>
          <option value="Finance">Finance</option>
          <option value="Sales">Sales</option>
        </select>
        {errors.department && <p className="error">{errors.department}</p>}
        </div>
        <div className="button-group">
          <button type="submit" className="submit-button">Submit</button>
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeRegistration;
