// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Footer from './components/Footer.jsx';
// import Home from './components/Home';
// import Projects from './components/Projects';
// import Activities from './components/Activities';
// import Contact from './components/Contact';
// import Feedback from './components/Feedback';
// import Admin from './components/Admin'; // Import Admin

// function App() {
//   return (
//     <Router>
//       <div className="container">
//         <div className="App">
//           <div className="navbar-wrapper">
//             <nav>
//             <h2>It'suka</h2>
//               <ul>
//                 <li><a href="/">Home</a></li>
//                 <li><a href="/projects">Projects</a></li>
//                 <li><a href="/activities">Activities</a></li>
//                 <li><a href="/contact">Contact</a></li>
//                 <li><a href="/feedback">Feedback</a></li>
//                 <li><a href="/admin">Admin</a></li> {/* Admin route */}
//               </ul>
//             </nav>
//           </div>

//           <Routes>
//             {/* Frontend Routes */}
//             <Route path="/" element={<Home />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/activities" element={<Activities />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/feedback" element={<Feedback />} />

//             {/* Admin Route */}
//             <Route path="/admin" element={<Admin />} /> {/* Menampilkan Admin */}
//           </Routes>
//         </div>
//       <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer.jsx';
import Admin from './components/Admin';

// Section Components
import Home from './components/Home';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Feedback from './components/Feedback';

function MainPage() {
  return (
    <>
      <div id="home" className="section"><Home /></div>
      <div id="projects" className="section"><Projects /></div>
      <div id="activities" className="section"><Activities /></div>
      <div id="contact" className="section"><Contact /></div>
      <div id="feedback" className="section"><Feedback /></div>
      <Footer />
    </>
  );
}


function App() {
  return (
    <Router>
      <div className="container">
      <div className="App">
        <nav>
          <h2>It'suka</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#activities">Activities</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#feedback">Feedback</a></li>
            <li><a href="/admin">Admin</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
