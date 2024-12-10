import React from 'react';

const AboutUs = () => {
  return (
    <div
      className="container-fluid text-dark py-5"
      style={{
        backgroundColor: '#f8f9fa', // Replace with your preferred background color
        height: '100vh',
      }}
    >
      <div className="container">
        <h2 className="display-4">About Us</h2>
        <p>
          Welcome to Dantech Cyber! We offer a variety of cyber café services tailored to meet your needs.
          Our mission is to make online services easily accessible and secure for everyone.
        </p>
        <p>
          Whether you need document printing, online applications, or internet browsing, we have you covered! Our state-of-the-art equipment and secure network ensure that your experience is fast and reliable. 
        </p>
        <p>
          We pride ourselves on offering not only traditional services but also modern solutions like graphic design, eCitizen services, vehicle searches, and more.
        </p>
        <p>
          Dantech Cyber is committed to providing excellent customer service and ensuring that you can access what you need whenever you need it.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
