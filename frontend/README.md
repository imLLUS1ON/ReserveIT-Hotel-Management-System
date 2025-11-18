# ReserveIT Frontend

A modern React frontend for the ReserveIT Hotel & Restaurant Management System.

## Features

- **Dashboard**: Overview with analytics and quick actions
- **Room Management**: View, add, edit, delete rooms and make bookings
- **Customer Management**: Manage customer information and loyalty points
- **Restaurant Management**: Table booking system (with mock data)
- **Reservation Management**: View and manage all hotel reservations

## Tech Stack

- **React 18** with Vite
- **TailwindCSS** for styling
- **React Router** for navigation
- **Axios** for API calls
- **Recharts** for analytics charts
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend API running on `http://localhost:8080`

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp env.example .env.local
```

3. Update the API URL in `.env.local` if needed:
```
VITE_API_URL=http://localhost:8080
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.jsx      # Main layout wrapper
│   ├── Navbar.jsx      # Top navigation bar
│   ├── Sidebar.jsx     # Side navigation
│   └── RoomCard.jsx    # Room display card
├── pages/              # Main application pages
│   ├── Dashboard.jsx   # Dashboard overview
│   ├── Rooms.jsx       # Room management
│   ├── Customers.jsx   # Customer management
│   ├── Restaurant.jsx  # Restaurant management
│   └── Reservations.jsx # Reservation management
├── services/           # API service functions
│   ├── customerService.js
│   ├── roomService.js
│   ├── reservationService.js
│   └── restaurantService.js
├── utils/              # Utility functions
│   └── axiosClient.js  # Axios configuration
├── App.jsx             # Main app component
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## API Integration

The frontend integrates with the following backend endpoints:

- `GET /api/customers` - Get all customers
- `POST /api/customers` - Create new customer
- `PUT /api/customers/{id}` - Update customer
- `DELETE /api/customers/{id}` - Delete customer

- `GET /api/rooms` - Get all rooms
- `POST /api/rooms` - Create new room
- `GET /api/rooms/{id}` - Get room by ID
- `DELETE /api/rooms/{id}` - Delete room

- `GET /api/reservations` - Get all reservations
- `POST /api/reservations` - Create new reservation
- `PUT /api/reservations/{id}/cancel` - Cancel reservation

## Restaurant Features

The restaurant management features use mock data since the backend endpoints are not yet implemented. When the backend is ready, update the `restaurantService.js` to use real API calls.

## Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## Dark Mode

The application includes a dark mode toggle in the navbar. The dark mode state is managed locally and persists during the session.

## Error Handling

The application includes basic error handling for API calls. For production use, consider implementing:
- Toast notifications for user feedback
- Retry mechanisms for failed requests
- Offline support
- Better error boundaries
