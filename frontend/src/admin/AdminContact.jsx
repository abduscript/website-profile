import React from 'react'
import { useState } from 'react';
import '../admincss/contact.css';

function AdminContact() {
  const [contactInfo, setContactInfo] = useState({
    whatsapp: '',
    email: '',
    linkedin: '',
    instagram: '',
    facebook: '',
    wattpad: '',
  });

  const [contactList, setContactList] = useState([contactInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    setContactList([...contactList, contactInfo]);
    setContactInfo({
      whatsapp: '',
      email: '',
      linkedin: '',
      instagram: '',
      facebook: '',
      wattpad: '',
    });
    alert('Contact added!');
  };

  const handleDeleteContact = (index) => {
    const updatedContactList = contactList.filter((_, i) => i !== index);
    setContactList(updatedContactList);
    alert('Contact deleted!');
  };

  return (
    <div className="admin-contact">
      <h3>Edit Contact Info</h3>
      <form onSubmit={handleAddContact} className="admin-contact-form">
        <label>
          WhatsApp:
          <input
            type="text"
            name="whatsapp"
            value={contactInfo.whatsapp}
            onChange={handleInputChange}
            placeholder="WhatsApp Number"
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={contactInfo.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            required
          />
        </label>

        <label>
          LinkedIn:
          <input
            type="url"
            name="linkedin"
            value={contactInfo.linkedin}
            onChange={handleInputChange}
            placeholder="LinkedIn URL"
            required
          />
        </label>

        <label>
          Instagram:
          <input
            type="url"
            name="instagram"
            value={contactInfo.instagram}
            onChange={handleInputChange}
            placeholder="Instagram URL"
            required
          />
        </label>

        <label>
          Facebook:
          <input
            type="url"
            name="facebook"
            value={contactInfo.facebook}
            onChange={handleInputChange}
            placeholder="Facebook URL"
            required
          />
        </label>

        <label>
          Wattpad:
          <input
            type="url"
            name="wattpad"
            value={contactInfo.wattpad}
            onChange={handleInputChange}
            placeholder="Wattpad URL"
            required
          />
        </label>

        <button type="submit">Add Contact Info</button>
      </form>

      <div className="contact-list">
        {contactList.map((contact, index) => (
          <div key={index} className="contact-item">
            <p><strong>WhatsApp:</strong> {contact.whatsapp}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>LinkedIn:</strong> <a href={contact.linkedin}>{contact.linkedin}</a></p>
            <p><strong>Instagram:</strong> <a href={contact.instagram}>{contact.instagram}</a></p>
            <p><strong>Facebook:</strong> <a href={contact.facebook}>{contact.facebook}</a></p>
            <p><strong>Wattpad:</strong> <a href={contact.wattpad}>{contact.wattpad}</a></p>
            <button onClick={() => handleDeleteContact(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminContact;
