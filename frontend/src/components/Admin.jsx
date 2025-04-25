import React from 'react';
import { useState } from 'react';
import '../styles/admin.css';
import AdminHome from '../admin/AdminHome';
import AdminProjects from '../admin/AdminProjects';
import AdminActivities from '../admin/AdminActivities';
import AdminContact from '../admin/AdminContact';
import AdminFeedback from '../admin/AdminFeedback';

const sections = [
  'Home',
  'Projects',
  'Activities',
  'Contact',
  'Feedback',
];

function Admin() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <AdminHome />;
      case 'Projects':
        return <AdminProjects />;
      case 'Activities':
        return <AdminActivities />;
      case 'Contact':
        return <AdminContact />;
      case 'Feedback':
        return <AdminFeedback />;
      default:
        return null;
    }
  };

  return (
    <div className="admin-page">
      <h2>Admin Dashboard</h2>
      <div className="admin-tabs">
        {sections.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="admin-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default Admin;
