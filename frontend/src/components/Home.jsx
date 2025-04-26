import React from 'react';
import '../styles/home.css';
import profileImage from '/owner.png';

function Home() {
    return (
        <div className="container">
            <div className="section-top">
                <section className="home">
                    <div className="home-content">
                    <h1>Hi, I'm Itsuka</h1>
                    <p>I'm a writer passionate about writing responsive and stylish history of my life.</p>
                    </div>
                    <img src={profileImage} alt="Profile" className="profile-img" />
                </section>
            </div>
        </div>
    );
}

export default Home;