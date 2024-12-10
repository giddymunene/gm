import React, { useState } from 'react';

const Contact = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setIsMessageSent(true); // Show the success message
    setTimeout(() => setIsMessageSent(false), 3000); // Hide the message after 3 seconds
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>

      {/* Pop-up message */}
      {isMessageSent && (
        <div className="alert alert-success text-center mt-4" role="alert">
          Message successfully sent to Dantech Cyber!
        </div>
      )}
    </div>
  );
};

export default Contact;