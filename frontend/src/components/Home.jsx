// import React from 'react';
// import '../styles/home.css';
// import profileImage from '/owner.png';

// function Home() {
//     return (
//         <div className="container">
//             <section className="home">
//             <img src={profileImage} alt="Profile" className="profile-img" />
//             <div className="home-content">
//                 <h1>Hello, I'm Itsuka</h1>
//                 <p>I'm a writer passionate about writing responsive and stylish history of my life.</p>
//             </div>
//             </section>
//         </div>
//     );
// }

// export default Home;
import React, { useState, useEffect } from 'react';
import '../styles/home.css';

const profiles = [
    {
        bg: '/bg-teacher.jpg',
        title: "I'm a Teacher",
        image: '/teacher.png'
    },
    {
        bg: '/bg-writer.jpg',
        title: "I'm a Writer",
        image: '/writer.png'
    },
    {
        bg: '/bg-programmer.jpg',
        title: "I'm a Programmer",
        image: '/programmer.png'
    }
    ];

    function Home() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % profiles.length);
        }, 4000); // Ganti tiap 4 detik

        return () => clearInterval(timer);
    }, []);

    const currentProfile = profiles[index];

    return (
        <div 
        className="container" 
        style={{ backgroundImage: `url(${currentProfile.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
        <section className="home">
            <img src={currentProfile.image} alt="Profile" className="profile-img" />
            <div className="home-content">
            <h1>Hi, It's <span>joseph</span></h1>
            <h1 class="text-animation">I'm a <span></span></h1>
            </div>
        </section>
        </div>
    );
}

export default Home;
