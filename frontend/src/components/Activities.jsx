import React from 'react'
import '../styles/activities.css';

const activitiesData = [
  {
    id: 1,
    title: 'Coding Project',
    description: 'Mengerjakan project web menggunakan React dan Express.',
    icon: '💻',
  },
  {
    id: 2,
    title: 'Belajar Laravel',
    description: 'Ngulik Laravel lewat playlist Web Programming UNPAS.',
    icon: '📚',
  },
  {
    id: 3,
    title: 'Puasa & IF',
    description: 'Menjalankan puasa Senin-Kamis dan Intermittent Fasting 16:8.',
    icon: '🍽️',
  },
  {
    id: 4,
    title: 'Fitness',
    description: 'Latihan fisik ringan buat nurunin berat badan & bangun otot.',
    icon: '🏋️',
  },
];

function Activities() {
  return (
    <section className="activities">
      <h2>Daily Activities</h2>
      <div className="activity-list">
        {activitiesData.map((activity) => (
          <div key={activity.id} className="activity-card">
            <div className="activity-icon">{activity.icon}</div>
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Activities;
