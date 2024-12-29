import React from 'react';
import './Home.css'; // Import custom CSS for styling

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome</h1>
        <p>Your trusted partner in innovation and excellence</p>
      </header>

      <section className="company-description">
        <h2>About ABC Company (Pvt) Ltd</h2>
        <p>
          ABC Company (Pvt) Ltd is a leading provider of innovative solutions in the fields of technology, manufacturing, and customer service. With over 20 years of experience, we specialize in creating sustainable products and services that meet the evolving needs of businesses and consumers alike.
        </p>
      </section>
      <section className="vision-mission-section">
  <div className="container">
    <div className="vision">
      <h2>Our Vision</h2>
      <p>
        To be a globally recognized leader in delivering innovative solutions and exceptional services that empower businesses to thrive.
      </p>
    </div>
    <div className="mission">
      <h2>Our Mission</h2>
      <p>
        To deliver high-quality, customer-centric solutions through cutting-edge technologies and a commitment to excellence, fostering sustainable growth for our clients and communities.
      </p>
    </div>
  </div>
</section>
    </div>
  );
};

export default HomePage;
