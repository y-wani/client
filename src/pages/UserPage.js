// UserPage.js
import React from 'react';
import ReservationForm from '../components/ReservationForm';
import ReservationHistory from '../components/ReservationHistory';

const UserPage = () => {
    // Dummy data for user reservation history
    const dummyUserReservations = [
      { userName: 'John Doe', selectedZone: 'A', selectedDate: '2023-10-20', confirmationNumber: 'ABC123' },
      { userName: 'Jane Smith', selectedZone: 'B', selectedDate: '2023-10-22', confirmationNumber: 'XYZ789' },
      // Add more dummy data as needed
    ];
  
    return (
      <div className="user-page">
        <div className="user-header">
          <h1>User Page</h1>
        </div>
        <ReservationForm />
        <ReservationHistory reservations={dummyUserReservations} />
      </div>
    );
  };
  
  export default UserPage;