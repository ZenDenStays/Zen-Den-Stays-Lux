import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = () => <div><h1>Zen Den Home</h1><p>Welcome to your soulful stay platform ✨</p></div>;
const Property = () => <div><h1>Property Page</h1><p>360° Tour, Zen Score, and Rituals</p></div>;
const Booking = () => <div><h1>Booking Flow</h1><p>Select dates, add rituals, confirm stay</p></div>;
const Concierge = () => <div><h1>Zen Concierge</h1><p>Your AI travel alchemist</p></div>;
const Hosts = () => <div><h1>House of Hosts</h1><p>Empower your space</p></div>;
const Dashboard = () => <div><h1>Host Dashboard</h1><p>Zen Score, bookings, performance</p></div>;
const Apply = () => <div><h1>Apply to Host</h1><p>Submit your soulful space</p></div>;

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link to='/' style={{ marginRight: '1rem' }}>Home</Link>
        <Link to='/property' style={{ marginRight: '1rem' }}>Property</Link>
        <Link to='/booking' style={{ marginRight: '1rem' }}>Booking</Link>
        <Link to='/concierge' style={{ marginRight: '1rem' }}>Concierge</Link>
        <Link to='/hosts' style={{ marginRight: '1rem' }}>Hosts</Link>
        <Link to='/dashboard' style={{ marginRight: '1rem' }}>Dashboard</Link>
        <Link to='/apply'>Apply</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property' element={<Property />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/concierge' element={<Concierge />} />
        <Route path='/hosts' element={<Hosts />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/apply' element={<Apply />} />
      </Routes>
    </div>
  );
}
