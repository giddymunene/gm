import React, { useEffect, useState } from 'react';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('http://localhost:3000/testimonials'); // Adjust URL if needed
                if (!response.ok) {
                    throw new Error('Failed to fetch testimonials');
                }
                const data = await response.json();
                setTestimonials(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

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
