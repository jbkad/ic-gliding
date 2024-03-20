import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Learn from './pages/Learn';
import './App.scss';

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
import FAQs from './pages/FAQs';

export default function App() {


  return (
    <div className="app">
      <Navbar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faqs" element={<FAQs />} />

            {/* What is gliding? */}
            <Route path="/whatisgliding/introduction" element={<Flying />} />
            <Route path="/whatisgliding/soaring" element={<Soaring />} />
            <Route path="/whatisgliding/cross-country" element={<CrossCountry />} />
            <Route path="/whatisgliding/aerobatics" element={<Aerobatics />} />

            {/* Learning to glide */}
            <Route path="/learningtoglide/join" element={<Learn />} />
            <Route path="/learningtoglide/location" element={<Location />} />
            <Route path="/learningtoglide/first-trip" element={<FirstTrip />} />
            <Route path="/learningtoglide/pre-solo-training" element={<PreSolo />} />
            <Route path="/learningtoglide/post-solo-progression" element={<PostSolo />} />

            {/* Member information */}
            <Route path="/memberinformation/fleet-and-costs" element={<FleetAndCosts />} />

            {/* Gallery */}
            <Route path="/gallery" element={<Gallery />} />

          </Routes>
        </div>
      <Footer />
    </div>
  );
}
