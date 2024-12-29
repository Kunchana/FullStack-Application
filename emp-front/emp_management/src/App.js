import React from 'react';
import logo from './emp_img.png'; 
import company from './abc1.jpeg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; 
import Home from './components/Home';
import EmployeeRegistration from './components/EmployeeRegistration';
import EmployeeDashboard from './components/EmployeeDashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation Bar */}
        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <Link to="/home" className="nav-link">Home</Link> 
            </li>
            <li>
              <Link to="/registration" className="nav-link">Employee Registration</Link>
            </li>
            <li>
              <Link to="/dashboard" className="nav-link">Employee Dashboard</Link>
            </li>
            <li>
              <Link to="/admin" className="nav-link">Admin Dashboard</Link>
            </li>
          </ul>
        </nav>

         {/* Welcome Section */}
         <div className="welcome-section">
         <img src={company} alt="Company" className="company" />
          <h1>ABC Company(pvt)LTD</h1>
        </div>

        {/* Main Container */}
        <div className="main-container"> 
          <Routes>
            <Route path="/" element={ 
              <>
                {/* Left Section - Description */}
                <div className="left-section">
                  <h2>Employee Management System</h2>
                  <p>
                    The Employee Management System is a comprehensive solution designed to handle employee operations, enhance productivity, and streamline workflow management. With a user-friendly interface and efficient tools, it simplifies HR processes and empowers organizations to focus on their core goals.
                  </p>
                </div>

                {/* Right Section - Image */}
                <div className="right-section">
                  {/* Assuming your image is in the same directory as App.js */}
                  <img src={logo} alt="Company Logo" className="company-logo" /> 
                </div>
              </>
            } /> 
            <Route path="/home" element={<Home />} /> 
            <Route path="/registration" element={<EmployeeRegistration />} />
            <Route path="/dashboard" element={<EmployeeDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
        <footer className="footer">
  <div className="footer-content">
    <div className="footer-section contact-info">
      <h2>Contact Details</h2>
      <p><strong>Email:</strong> contact@abccompany.com</p>
      <p><strong>Phone:</strong> +94 123 456 789</p>
      <p><strong>Address:</strong> 123, ABC Street, Colombo, Sri Lanka</p>
    </div>

    <div className="footer-section our-services">
      <h2>Our Services</h2>
      <ul>
        <li><a href="#contact-us">Contact Us</a></li>
        <li><a href="#policy">Policy</a></li>
        <li><a href="#feedbacks">Feedbacks</a></li>
      </ul>
    </div>

    <div className="footer-section social-links">
      <h2>Follow Us</h2>
      <div className="social-icons">
        <a href="https://facebook.com/abccompany" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com/abccompany" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com/company/abccompany" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2024 ABC Company (Pvt) Ltd. All rights reserved.</p>
  </div>
</footer>

      </div>
    </Router>
  );
}

export default App;
