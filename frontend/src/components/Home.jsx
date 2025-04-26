import React from 'react';
import '../styles/home.css';
import profileImage from '/owner.png';

function Home() {
    return (
        <div className="container">
            <section className="home">
            <img src={profileImage} alt="Profile" className="profile-img" />
            <div className="home-content">
                <h1>Hello, I'm Itsuka</h1>
                <p>I'm a writer passionate about writing responsive and stylish history of my life.</p>
            </div>
            </section>
        </div>
    );
}

export default Home;
