import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HotelSelection from './pages/HotelSelection';
import RoomSelection from './pages/RoomSelection';
import RestaurantBooking from './pages/RestaurantBooking';
import BookingConfirmation from './pages/BookingConfirmation';
import Dashboard from './pages/Dashboard';
import Rooms from './pages/Rooms';
import Customers from './pages/Customers';
import Restaurant from './pages/Restaurant';
import Reservations from './pages/Reservations';

function App() {
  return (
    <Router>
      <Routes>
        {/* Customer-facing routes */}
        <Route path="/" element={<HotelSelection />} />
        <Route path="/rooms/:hotelId" element={<RoomSelection />} />
        <Route path="/restaurant" element={<RestaurantBooking />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        
        {/* Admin routes */}
        <Route path="/admin/*" element={
          <Layout>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/restaurant" element={<Restaurant />} />
              <Route path="/reservations" element={<Reservations />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
