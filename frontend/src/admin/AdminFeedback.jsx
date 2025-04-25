import React from 'react'
import { useState } from 'react';
import '../admincss/feedback.css';

function AdminFeedback() {
  const [feedbacks, setFeedbacks] = useState([
    { name: 'John Doe', email: 'johndoe@example.com', message: 'Great website!' },
    { name: 'Jane Smith', email: 'janesmith@example.com', message: 'Very informative.' },
  ]);

  const handleDeleteFeedback = (index) => {
    const updatedFeedbacks = feedbacks.filter((_, i) => i !== index);
    setFeedbacks(updatedFeedbacks);
    alert('Feedback deleted!');
  };

  return (
    <div className="admin-feedback">
      <h3>User Feedback</h3>
      <div className="feedback-list">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="feedback-item">
            <p><strong>Name:</strong> {feedback.name}</p>
            <p><strong>Email:</strong> {feedback.email}</p>
            <p><strong>Message:</strong> {feedback.message}</p>
            <button onClick={() => handleDeleteFeedback(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminFeedback;
