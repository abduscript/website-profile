import React from 'react'
import { useState } from 'react';
import '../admincss/activities.css';

function AdminActivities() {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({
    title: '',
    description: '',
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewActivity((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddActivity = (e) => {
    e.preventDefault();
    setActivities([...activities, newActivity]);
    setNewActivity({
      title: '',
      description: '',
      date: '',
    });
    alert('Activity added!');
  };

  const handleDeleteActivity = (index) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
    alert('Activity deleted!');
  };

  return (
    <div className="admin-activities">
      <h3>Edit Activities</h3>
      <form onSubmit={handleAddActivity} className="admin-activities-form">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={newActivity.title}
            onChange={handleInputChange}
            placeholder="Activity Title"
            required
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            rows="4"
            value={newActivity.description}
            onChange={handleInputChange}
            placeholder="Activity Description"
            required
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={newActivity.date}
            onChange={handleInputChange}
            required
          />
        </label>

        <button type="submit">Add Activity</button>
      </form>

      <div className="activities-list">
        {activities.map((activity, index) => (
          <div key={index} className="activity-item">
            <h4>{activity.title}</h4>
            <p>{activity.description}</p>
            <p><strong>{activity.date}</strong></p>
            <button onClick={() => handleDeleteActivity(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminActivities;
