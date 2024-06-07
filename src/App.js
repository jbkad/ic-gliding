import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Flying from './pages/what-is-gliding/FlyingAndLaunching';
import Soaring from './pages/what-is-gliding/Soaring';
import CrossCountry from './pages/what-is-gliding/CrossCountry';
import Aerobatics from './pages/what-is-gliding/Aerobatics';
import Location from './pages/learning-to-glide/Location';
import Learn from './pages/learning-to-glide/Learn';
import FirstTrip from './pages/learning-to-glide/FirstTrip';
import PreSolo from './pages/learning-to-glide/PreSolo';
import PostSolo from './pages/learning-to-glide/PostSolo';
import Gallery from './pages/Gallery';
import FleetAndCosts from './pages/member-information/FleetAndCosts';
import FAQs from './pages/FAQs';
import './styles/stylesheet.scss';

export default function App() {


  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/whatisgliding/introduction" element={<Flying />} />
        <Route path="/whatisgliding/soaring" element={<Soaring />} />
        <Route path="/whatisgliding/cross-country" element={<CrossCountry />} />
        <Route path="/whatisgliding/aerobatics" element={<Aerobatics />} />
        <Route path="/learningtoglide/join" element={<Learn />} />
        <Route path="/learningtoglide/location" element={<Location />} />
        <Route path="/learningtoglide/first-trip" element={<FirstTrip />} />
        <Route path="/learningtoglide/pre-solo-training" element={<PreSolo />} />
        <Route path="/learningtoglide/post-solo-progression" element={<PostSolo />} />
        <Route path="/memberinformation/fleet-and-costs" element={<FleetAndCosts />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}
