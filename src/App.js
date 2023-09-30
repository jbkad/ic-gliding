import React, { useContext } from 'react';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Learn from './pages/Learn';
import { ThemeContext } from './components/ThemeToggle';
import './App.css';

// pages
import Flying from './pages/What-is-gliding/FlyingAndLaunching';
import Soaring from './pages/What-is-gliding/Soaring';
import CrossCountry from './pages/What-is-gliding/CrossCountry';
import Aerobatics from './pages/What-is-gliding/Aerobatics';
import Location from './pages/Learning-to-glide/Location';
import FirstTrip from './pages/Learning-to-glide/FirstTrip';
import PreSolo from './pages/Learning-to-glide/PreSolo';
import PostSolo from './pages/Learning-to-glide/PostSolo';
import Gallery from './pages/Gallery';
import FleetAndCosts from './pages/Member-info/FleetAndCosts';

export default function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Navbar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* What is gliding? */}
            <Route path="/flying-and-launching" element={<Flying />} />
            <Route path="/soaring" element={<Soaring />} />
            <Route path="/cross-country" element={<CrossCountry />} />
            <Route path="/aerobatics" element={<Aerobatics />} />

            {/* Learning to glide */}
            <Route path="/join" element={<Learn />} />
            <Route path="/location" element={<Location />} />
            <Route path="/first-trip" element={<FirstTrip />} />
            <Route path="/pre-solo" element={<PreSolo />} />
            <Route path="/post-solo" element={<PostSolo />} />

            {/* Member information */}
            <Route path="/fleet-and-costs" element={<FleetAndCosts />} />

            {/* Gallery */}
            <Route path="/gallery" element={<Gallery />} />

          </Routes>
        </div>
      <Footer />
    </div>
  );
}
