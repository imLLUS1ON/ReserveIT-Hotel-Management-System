import React from 'react';
import { Bed, Users, DollarSign, Calendar } from 'lucide-react';

const RoomCard = ({ room, onBook, onEdit, onDelete }) => {
  const getStatusColor = (available) => {
    return available 
      ? 'bg-green-100 text-green-800' 
      : 'bg-red-100 text-red-800';
  };

  const getStatusText = (available) => {
    return available ? 'Available' : 'Occupied';
  };

  return (
    <div className="card hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Room {room.roomNumber}
          </h3>
          <p className="text-sm text-gray-600 capitalize">
            {room.roomType}
          </p>
        </div>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(room.available)}`}>
          {getStatusText(room.available)}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <DollarSign className="h-4 w-4 mr-2" />
          <span>${room.pricePerNight}/night</span>
        </div>
      </div>

      <div className="flex space-x-2">
        {room.available && (
          <button
            onClick={() => onBook(room)}
            className="flex-1 btn-primary text-sm"
          >
            <Calendar className="h-4 w-4 mr-1" />
            Book Now
          </button>
        )}
        
        <button
          onClick={() => onEdit(room)}
          className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
        >
          Edit
        </button>
        
        <button
          onClick={() => onDelete(room)}
          className="px-3 py-2 text-sm font-medium text-red-700 bg-red-100 hover:bg-red-200 rounded-md transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
