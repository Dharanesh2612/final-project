import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="app-container">
      <div className="about-us">
        <div className="about-header">
          <h1>About Us</h1>
          <p>Welcome to Our Quantum Learning Hub, where innovation meets education.</p>
        
        </div>
        <div className="about-content">
          <div className="container mission">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>
                At Our Quantum Learning Hub, our mission is to revolutionize learning through cutting-edge technology and creative solutions. We strive to provide an interactive, engaging, and personalized learning experience that empowers individuals and organizations to achieve their full potential.
              </p>
            </div>
            <img src="https://via.placeholder.com/300x200" alt="Mission Image" className="section-image" />
          </div>
          <div className="container hub-description">
            <img src="https://via.placeholder.com/300x200" alt="Hub Description Image" className="section-image" />
            <div className="hub-description-content">
              <h2>About Our Quantum Learning Hub</h2>
              <p>
                Our Quantum Learning Hub is a state-of-the-art platform designed to harness the power of quantum computing and advanced technologies to transform the way we learn and grow. We combine innovative teaching methods with interactive tools to deliver a dynamic educational experience that is both effective and enjoyable.
              </p>
              <p>
                We offer a range of courses and resources that cater to various learning needs, from foundational knowledge to advanced topics. Our platform is equipped with the latest features, including real-time feedback, interactive simulations, and personalized learning paths, all aimed at making learning more engaging and impactful.
              </p>
              <p>
                Our team of experts is dedicated to continuously improving and expanding our offerings to ensure that our users have access to the most up-to-date and relevant content. We are committed to fostering a community of learners who are curious, motivated, and prepared to tackle the challenges of tomorrow.
              </p>
            </div>
          </div>
          <div className="container team">
            <h2>Meet the Team</h2>
            <div className="team-members">
              <div className="team-member">
                <img src="https://via.placeholder.com/150" alt="John Doe" />
                <h3>John Doe</h3>
                <p>CEO & Founder</p>
              </div>
              <div className="team-member">
                <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                <h3>Jane Smith</h3>
                <p>CTO & Lead Innovator</p>
              </div>
              <div className="team-member">
                <img src="https://via.placeholder.com/150" alt="Emily Johnson" />
                <h3>Emily Johnson</h3>
                <p>Chief Learning Officer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
