import React from 'react';
import '../styles/home.css';
import profileImage from '/owner.png';

function Home() {
    return (
        <section className="home">
        <img src={profileImage} alt="Profile" className="profile-img" />
        <div className="home-content">
            <h1>Hello, I'm Mack</h1>
            <p>I'm a fullstack developer passionate about building responsive and stylish web applications.</p>
        </div>
        </section>
    );
}

export default Home;
