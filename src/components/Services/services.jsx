// src/components/Services/Services.js
import React from 'react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building responsive and interactive websites using the latest technologies.',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Creating user-friendly mobile applications for both Android and iOS platforms.',
  },
  {
    id: 3,
    title: 'Consulting',
    description: 'Providing expert advice on software development best practices and project management.',
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'Designing intuitive user interfaces and enhancing user experiences.',
  },
  // Add more services as needed
];

const Services = () => {
  return (
    <section className="services">
      <h2>Services</h2>
      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
