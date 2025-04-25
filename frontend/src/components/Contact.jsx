import React from 'react'
import '../styles/contacts.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Let's stay connected! Reach me out through any of the following platforms:</p>

      <ul className="contact-list">
        <li><strong>WhatsApp:</strong> <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">+62 812-3456-7890</a></li>
        <li><strong>Email:</strong> <a href="mailto:yourname@email.com">yourname@email.com</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">linkedin.com/in/yourprofile</a></li>
        <li><strong>Instagram:</strong> <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">@yourusername</a></li>
        <li><strong>Facebook:</strong> <a href="https://facebook.com/yourusername" target="_blank" rel="noreferrer">facebook.com/yourusername</a></li>
        <li><strong>Wattpad:</strong> <a href="https://wattpad.com/user/yourusername" target="_blank" rel="noreferrer">wattpad.com/user/yourusername</a></li>
      </ul>
    </section>
  );
}

export default Contact;
