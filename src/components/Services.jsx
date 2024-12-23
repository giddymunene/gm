import React, { useEffect, useState } from 'react';

const Services = () => {
  const [cyberServices, setCyberServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:3000/cyberServices'); // Adjust URL if needed
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        setCyberServices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Our Cyber Services</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {cyberServices.map((service) => (
          <div key={service.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', maxWidth: '300px' }}>
            <img src={service.image} alt={service.title} style={{ width: '100%', borderRadius: '4px' }} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
