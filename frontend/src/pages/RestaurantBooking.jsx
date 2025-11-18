import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Clock, Calendar, Utensils, CheckCircle } from 'lucide-react';

const RestaurantBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking;

  const [selectedTables, setSelectedTables] = useState([]);
  const [restaurantData, setRestaurantData] = useState({
    bookingDate: '',
    bookingTime: '',
    partySize: 1,
    specialRequests: ''
  });

  const tables = [
    { id: 1, number: 'T1', capacity: 2, type: 'Romantic', price: 0, available: true },
    { id: 2, number: 'T2', capacity: 4, type: 'Standard', price: 0, available: true },
    { id: 3, number: 'T3', capacity: 6, type: 'Family', price: 0, available: true },
    { id: 4, number: 'T4', capacity: 8, type: 'Party', price: 0, available: true },
    { id: 5, number: 'T5', capacity: 2, type: 'Romantic', price: 0, available: true },
    { id: 6, number: 'T6', capacity: 4, type: 'Standard', price: 0, available: true },
    { id: 7, number: 'T7', capacity: 6, type: 'Family', price: 0, available: true },
    { id: 8, number: 'T8', capacity: 10, type: 'VIP', price: 400, available: true }
  ];

  useEffect(() => {
    if (!booking) {
      navigate('/');
    }
  }, [booking, navigate]);

  if (!booking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Not Found</h2>
          <button onClick={() => navigate('/')} className="btn-primary">
            Go Back to Hotel Selection
          </button>
        </div>
      </div>
    );
  }

  const handleTableSelect = (table) => {
    if (table.available) {
      setSelectedTables([table]);
    }
  };

  const handleRestaurantBooking = async (e) => {
    e.preventDefault();
    
    if (selectedTables.length === 0) {
      alert('Please select a table');
      return;
    }

    const finalBooking = {
      ...booking,
      restaurant: {
        tables: selectedTables,
        restaurantData
      }
    };

    navigate('/booking-confirmation', { state: { booking: finalBooking } });
  };

  const getTableColor = (tableType) => {
    switch (tableType) {
      case 'Romantic': return 'bg-pink-100 text-pink-800';
      case 'Standard': return 'bg-blue-100 text-blue-800';
      case 'Family': return 'bg-green-100 text-green-800';
      case 'Party': return 'bg-purple-100 text-purple-800';
      case 'VIP': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTableIcon = (tableType) => {
    switch (tableType) {
      case 'Romantic': return '💕';
      case 'Standard': return '🍽️';
      case 'Family': return '👨‍👩‍👧‍👦';
      case 'Party': return '🎉';
      case 'VIP': return '👑';
      default: return '🍽️';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Rooms
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Restaurant Booking</h1>
            <div className="text-sm text-gray-500">
              {booking.hotel} - Room {booking.room.number}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Table Selection */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Tables</h2>
            
            {/* Restaurant Info */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-4">
                <Utensils className="h-8 w-8 text-orange-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Hotel Restaurant</h3>
                  <p className="text-gray-600">Fine dining experience with our award-winning chef</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>6:00 AM - 11:00 PM</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-4 w-4 mr-2" />
                  <span>Up to 10 guests</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Daily Service</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Reservations Required</span>
                </div>
              </div>
            </div>

            {/* Tables Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tables.map((table) => (
                <div
                  key={table.id}
                  className={`bg-white rounded-lg shadow-md p-4 cursor-pointer transition-all duration-200 ${
                    selectedTables.some(t => t.id === table.id)
                      ? 'ring-2 ring-blue-500 bg-blue-50'
                      : table.available
                      ? 'hover:shadow-lg'
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                  onClick={() => handleTableSelect(table)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{getTableIcon(table.type)}</span>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Table {table.number}
                      </h3>
                    </div>
                    {table.price > 0 && (
                      <span className="text-sm font-medium text-yellow-600">
                        +₹{table.price}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2 mb-3">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getTableColor(table.type)}`}>
                      {table.type}
                    </span>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-1" />
                      <span>Up to {table.capacity} guests</span>
                    </div>
                  </div>

                  {table.available ? (
                    <div className="text-green-600 text-sm font-medium">
                      ✓ Available
                    </div>
                  ) : (
                    <div className="text-red-600 text-sm font-medium">
                      ✗ Reserved
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Restaurant Details</h3>
              
              <form onSubmit={handleRestaurantBooking} className="space-y-4">
                {/* Booking Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reservation Date
                  </label>
                  <input
                    type="date"
                    value={restaurantData.bookingDate}
                    onChange={(e) => setRestaurantData({...restaurantData, bookingDate: e.target.value})}
                    className="input-field"
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Booking Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reservation Time
                  </label>
                  <select
                    value={restaurantData.bookingTime}
                    onChange={(e) => setRestaurantData({...restaurantData, bookingTime: e.target.value})}
                    className="input-field"
                    required
                  >
                    <option value="">Select Time</option>
                    <option value="06:00">6:00 AM</option>
                    <option value="07:00">7:00 AM</option>
                    <option value="08:00">8:00 AM</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="22:00">10:00 PM</option>
                  </select>
                </div>

                {/* Party Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Party Size
                  </label>
                  <select
                    value={restaurantData.partySize}
                    onChange={(e) => setRestaurantData({...restaurantData, partySize: parseInt(e.target.value)})}
                    className="input-field"
                    required
                  >
                    <option value={1}>1 Person</option>
                    <option value={2}>2 People</option>
                    <option value={3}>3 People</option>
                    <option value={4}>4 People</option>
                    <option value={5}>5 People</option>
                    <option value={6}>6 People</option>
                    <option value={7}>7 People</option>
                    <option value={8}>8 People</option>
                    <option value={9}>9 People</option>
                    <option value={10}>10 People</option>
                  </select>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Special Requests
                  </label>
                  <textarea
                    value={restaurantData.specialRequests}
                    onChange={(e) => setRestaurantData({...restaurantData, specialRequests: e.target.value})}
                    className="input-field"
                    rows={3}
                    placeholder="Any dietary restrictions, allergies, or special requests..."
                  />
                </div>

                {/* Selected Table Summary */}
                {selectedTables.length > 0 && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Selected Table</h4>
                    {selectedTables.map((table) => (
                      <div key={table.id} className="text-sm">
                        <div className="flex justify-between">
                          <span>Table {table.number} ({table.type})</span>
                          {table.price > 0 && <span>+₹{table.price}</span>}
                        </div>
                        <div className="text-gray-600">
                          Up to {table.capacity} guests
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full btn-primary"
                  disabled={selectedTables.length === 0}
                >
                  Complete Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantBooking;
