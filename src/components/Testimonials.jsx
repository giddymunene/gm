import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Murithi Kanyama',
            location: 'Gichugu',
            feedback: 'Great Delivery and Trustworthy Cyber Café.',
            image: 'https://via.placeholder.com/150', // Replace with actual image URL
        },
        {
            name: 'Julius Kareithi',
            location: 'Kianjokoma',
            feedback: 'I like it as a cyber café extension. I can design, print, and download documents easily.',
            image: 'https://via.placeholder.com/150', // Replace with actual image URL
        },
        {
            name: 'ST.Matthews School',
            location: 'Kianjokoma',
            feedback: 'Great Printing and Networking Services.',
            image: 'https://via.placeholder.com/150', // Replace with actual image URL
        },
        {
            name: 'Kimani',
            location: 'Kianjokoma',
            feedback: 'I like the cyber.It offers very great printing and M-pesa services.',
            image: 'https://via.placeholder.com/150', // Replace with actual image URL
        },
    ];

    return (
        <section id="testimonials" className="bg-light py-5">
            <div className="container">
                <h2 className="text-center text-dark mb-4">What Our Customers Say</h2>
                <div className="row">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="col-md-6 mb-4">
                            <div className="card shadow-sm">
                                <img
                                    src={testimonial.image}
                                    alt={`${testimonial.name}'s profile`}
                                    className="card-img-top rounded-circle mx-auto mt-3"
                                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                />
                                <div className="card-body text-center">
                                    <p className="card-text text-muted">"{testimonial.feedback}"</p>
                                    <h5 className="card-title mt-3">{testimonial.name}</h5>
                                    <p className="card-subtitle text-secondary">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;