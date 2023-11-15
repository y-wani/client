// ReservationHistory.js
import React from 'react';

const ReservationHistory = ({ reservations }) => {
  // Dummy data for reservation history
  const dummyReservations = [
    { userName: 'John Doe', selectedZone: 'A', selectedDate: '2023-10-20', confirmationNumber: 'ABC123' },
    { userName: 'Jane Smith', selectedZone: 'B', selectedDate: '2023-10-22', confirmationNumber: 'XYZ789' },
    // Add more dummy data as needed
  ];

  return (
    <div>
      <h2>Reservation History</h2>
      {/* Display a list of reservation history with their information */}
      <ul>
        {dummyReservations.map((reservation) => (
          <li key={reservation.confirmationNumber}>
            {reservation.userName} reserved Zone {reservation.selectedZone} on {reservation.selectedDate} (Confirmation #: {reservation.confirmationNumber})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationHistory;
