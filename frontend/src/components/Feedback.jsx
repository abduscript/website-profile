import React from 'react'
import { useState } from 'react';
import '../styles/feedback.css';

function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Nanti dihubungkan ke backend di tahap selanjutnya
    console.log('Feedback submitted:', formData);
    alert('Thank you for your feedback!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="feedback">
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Feedback;
