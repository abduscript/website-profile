import React from 'react';
import { useState } from 'react';
import '../admincss/home.css';

function AdminHome() {
  const [homeData, setHomeData] = useState({
    image: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setHomeData({ ...homeData, image: files[0].name }); // hanya nama file dulu
    } else {
      setHomeData({ ...homeData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Home data updated:', homeData);
    alert('Home section updated!');
    // nanti tinggal ganti ke API post/put
  };

  return (
    <div className="admin-home">
      <h3>Edit Home Section</h3>
      <form onSubmit={handleSubmit} className="admin-home-form">
        <label>
          Profile Image (PNG):
          <input
            type="file"
            name="image"
            accept=".png"
            onChange={handleChange}
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            rows="5"
            value={homeData.description}
            onChange={handleChange}
            placeholder="Write something about yourself..."
            required
          />
        </label>

        <button type="submit">Update Home</button>
      </form>
    </div>
  );
}

export default AdminHome;
